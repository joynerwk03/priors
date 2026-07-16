# Question bank — review doc

**Status: AWAITING WILLIAM'S REVIEW.** Nothing launches until every row is
approved. This mirrors `src/data/questions.ts` — keep the two in sync.

"Verified" = the specific number was checked against the listed source on
2026-07-16 via web search. "Knowledge-HC" = high-confidence well-known finding
cited from model knowledge with a real source link — **double-check these
before launch.**

## Balance audit

Whose priors each question fights (rough): **L** = left/progressive,
**R** = right/conservative, **Rel** = religious, **Sec** = secular,
**Both** = everyone's vibes.

Count: fights-L ≈ 11, fights-R ≈ 11, fights-Sec ≈ 3, fights-Rel ≈ 1 (scientists-god
cuts both ways), Both ≈ 4. Reasonably balanced; add a Rel-fighting question or
two over time (e.g. evangelical divorce rates — sourcing was too messy for v1).

## The bank

| id | Claim (answer) | Source | Verified | Fights |
|---|---|---|---|---|
| weed-iq-twins | Teen cannabis use ≠ IQ decline vs co-twin; no dose-response | Jackson et al., PNAS 2016 | ✅ 2026-07-16 | R |
| cannabis-dependence | 8.9% of cannabis users ever dependent (alcohol 22.7%, nicotine 67.5%) | Lopez-Quintero 2011, NESARC | ✅ 2026-07-16 | R |
| gun-suicides | 62% of 2024 US gun deaths were suicides; majority every year since 1995 | CDC via JHU (funding noted) | ✅ 2026-07-16 | Both |
| immigrant-crime | US-born 2×+ violent-crime arrest rate vs undocumented (TX 2012–18) | Light et al., PNAS 2020 | ✅ 2026-07-16 | R |
| police-unarmed | 14 unarmed Black people fatally shot by police in 2019 (~20-25/yr avg); 2× population-adjusted rate vs white also true | WaPo Fatal Force | ✅ 2026-07-16 | L |
| scientists-god | 51% of AAAS scientists believe in God/higher power (33% God) | Pew 2009 | ✅ 2026-07-16 | Sec+Rel |
| religion-happiness | Actively religious 36% "very happy" vs 25% others; no health link | Pew 2019, 26 countries | ✅ 2026-07-16 | Sec |
| church-mortality | >1×/week attendance → 33% lower all-cause mortality (HR 0.67), n=74,534, 16 yrs | Li/VanderWeele, JAMA IM 2016 | ✅ 2026-07-16 (fetched abstract) | Sec |
| single-parent-poverty | Child poverty: 31.3% single-mother vs 5.5% married (2024) | Census CPS / StL Fed | ✅ 2026-07-16 | L |
| pay-gap-controlled | Controlled gap 99¢ vs uncontrolled 82¢; mothers 74¢ | Payscale 2026 (funding noted) | ✅ 2026-07-16 | L |
| trans-regret | 1% pooled surgical regret (27 studies, n=7,928); follow-up caveat stated | Bustos 2021, PRS-GO | ✅ 2026-07-16 | R |
| foreign-aid | ~1% of federal budget; avg American guesses 26% | KFF 2025 | ✅ 2026-07-16 | R |
| recidivism | 82% rearrested within 10 years (66% in 3) | BJS 2021 | ✅ 2026-07-16 | Both |
| crime-trend | Violent crime −53% since 1991; ≥60% say it's rising in 23/27 Gallup polls | FBI via Pew | ✅ 2026-07-16 | R |
| disaster-deaths | Disaster death rate down >90% since 1920s | OWID/EM-DAT | ✅ 2026-07-16 | L |
| nuclear-safety | Coal ~25 deaths/TWh vs nuclear ~0.03 (~800×) | OWID | ✅ 2026-07-16 | L |
| warming-amount | ~1.3°C above 1850–1900 (2024 ~1.5°C) | NASA/WMO | Knowledge-HC | Both |
| gmo-safety | NASEM 2016: no substantiated evidence of GMO health risk | NASEM | Knowledge-HC | L |
| organic-nutrition | Stanford 2012: no nutrient advantage; −30% pesticide-residue risk | Smith-Spangler, Annals IM | Knowledge-HC | L |
| abstinence-ed | Abstinence emphasis ↔ HIGHER teen pregnancy after controls | Stanger-Hall & Hall, PLoS ONE 2011 | ✅ 2026-07-16 | R |
| min-wage | 138 min-wage hikes: low-wage job count essentially unchanged | Cengiz et al., QJE 2019 | ✅ 2026-07-16 | R |
| mobility | 7.5% chance bottom-quintile child reaches top quintile | Chetty et al., QJE 2014 | Knowledge-HC | Both/R |
| extreme-poverty | Extreme poverty ~38% (1990) → ~9% today | World Bank/OWID | Knowledge-HC | L (pessimism) |
| depression-prevalence | 8.3% of US adults had past-year major depressive episode (2021) | NSDUH/NIMH | ✅ 2026-07-16 | Both |
| abortion-timing | 1.1% of US abortions at ≥21 weeks; 92.8% ≤13 weeks | CDC Surveillance 2022 | ✅ 2026-07-16 | R |
| teen-births | Teen birth rate −79% since 1991 (61.8 → 13.1 per 1,000) | CDC/NCHS | ✅ 2026-07-16 | R ("kids these days") |
| air-quality | Six criteria pollutants −78% since 1970, GDP ~4× | EPA | Knowledge-HC | L |

## Framing rules used (from the original idea + CLAUDE.md invariants)

- Rates, not totals; anchors provided in `context` where a lay reader lacks a
  reference point.
- Explanations written to be **non-dismissible for the gored side**: several
  explicitly state the "other half" of the truth (e.g. police-unarmed also
  states the 2× population-adjusted disparity; pay-gap states the structural
  gap is real).
- Caveats stated plainly (correlation, contested classifications, follow-up
  loss). Funding notes on JHU gun center and Payscale.

## Cut candidates considered and why they were cut

- Right-to-carry laws vs crime — literature genuinely contested (Lott vs
  Donohue); no non-dismissible answer exists.
- Defensive gun uses per year — estimates span 60k–2.5M; same problem.
- Evangelical vs secular divorce rates — data quality poor (Barna
  self-report vs attendance effects).
- Prohibition & alcohol consumption — real decline initially but rebound
  disputes make the "gotcha" dismissible.
- US per-pupil spending vs OECD — ranges 28–49% depending on method; too
  slippery for a clean multiple choice.
