# Intro animation (D2) — implementation plan

One step per session. Read only the step's **Context** files and Figma nodes. At the end of a step: tick its box, fill **Handoff notes**.

## Progress
- [ ] 0. Branch
- [ ] 1. Intro gate (when it plays)
- [ ] 2. Headline + divider
- [ ] 3. Diagram (circle, core, questions)
- [ ] 4. Header moves up + content arrives
- [ ] 5. Responsive + QA

## Design reference
Figma file `dMHyJ85uRXmnEONUYGg5jT`, page **Loader**.
- Storyboard section: `160:3298` ("D2 · Intro animation — centred headline (dark)")
- Frames 01–10: `160:3301`, `160:3331`, `160:3361`, `160:3391`, `160:3421`, `160:3451`, `160:3481`, `160:3511`, `160:3541`, `160:3571`
- Final state = existing hero (dark `61:45958`, light `61:45959`). No visual changes to the final state.

Screenshot single frames only — never fetch metadata for the whole page (very large).

## Timeline (desktop ≥1024px)
| Step | What | Start | Duration | Motion |
|---|---|---|---|---|
| 02 | "Product value" | 0 | 500 | opacity 0→1, translateY 12px→0, ease-out |
| 03 | Remaining headline words | 500 | 400 each, 80 ms stagger | same as above |
| 04 | Divider draws | 1300 | 600 | `clip-path: inset(0 100% 0 0)` → `inset(0)`, ease-out |
| 05 | Circle + "Feature" core | 1900 | 500 | opacity 0→1, scale 0.9→1 |
| 06 | Why build? | 2400 | 300 | opacity 0→1, translateY 12px→0 |
| 07 | What to build? | 2700 | 300 | same |
| 08 | How to build? | 3000 | 300 | same |
| 09 | Header block (headline + divider + diagram) moves up | 3300 | 500 | translateY(var(--intro-shift))→0, ease-in-out |
| 10 | Subheadline + buttons | 3600 | 500 | opacity 0→1, translateY 16px→0, ease-out |

Steps 02–08: the headline is centred vertically in the viewport. Step 09 brings it to its normal position.

## Technical decisions
- **CSS only for the motion.** `@keyframes` + `animation-delay` + `animation-fill-mode: both`. No new dependency.
- **Opt-in class.** Everything is scoped under an `.intro` class on the hero, inside `@media (prefers-reduced-motion: no-preference)`. Without the class the hero renders exactly as today.
- **No flash.** Initial (hidden) states come from `fill-mode: both`, so the first paint is already hidden. The gate must be decided synchronously (in `useState` initialiser), not in an effect.
- **Composing with existing animations.** The circle already spins with `transform`, and the divider already flows with `background-position`. Use the individual `scale` / `translate` CSS properties and `clip-path` for intro motion, so nothing overrides the existing `transform`/background animations.
- **Copy unchanged.** The headline is split into word `<span>`s for the stagger, keeping the existing `accent` span and `<strong>`. Text content and `<h1>` stay identical.
- **Below the fold.** The hero is `100svh` and TopNav is hidden until scroll, so the sections below need no intro animation.

## Steps

### 0. Branch
Branch `34-ui-improvements` has uncommitted changes. The user decides whether to commit or stash them. Then create a new branch from `main` (e.g. `intro-animation`).

### 1. Intro gate (when it plays)
**Context:** `frontend/src/pages/LandingPage/LandingPage.tsx`, `frontend/src/components/HeroSection/HeroSection.tsx`, `HeroSection.types.ts`, `frontend/src/hooks/` (pattern only).
- New hook `frontend/src/hooks/useIntro.ts`: returns `true` only if
  - not already played this session (`sessionStorage` key `introPlayed`, wrapped in try/catch; storage blocked → play), and
  - there is no `location.hash` (deep links skip the intro).
  - Sets the flag once played. Decide in the `useState` initialiser so the first render is correct.
- `HeroSection`: new prop `intro?: boolean` → adds `styles.intro` to the section. Pass `intro` down to `QuestionDiagram` (add the same prop there).
- `LandingPage`: `const intro = useIntro();` → `<HeroSection intro={intro} … />`.
- Done when: no visual change yet, build + lint pass.

### 2. Headline + divider
**Context:** `HeroSection.tsx`, `HeroSection.module.css`. Figma frames `160:3331`, `160:3361`, `160:3391`.
- Split the headline into word spans with `style={{ "--i": n }}` for the stagger (step 03 delays = 500 ms + i × 80 ms). "Product value" animates as one unit (step 02).
- Divider: draw-in with `clip-path`, delay 1300 ms. Keep the existing `flow` animation (list both animations).
- Done when: steps 02–04 play at 1280px, dark + light.

### 3. Diagram (circle, core, questions)
**Context:** `QuestionDiagram.tsx`, `QuestionDiagram.module.css`. Figma frames `160:3421`–`160:3511`.
- `.intro .circle`, `.intro .core`: fade + `scale` 0.9→1 at 1900 ms. Circle keeps `spin`.
- `.intro .why` / `.what` / `.how`: fade + `translate` at 2400 / 2700 / 3000 ms.
- Check that the hover expand on questions still works after the intro (`fill-mode: both` must not lock opacity — use `backwards` if it does).
- Done when: steps 05–08 play; hover works afterwards.

### 4. Header moves up + content arrives
**Context:** `HeroSection.tsx`, `HeroSection.module.css`. Figma frames `160:3511`, `160:3541`, `160:3571`.
- Measure the shift in `useLayoutEffect` (only when `intro`): `shift = sectionCenterY − headlineCenterY` (final layout). Set it as `--intro-shift` on the section. Fallback `0px`.
- `.intro .headline`, `.intro .divider`, `.intro .diagram`: start at `translate: 0 var(--intro-shift)`, move to `0` at 3300 ms over 500 ms (ease-in-out). They also keep their own fade-in animations: put the shift on `translate` and the fade-in on `opacity` so they don't conflict, or combine them into one keyframe per element.
- `.intro .subheadline`, `.intro .actions`: fade up at 3600 ms.
- Done when: the full sequence matches frames 01–10 at 1280×800; the final state is pixel-identical to the current hero.

### 5. Responsive + QA
**Context:** `HeroSection.module.css`, `QuestionDiagram.module.css`.
- Below 1024px (stacked layout, divider hidden): **no centring/shift**. Same order: headline → diagram → subheadline + buttons fade in. The `--intro-shift` rule only applies inside `@media (min-width: 1024px)`.
- Check: 375 / 768 / 1024 / 1280, light + dark, reduced motion on (no intro, page shows immediately), reload in the same tab (no intro), open with `#projects` (no intro), no horizontal scroll.
- `npm run build` and `npm run lint` pass.

## Handoff notes
_(fill in after each step)_
