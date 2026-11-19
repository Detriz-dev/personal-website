# Case study page — implementation plan

Case study: **Ocado Technology platform documentation**
Design: [Figma — full page (light, 1280)](https://www.figma.com/design/dMHyJ85uRXmnEONUYGg5jT/Personal-Site?node-id=134-38533) · page `OcadoCaseStudy`
Brief: `docs/case-study-design.md` · Copy: `docs/ocado-technology-platform-documentation.md` (single source of truth)

> Progress is tracked in this file. `[ ]` = to do, `[x]` = done. Checkboxes inside tables don't render on GitHub, but they're easy to edit and search.

---

## How to work in sessions

Every step below runs in its **own fresh Claude Code session** (`/clear` or a new terminal). This file is the only handoff between sessions, so keep it up to date.

### Start a session
1. Run `/clear`, or open a new session in the repo root.
2. Check out the right branch (see the step's **Branch**). Create it from `main` if the previous PR is merged, otherwise from the previous step's branch.
3. Paste this prompt and change the step number:
   ```
   Read docs/case-study-implementation-plan.md and do Step <N> only.
   Read only the files listed in that step's "Context" plus the step's Figma links.
   ```
4. The agent reads the step's **Context** files and Figma nodes. It doesn't read the whole repo.

### Finish a session
1. `npm run build` + `npm run lint` pass. Checked at 375px and 1280px in **light and dark**.
2. Tick the step's checkboxes and the row in the **Progress overview**.
3. Write 1–3 lines in the step's **Handoff notes**: anything the next session must know (new props, deviations from Figma, open issues).
4. Commit (and open a PR if the step ends a slice).

### Notes for the agent
- Figma: call `create_session` (file key `dMHyJ85uRXmnEONUYGg5jT`) once per session, then load the `figma-design-to-code` skill before `get_design_context`. Use the **node links in the step**, not the full page (the full page is ~120k tokens).
- Don't read `docs/case-study-design.md` or the whole copy file unless the step says so. Read only the copy section you need.
- Follow `AGENT.md` rules (ask before adding dependencies or changing folder structure).

---

## Progress overview

| Step | Session | Branch / PR | Status |
|---|---|---|---|
| D | Decisions (no code) | — | [x] |
| 1 | Routing | `19-routing-theme` | [x] |
| 2 | Dark mode (app-wide) | `19-routing-theme` | [x] |
| 3 | Shared hooks + page layout | `19-routing-theme` → **PR** | [x] |
| 4 | Page shell: ProcessNav + hero | `20-case-study-shell` | [x] |
| 5 | Overview, problems, goal | `20-case-study-shell` → **PR** | [x] |
| 6.1 | 01 Discovery | `22-case-study-01-03` | [x] |
| 6.2 | 02 User research | `22-case-study-01-03` | [x] |
| 6.3 | 03 Information architecture | `22-case-study-01-03` → **PR** | [x] |
| 7.1 | 04 Interface design | `23-case-study-04-06` | [x] |
| 7.2 | 05 Usability tests | `23-case-study-04-06` | [x] |
| 7.3 | 06 Data analysis | `23-case-study-04-06` → **PR** | [x] |
| 8 | Entry point (landing → case study) | `23-case-study-polish` | [x] |
| 9 | Polish and QA | `23-case-study-polish` → **PR** | [x] |
| 10 | Folder refactor (D8: `components/case-study/`) | own branch → **PR** | [ ] |

Branch names are suggestions. Rename them if needed.

---

## Step D — Decisions (answer before Step 1)

| # | Question | Recommendation | Answer | Done |
|---|---|---|---|---|
| D1 | Routing library | `react-router` v7, declarative mode (new dependency). Alternative: own ~40-line History API hook. | `react-router` v7 | [x] |
| D2 | Case study URL | `/projects/platform-documentation` | `/projects/platform-documentation` | [x] |
| D3 | Theme mechanism | App-level `ThemeProvider` + `data-theme` on `<html>`. Existing components keep their `theme` prop; new ones use `--color-*` tokens. | As recommended | [x] |
| D4 | Default theme | Saved choice → OS `prefers-color-scheme` → `dark` | As recommended | [x] |
| D5 | Page footer | Figma ends after 06. Add "What I learned" + `ContactSection` (per the brief)? | "What I learned" + `ContactSection` | [x] |
| D6 | Copy drift | Figma text differs from the copy file ("only share a single screen", "(in first round)", "UI Design"). Update the copy file first. | Figma text wins. From 6.2 on, build from Figma text; earlier drift is fixed in Step 9. | [x] |
| D7 | Missing designs | No dark or mobile frame in Figma. Build from tokens and landing-page patterns, or design first? | Build from existing tokens and landing-page patterns | [x] |
| D8 | Folder structure | Put case-specific illustrations in `components/case-study/`, or keep `components/` flat? | Keep flat for now; refactor folders after Step 9 | [x] |
| D9 | StatStrip | It's [off-canvas in Figma](https://www.figma.com/design/dMHyJ85uRXmnEONUYGg5jT/Personal-Site?node-id=134-38551). Keep or cut? | Keep | [x] |
| D10 | Theme toggle on the case study | The ProcessNav has no toggle in Figma. Add an icon button at its right end? | Yes, add toggle | [x] |

---

## Step 1 — Routing

**Figma:** none (no visual change).
**Context:** `frontend/src/main.tsx`, `frontend/src/pages/LandingPage/LandingPage.tsx`, `frontend/index.html`, `frontend/package.json`, `frontend/src/components/Button/Button.tsx` + `.types.ts`.

| Task | Done |
|---|---|
| Install `react-router` (per D1) | [x] |
| Create `src/App.tsx` with `BrowserRouter`, routes `/`, the D2 URL and `*` (→ landing) | [x] |
| `main.tsx` renders `<App />` | [x] |
| Lazy-load `CaseStudyPage` (`React.lazy` + `Suspense`). A placeholder page is OK for now. | [x] |
| `ScrollManager`: scroll to top on route change; scroll to `#hash` after render | [x] |
| `Button` can render a router `<Link>` (small `to` prop), no full reload | [x] |
| `useDocumentTitle` hook + fix the `index.html` title ("frontend") | [x] |
| Add an SPA rewrite to the "Vercel settings" item in `docs/planing.md` (note only) | [x] |

**Handoff notes:**
- Paths live in `src/routes.ts` (`ROUTES`). Unknown URLs redirect to `/`. `CaseStudyPage` is a lazy-loaded placeholder (only an `<h1>`).
- `Button` takes `to` (router `<Link>`) in addition to `href`. `ScrollManager` only acts on page changes; same-page `#hash` clicks stay native.
- Tab titles ("Dawid — Product Designer", "OCADO Technology Platform Documentation — Dawid") aren't in `site-copy.md` yet. Confirm them or add them there.

---

## Step 2 — Dark mode (app-wide)

**Figma:** [landing page dark frames for reference: project card screens](https://www.figma.com/design/dMHyJ85uRXmnEONUYGg5jT/Personal-Site?node-id=132-3722)
**Context:** `frontend/src/index.css`, `frontend/index.html`, `frontend/src/App.tsx`, `frontend/src/pages/LandingPage/LandingPage.tsx`.

| Task | Done |
|---|---|
| `src/theme/ThemeContext.tsx`: `ThemeProvider` + `useTheme()` → `{ theme, toggleTheme }` | [x] |
| Initial theme per D4. Save to `localStorage` (try/catch). | [x] |
| Set `data-theme` and `color-scheme` on `<html>` | [x] |
| `index.css`: replace `@media (prefers-color-scheme: dark)` with `:root[data-theme="dark"]` | [x] |
| Inline script in `index.html` that sets `data-theme` before React mounts (no flash) | [x] |
| `LandingPage` uses `useTheme()` instead of local state | [x] |
| Check: toggle → reload → theme kept; OS dark with no saved choice → dark | [x] |

**Handoff notes:**
- `useTheme()` from `src/theme/ThemeContext.tsx` → `{ theme, toggleTheme }`; `Theme` type is `"light" | "dark"` (same as `TopNavTheme`). Only an explicit toggle is saved (`localStorage["theme"]`), so the OS preference applies until the user picks.
- `index.html` inline script and `getInitialTheme` share the same rule; keep them in sync. `--color-*` tokens now follow `:root[data-theme="dark"]`, not the OS media query.
- Verified toggle → reload keeps theme, and no saved choice → OS preference. OS-dark path not tested on a dark-OS machine (same code path).

---

## Step 3 — Shared hooks + page layout

**Figma:** none.
**Context:** `frontend/src/pages/LandingPage/LandingPage.tsx` + `.module.css`.

| Task | Done |
|---|---|
| Move `useActiveSection` → `src/hooks/useActiveSection.ts`, with the nav offset as a parameter | [x] |
| Move `useHasScrolled` → `src/hooks/useHasScrolled.ts` | [x] |
| `PageLayout` component: dot-grid background + theme class (from `LandingPage.module.css`) | [x] |
| `LandingPage` uses the hooks and `PageLayout`. No visual change. | [x] |
| **Open PR** for steps 1–3 | [x] |

**Handoff notes:**
- `useActiveSection(links, navOffset)` takes any `{ href }[]` (keep the array stable, e.g. module-level const). `useHasScrolled()` unchanged.
- `<PageLayout>` reads the theme from `useTheme()` itself; accepts `className` + div props. Pages put only their own spacing in their CSS module.

---

## Step 4 — Page shell: ProcessNav + hero

**Figma:** [ProcessNav](https://www.figma.com/design/dMHyJ85uRXmnEONUYGg5jT/Personal-Site?node-id=134-39838) · [Hero](https://www.figma.com/design/dMHyJ85uRXmnEONUYGg5jT/Personal-Site?node-id=134-38540) · [NDA note](https://www.figma.com/design/dMHyJ85uRXmnEONUYGg5jT/Personal-Site?node-id=134-38548) · [StatStrip (if D9 = keep)](https://www.figma.com/design/dMHyJ85uRXmnEONUYGg5jT/Personal-Site?node-id=134-38551) · [Stat component](https://www.figma.com/design/dMHyJ85uRXmnEONUYGg5jT/Personal-Site?node-id=121-3186)
**Context:** `src/hooks/useActiveSection.ts`, `src/components/PageLayout/`, `src/components/NavItem/` (for style reference), `src/components/TopNav/TopNav.module.css` (icon button style), copy file → "Note on confidentiality" + "My responsibilities".

| Task | Done |
|---|---|
| `pages/CaseStudyPage/` (`.tsx`, `.types.ts`, `.module.css`): 1120px column, 80px between sections, empty section anchors `#overview`, `#discovery` … `#data-analysis` | [x] |
| `ProcessNav`: back button (→ `/#projects`), Overview, 01–06, active step from `useActiveSection`, sticky | [x] |
| `ProcessNav` mobile: horizontally scrolling chips; active chip scrolls into view | [x] |
| `ProcessNav` theme toggle (if D10 = yes) | [x] |
| `Callout` (NdaNote variant: `lock` icon + text) | [x] |
| `CaseStudyHero`: `<h1>` title (accent second line) + NdaNote | [x] |
| `StatStrip` + `Stat` (if D9 = keep) | [x] |
| Light + dark, 375 / 1280 | [x] |

**Handoff notes:**
- Sections live in `SECTIONS` in `CaseStudyPage.tsx` (empty `<section id>` anchors; fill them in place). `NAV_OFFSET = 72` matches the global `scroll-padding-top` on `<html>`, so don't add `scroll-margin-top` to sections. New: `ProcessNav`, `Callout` (`variant="nda"` only; add `bridge` to `CalloutVariant` + `ICONS`), `CaseStudyHero`, `StatStrip` (+ `Stat`, `<dl>`, 2×2 under 768px).
- Copy follows the copy file, not Figma (D6 still open): NDA text "can’t showcase the user interfaces…", nav label "Interface Design" (Figma: "UI Design"). Stat labels "~10 in-depth interviews" / "3 platform experts in card sorting" come from Figma, paraphrasing the copy file.
- Back button keeps Figma's outline (`--color-text-primary` border). 375px checked by measurement only (no overflow, title fits); the browser couldn't go below 614px wide.

---

## Step 5 — Overview, problems, goal

**Figma:** [Project overview](https://www.figma.com/design/dMHyJ85uRXmnEONUYGg5jT/Personal-Site?node-id=134-38557) · [Problems](https://www.figma.com/design/dMHyJ85uRXmnEONUYGg5jT/Personal-Site?node-id=135-39900) · [ScatterVisual](https://www.figma.com/design/dMHyJ85uRXmnEONUYGg5jT/Personal-Site?node-id=134-38590) · [ProblemList](https://www.figma.com/design/dMHyJ85uRXmnEONUYGg5jT/Personal-Site?node-id=134-38655) · [ProblemRow component](https://www.figma.com/design/dMHyJ85uRXmnEONUYGg5jT/Personal-Site?node-id=122-3275) · [Project goal](https://www.figma.com/design/dMHyJ85uRXmnEONUYGg5jT/Personal-Site?node-id=134-38661) · [GoalPair](https://www.figma.com/design/dMHyJ85uRXmnEONUYGg5jT/Personal-Site?node-id=134-38667)
**Context:** `src/components/SectionHeader/`, `src/pages/CaseStudyPage/`, copy file → "Project overview", "Problems", "Project goal".

| Task | Done |
|---|---|
| `SectionHeader`: add `variant` (`overview` / `sub` / `phase` + `number`), or a separate `CaseStudySectionHeader` if that's simpler | [x] |
| Overview section + "My responsibilities" text block | [x] |
| `ScatterVisual` (decorative, `aria-hidden`, light + dark) | [x] |
| `ProblemRow` × 5 (icon + headline + secondary line) | [x] |
| `GoalCard` × 2 (visual slot + audience chip + text) + the two visuals | [x] |
| Light + dark, 375 / 1280 | [x] |
| **Open PR** for steps 4–5 | [ ] |

**Handoff notes:**
- New: `CaseStudySectionHeader` (token-based, `variant="overview" | "sub"`; add `phase` + `number` in 6.1), `CaseStudyOverview` (fills `#overview`), `ProblemRow` (`<li>`), `ScatterVisual`, `GoalCard` + `GoalVisuals.tsx` (`OnePlaceVisual`, `UsageDataVisual` on a 496px stage, scaled by container queries on narrow cards). Old `SectionHeader` untouched (landing only).
- Copy follows the copy file (D6 open): "My responsibilities" is the copy file's list of links to 01–06 (Figma has a paragraph that isn't in the copy file), heading "Problems" (Figma: "Problems we saw upfront"), extra first overview sentence. Visual-only labels (caption, audience chips, "Usage data") come from Figma.
- 375px checked in a 375px iframe (no horizontal overflow); ScatterVisual clips its right edge under 365px.

---

## Step 6.1 — 01 Discovery

**Figma:** [01 Discovery section](https://www.figma.com/design/dMHyJ85uRXmnEONUYGg5jT/Personal-Site?node-id=134-38747) · [ArchaeologyStack](https://www.figma.com/design/dMHyJ85uRXmnEONUYGg5jT/Personal-Site?node-id=134-38755) · [Bridge](https://www.figma.com/design/dMHyJ85uRXmnEONUYGg5jT/Personal-Site?node-id=134-38805)
**Context:** `src/components/SectionHeader/` (phase variant), `src/components/Callout/`, `src/components/QuestionDiagram/` (hover/focus pattern), copy file → "Discovery".

| Task | Done |
|---|---|
| Phase header `01 Discovery` | [x] |
| `ArchaeologyStack`: dashed depth axis + 4 strata (icon, label, copy reachable by keyboard) | [x] |
| `Callout` Bridge variant (`arrow_downward` + italic text) | [x] |
| Light + dark, 375 / 1280 | [x] |

**Handoff notes:**
- `CaseStudySectionHeader variant="phase" number="01"` → `<h2>` with "Phase 01" eyebrow, same grid as `overview`. Phase content goes in `PHASE_CONTENT` (by href) in `CaseStudyPage.tsx`; each phase is its own component (`CaseStudyDiscovery`). `Callout variant="bridge"` added. Imported Urbanist `wght-italic.css` in `main.tsx` (same package, no new dependency) so italics aren't faux.
- `ArchaeologyStack` copy is always visible (no hover), so it's keyboard/screen-reader reachable as an `<ol>` with `<h3>` titles; bands are `aria-hidden`. Band labels all use `--color-text-on-accent` (Figma mixes accent-text and on-accent; accent-text on yellow has low contrast). Dashed axis is a CSS border, not the Figma SVG. Below 768px the band goes full-width (64px tall) above its text.
- Kept components flat in `components/` (D8: refactor after Step 9). Discovery text is identical in Figma and the copy file.

---

## Step 6.2 — 02 User research

**Figma:** [02 User research section](https://www.figma.com/design/dMHyJ85uRXmnEONUYGg5jT/Personal-Site?node-id=134-38809) · [QuestionCards](https://www.figma.com/design/dMHyJ85uRXmnEONUYGg5jT/Personal-Site?node-id=134-38819) · [Featured insight — Ctrl+F](https://www.figma.com/design/dMHyJ85uRXmnEONUYGg5jT/Personal-Site?node-id=134-38828) · [InsightGrid](https://www.figma.com/design/dMHyJ85uRXmnEONUYGg5jT/Personal-Site?node-id=134-38867) · [InsightText component](https://www.figma.com/design/dMHyJ85uRXmnEONUYGg5jT/Personal-Site?node-id=125-3203)
**Context:** `src/components/SectionHeader/`, `src/pages/CaseStudyPage/`, copy file → "User research".

| Task | Done |
|---|---|
| Phase header `02 User research` | [x] |
| `QuestionCard` × 3 | [x] |
| `InsightText` (title + text, reused in 06) | [x] |
| `InsightCard` + `featured` variant | [x] |
| `LongFormPageMock` (Ctrl+F visual) | [x] |
| `InsightGrid`: 2 rows + the small visuals per card | [x] |
| Light + dark, 375 / 1280 | [x] |

**Handoff notes:**
- New: `InsightText` (`iconSurface="accent" | "card"`, `headingLevel` h3/h4; reuse in 06), `QuestionCard` (`<li>`), `InsightCard` (`<li>`, `variant="default" | "featured"`, `visual` + `icon` or `lead`) with `InsightVisuals.tsx` (keycaps + 4 grid visuals), `LongFormPageMock`, `CaseStudyUserResearch`. Group labels are `<h3>`, card titles `<h4>`.
- Visuals draw on a fixed stage (500×168, featured 592×260) that `InsightCard` centers and scales via container queries; the panel height follows the scale. Grid: 3 / 2 columns from 1024px, one column below; featured stacks visual-on-top below 1024px.
- Copy from Figma (D6): "(in first round)" + Ctrl+F featured first. Deviation: 24px (not 20px) between featured card and grid, so all findings sit in one `<ul>`.

---

## Step 6.3 — 03 Information architecture

**Figma:** [03 IA section](https://www.figma.com/design/dMHyJ85uRXmnEONUYGg5jT/Personal-Site?node-id=134-38963) · [Search-first](https://www.figma.com/design/dMHyJ85uRXmnEONUYGg5jT/Personal-Site?node-id=134-38971) · [Card sorting](https://www.figma.com/design/dMHyJ85uRXmnEONUYGg5jT/Personal-Site?node-id=134-39019) · [Diátaxis](https://www.figma.com/design/dMHyJ85uRXmnEONUYGg5jT/Personal-Site?node-id=134-39079) · [Job-oriented](https://www.figma.com/design/dMHyJ85uRXmnEONUYGg5jT/Personal-Site?node-id=134-39115) · [Governance](https://www.figma.com/design/dMHyJ85uRXmnEONUYGg5jT/Personal-Site?node-id=134-39131) · [DecisionText component](https://www.figma.com/design/dMHyJ85uRXmnEONUYGg5jT/Personal-Site?node-id=126-3246)
**Context:** `src/components/SectionHeader/`, `src/components/SkillDiagram/SkillDiagram.module.css` (dashed connectors), copy file → "Information architecture".

> The largest section. If the session gets long, finish the decisions you've started, write handoff notes and continue in a new session.

| Task | Done |
|---|---|
| Phase header `03 Information architecture` | [x] |
| `DecisionText` | [x] |
| `DecisionBlock` (text + visual slot, `reverse` prop, stacks on mobile) | [x] |
| `SearchFirstVisual` (persona chips → search bar → results) | [x] |
| `CardSortVisual` (tool cards → experts → groups) | [x] |
| `DiataxisQuadrant` (2×2, hover/focus detail) | [x] |
| `BeforeAfter` (tool name → developer intent) | [x] |
| `GovernanceFlow` (team writes → review → published) | [x] |
| Light + dark, 375 / 1280 | [x] |
| **Open PR** for steps 6.1–6.3 | [ ] |

**Handoff notes:**
- New: `DecisionText` (eyebrow inside the `<h3>`; reuse in 04), `DecisionBlock` (`reverse`, `variant="split" | "card"`, `frame="stage" | "panel" | "none"`; stage = fixed 624×320 drawing scaled by container queries + `aria-hidden`, panel = fluid accessible content), `SearchFirstVisual`, `CardSortVisual`, `DiataxisQuadrant` (real `<table>`, row labels go vertical under 560px), `BeforeAfter` (`<del>` for the old title), `GovernanceFlow` (`<ol>`, stacks vertically under 560px), `CaseStudyInformationArchitecture`.
- Deviations: Diátaxis has no hover/focus detail (no copy for it in Figma or the copy file; How-to highlighted as in Figma). BeforeAfter mono uses the system monospace stack (Figma: JetBrains Mono, not installed). Decision 04 body follows Figma (example sentence lives in the visual only). 72px between decisions (estimated from the screenshot), 56px below 1024px.

---

## Step 7.1 — 04 Interface design

**Figma:** [04 Interface design section](https://www.figma.com/design/dMHyJ85uRXmnEONUYGg5jT/Personal-Site?node-id=134-39161) · [Docs screen (light)](https://www.figma.com/design/dMHyJ85uRXmnEONUYGg5jT/Personal-Site?node-id=135-41281) · [Docs screen (dark)](https://www.figma.com/design/dMHyJ85uRXmnEONUYGg5jT/Personal-Site?node-id=132-3722) · [Decision cards](https://www.figma.com/design/dMHyJ85uRXmnEONUYGg5jT/Personal-Site?node-id=134-39277)
**Context:** `src/components/DecisionText/`, `src/assets/platform-documentation/`, copy file → "Interface design".

| Task | Done |
|---|---|
| Phase header `04 Interface design` | [x] |
| Docs screen image (light/dark via `useTheme`). Re-export it if the Figma frame has changed. Add real `alt` text. | [x] |
| `DecisionCard` × 2 (Visual customization, Custom search) + their small visuals | [x] |
| Light + dark, 375 / 1280 | [x] |

**Handoff notes:**
- New: `DecisionCard` (`<li>`, DecisionText on a bordered card), `CaseStudyInterfaceDesign`. `CaseStudySectionHeader` got a `tags` prop (pill chips with a Material Symbol, under the description; Figma stack chips MkDocs / Material for MkDocs / Lunr.js / Mermaid).
- Docs screen reuses `assets/platform-documentation/docs-page-{light,dark}.png` (still matches Figma 135:41281, no re-export). Figma decision cards have no small visuals, so none were built. Copy is identical in Figma and the copy file.
- At 375px the screen just scales down (text in it is tiny but it's a picture with alt text); no horizontal overflow. Cards: 2 columns from 768px, gap 32px (24px stacked).

---

## Step 7.2 — 05 Usability tests

**Figma:** [05 Usability tests section](https://www.figma.com/design/dMHyJ85uRXmnEONUYGg5jT/Personal-Site?node-id=134-39336) · [PilotScope](https://www.figma.com/design/dMHyJ85uRXmnEONUYGg5jT/Personal-Site?node-id=134-39344) · [Test rows](https://www.figma.com/design/dMHyJ85uRXmnEONUYGg5jT/Personal-Site?node-id=134-39423) · [TestRow component](https://www.figma.com/design/dMHyJ85uRXmnEONUYGg5jT/Personal-Site?node-id=128-3346) · [Rollout timeline](https://www.figma.com/design/dMHyJ85uRXmnEONUYGg5jT/Personal-Site?node-id=134-39426)
**Context:** `src/components/TimeLine/`, copy file → "Usability tests".

| Task | Done |
|---|---|
| Phase header `05 Usability tests` | [x] |
| `PilotScope` (docs grid → arrow → rollout) | [x] |
| `TestRow` × 2 (tested → saw → changed) | [x] |
| `RolloutTimeline`: horizontal `TimeLine` variant, or a new component | [x] |
| Light + dark, 375 / 1280 | [x] |

**Handoff notes:**
- New: `TestRow` (`<article>`, `<h3>` with eyebrow inside; `findings` → `<dl>` tested/saw/changed, or `body` + `children` for Test 03), `PilotScope` (all `aria-hidden`, restates the description; 560×196 docs grid scaled by container queries, stacks with a down arrow below 1024px), `RolloutTimeline` (new component, not a `TimeLine` variant; `<ol>`, horizontal from 768px, vertical below), `CaseStudyUsabilityTests`.
- Copy is identical in Figma and the copy file (split into the three columns). Eyebrows, column labels and timeline/pilot labels are Figma-only. Timeline columns are 1fr 2fr 2fr 1fr, so middle markers sit ~8px off Figma's even spacing; outer labels don't wrap.
- TestRow: head on top below 1024px, columns stack below 768px. Checked 375 / 768 / 1024 (iframe, no overflow) and 1280, light + dark.

---

## Step 7.3 — 06 Data analysis

**Figma:** [06 Data analysis section](https://www.figma.com/design/dMHyJ85uRXmnEONUYGg5jT/Personal-Site?node-id=134-39525) · [Signals row](https://www.figma.com/design/dMHyJ85uRXmnEONUYGg5jT/Personal-Site?node-id=134-39549) · [Session depth & retention](https://www.figma.com/design/dMHyJ85uRXmnEONUYGg5jT/Personal-Site?node-id=134-39608) · [Analytics → interviews loop](https://www.figma.com/design/dMHyJ85uRXmnEONUYGg5jT/Personal-Site?node-id=134-39657) · [Legend](https://www.figma.com/design/dMHyJ85uRXmnEONUYGg5jT/Personal-Site?node-id=134-39260)
**Context:** `src/components/InsightText/`, `src/components/SkillDiagram/SkillDiagram.module.css` (connectors), copy file → "Data analysis".

| Task | Done |
|---|---|
| Phase header `06 Data analysis` | [x] |
| `SignalCard` × 2 (Search behavior, Content tiers) + "Illustrative" chip | [x] |
| `SessionDepthVisual` (wide card) | [x] |
| `LoopDiagram` (analytics → interviews → next iteration) | [x] |
| Footer per D5 ("What I learned" + `ContactSection`) | [x] |
| Light + dark, 375 / 1280 | [x] |
| **Open PR** for steps 7.1–7.3 | [x] |

**Handoff notes:**
- New: `SignalCard` (`<li>`, `layout="stacked" | "wide"`, InsightText as `<h3>`) + `SignalVisuals.tsx` (`SearchQueriesVisual`, `ContentTiersVisual`, Illustrative chip inside each), `SessionDepthVisual`, `LoopDiagram` (`<ol>`, 2×2 loop from a 520px container, vertical list below), `CaseStudyDataAnalysis`, `CaseStudyLearnings`. `CaseStudySectionHeader` got an `aside` slot (06's FullStory / Baseline → Launch → Shift chips). Signal visuals are fluid (no scaled stage), so text stays legible at 375.
- D5: `#what-i-learned` section (not in ProcessNav) + `ContactSection` as a full-bleed footer (`.page > .contact` negative margins). No Figma for either; LinkedIn URL from the copy file, GitHub still `#` (TODO, same as landing). Copy: Figma bolds "what"/"why." (copy file: italics).
- Legend node 134:39260 belongs to 04 (stack legend) and wasn't built. Header chips wrap at 375 with an arrow starting the second line.

---

## Step 8 — Entry point (landing → case study)

**Figma:** [Project card on the landing page](https://www.figma.com/design/dMHyJ85uRXmnEONUYGg5jT/Personal-Site?node-id=119-38327)
**Context:** `src/components/ProjectSection/ProjectSection.tsx`, `src/components/PlatformDocumentationProject/PlatformDocumentationProject.tsx`.

| Task | Done |
|---|---|
| Pass `projectHref` (D2 URL) and remove the TODO comment | [x] |
| "View case study" uses a router link (no reload) | [x] |
| Round trip: card → case study → back → lands on `#projects` with the TopNav visible | [x] |

**Handoff notes:**
- No code changes: `projectHref={ROUTES.platformDocumentation}` and the `to` router link were already in place (no TODO left). Verified at 1280 with real clicks: card → case study opens at top without reload; ProcessNav back → `/#projects`, section 72px under the visible TopNav, "Projects" active.
- `<html>` has `scroll-behavior: smooth`; if a smooth scroll is still animating when the back link is clicked, the landing page can land ~95px off. Only seen with a scripted `scrollTo`, not with wheel scroll. Recheck in Step 9.

---

## Step 9 — Polish and QA

**Figma:** [full page](https://www.figma.com/design/dMHyJ85uRXmnEONUYGg5jT/Personal-Site?node-id=134-38533) (screenshot comparison only, use `get_screenshot`, not `get_metadata`).
**Context:** `src/pages/CaseStudyPage/`, `src/hooks/`.

| Task | Done |
|---|---|
| D6: align steps 4–5 copy with Figma (NDA "only share a single screen", nav "UI Design", "Problems we saw upfront", "My responsibilities" paragraph, overview first sentence) and update the copy file to match | [x] |
| `useReveal` (fade + 8px rise on scroll), off under `prefers-reduced-motion` | [x] |
| Headings: one `<h1>`, phases `<h2>`, decisions `<h3>` | [x] |
| Decorative visuals `aria-hidden`. All hover copy reachable by keyboard focus. | [x] |
| Contrast check, light + dark | [x] |
| Responsive: 375 / 768 / 1024 / 1280, no horizontal scroll | [x] |
| Theme persists across pages and reloads, no flash | [x] |
| Direct load of the case study URL in `npm run dev` and `npm run preview`; back/forward; unknown URL | [x] |
| Update `docs/planing.md` (Case study page ✔) and the AGENT.md "Definition of done" | [x] |
| **Open PR** for steps 8–9 | [x] |

**Handoff notes:**
- D6 done: NDA "only share a single screen", nav "04 UI Design" (phase heading stays "Interface design"), "Problems we saw upfront", Figma's "My responsibilities" paragraph (replaces the link list; `CaseStudyOverview` has no props now), overview starts at "Ocado Technology's…". Copy file updated to match. `useReveal(ref)` marks `[data-reveal]` (intro + every section) with `data-revealed`; CSS is opacity-only until revealed, then an 8px-rise keyframe, so anchor scroll measures correctly. Off under reduced motion.
- Fixed `ScrollManager`: deep links with a hash (`/projects/platform-documentation#…`) never scrolled in dev (StrictMode cancelled the pending scroll, the re-run bailed out), and in a cold prod load they landed ~56px off (most likely late web fonts shifting the layout). Now it retries after a cancelled run and re-pins the target once fonts + `load` settle, unless the user has scrolled. The cold-load fix wasn't reproducible on a warm cache, so recheck once deployed.
- Audit: one `<h1>`, no skipped levels, no un-hidden SVGs, nothing focusable inside `aria-hidden`, no hover-only content. Contrast passes AA in both themes except the decorative `aria-hidden` "0 results" chip (3.12:1 in light). No horizontal scroll at 375/768/1024/1280 in either theme. Unknown URL → `/`; back/forward OK in dev and preview. Step 8's "~95px off during a running smooth scroll" wasn't reproduced; real clicks landed correctly.

---

## New files (summary)

```
src/
  App.tsx
  theme/ThemeContext.tsx
  hooks/useActiveSection.ts · useHasScrolled.ts · useDocumentTitle.ts · useReveal.ts
  components/
    ScrollManager/  PageLayout/
    ProcessNav/  CaseStudyHero/  Callout/ (NdaNote, Bridge)  StatStrip/ (if kept)
    ProblemRow/  GoalCard/  QuestionCard/  InsightText/  InsightCard/
    DecisionBlock/  DecisionText/  DecisionCard/  TestRow/  SignalCard/
    case-study/      ← per D8; case-specific illustrations, one folder each:
      ScatterVisual/  ArchaeologyStack/  LongFormPageMock/  SearchFirstVisual/
      CardSortVisual/  DiataxisQuadrant/  BeforeAfter/  GovernanceFlow/
      PilotScope/  RolloutTimeline/  SessionDepthVisual/  LoopDiagram/
  pages/CaseStudyPage/
```

**Changed:** `main.tsx`, `index.html`, `index.css`, `LandingPage.tsx` (+ `.module.css`), `ProjectSection.tsx`, `SectionHeader` (variant), `Button` (router link), maybe `TimeLine` (variant).
