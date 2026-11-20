# Intro animation (D2) — implementation plan

One step per session. Read only the step's **Context** files and Figma nodes. At the end of a step: tick its box, fill **Handoff notes**.

## Progress
- [x] 0. Branch
- [x] 1. Intro gate (when it plays)
- [x] 2. Headline + divider
- [x] 3. Diagram (circle, core, questions)
- [x] 4. Header moves up + content arrives
- [x] 5. Responsive + QA

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
- Below 1024px (stacked layout, divider hidden): **no centring/shift**. Content arrives top to bottom: headline (0–1300) → subheadline 1300 → circle + core 1700 → Why / What / How 2200 / 2500 / 2800 → buttons 3100. The `--intro-shift` rule only applies inside `@media (min-width: 1024px)`.
- Check: 375 / 768 / 1024 / 1280, light + dark, reduced motion on (no intro, page shows immediately), reload in the same tab (no intro), open with `#projects` (no intro), no horizontal scroll.
- `npm run build` and `npm run lint` pass.

## Handoff notes
_(fill in after each step)_

**Steps 0 + 1 (2026-11-20)**
- Branch `intro-animation` was created from `34-ui-improvements`, not `main`. `fba03bc` (case study work + this plan) isn't on `main` yet, so branching from `main` would have dropped this plan file.
- `hooks/useIntro.ts`: the state initialiser checks `!location.hash && !sessionStorage.introPlayed`. An effect sets the flag. If storage is blocked, the intro plays.
- `HeroSection` and `QuestionDiagram` take `intro?: boolean` → `styles.intro` on the root. The `.intro` class isn't defined in either CSS module yet (`styles.intro` is undefined and filtered out). Add `.intro` rules in steps 2–3.
- `LandingPage` passes `intro={useIntro()}` to the hero.
- Build + lint pass. No visual change.

**Step 2 (2026-11-20)**
- Headline: `.lead` (the accent span, "Product value") plus `.word` spans with `--i` 0–4 ("right"/"questions." sit inside `<strong>`). `textContent` is unchanged.
- CSS lives in `HeroSection.module.css` under `@media (prefers-reduced-motion: no-preference)`. Spans become `inline-block` only under `.intro` (translate needs a box). Line layout and h1 height are unchanged.
- Keyframes are `intro-rise` (opacity + `translate` 12px) and `intro-draw` (clip-path). `.intro .divider` lists `intro-draw` and `flow`.
- CSS modules hash keyframe names (e.g. `_intro-rise_7a79o_1`), so in devtools filter `document.getAnimations()` with `/intro/`, not `startsWith`.
- Checked at 1280×800, dark only: frame 03 at ~1000 ms, divider partly drawn at 1600 ms, final state OK. A reload in the same tab skips the intro.
- Subheadline, buttons and diagram are still visible from the start. Steps 3–4 hide them.
- Step 4: the headline words already use `translate`. Put `--intro-shift` on the `.headline` element itself (not on the words) to avoid a conflict.

**Step 3 (2026-11-20)**
- `QuestionDiagram.module.css` uses its own `intro-pop` (opacity + `scale` 0.9→1) and `intro-rise` (opacity + `translate` 12px) keyframes, under `@media (prefers-reduced-motion: no-preference)`.
- `.intro .circle` lists `intro-pop` and `spin`. Spin uses `transform`, so it doesn't conflict with `scale`.
- `fill-mode: both` is fine. Hover only changes `.descriptionWrap` and the border/shadow, never the callout's opacity. Checked: "Why build?" expands after the intro.
- Checked at 1280, dark: frame 05 at 2150 ms, Why/What order at 2850 ms, end state OK.
- Step 4: the diagram root (`.diagram` in HeroSection) has no `translate` yet. Put `--intro-shift` on that wrapper. The children already animate `scale`/`translate` on themselves, so there's no conflict.
- Testing tip: a page load sets `introPlayed`, even a blank first load while Vite is starting. Clear it before reloading: `sessionStorage.removeItem("introPlayed")`.

**Step 4 (2026-11-20)**
- `HeroSection.tsx` uses `useLayoutEffect` with refs on the section and the h1. It sets `--intro-shift` = section centre − headline centre on the section, e.g. `117px` at 1280×781.
- The effect clears the variable before measuring and in its cleanup. Without that, StrictMode's second run measured the already-shifted headline and set `0px`.
- `intro-shift` (`translate: 0 var(--intro-shift, 0px)` → 0, 500ms ease-in-out, 3300ms) runs on `.headline`, `.divider` (third animation in its list) and `.diagram` (the QuestionDiagram root). It sits in its own `@media (prefers-reduced-motion: no-preference) and (min-width: 1024px)` block, so below 1024 there's no shift. That part of step 5 is already done.
- `.subheadline` and `.actions` use `intro-rise-16` (16px, 500ms ease-out, 3600ms). This runs at all widths.
- Checked at 1280, dark: starts centred, centred at 3250 ms, moving with the content fading in at 3650 ms. The end state matches the hero: every intro animation ends at opacity 1, translate 0, scale 1. The divider ends at `inset(0 0% 0 0)`, which doesn't clip.
- For step 5: on mobile, the order is headline → subheadline → diagram → buttons. The subheadline fades in at 3600 ms, after the diagram (2400–3300 ms). Check if that order reads well, or re-time it below 1024. Light theme and other widths aren't checked yet.
- Known edge: the shift is measured once. If the window is resized mid-intro (under 4 s) or the font loads late, the start position may be slightly off. The end state is unaffected.

**Step 5 (2026-11-20)**
- Mobile re-timed (user's choice): top to bottom instead of the desktop order. It's done with `animation-delay` overrides in `@media (prefers-reduced-motion: no-preference) and (max-width: 1023px)` blocks in both CSS modules. `.intro .circle` overrides both delays (`1700ms, 0s`) so `spin` is unaffected. Desktop timing is unchanged.
- Checked: 375 / 768 use the mobile delays and 1024 / 1280 the desktop ones (read from `getAnimations()`). Frames checked at 375 + 1280 in dark and light. `#projects` and a same-tab reload skip the intro. The first load plays it.
- Reduced motion: not emulated in the browser. Every `.intro` rule is inside `prefers-reduced-motion: no-preference`, so the hero renders as the static version.
- No horizontal scroll at 375 / 768 / 1280. **Pre-existing, not from the intro:** at exactly 1024 the page is 1113px wide. The diagram overflows (680 + 380 + padding), with or without `.intro`. Separate task.
- Testing tip: the Chrome window couldn't be resized, so widths were tested in a same-origin `<iframe>` inside the dev page, with `getAnimations()` paused and seeked to sample times.
- Build + lint pass.
