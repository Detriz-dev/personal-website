# QIAstat-Dx Rise case study — implementation plan

One step per session. Read only the step's **Context** files and Figma nodes. At the end of a step: tick its box, fill **Handoff notes**.

## Progress
- [x] 0. Branch
- [x] 1. Route + page shell
- [x] 2. Hero + Overview
- [x] 3. 01 Research
- [x] 4. 02 Information architecture
- [x] 5. 03 UI design
- [x] 6. 04 Design system + 05 Usability tests
- [x] 7. What I learned
- [ ] 8. Landing project card (blocked: description copy)
- [ ] 9. Responsive + QA (overflow checked at 375/768/1024/1280; light + dark checked at 1280)

## Design reference
Figma file `dMHyJ85uRXmnEONUYGg5jT`, page **qiagen case study** (`180:4021`).
- Case study frame `181:4021` (light, 1280). Sections:
  - ProcessNav `181:4023`, Hero `181:4046` (stat strip removed, NDA note hidden)
  - Overview `181:4056` (chips `181:5260`)
  - 01 Research `181:4273`: callout `182:3402`, featured gloves card `182:3406`, grid `182:3450` (Elevated screen, Status visibility)
  - 02 IA `181:4427`: illustration `199:3389`, zones list `193:3409`, bridge `193:3436`
  - 03 UI design `181:4625`: principle grid `194:3389` (7 cards, 7th full width)
  - 04 Design system `185:3371`
  - 05 Usability tests `181:4800`
  - What I learned `186:3471`
- Landing cover `187:3298` (video card `187:3552`)
- Copy source: `copy/qiastat_dx_rise_case_study.md`. Figma copy is already corrected (product name, titles split) — **Figma text wins**.

Screenshot single nodes only — never fetch metadata for the whole page or frame `181:4021` (very large).

## Technical decisions
- **Reuse the Ocado building blocks**: `PageLayout`, `ProcessNav`, `CaseStudyHero`, `CaseStudySectionHeader` (`phase` variant), `InsightCard`, `InsightText`, `DecisionText`, `Callout`, `ContactSection`, `useActiveSection`, `useReveal`. No new dependency.
- **New page** `frontend/src/pages/QiastatCaseStudyPage/` (same structure as `CaseStudyPage`). No `StatStrip`.
- **New section components** follow the existing naming: `components/QiastatOverview/`, `QiastatResearch/`, `QiastatInformationArchitecture/`, `QiastatInterfaceDesign/`, `QiastatDesignSystem/`, `QiastatUsabilityTests/`, `QiastatLearnings/`. Illustrations go in `components/case-study/<Name>/` like the Ocado ones (inline SVG/CSS, `--color-*` tokens, light + dark).
- **Emphasis**: phrases set in SemiBold in Figma become `<strong>` (primary text colour). Widen `body` in `InsightText`, `InsightCard`, `DecisionText` types from `string` to `ReactNode` where needed (no visual change for Ocado).
- **Copy unchanged**; headings: one `<h1>` (hero), `<h2>` per phase, `<h3>` per card.
- **Video (step 8)**: click-to-play facade (thumbnail + play button), then `https://www.youtube-nocookie.com/embed/0dfB1SiJtPY?start=8&autoplay=1` iframe. Thumbnail saved locally in `src/assets/qiastat/`, no third-party request before click.

## Steps

### 0. Branch
Already on `42-case-study-qiagen`. `copy/` is untracked — leave it alone unless the user says otherwise.

### 1. Route + page shell
**Context:** `frontend/src/routes.ts`, `frontend/src/App.tsx`, `frontend/src/pages/CaseStudyPage/*`.
- `ROUTES.qiastatDxRise = "/projects/qiastat-dx-rise"`; lazy route in `App.tsx`.
- `QiastatCaseStudyPage`: sections Overview, 01 Research, 02 Information Architecture, 03 UI Design, 04 Design System, 05 Usability Tests (labels from ProcessNav `181:4023`), empty anchors for now. Title `"QIAstat-Dx Rise — Dawid"`.
- Done when: page loads at the route with nav + empty sections; build + lint pass.

