# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

A static, client-side web app for Credit Saison India that lets loan officers navigate document checklists for secured lending, filtered by state/geography, property type, and process stage.

The app is split into **four distinct checklists** — `{Secured DSA, Secured Direct} x {Legal, Technical}`. The user picks a vertical then a discipline on an entry gate screen before any checklist is shown; each combination filters on only its own stage field and submits to its own Google Sheet tab.

No build step or package manager — just `index.html` + `styles.css` + `app.js` + `data.js` opened directly or served as static files. The only server-side piece is `apps-script/Code.gs`, a Google Apps Script web app that logs submissions.

## Running / Testing

There is no build system, test suite, or linter configured. To work on this app:
- Open `index.html` directly in a browser, or serve the directory with any static file server (e.g. `python3 -m http.server`).
- Verify changes manually in the browser — check all four channel/discipline combinations, multiple states, both view modes (Interactive Checklist / Full Matrix Grid), and print/export actions.
- Useful fixed counts for regression checking, at stage `Initiation` with property type `All`: DSA/Legal/Gujarat = 13, DSA/Legal/Rajasthan = 17, DSA/Technical/Gujarat = 0 (expected — see below), Direct/Legal/AP & Telangana (Standard) = 24, Direct/Technical/AP & Telangana (Standard) = 23.
- `?channel=dsa&disc=legal&state=Gujarat` skips the gate and deep-links straight to a checklist.

## Architecture

**`data.js`** — defines the single global `CHECKLIST_DATA` object, the source of truth for all checklist content. Shape:
```
CHECKLIST_DATA[channel][state] = [ table, table, ... ]
```
- `channel` is `"Secured DSA"` or `"Secured Direct"`.
- `state` is an Indian state/geography name (e.g. `"Maharashtra"`).
- Each `table` has a `title`, a `propertyTypes` array (collateral types relevant to that table, e.g. Gaothan/Plot/Freehold), and a `documents` array.
- Each document has an `id`, `name`, a `checks` map (`propertyType -> boolean`, whether that document applies to that property type), a `legalStage`, and a `technicalStage` (one of: Login, Initiation, Legal Vetting, Cheque Handover, Post Disbursement/If Applicable, Not Applicable).
- Some states have multiple tables (sub-tabs in the UI); Secured Direct data starts at line ~4518.

**`app.js`** — single IIFE containing all app logic, no modules/frameworks. Key parts:
- `state` — in-memory app state: selected channel, `discipline` (`'legal' | 'technical' | null`; **null means the entry gate is showing**), state/table/property type, a single `selectedStage`, search query, view mode, case/borrower details, and `checklistStatus` (map of `docId -> { status, notes }`).
- **`getDocStage(doc)` is the single read point for a document's stage** — it returns `doc.technicalStage` or `doc.legalStage` depending on the active discipline. Never read those two fields directly for filtering, rendering, or export; go through this helper so a checklist only ever sees its own discipline.
- `STAGE_OPTIONS` holds the two stage vocabularies, which genuinely differ (legal has `Post Disbursement`, technical has `If Applicable`) — do not merge them. `setDiscipline()` rebuilds the `#stageSelect` options from it.
- Entry gate: `showGate()` / `enterWorkspace()` toggle `#entryGate` against `#workspace`. The context bar and header actions are hidden while the gate is up — Submit would otherwise target no checklist.
- `el` — cache of DOM element references, queried once at load.
- URL sync: `readQueryParams()` / `updateQueryParams()` keep `channel`, `disc`, `state`, `stage`, `view` in the URL query string so checklist views are shareable/bookmarkable. The gate is skipped only when **both** `channel` and `disc` are present and valid.
- Persistence: `getStorageKey()` builds a localStorage key from `channel_discipline_state_tableTitle`. **The discipline segment is load-bearing** — it is what keeps Legal and Technical statuses independent for the same document, and it scopes `performReset()`'s prefix scan. `performReset()` runs after every successful submit, so without it, submitting the Legal checklist would silently wipe Technical progress. Checklist progress is local to the browser; only submissions leave it.
- Filtering pipeline: `getMatchingDocsForTable()` applies property type, the active discipline's stage (via `getDocStage` + `matchStage`), and the search query; `getFilteredDocuments()` is a thin wrapper over it for the current table.
- Rendering: `render()` dispatches to `renderChecklistView()` (interactive, per-document status toggle) or `renderMatrixView()` (full grid of documents x property types). `renderSubTabs()` handles states with multiple tables. `updateStatsAndProgress()` recomputes the stat chips and progress bar after every render/status change.
- Other actions: `exportToCSV()`, `resetChecklist()`, `showToast()`, `escapeHtml()` (used when injecting document names/notes into HTML — keep using this for any new user-facing string interpolation).

**`index.html`** — static markup with fixed DOM ids that `app.js` binds to via `el`. Adding a new control requires adding both the HTML element and a corresponding lookup + listener in `app.js`.

**`styles.css`** — all styling, including print-specific rules used by the Print/PDF button (`window.print()`). The print block hides `.entry-gate` but deliberately keeps `.context-bar` visible: a printed docket must state which vertical and checklist it belongs to.

**`apps-script/Code.gs`** — Google Apps Script web app that appends one row per submission. It routes on a server-side allowlist keyed `"channel|discipline"` into one of four tabs (`DSA - Legal`, `DSA - Technical`, `Direct - Legal`, `Direct - Technical`). The client never sends a tab name, so it cannot write to an arbitrary tab.

  Two security invariants live here — keep both: the tab allowlist above, and `nz()`, which prefixes any value starting with `= + - @` with an apostrophe. Every text column is free text typed by a loan officer, and `setValues()` parses a leading `=` as a formula. Note that the `'@'` number format does **not** prevent this (it only affects display) — that was verified empirically after an earlier comment in the file claimed otherwise. **Editing this file has no effect until it is redeployed** (Deploy › Manage deployments › New version) — Apps Script does not hot-reload existing deployments.

## Working in this codebase

- When adding new checklist content, edit `data.js` only — don't hardcode document lists in `app.js`.
- Keep `legalStage`/`technicalStage` values within the existing fixed vocabulary (Login, Initiation, Legal Vetting, Cheque Handover, Post Disbursement/If Applicable, Not Applicable) since filters and badge styling (`getStageBadgeClass`) key off these exact strings.
- Some documents legitimately have no stage for one discipline. Across Secured DSA, 155 of 246 documents are `technicalStage: "Not Applicable"` (Gujarat is 22/22), so DSA/Technical renders an explicit "not applicable for this geography" empty state with Submit disabled. That is a content gap in `data.js`, not a bug — don't "fix" it in `app.js`.
- `app.js` is one file with no module boundaries — match the existing pattern of small top-level functions operating on the shared `state`/`el` objects rather than introducing classes or new files.
