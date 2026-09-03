# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

A static, client-side web app for Credit Saison India that lets loan officers navigate legal/technical document checklists for secured lending, filtered by channel, state/geography, property type, and process stage. No backend, no build step, no package manager — just `index.html` + `styles.css` + `app.js` + `data.js` opened directly or served as static files.

## Running / Testing

There is no build system, test suite, or linter configured. To work on this app:
- Open `index.html` directly in a browser, or serve the directory with any static file server (e.g. `python3 -m http.server`).
- Verify changes manually in the browser — check both channels (Secured DSA / Secured Direct), multiple states, both view modes (Interactive Checklist / Full Matrix Grid), and print/export actions.

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
- `state` — in-memory app state: selected channel/state/table/property type/stage filters, search query, view mode, case/borrower details, and `checklistStatus` (map of `docId -> { status, notes }`).
- `el` — cache of DOM element references, queried once at load.
- URL sync: `readQueryParams()` / `updateQueryParams()` keep `channel`, `state`, `legal`, `tech`, `view` in the URL query string so checklist views are shareable/bookmarkable.
- Persistence: `getStorageKey()` builds a localStorage key from `channel_state_tableTitle`; `loadFromLocalStorage()` / `saveToLocalStorage()` persist per-table checklist progress and case details. There is no server-side storage — everything is local to the browser.
- Filtering pipeline: `getFilteredDocuments()` applies property type, legal stage, technical stage (via `matchStage`), and search query against the current table's documents.
- Rendering: `render()` dispatches to `renderChecklistView()` (interactive, per-document status toggle) or `renderMatrixView()` (full grid of documents x property types). `renderSubTabs()` handles states with multiple tables. `updateStatsAndProgress()` recomputes the stat chips and progress bar after every render/status change.
- Other actions: `exportToCSV()`, `resetChecklist()`, `showToast()`, `escapeHtml()` (used when injecting document names/notes into HTML — keep using this for any new user-facing string interpolation).

**`index.html`** — static markup with fixed DOM ids that `app.js` binds to via `el`. Adding a new control requires adding both the HTML element and a corresponding lookup + listener in `app.js`.

**`styles.css`** — all styling, including print-specific rules used by the Print/PDF button (`window.print()`).

## Working in this codebase

- When adding new checklist content, edit `data.js` only — don't hardcode document lists in `app.js`.
- Keep `legalStage`/`technicalStage` values within the existing fixed vocabulary (Login, Initiation, Legal Vetting, Cheque Handover, Post Disbursement/If Applicable, Not Applicable) since filters and badge styling (`getStageBadgeClass`) key off these exact strings.
- `app.js` is one file with no module boundaries — match the existing pattern of small top-level functions operating on the shared `state`/`el` objects rather than introducing classes or new files.
