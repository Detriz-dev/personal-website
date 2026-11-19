# Make the repo public: plan

Goal: clean up the repo so it can be made public safely.
Branch: `repo-public-cleanup` (created from `favicon-monogram`, which isn't merged into `main` yet).

> Work one step at a time, in a fresh session per step. `[ ]` = to do, `[x]` = done. Add 1–2 handoff lines under a step when you finish it.

Status at review (2026-11-19): `npm run build`, `npm run lint` and `npm audit` pass. There are no secrets in the git history.

---

## Step 1: Decisions (no code)

| # | Question | Recommendation | Answer | Done |
|---|---|---|---|---|
| D1 | **NDA:** the case study says "I can only share a single screen", but the site shows two Ocado screens (`portal-home-*` on the landing card, `docs-page-*` in the case study). Is that allowed? | Check with your NDA terms. If only one is allowed, keep `docs-page` (used in the case study) and replace the landing card image. | Two screens are allowed. Copy changed to "I can only share a few screens" (copy file + `CaseStudyPage.tsx`). | [x] |
| D2 | **Commit email:** 48 commits use your personal Gmail as the author. Is that OK in public? | It's already on the site, so it's fine. Use the GitHub noreply email for future commits. Don't rewrite history. | History stays as it is. This repo's `user.email` is now the noreply address. Still to do: turn on "Keep my email addresses private" in GitHub settings. | [x] |
| D3 | **Figma links** in the docs reveal the file key. | They go away if the case study docs are deleted (D4). Otherwise, check the Figma share settings. | Resolved by D4: the docs with the links are deleted. They're still in git history, so keep the Figma file private. | [x] |
| D4 | **Which docs to keep?** | See the table below. | Deleted all of `docs/` except this plan, plus `frontend/README.md`. Copy now lives only in the components. Updated `AGENT.md`. | [x] |

### D4: docs

| File | What it is | Recommendation |
|---|---|---|
| `case-study-design.md` | Case study design brief (finished) | **Delete** |
| `case-study-implementation-plan.md` | Agent session plan (finished, except Step 10) | **Delete.** Step 10 moves to step 6 below |
| `ocado-technology-platform-documentation.md` | Case study copy, already public on the site | **Deleted** (owner's call) |
| `site-copy.md` | Landing page copy, already public on the site | **Deleted** (owner's call) |
| `planing.md` | Roadmap | **Delete.** Move the open items ("Component building", "Release") into this file and point `AGENT.md` here |
| `technology-stack.md` | Empty | **Delete** |

Whatever you choose, update `AGENT.md` so it doesn't point to deleted files.

---

## Step 2: Remove junk files
- [x] `git rm --cached .DS_Store` and `git rm -r --cached .idea` (keeps the local copies)
- [x] Delete the unused assets: `frontend/src/assets/react.svg`, `vite.svg`, `hero.png` and `frontend/public/icons.svg`
- [x] Delete the docs agreed in D4
- [x] `npm run build` + `npm run lint` pass

## Step 3: Root `.gitignore`
- [x] Add a root `.gitignore`: `.DS_Store`, `.idea/`, `.env*`, `node_modules/`

## Step 4: README and LICENSE
- [x] Root `README.md`: what the site is, the live URL, the stack, how to run it locally, and the deploy target (Vercel)
- [x] Delete `frontend/README.md` (unedited Vite template text)
- [x] `LICENSE`: MIT for the code, with all rights reserved on the content (copy, images, portrait, case study)

## Step 5: Agent docs
- [x] `AGENT.md`: remove the `docs/tone-of-voice.md` reference (that file was deleted in `74027e5`)
- [x] `AGENT.md`: update the Docs list and the "Current phase" line to match D4

## Step 5b: Stale code comments
- [x] About 30 comments in `frontend/src` point to the deleted `docs/site-copy.md` and `docs/ocado-technology-platform-documentation.md`, or to old plan decisions ("D5", "D6: Figma text wins"). Remove those references and keep any useful notes. Comments only, no code changes.

## Step 6: Site fixes (own branch, it changes the site)
- [x] Real GitHub and LinkedIn URLs in place of `#` (`LandingPage.tsx:42-43,63-64`, `CaseStudyPage.tsx:108`). Shared in `src/links.ts`; nav icons now open in a new tab like the footer ones
- [ ] Apply D1 if a screenshot has to go
- [ ] Optional: folder refactor (old case study Step 10: move case study components to `components/case-study/`)

## Step 7: Optional polish
- [ ] `package.json`: real `name` and `version`
- [ ] `index.html`: meta description and Open Graph tags (title, description, image)

## Step 8: Go public
- [ ] Open items from the old `planing.md`: "Component building" (unchecked) and "Release"
- [ ] Merge everything into `main`
- [ ] GitHub repo settings: description, website URL, topics
- [ ] Settings → Danger Zone → Change visibility → Public
- [ ] Turn on secret scanning and Dependabot alerts

---

## Handoff notes
