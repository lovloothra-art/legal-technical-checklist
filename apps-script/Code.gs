/**
 * Legal & Technical Checklist — Google Sheets logging backend.
 *
 * This is a Google Apps Script Web App bound to a spreadsheet. It receives
 * POSTs from the static browser app (index.html / app.js) and appends one
 * row per loan application submission.
 *
 * SETUP
 * 1. Open the spreadsheet > Extensions > Apps Script, paste this file.
 * 2. Set SHARED_TOKEN below to a long random string.
 * 3. Deploy > New deployment > Web app. Execute as: Me. Who has access: Anyone.
 * 4. Authorise when prompted, copy the /exec URL.
 * 5. In app.js set SHEETS_ENDPOINT to that URL and SHEETS_TOKEN to the same token.
 *
 * NOTE: After ANY edit to this file you must go to Deploy > Manage deployments
 * > edit (pencil icon) > Version: New version > Deploy. Otherwise the live
 * /exec URL keeps running the old code — Apps Script does not hot-reload
 * existing deployments.
 */

// ---- Constants --------------------------------------------------------

var SHEET_ID = '1azYCThvKo0mFIdEPa12EFbD7UVx2FjKENQS6klblNQU';

var SHARED_TOKEN = 'CHANGE_ME_TO_A_LONG_RANDOM_STRING';

// Server-side allowlist of channel -> sheet tab name. The client sends a
// channel string, never a tab name directly, so a malicious or buggy client
// cannot make this script create or write to an arbitrary sheet tab.
var TABS = {
  'Secured DSA': 'DSA',
  'Secured Direct': 'Direct'
};

var HEADERS = [
  'Jarvis Application ID',
  'Timestamp (IST)',
  'Borrower / Entity Name',
  'Property Address / City',
  'Credit Manager',
  'State',
  'Property / Collateral Type',
  'Query Raised to Sales',
  'Document Status'
];

// ---- Entry points -------------------------------------------------------

/**
 * Simple health check so the /exec URL can be opened directly in a browser
 * to confirm the deployment is live and pointing at the latest version.
 */
function doGet(e) {
  return jsonOut({ ok: true, service: 'legal-technical-checklist' });
}

function doPost(e) {
  var lock = LockService.getScriptLock();
  var ts;

  try {
    // Acquire the lock before the duplicate check so that two near-
    // simultaneous submits of the same Jarvis Application ID cannot both
    // pass the check and both append a row. Without this, the read-then-
    // write duplicate check below is a race condition.
    lock.waitLock(30000);

    var body = JSON.parse((e && e.postData && e.postData.contents) || '{}');

    // The client sends Content-Type: text/plain with a JSON string as the
    // body (deliberately, to avoid a CORS preflight request that Apps
    // Script cannot answer), so e.postData.contents still holds JSON text
    // even though the declared content type is not application/json.

    if (!SHARED_TOKEN || SHARED_TOKEN === 'CHANGE_ME_TO_A_LONG_RANDOM_STRING' || SHARED_TOKEN !== String(body.token || '')) {
      return jsonOut({ ok: false, error: 'Unauthorized request.' });
    }

    var tabName = TABS[String(body.channel || '')];
    if (!tabName) {
      return jsonOut({ ok: false, error: 'Unknown channel: ' + body.channel });
    }

    var appId = String(body.jarvisAppId || '').trim();
    var idPattern = /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/;
    if (!idPattern.test(appId)) {
      return jsonOut({ ok: false, error: 'Invalid or missing Jarvis Application ID.' });
    }

    var ss = SpreadsheetApp.openById(SHEET_ID);
    var sh = ss.getSheetByName(tabName);
    if (!sh) {
      sh = ss.insertSheet(tabName);
    }

    if (sh.getLastRow() === 0) {
      sh.getRange(1, 1, 1, HEADERS.length).setValues([HEADERS]).setFontWeight('bold');
      sh.setFrozenRows(1);
    }

    // Duplicate check, scoped per tab: the same Jarvis Application ID may
    // legitimately exist once in the DSA tab and once in the Direct tab.
    var lastRow = sh.getLastRow();
    if (lastRow > 1) {
      var existingIds = sh.getRange(2, 1, lastRow - 1, 1).getValues();
      var appIdLower = appId.toLowerCase();
      for (var i = 0; i < existingIds.length; i++) {
        if (String(existingIds[i][0]).trim().toLowerCase() === appIdLower) {
          return jsonOut({
            ok: false,
            duplicate: true,
            row: i + 2,
            error: 'Jarvis Application ID ' + appId + ' has already been submitted in the "' + tabName + '" tab (row ' + (i + 2) + ').'
          });
        }
      }
    }

    // Timestamp is generated here, server-side, not read from the client.
    // An audit record must not depend on the client's clock, which can be
    // wrong, spoofed, or in a different timezone.
    ts = Utilities.formatDate(new Date(), 'Asia/Kolkata', 'yyyy-MM-dd HH:mm:ss');

    var row = [
      appId,
      ts,
      nz(body.borrowerName),
      nz(body.propertyAddress),
      nz(body.creditManager),
      nz(body.state),
      nz(body.propertyType),
      nz(body.queryRaisedToSales),
      nz(body.documentStatus)
    ];

    var target = sh.getLastRow() + 1;

    // Number format is forced to plain text ('@') and appendRow() is
    // deliberately avoided: appendRow() evaluates a leading "=" in any
    // cell value, so a borrower name of "=IMPORTXML(...)" (or similar)
    // would execute as a formula inside the sheet. setValues() with a
    // text number format writes it as an inert string instead.
    sh.getRange(target, 1, 1, HEADERS.length).setNumberFormat('@').setValues([row]);
    SpreadsheetApp.flush();

    return jsonOut({ ok: true, tab: tabName, row: target, timestamp: ts });
  } catch (err) {
    return jsonOut({ ok: false, error: String((err && err.message) || err) });
  } finally {
    try {
      lock.releaseLock();
    } catch (releaseErr) {
      // Nothing more we can do if releasing the lock itself fails.
    }
  }
}

// ---- Helpers -------------------------------------------------------------

/**
 * Normalises a value to a trimmed string, or '' for null/undefined.
 * This ensures empty/missing fields become a genuinely blank cell (a real
 * null to ISBLANK/COUNTA/QUERY/IMPORTRANGE), never the literal text
 * "null", which would be truthy and indistinguishable from a value a user
 * actually typed.
 */
function nz(v) {
  if (v === null || v === undefined) {
    return '';
  }
  return String(v).trim();
}

/**
 * Wraps a JS object as a JSON ContentService response.
 * Apps Script web apps cannot set HTTP status codes on doGet/doPost
 * responses, so every response here is HTTP 200 and the client must
 * branch on the ok field in the body rather than on the status code.
 */
function jsonOut(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON);
}
