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
3. **Controversial, and selected on importance — not on ideological balance.**
   Distinct worldviews should predict different answers, and a question that
   surprises nobody gets cut. But questions are chosen for **relevance and
   strength of evidence**, never to hit an ideological quota.

   **Selecting statistics to make the bank look balanced is itself a bias**
   (William, 2026-08-13). If the most important, best-evidenced findings lean
   one direction, they go in anyway and the story tells itself. Refusing an
   important, well-sourced statistic because it "helps the wrong side," or
   adding a weak one because a category looks thin, both corrupt the selection
   in exactly the way the product exists to expose.

   **Balance is a diagnostic, not a target.** A lopsided tally is worth
   *knowing*, because it can reveal a gap in **topic coverage** — important,
   well-evidenced findings you never thought to ask about. That is a real
   blind spot worth fixing. But it is never a reason to add or cut a question
   for the direction its answer points. Measure it; do not optimize it.
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
