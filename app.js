// Legal & Technical Checklist Application Logic

(function() {
  'use strict';

  // Application State
  const state = {
    channel: 'Secured DSA', // 'Secured DSA' | 'Secured Direct'
    selectedState: '',
    selectedTableIndex: 0,
    selectedPropertyType: 'ALL',
    selectedLegalStage: 'Initiation', // Default to 'Initiation'
    selectedTechStage: 'Initiation',  // Default to 'Initiation'
    searchQuery: '',
    viewMode: 'checklist', // 'checklist' | 'matrix'
    caseDetails: {
      appNo: '',
      customerName: '',
      propertyAddress: '',
      date: new Date().toISOString().split('T')[0],
      officerName: ''
    },
    // Map of docId -> { status: 'pending'|'collected'|'waived'|'na', notes: '' }
    checklistStatus: {}
  };

  // DOM Elements
  const el = {
    channelDSA: document.getElementById('channelDSA'),
    channelDirect: document.getElementById('channelDirect'),
    countDSA: document.getElementById('countDSA'),
    countDirect: document.getElementById('countDirect'),
    stateSelect: document.getElementById('stateSelect'),
    subTabsContainer: document.getElementById('subTabsContainer'),
    propertyTypeSelect: document.getElementById('propertyTypeSelect'),
    legalStageSelect: document.getElementById('legalStageSelect'),
    techStageSelect: document.getElementById('techStageSelect'),
    searchInput: document.getElementById('searchInput'),
    clearSearchBtn: document.getElementById('clearSearchBtn'),
    viewChecklistBtn: document.getElementById('viewChecklistBtn'),
    viewMatrixBtn: document.getElementById('viewMatrixBtn'),
    contentArea: document.getElementById('contentArea'),
    sectionTitle: document.getElementById('sectionTitle'),
    sectionSubtitle: document.getElementById('sectionSubtitle'),
    
    // Stats & Progress
    statTotal: document.getElementById('statTotal'),
    statCollected: document.getElementById('statCollected'),
    statPending: document.getElementById('statPending'),
    statWaived: document.getElementById('statWaived'),
    progressBarFill: document.getElementById('progressBarFill'),
    progressPercent: document.getElementById('progressPercent'),
    
    // Case Inputs
    inputAppNo: document.getElementById('inputAppNo'),
    inputCustomerName: document.getElementById('inputCustomerName'),
    inputAddress: document.getElementById('inputAddress'),
    inputDate: document.getElementById('inputDate'),
    inputOfficer: document.getElementById('inputOfficer'),
    caseToggle: document.getElementById('caseToggle'),
    caseFields: document.getElementById('caseFields'),
    
    // Action Buttons
    btnPrint: document.getElementById('btnPrint'),
    btnExportCSV: document.getElementById('btnExportCSV'),
    btnSaveLocal: document.getElementById('btnSaveLocal'),
    btnResetChecklist: document.getElementById('btnResetChecklist'),
    toastContainer: document.getElementById('toastContainer')
  };

  // Helper to normalize and strictly match stage comparison
  function matchStage(docStage, filterStage) {
    if (!filterStage || filterStage === 'ALL') return true;
    const currentStage = (docStage || 'Not Applicable').trim();
    return currentStage.toLowerCase() === filterStage.toLowerCase();
  }

  // Parse query parameters from URL
  function readQueryParams() {
    try {
      const params = new URLSearchParams(window.location.search);
      const chParam = (params.get('channel') || params.get('type') || '').toLowerCase().trim();
      
      if (chParam === 'direct' || chParam === 'secured-direct' || chParam === 'secured_direct' || chParam === 'secured direct') {
        state.channel = 'Secured Direct';
      } else {
        state.channel = 'Secured DSA';
      }

      const stateParam = params.get('state') || params.get('geo');
      if (stateParam) {
        state.selectedState = stateParam;
      }

      const legalParam = params.get('legal') || params.get('legalStage');
      if (legalParam) {
        state.selectedLegalStage = legalParam.toLowerCase() === 'all' ? 'ALL' : legalParam;
        if (el.legalStageSelect) el.legalStageSelect.value = state.selectedLegalStage;
      }

      const techParam = params.get('tech') || params.get('techStage');
      if (techParam) {
        state.selectedTechStage = techParam.toLowerCase() === 'all' ? 'ALL' : techParam;
        if (el.techStageSelect) el.techStageSelect.value = state.selectedTechStage;
      }

      const viewParam = (params.get('view') || '').toLowerCase();
      if (viewParam === 'matrix') {
        state.viewMode = 'matrix';
      }
    } catch(e) {
      console.warn('Error parsing URL parameters:', e);
    }
  }

  // Update URL query parameters without reloading
  function updateQueryParams() {
    try {
      const url = new URL(window.location.href);
      const chCode = state.channel === 'Secured Direct' ? 'direct' : 'dsa';
      url.searchParams.set('channel', chCode);
      if (state.selectedState) {
        url.searchParams.set('state', state.selectedState);
      }
      if (state.selectedLegalStage !== 'Initiation') {
        url.searchParams.set('legal', state.selectedLegalStage);
      } else {
        url.searchParams.delete('legal');
      }
      if (state.selectedTechStage !== 'Initiation') {
        url.searchParams.set('tech', state.selectedTechStage);
      } else {
        url.searchParams.delete('tech');
      }
      if (state.viewMode === 'matrix') {
        url.searchParams.set('view', 'matrix');
      } else {
        url.searchParams.delete('view');
      }
      window.history.replaceState({}, '', url.toString());
    } catch(e) {
      // Ignored for file:// URLs
    }
  }

  // Initialize
  function init() {
    readQueryParams();
    setupChannelCounts();
    setupCaseDetails();
    setupEventListeners();
    
    // Set initial dropdown values
    if (el.legalStageSelect) el.legalStageSelect.value = state.selectedLegalStage;
    if (el.techStageSelect) el.techStageSelect.value = state.selectedTechStage;
    
    // Initial Load with resolved channel from URL params
    setChannel(state.channel, state.selectedState);
  }

  function setupChannelCounts() {
    const dsaStates = Object.keys(CHECKLIST_DATA['Secured DSA'] || {});
    let dsaDocs = 0;
    dsaStates.forEach(s => {
      (CHECKLIST_DATA['Secured DSA'][s] || []).forEach(t => dsaDocs += t.documents.length);
    });
    
    const directStates = Object.keys(CHECKLIST_DATA['Secured Direct'] || {});
    let directDocs = 0;
    directStates.forEach(s => {
      (CHECKLIST_DATA['Secured Direct'][s] || []).forEach(t => directDocs += t.documents.length);
    });

    if (el.countDSA) el.countDSA.textContent = `${dsaStates.length} States`;
    if (el.countDirect) el.countDirect.textContent = `${directStates.length} States`;
  }

  function setupCaseDetails() {
    if (el.inputDate) el.inputDate.value = state.caseDetails.date;
    
    ['AppNo', 'CustomerName', 'Address', 'Date', 'Officer'].forEach(field => {
      const input = el[`input${field}`];
      if (input) {
        input.addEventListener('input', (e) => {
          const key = field.charAt(0).toLowerCase() + field.slice(1);
          state.caseDetails[key] = e.target.value;
          saveToLocalStorage(false);
        });
      }
    });

    if (el.caseToggle) {
      el.caseToggle.addEventListener('click', () => {
        const isOpen = el.caseFields.style.display !== 'none';
        el.caseFields.style.display = isOpen ? 'none' : 'grid';
        el.caseToggle.classList.toggle('open', !isOpen);
        const icon = el.caseToggle.querySelector('.toggle-icon');
        if (icon) icon.textContent = isOpen ? '▼' : '▲';
      });
    }
  }

  function setupEventListeners() {
    // Channel Switchers
    el.channelDSA.addEventListener('click', () => setChannel('Secured DSA'));
    el.channelDirect.addEventListener('click', () => setChannel('Secured Direct'));

    // State Selector
    el.stateSelect.addEventListener('change', (e) => {
      state.selectedState = e.target.value;
      state.selectedTableIndex = 0;
      updateQueryParams();
      loadStateData();
    });

    // Property Type Selector
    el.propertyTypeSelect.addEventListener('change', (e) => {
      state.selectedPropertyType = e.target.value;
      
      // Auto-switch to sub-table that has matching documents if current has 0
      const tables = (CHECKLIST_DATA[state.channel] && CHECKLIST_DATA[state.channel][state.selectedState]) || [];
      if (tables.length > 1 && state.selectedPropertyType !== 'ALL') {
        const currentMatches = getMatchingDocsForTable(tables[state.selectedTableIndex]);
        if (currentMatches.length === 0) {
          const betterIndex = tables.findIndex(t => getMatchingDocsForTable(t).length > 0);
          if (betterIndex !== -1) {
            state.selectedTableIndex = betterIndex;
          }
        }
      }
      
      render();
    });

    // Stage Selectors
    el.legalStageSelect.addEventListener('change', (e) => {
      state.selectedLegalStage = e.target.value;
      updateQueryParams();
      render();
    });

    el.techStageSelect.addEventListener('change', (e) => {
      state.selectedTechStage = e.target.value;
      updateQueryParams();
      render();
    });

    // Search
    el.searchInput.addEventListener('input', (e) => {
      state.searchQuery = e.target.value.toLowerCase().trim();
      render();
    });

    if (el.clearSearchBtn) {
      el.clearSearchBtn.addEventListener('click', () => {
        el.searchInput.value = '';
        state.searchQuery = '';
        render();
      });
    }

    // View Mode Toggle
    el.viewChecklistBtn.addEventListener('click', () => {
      setViewMode('checklist');
      updateQueryParams();
    });
    el.viewMatrixBtn.addEventListener('click', () => {
      setViewMode('matrix');
      updateQueryParams();
    });

    // Action Buttons
    el.btnPrint.addEventListener('click', () => window.print());
    el.btnExportCSV.addEventListener('click', exportToCSV);
    el.btnSaveLocal.addEventListener('click', () => {
      saveToLocalStorage(true);
      showToast('Checklist state saved successfully!');
    });
    el.btnResetChecklist.addEventListener('click', resetChecklist);
  }

  function setChannel(channelName, preferredState = null) {
    state.channel = channelName;
    el.channelDSA.classList.toggle('active', channelName === 'Secured DSA');
    el.channelDirect.classList.toggle('active', channelName === 'Secured Direct');
    
    const states = Object.keys(CHECKLIST_DATA[channelName] || {});
    el.stateSelect.innerHTML = '';
    
    states.forEach(s => {
      const opt = document.createElement('option');
      opt.value = s;
      opt.textContent = s;
      el.stateSelect.appendChild(opt);
    });

    if (preferredState && states.includes(preferredState)) {
      state.selectedState = preferredState;
      el.stateSelect.value = preferredState;
    } else {
      state.selectedState = states[0] || '';
    }
    
    state.selectedTableIndex = 0;
    updateQueryParams();
    loadStateData();
  }

  function loadStateData() {
    updatePropertyTypeOptions();
    loadFromLocalStorage();
    render();
  }

  function updatePropertyTypeOptions() {
    const tables = (CHECKLIST_DATA[state.channel] && CHECKLIST_DATA[state.channel][state.selectedState]) || [];
    if (!tables.length) return;

    // Collect unique property types across all sub-tables in this state
    const propTypesSet = new Set();
    tables.forEach(t => {
      (t.propertyTypes || []).forEach(pt => propTypesSet.add(pt));
    });

    const currentVal = state.selectedPropertyType;
    el.propertyTypeSelect.innerHTML = '<option value="ALL">All Property Types (Matrix View / All)</option>';
    
    propTypesSet.forEach(pt => {
      const opt = document.createElement('option');
      opt.value = pt;
      opt.textContent = pt;
      if (pt === currentVal) opt.selected = true;
      el.propertyTypeSelect.appendChild(opt);
    });

    if (!propTypesSet.has(currentVal)) {
      state.selectedPropertyType = 'ALL';
    }
  }

  function getCurrentTable() {
    const tables = (CHECKLIST_DATA[state.channel] && CHECKLIST_DATA[state.channel][state.selectedState]) || [];
    return tables[state.selectedTableIndex] || null;
  }

  function setViewMode(mode) {
    state.viewMode = mode;
    el.viewChecklistBtn.classList.toggle('active', mode === 'checklist');
    el.viewMatrixBtn.classList.toggle('active', mode === 'matrix');
    render();
  }

  function getStorageKey() {
    const currentTable = getCurrentTable();
    const tableTitle = currentTable ? currentTable.title : 'default';
    return `checklist_${state.channel}_${state.selectedState}_${tableTitle}`;
  }

  function loadFromLocalStorage() {
    const key = getStorageKey();
    const saved = localStorage.getItem(key);
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        state.checklistStatus = parsed.status || {};
        if (parsed.caseDetails) {
          state.caseDetails = { ...state.caseDetails, ...parsed.caseDetails };
          if (el.inputAppNo) el.inputAppNo.value = state.caseDetails.appNo || '';
          if (el.inputCustomerName) el.inputCustomerName.value = state.caseDetails.customerName || '';
          if (el.inputAddress) el.inputAddress.value = state.caseDetails.propertyAddress || '';
          if (el.inputDate) el.inputDate.value = state.caseDetails.date || '';
          if (el.inputOfficer) el.inputOfficer.value = state.caseDetails.officerName || '';
        }
      } catch(e) {
        state.checklistStatus = {};
      }
    } else {
      state.checklistStatus = {};
    }
  }

  function saveToLocalStorage(showFeedback = false) {
    const key = getStorageKey();
    const payload = {
      status: state.checklistStatus,
      caseDetails: state.caseDetails,
      updatedAt: new Date().toISOString()
    };
    localStorage.setItem(key, JSON.stringify(payload));
  }

  function resetChecklist() {
    if (confirm('Are you sure you want to reset all document statuses and notes for this sheet?')) {
      state.checklistStatus = {};
      saveToLocalStorage(false);
      render();
      showToast('Checklist has been reset');
    }
  }

  function renderSubTabs() {
    const tables = (CHECKLIST_DATA[state.channel] && CHECKLIST_DATA[state.channel][state.selectedState]) || [];
    el.subTabsContainer.innerHTML = '';
    
    if (tables.length > 1) {
      el.subTabsContainer.style.display = 'flex';
      tables.forEach((t, idx) => {
        // Count how many docs match in this table
        const matchingCount = getMatchingDocsForTable(t).length;
        
        const btn = document.createElement('button');
        btn.className = `sub-tab-btn ${idx === state.selectedTableIndex ? 'active' : ''}`;
        btn.innerHTML = `<span>${escapeHtml(t.title || `Table ${idx + 1}`)}</span> <span class="sub-badge">${matchingCount}</span>`;
        btn.addEventListener('click', () => {
          state.selectedTableIndex = idx;
          updatePropertyTypeOptions();
          loadFromLocalStorage();
          render();
        });
        el.subTabsContainer.appendChild(btn);
      });
    } else {
      el.subTabsContainer.style.display = 'none';
    }
  }

  function getMatchingDocsForTable(table) {
    if (!table) return [];
    return table.documents.filter(doc => {
      if (state.selectedPropertyType !== 'ALL') {
        const checkVal = doc.checks[state.selectedPropertyType];
        if (!checkVal) return false;
      }
      if (!matchStage(doc.legalStage, state.selectedLegalStage)) {
        return false;
      }
      if (!matchStage(doc.technicalStage, state.selectedTechStage)) {
        return false;
      }
      if (state.searchQuery) {
        const q = state.searchQuery;
        const nameMatch = doc.name.toLowerCase().includes(q);
        const legalMatch = (doc.legalStage || '').toLowerCase().includes(q);
        const techMatch = (doc.technicalStage || '').toLowerCase().includes(q);
        if (!nameMatch && !legalMatch && !techMatch) return false;
      }
      return true;
    });
  }

  // Filter Documents based on current filters
  function getFilteredDocuments() {
    const currentTable = getCurrentTable();
    if (!currentTable) return [];

    return currentTable.documents.filter(doc => {
      // Property type filter
      if (state.selectedPropertyType !== 'ALL') {
        const checkVal = doc.checks[state.selectedPropertyType];
        if (!checkVal) return false;
      }

      // Legal Stage filter (using normalized matcher)
      if (!matchStage(doc.legalStage, state.selectedLegalStage)) {
        return false;
      }

      // Technical Stage filter (using normalized matcher)
      if (!matchStage(doc.technicalStage, state.selectedTechStage)) {
        return false;
      }

      // Search query
      if (state.searchQuery) {
        const q = state.searchQuery;
        const nameMatch = doc.name.toLowerCase().includes(q);
        const legalMatch = (doc.legalStage || '').toLowerCase().includes(q);
        const techMatch = (doc.technicalStage || '').toLowerCase().includes(q);
        if (!nameMatch && !legalMatch && !techMatch) return false;
      }

      return true;
    });
  }

  // Render main content area
  function render() {
    renderSubTabs();
    const currentTable = getCurrentTable();
    if (!currentTable) {
      el.contentArea.innerHTML = '<div class="empty-state"><div class="empty-icon">📂</div><p>No checklist data available for this selection.</p></div>';
      return;
    }

    const filteredDocs = getFilteredDocuments();
    updateStatsAndProgress(filteredDocs);

    // Update Section Title & Subtitle
    el.sectionTitle.textContent = `${state.channel} › ${state.selectedState} - ${currentTable.title}`;
    const propSubtitle = state.selectedPropertyType === 'ALL' 
      ? 'All Property Categories' 
      : `Filtered for: ${state.selectedPropertyType}`;
    el.sectionSubtitle.textContent = `Showing ${filteredDocs.length} of ${currentTable.documents.length} documents • ${propSubtitle}`;

    if (filteredDocs.length === 0) {
      el.contentArea.innerHTML = `
        <div class="empty-state">
          <div class="empty-icon">🔍</div>
          <h3>No documents match your active filters</h3>
          <p>Try adjusting your search keywords, Property Type, or Legal/Technical Stage filters.</p>
        </div>
      `;
      return;
    }

    if (state.viewMode === 'checklist') {
      renderChecklistView(filteredDocs);
    } else {
      renderMatrixView(filteredDocs, currentTable);
    }
  }

  function getStageBadgeClass(stage) {
    const s = (stage || '').toLowerCase();
    if (s.includes('login')) return 'badge-login';
    if (s.includes('initiat') || s.includes('init')) return 'badge-initiation';
    if (s.includes('vetting') || s.includes('vet')) return 'badge-vetting';
    if (s.includes('cheque') || s.includes('handover')) return 'badge-cheque';
    if (s.includes('pd') || s.includes('post') || s.includes('completion')) return 'badge-pd';
    if (s.includes('applicable') || s.includes('wherever')) return 'badge-applicable';
    return 'badge-na';
  }

  function renderChecklistView(docs) {
    let html = `
      <div class="checklist-table-wrapper">
        <table class="checklist-table">
          <thead>
            <tr>
              <th class="th-num" style="width: 50px; text-align: center;">#</th>
              <th class="th-doc" style="min-width: 280px;">Document Requirement</th>
              <th class="th-stage" style="width: 140px;">Legal Stage</th>
              <th class="th-stage" style="width: 140px;">Technical Stage</th>
              <th class="th-status" style="width: 260px;">Status Verification</th>
              <th class="th-remarks" style="min-width: 200px;">Remarks / Docket Notes</th>
            </tr>
          </thead>
          <tbody>
    `;

    docs.forEach((doc, index) => {
      const statusData = state.checklistStatus[doc.id] || { status: 'pending', notes: '' };
      const currentStatus = statusData.status || 'pending';
      const currentNotes = statusData.notes || '';

      const rowClass = currentStatus === 'collected' ? 'row-collected' : (currentStatus === 'waived' ? 'row-waived' : (currentStatus === 'na' ? 'row-na' : ''));

      html += `
        <tr class="${rowClass}" data-doc-id="${doc.id}">
          <td class="td-num" style="text-align: center; font-weight: 700; color: var(--text-muted);">${index + 1}</td>
          <td class="td-doc">
            <div class="doc-header-mobile">
              <span class="mobile-badge-index">#${index + 1}</span>
              <div class="doc-name">${escapeHtml(doc.name)}</div>
            </div>
            ${state.selectedPropertyType !== 'ALL' ? `<div class="doc-prop-tag">📌 Applicable for: <strong>${escapeHtml(state.selectedPropertyType)}</strong></div>` : ''}
          </td>
          <td class="td-stage td-legal">
            <span class="stage-label-mobile">Legal:</span>
            <span class="badge-stage ${getStageBadgeClass(doc.legalStage)}">${escapeHtml(doc.legalStage)}</span>
          </td>
          <td class="td-stage td-tech">
            <span class="stage-label-mobile">Tech:</span>
            <span class="badge-stage ${getStageBadgeClass(doc.technicalStage)}">${escapeHtml(doc.technicalStage)}</span>
          </td>
          <td class="td-status">
            <div class="status-pill-group">
              <button type="button" class="status-pill ${currentStatus === 'pending' ? 'active-pending' : ''}" data-action="set-status" data-status="pending" data-doc="${doc.id}">Pending</button>
              <button type="button" class="status-pill ${currentStatus === 'collected' ? 'active-collected' : ''}" data-action="set-status" data-status="collected" data-doc="${doc.id}">✓ Collected</button>
              <button type="button" class="status-pill ${currentStatus === 'waived' ? 'active-waived' : ''}" data-action="set-status" data-status="waived" data-doc="${doc.id}">Waived</button>
              <button type="button" class="status-pill ${currentStatus === 'na' ? 'active-na' : ''}" data-action="set-status" data-status="na" data-doc="${doc.id}">N/A</button>
            </div>
            <div class="print-status-display">${currentStatus.toUpperCase()}</div>
          </td>
          <td class="td-remarks">
            <input type="text" class="doc-notes-input" placeholder="Add note or dispatch tracking..." value="${escapeHtml(currentNotes)}" data-action="update-notes" data-doc="${doc.id}">
          </td>
        </tr>
      `;
    });

    html += `
          </tbody>
        </table>
      </div>
      <div class="print-signatures">
        <div class="sig-block">Prepared By (Sales / DSA)</div>
        <div class="sig-block">Technical Officer</div>
        <div class="sig-block">Legal / Credit Approver</div>
      </div>
    `;

    el.contentArea.innerHTML = html;
    attachChecklistListeners();
  }

  function renderMatrixView(docs, currentTable) {
    const propTypes = currentTable.propertyTypes || [];

    let html = `
      <div class="matrix-hint-mobile">👉 Swipe horizontally to view all property columns</div>
      <div class="matrix-container">
        <table class="matrix-table">
          <thead>
            <tr>
              <th class="sticky-col">Document Requirement</th>
    `;

    propTypes.forEach(pt => {
      const isFiltered = state.selectedPropertyType === pt;
      const highlightStyle = isFiltered ? 'style="background-color: #dbeafe; color: #1e40af;"' : '';
      html += `<th ${highlightStyle}>${escapeHtml(pt)}</th>`;
    });

    html += `
              <th style="min-width: 120px;">Legal Stage</th>
              <th style="min-width: 120px;">Technical Stage</th>
            </tr>
          </thead>
          <tbody>
    `;

    docs.forEach(doc => {
      html += `
        <tr>
          <td class="sticky-col">
            <div class="doc-name">${escapeHtml(doc.name)}</div>
          </td>
      `;

      propTypes.forEach(pt => {
        const val = doc.checks[pt];
        if (val === true || val === '✓') {
          html += `<td class="cell-check">✓</td>`;
        } else if (val && typeof val === 'string' && val.trim() !== '') {
          html += `<td class="cell-note">${escapeHtml(val)}</td>`;
        } else {
          html += `<td class="cell-empty">-</td>`;
        }
      });

      html += `
          <td><span class="badge-stage ${getStageBadgeClass(doc.legalStage)}">${escapeHtml(doc.legalStage)}</span></td>
          <td><span class="badge-stage ${getStageBadgeClass(doc.technicalStage)}">${escapeHtml(doc.technicalStage)}</span></td>
        </tr>
      `;
    });

    html += `
          </tbody>
        </table>
      </div>
    `;

    el.contentArea.innerHTML = html;
  }

  function attachChecklistListeners() {
    el.contentArea.querySelectorAll('[data-action="set-status"]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const docId = btn.getAttribute('data-doc');
        const newStatus = btn.getAttribute('data-status');
        
        if (!state.checklistStatus[docId]) {
          state.checklistStatus[docId] = { status: 'pending', notes: '' };
        }
        state.checklistStatus[docId].status = newStatus;
        saveToLocalStorage(false);
        render();
      });
    });

    el.contentArea.querySelectorAll('[data-action="update-notes"]').forEach(input => {
      input.addEventListener('input', (e) => {
        const docId = input.getAttribute('data-doc');
        if (!state.checklistStatus[docId]) {
          state.checklistStatus[docId] = { status: 'pending', notes: '' };
        }
        state.checklistStatus[docId].notes = e.target.value;
        saveToLocalStorage(false);
      });
    });
  }

  function updateStatsAndProgress(docs) {
    const total = docs.length;
    let collected = 0;
    let pending = 0;
    let waived = 0;
    let na = 0;

    docs.forEach(doc => {
      const st = (state.checklistStatus[doc.id] && state.checklistStatus[doc.id].status) || 'pending';
      if (st === 'collected') collected++;
      else if (st === 'waived') waived++;
      else if (st === 'na') na++;
      else pending++;
    });

    el.statTotal.textContent = `${total} Total`;
    el.statCollected.textContent = `${collected} Collected`;
    el.statPending.textContent = `${pending} Pending`;
    el.statWaived.textContent = `${waived} Waived`;

    const activeTotal = total - na;
    const progress = activeTotal > 0 ? Math.round(((collected + waived) / activeTotal) * 100) : 0;

    el.progressPercent.textContent = `${progress}% Complete`;
    el.progressBarFill.style.width = `${progress}%`;
  }

  function exportToCSV() {
    const currentTable = getCurrentTable();
    if (!currentTable) return;

    const docs = getFilteredDocuments();
    let csv = `Legal & Technical Checklist - ${state.channel} - ${state.selectedState} - ${currentTable.title}
`;
    csv += `Loan Application No:,"${state.caseDetails.appNo}"
`;
    csv += `Customer Name:,"${state.caseDetails.customerName}"
`;
    csv += `Property Address:,"${state.caseDetails.propertyAddress}"
`;
    csv += `Date:,"${state.caseDetails.date}"
`;
    csv += `Officer:,"${state.caseDetails.officerName}"

`;

    csv += `Sr No,Document Name,Legal Stage,Technical Stage,Status,Remarks
`;

    docs.forEach((doc, idx) => {
      const statusData = state.checklistStatus[doc.id] || { status: 'pending', notes: '' };
      csv += `${idx + 1},"${doc.name.replace(/"/g, '""')}","${doc.legalStage}","${doc.technicalStage}","${statusData.status}","${(statusData.notes || '').replace(/"/g, '""')}"
`;
    });

    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', `Checklist_${state.selectedState}_${new Date().toISOString().split('T')[0]}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    showToast('Exported CSV successfully!');
  }

  function showToast(msg) {
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `<span>✓</span> <span>${escapeHtml(msg)}</span>`;
    el.toastContainer.appendChild(toast);
    setTimeout(() => {
      toast.style.opacity = '0';
      setTimeout(() => toast.remove(), 300);
    }, 2500);
  }

  function escapeHtml(str) {
    if (!str) return '';
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  // Run on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