### 2. Hero + Overview
**Context:** page file, `CaseStudyHero/*`, `CaseStudyOverview/*` (pattern). Figma `181:4046`, `181:4056`.
- Hero: accent "QIAGEN", title from Figma. NDA note hidden in Figma → check prop is optional; don't render it.
- Overview paragraph with `<strong>` phrases + responsibilities chips `181:5260`.

### 3. 01 Research
**Context:** `CaseStudyUserResearch/*`, `InsightCard/*`, `Callout/*`. Figma `181:4273`, `182:3402`, `182:3406`, `182:3450`.
- Intro, italic callout, featured "Working with gloves" card, grid with 2 cards. Illustrations: gloves, Elevated screen (reference style `191:4180`), Status visibility.

### 4. 02 Information architecture
**Context:** `CaseStudyInformationArchitecture/*` (pattern). Figma `181:4427`, `199:3389`, `193:3409`, `193:3436`.
- `InterfaceArchitecture` illustration (screen with 4 dashed numbered zones), zones list, italic bridge line.

### 5. 03 UI design
**Context:** `CaseStudyInterfaceDesign/*` (pattern). Figma `181:4625`, `194:3389` (screenshot each card separately).
- 7 principle cards with numbered titles and illustrations; 2-column grid, 7th full width (illustration beside text). Single column on mobile.

### 6. 04 Design system + 05 Usability tests
**Context:** `CaseStudyUsabilityTests/*`, `DecisionText/*`. Figma `185:3371`, `181:4800`.

### 7. What I learned
**Context:** `CaseStudyLearnings/*`. Figma `186:3471`. Contact section as on the Ocado page.

### 8. Landing project card
**Blocked:** landing description copy is a placeholder in Figma (`187:3298`) — ask the user for it first.
**Context:** `ProjectSection/*`, `PlatformDocumentationProject/*`. Figma `187:3298`, `187:3552`.
- New `QiastatProject` card linking to `ROUTES.qiastatDxRise`; video facade (see Technical decisions). Caption: "Meet your new lab partner, the QIAstat-Dx Rise · QIAGEN".

### 9. Responsive + QA
- 375 / 768 / 1024 / 1280, light + dark, no horizontal scroll, heading order, `npm run build` + `npm run lint`.

## Handoff notes
- Steps 1–7 done in one session (2026-11-23). Build + lint pass.
- **Illustrations are Figma SVG exports**, not hand-built CSS: `frontend/src/assets/qiastat/*.svg`, imported with `?raw` and rendered by `components/case-study/SvgIllustration` (inline, decorative). Colors were rewritten from light-mode hex to `var(--color-*)` tokens, so they follow the theme; ids are prefixed per file; coordinates rounded to 1 decimal. Export pipeline: download the node as SVG → keep only the node's own `<g>` + `<defs>` (exports include ancestor backgrounds) → map hex → token. To update an illustration, re-export the same Figma node and re-run that pipeline.
- Figma fix: tag labels on yellow pills in `199:3389` were bound to `text/primary` (unreadable in dark); rebound to `text/on-accent`.
- Shared component changes (no visual change for Ocado): `InsightCard` got `fit="fluid"` and a featured fallback that shows the icon box when there's no `lead`; `InsightCard`/`InsightText` `body` accepts `ReactNode` with `<strong>` styling; `Callout` got an `icon` override; `CaseStudyHero` `title`/`note` are optional.
- Page chunk is ~150 kB gzip (mostly outlined text paths in the SVGs). Lazy-loaded on this route only.
- Open: step 8 needs landing description copy. Step 9 still needs a pass on real devices; illustration labels are small at 375px (decorative, aria-hidden).
