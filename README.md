# Priors

**Does your worldview actually predict reality?**

Priors is a worldview test disguised as a quiz game. Each question asks you to
predict a real-world statistic or relationship that people with different
worldviews expect wildly different answers to — long-term effects of cannabis
on IQ, what share of gun deaths are suicides, whether religious people are
happier, what happens to jobs after a minimum-wage hike. You reason, you
guess, and then you see what the data says — with the primary source, funding
disclosure, and the honest caveats.

It is deliberately **not** a trivia quiz. Questions are framed so that good
reasoning, not memorized facts, is what scores: rates instead of raw counts,
anchor comparisons provided, context included. If a result surprises you,
that's the product working — surprise is what updating feels like.

## Principles

- **Primary sources, always.** Every answer links to the study or dataset,
  names the funder when it matters, and states limitations plainly.
- **Balanced offense.** The question bank is curated so that left, right,
  religious, and secular readers each run into results that fight their
  priors. A question that surprises nobody gets cut.
- **Calibration over knowledge.** Scoring rewards a well-tuned model of the
  world, not a good memory.

## Run it

```
npm install
npm run dev
```

Static build: `npm run build` → `dist/` (deployable to any static host).

## Stack

Vite + React + TypeScript, no backend — stats live in localStorage. Question
bank is typed data in `src/data/questions.ts`, human-reviewed in
`QUESTIONS.md`.

## Roadmap

- v1 (now): no-login prototype, ~27 reviewed questions, local stats.
- Later: anonymous feedback aggregation, user-submitted statistic proposals,
  more categories, calibration-weighted scoring (confidence bets).
