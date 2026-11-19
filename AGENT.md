# Personal website — agent guide

## Context
Personal website. Goal: communicate the owner's value proposition clearly.
Current phase: see `docs/planing.md` (unchecked items = not started). Don't work ahead of the current phase.

## Docs (read only when relevant)
- `docs/planing.md` — roadmap and phase status
- `docs/tone-of-voice.md` — read before writing or editing any copy
- `docs/site-copy.md` — single source of truth for site text; never invent copy

## Rules
- Be concise. No recap of what you did unless asked.
- Make minimal, scoped changes. Don't refactor unrelated code.
- Ask before adding dependencies, changing folder structure, or deploying.
- Plan first for tasks touching more than ~3 files.
- Commit only when asked; one branch per task.
- Ignore: `.idea/`

## Stack & commands
React 19 + TypeScript + Vite, in `frontend/`. Run all commands from `frontend/`.

### Run locally
```sh
cd frontend
npm install      # first time, or after package.json changes
npm run dev      # dev server with hot reload → http://localhost:5173
```

### Other commands
- `npm run build` — type-check and build to `frontend/dist/`
- `npm run preview` — serve the production build locally
- `npm run lint` — run ESLint

## Definition of done
- `npm run build` and `npm run lint` pass.
- Checked at 375px and 1280px (plus 768 / 1024 for layout changes), in light and dark, with no horizontal scroll.
- Copy matches `docs/site-copy.md` or the case study copy file; headings stay in order (one `<h1>`, no skipped levels).

## Lessons learned
<!-- Add one line each time the agent repeats a mistake. -->
