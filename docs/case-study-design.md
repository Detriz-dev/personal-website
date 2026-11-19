# Case study page — design brief

Case study: **Ocado Technology documentation platform**
Copy source: `docs/ocado-technology-platform-documentation.md` (single source of truth, never invent copy. All labels inside visuals are taken from that file).

## 1. The problem this brief solves

- The NDA rules out screenshots of the real UI, so the page has no product visuals.
- The copy is long: 6 process sections, ~35 bullets.
- **Approach:** make the *process and structure* the visuals. Most bullets describe a flow, a structure, a comparison or a number, and those can be drawn. Each section gets 1–2 visual patterns, and the copy stays next to them as supporting text, not the main event.

**Rule of thumb:** a reader who only scans headings and visuals should still get the story in ~60 seconds.

## 2. Constraints from the current project

| Area | What to reuse |
|---|---|
| Tokens | `frontend/src/index.css`: semantic `--color-*` tokens, Urbanist, sizes 14–56 |
| Accent | `--color-accent-fill` (#ffbf2b) for highlights. `--color-accent-subtle` for tinted blocks. Status colours only in the data section |
| Theme | Light + dark via the `theme` prop (same as the landing page). Every new component takes `theme?: "light" \| "dark"` |
| Background | Dot grid from `LandingPage.module.css` (2px dots / 27px grid) |
| Layout | 1120px content column. Desktop breakpoint `min-width: 1024px` |
| Icons | Material Symbols Rounded (already a dependency) |
| Structure | One folder per component: `X.tsx`, `X.types.ts`, `X.module.css` |
| Section headings | `SectionHeader` (accent line + title + description) |
| Connectors | Dashed accent lines, same visual language as `SkillDiagram` / `TimeLine` |

**NDA-safe visuals:** use generic patterns only (MkDocs-like layout, search box, abstract tiles). No Ocado branding, no real tool names apart from the ones already in the copy (MkDocs, Material for MkDocs, Lunr.js, Mermaid, FullStory, Diátaxis).

## 3. Page skeleton

```
TopNav (case-study variant: back button + short description)
│
├─ Hero ─────────── title, one-line summary, NDA note, StatStrip
├─ Overview ─────── Problems (ScatterVisual + ProblemList) · Goal (GoalPair)
│
│  ┌──────────────── body: content column + sticky ProcessNav (right, desktop) ─┐
├─ 01 Discovery
├─ 02 User research
├─ 03 Information architecture
├─ 04 Interface design
├─ 05 Usability tests
├─ 06 Data analysis
│  └────────────────────────────────────────────────────────────────────────────┘
│
├─ What I learned ── PullQuotes
└─ ContactSection (reused)
```

- **TopNav (case-study variant)**: only a back button and a short description of the page. No section links, theme toggle optional.
- **ProcessNav**: the 6 phases from "My responsibilities", numbered 01–06, highlighting the current section. It replaces the bullet list in the overview and reuses the `useActiveSection` logic from `LandingPage.tsx`. It echoes the research finding that long pages with right-hand navigation work better. On mobile it becomes a horizontal scrollable chip bar under the TopNav.
- Each phase section opens with a numbered `SectionHeader`. The italic bridge text (end of Discovery) becomes a `Bridge` callout between sections.

## 4. Section-by-section map

### Hero
- Title, summary sentence ("A developer platform doesn't fall apart all at once. It accumulates.") and the NDA note as a small `Tag`-style callout, not a blockquote.
- **StatStrip**: `50+` tools · `100+` engineering teams · `~10` interviews · `3` platform experts · `4` documentation types.
- Role tags (reuse `Tag`): the 6 responsibilities.

### Overview: problems and goal
- **ScatterVisual** (illustration, no copy): ~12 doc tiles in different shapes, rotated and spread out, a few faded ("outdated"), one with a `?` ("no data"). It shows "scattered across dozens of locations" at a glance.
- **ProblemList**: the 5 problems as numbered rows, with the bold line as the headline and the second line as secondary text. Icons: `folder_off`, `visibility_off`, `report`, `alt_route`, `query_stats`.
- **GoalPair**: two cards side by side. *Developers: "One place to look, not a dozen"* / *Platform team: "Know what's actually happening"*. Over it, the line "Less time searching, more time building" in large type.
- Optional: the ScatterVisual tiles "converge" into one tile next to GoalPair (a before/after built from the same shapes).

### 01 Discovery
- **ArchaeologyStack**: 4 stacked layers like strata (history → scatter and past attempts → legacy and ownership → stakeholders and constraints), each with an icon and a short label. Expand on hover/focus to show the copy (same interaction as `QuestionDiagram`).
- **Bridge** callout: the italic text leading into research.

### 02 User research
- **QuestionCards**: 3 research questions as compact cards with a `?` icon.
- **InsightGrid**: 5 findings as cards. One is the **hero insight**:
  - **"Ctrl+F was the real navigation"**: a wide card with a keycap visual (`Ctrl` + `F`) and an annotation arrow pointing to "→ long pages + right-hand nav".
- **PersonaSplit** (for "No single taxonomy could fit everyone"): 3 columns (developers / data scientists / devops), each with a differently shaped mini tree, which shows the mental models don't match.

### 03 Information architecture
The richest section, with 4 visuals:
- **CardSortVisual**: loose cards → 3 expert avatars → grouped clusters. Label: "categories came from the inside out".
- **DiataxisQuadrant**: the signature visual of the page. A 2×2 grid with the standard axes (practical ↔ theoretical, learning ↔ working), quadrants: Tutorials · How-to guides · Reference · Explanation. Hover shows one line per quadrant.
- **BeforeAfter**: `use the API Gateway wrapper` → `expose resources outside the account`. Tool name in monospace with strikethrough, job name in the accent colour. Caption: "Jobs don't change even when the tools underneath do."
- **FlowDiagram** (governance): `Team writes` → `Technical writing review` (gate icon) → `Published`.
- Search-first decision: a short callout linking to section 04.

### 04 Interface design
- **AbstractDocsMock**: a wireframe-level, MkDocs-style 3-column layout (left nav · content · right TOC) built in CSS with grey bars, no real text. Annotation pins point to: colour tokens, typography, Mermaid diagram block, right-hand TOC. This replaces the missing screenshot.
- **TokenSwatches** (small): a generic swatch row and type scale to illustrate "defining colour tokens, adjusting typography". Use this site's own tokens, not Ocado's.
- **SearchMock**: a stylised search box with a query and 3 ranked results, with an annotation for "indexing / what appears / what ranks at the top".
- Stack tags (reuse `Tag`): MkDocs, Material for MkDocs, Lunr.js, Mermaid, Figma.

### 05 Usability tests
- **TestRows**: 3 rows, each `What we tested → What we saw → What changed`:
  - Structure: think-aloud on the "expose a resource" job → Diátaxis held up, a few gaps → gaps fixed before rollout
  - Search: small group on a working product → ranking missed real queries → weights and loop reworked
  - Categories: launched without them → informed by usage → introduced iteratively
- **RolloutTimeline** (reuse/adapt `TimeLine`): single doc pilot → search test → launch (search-first) → categories added.

### 06 Data analysis
- **ContentSegments**: an illustrative (no real numbers) bar/tile chart of the 3 page types: *daily-use* · *quick-lookup* · *forgotten (zero views)*. It's clearly labelled as illustrative.
- **SignalCards**: search behaviour (with a mini "no results" state), engagement (returning users).
- **LoopDiagram**: `Analytics (what)` → `Interviews (why)` → `Next iteration` → back to analytics. Same dashed-connector language as `SkillDiagram`. Tool tag: FullStory.

### What I learned
- **PullQuotes**: 2 large quotes at 40–56px. "Documentation is a product" and "The best decisions weren't mine".
- Then the existing `ContactSection`.

## 5. Component inventory

**Reuse as is:** `SectionHeader`, `Tag`, `Button`, `ContactSection`.
**Adapt:** `TopNav` (back-button + description variant), `TimeLine` (rollout), `Card` (problem/goal/insight cards may fit its header + list pattern).

**New, generic patterns** (reusable for future case studies, in priority order):

| # | Component | Used in |
|---|---|---|
| 1 | `CaseStudyHero` + `StatStrip` | Hero |
| 2 | `ProcessNav` | Whole body |
| 3 | `InsightCard` (+ `featured` variant) | Problems, Research |
| 4 | `BeforeAfter` | IA |
| 5 | `FlowDiagram` (linear + loop) | IA governance, Data loop |
| 6 | `PullQuote` / `Bridge` | Learned, Discovery |
| 7 | `StepRows` | Usability tests |

**New, case-specific illustrations** (built in Figma first, then exported as SVG or built in CSS):
`ScatterVisual`, `ArchaeologyStack`, `CardSortVisual`, `DiataxisQuadrant`, `AbstractDocsMock`, `SearchMock`, `ContentSegments`, `PersonaSplit`.

If time is short, cut in this order: `PersonaSplit` → `CardSortVisual` → `TokenSwatches` → `ArchaeologyStack` (fall back to `InsightCard`s).

## 6. Motion and interaction
- Light reveal on scroll (fade + 8px rise), off under `prefers-reduced-motion`.
- Diagrams use hover/focus to reveal detail (same as `QuestionDiagram`), so all copy must also be reachable by keyboard.
- No autoplaying animation loops.

## 7. Copy notes (proposals, for approval and not applied)
- Tone of voice: not needed for now.
- Typo: "what **god** looks like" → "what **good** looks like" (User research).
- Text that becomes a visual label can be shortened in the copy file so it isn't said twice. Decide per section during hi-fi.
- "My responsibilities" list → replaced by `ProcessNav` (same items).

## 8. Decisions
- **Routing**: later.
- **Entry point** (Ocado card in `ProjectSection`): later.
- **TopNav**: back button + description (see section 3).
- **Tone of voice**: not needed for now.
- **Planning**: "Case study page" phase added to `docs/planing.md`.

## 9. Next steps
1. Lo-fi in Figma: page skeleton + the 3 hardest visuals (`DiataxisQuadrant`, `AbstractDocsMock`, `ScatterVisual`).
2. Hi-fi using the existing tokens, light + dark.
3. Build (after routing is decided): generic patterns first (section 5 order), then illustrations.
