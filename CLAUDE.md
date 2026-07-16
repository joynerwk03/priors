# Priors

A worldview-testing quiz game. Thesis: a worldview is only as good as its
predictions, so it can be tested — players predict real-world statistics on
highly controversial topics, then see what the data says, with sources.

Registry entry: `~/mission-control/projects/priors.md` (spirit, checkpoints).

## Invariants (do not break)

1. **Worldview test, not trivia.** Every question must be answerable by
   reasoning from a model of the world. Frame stats to reduce needed context:
   rates per capita (not raw counts), anchor comparisons in `context`
   (e.g. alcohol dependence rate when asking about cannabis).
2. **Non-dismissible.** Every question carries a primary source with URL,
   funding disclosure when relevant (`source.funding`), and honest caveats
   (`caveat`) — stating a limitation is a feature, not a weakness.
3. **Controversial and balanced.** Distinct worldviews should predict
   different answers. Across the bank, left/right/religious/secular each get
   gored roughly equally. A question that surprises nobody gets cut.
4. **Nothing ships without William's review.** New/edited questions go through
   `QUESTIONS.md` (claim, source, verification status). Deploys are
   William-approved only.
5. **No backend in v1.** State is localStorage; feedback is mailto. Keep it
   static-hostable (relative base is set in vite config).

## Commands

- `npm run dev` — dev server
- `npm run build` — typecheck + production build (must pass before commit)
- `npm run preview` — serve the production build

## Structure

- `src/data/questions.ts` — the question bank (typed; see `src/types.ts`)
- `QUESTIONS.md` — human review doc mirroring the bank + verification status
- `src/lib/` — round sampling, localStorage stats
- `src/screens/` — Home, Quiz, Results, About

## Definition of done (v1)

Playable round of 10 with reveal (explanation + source + caveat + thumbs),
results with per-category breakdown and share text, lifetime local stats,
about page with methodology and feedback/submit links. Clean build, works from
`file://`-less static hosting, mobile-friendly, light + dark.
