# Question bank — review doc

**Status: AWAITING WILLIAM'S REVIEW.** Nothing launches until every row is
approved. This mirrors `src/data/questions.ts` — keep the two in sync.

> **2026-07-17 update — 67 questions.** Three design fixes from William's
> playtest are done; +16 new questions added (all web-verified that day).
>
> **Fixes applied:**
> 1. **No more deducible answers.** Every option in a question now shares one
>    form and granularity — the "Risen / Flat / Fallen 18%" tell (where the
>    lone specific option is obviously the answer) is gone everywhere. A
>    validator in the build check now *fails* any question where exactly one
>    option carries a number and the rest don't. Several answers were also
>    moved OFF the extreme by adding a plausible option past the true value
>    (church-mortality, us-emissions, rent-control, wealth-top1, lgbt-share),
>    so "always pick the most shocking option" no longer works.
> 2. **Crime decline now explains itself.** `crime-trend`'s `why` leads with
>    why crime actually fell — Levitt's four factors (police, prison, crack
>    ebbing, abortion) vs the Brennan Center's rebuttal (~5% from
>    incarceration), plus lead and security tech — and states plainly that no
>    explanation commands consensus. The perception gap is now a secondary
>    note, not the whole answer.
> 3. **Recidivism range starts lower**, 4 options: 20/40/60/80 (answer 80%).
>
> **Category counts (target ≥10 for launch):** Environment 10 ✅ · Politics 9 ·
> Justice & Crime 9 · Religion 9 · Drugs & Health 8 · Society 8 · Economics 8 ·
> **Science 6** ← thinnest. **+13 more needed to hit ≥10 everywhere.**
>
> **Balance is much better.** The new batch was deliberately weighted toward
> left- and secular-puncturing to correct the tilt flagged last round: drug
> offenders are only ~13% of state prisoners, private prisons ~8%, top 1% pay
> ~38% of income taxes, the middle class mostly moved UP, homelessness tracks
> housing not addiction, ocean plastic is 80%+ Asian rivers, prison population
> down 22%, Earth greened 10%, IQ ~70–80% heritable in adulthood; plus 37% of
> Americans are young-earth creationists and the global unaffiliated share is
> projected to *shrink* by 2050.

**67 questions** across 8 categories. Every question now also has a `why` — a
proposed *mechanism* for the trend, framed as a hypothesis (not settled fact),
shown behind a "Why might this be?" dropdown after the player answers. Where a
cause is genuinely contested, the `why` names the competing explanations
instead of picking one. 24 of the `why` blocks cite an extra source.

"Verified ✅" = the specific number was checked against the listed source via
web search (all on 2026-07-16). "Knowledge-HC" = well-known finding cited from
model knowledge with a real source link — **double-check these before launch.**

## ⚠️ Balance audit — READ THIS

The idea only works if it gores every worldview roughly equally. Current tally
of *whose intuition each question punctures* (rough, debatable labels):

- **Punctures a right-coded intuition: ~21** (immigration/crime, guns, welfare
  fraud, Muslim share, LGBT share, "best healthcare," death-penalty deterrence,
  CEO pay, wealth concentration, min-wage, abstinence-ed, teen-births, crime
  trend, marijuana, solar cost…)
- **Punctures a left-coded intuition: ~14** (nuclear safety, GMOs, organic,
  disaster deaths, air quality, extreme poverty, rifles/"assault weapons,"
  vaping, US emissions falling, rent control, plastic recycling, police-shooting
  counts, single-parent poverty, controlled pay gap)
- **Punctures a secular intuition: ~6** (religious happiness, church-mortality,
  religious giving, religious fertility, historical Jesus, scientists' belief)
- **Punctures a religious intuition: ~2** (intercessory-prayer trial,
  scientists' belief)
- **Cross-cutting / fights everyone: ~5** (gun suicides, recidivism, warming
  amount, depression prevalence, vaccine-autism)

**My read: the bank currently tilts toward puncturing conservative-coded
intuitions** (the new batch leaned that way — lots of "the fearful right-coded
guess is wrong" items). It's not egregious, but to hit the "gores everyone
equally" bar I'd add ~5–7 more left-puncturing questions next round.
**Religion is also thin (only 2 puncture religious priors)** — worth adding,
e.g., young-earth vs geological age, or global secularization trends. Tell me
which direction to push, and veto anything that reads as slanted.

## The bank

### Existing 27 (now with `why` added)

| id | Claim (answer) | Source | Verified | Punctures |
|---|---|---|---|---|
| weed-iq-twins | Teen cannabis ≠ IQ decline vs co-twin | Jackson, PNAS 2016 | ✅ | Right |
| cannabis-dependence | 8.9% of users ever dependent | Lopez-Quintero 2011 | ✅ | Right |
| gun-suicides | 62% of gun deaths are suicides | CDC via JHU | ✅ | Both |
| immigrant-crime | US-born 2×+ violent-arrest rate | Light, PNAS 2020 | ✅ | Right |
| police-unarmed | 14 unarmed Black fatally shot, 2019 | WaPo Fatal Force | ✅ | Left |
| scientists-god | 51% of scientists believe | Pew 2009 | ✅ | Sec+Rel |
| religion-happiness | Actively religious happier | Pew 2019 | ✅ | Secular |
| church-mortality | 33% lower mortality (HR 0.67) | JAMA IM 2016 | ✅ | Secular |
| single-parent-poverty | 31% vs 5.5% child poverty | Census 2024 | ✅ | Left |
| pay-gap-controlled | Controlled gap ~99¢ | Payscale 2026 | ✅ | Left |
| trans-regret | 1% surgical regret | Bustos 2021 | ✅ | Right |
| foreign-aid | ~1% of federal budget | KFF 2025 | ✅ | Right |
| recidivism | 82% rearrested in 10 yrs | BJS 2021 | ✅ | Both |
| crime-trend | Violent crime −53% since 1991 | FBI via Pew | ✅ | Right |
| disaster-deaths | Death rate down >90% | OWID/EM-DAT | ✅ | Left |
| nuclear-safety | Coal ~800× deadlier than nuclear | OWID | ✅ | Left |
| warming-amount | ~1.3°C since 1850–1900 | NASA/WMO | Knowledge-HC | Both |
| gmo-safety | NASEM: no substantiated risk | NASEM 2016 | Knowledge-HC | Left |
| organic-nutrition | No nutrient advantage | Annals IM 2012 | Knowledge-HC | Left |
| abstinence-ed | Abstinence emphasis ↔ more pregnancy | Stanger-Hall 2011 | ✅ | Right |
| min-wage | 138 hikes: low-wage jobs flat | Cengiz, QJE 2019 | ✅ | Right |
| mobility | 7.5% bottom→top quintile | Chetty, QJE 2014 | Knowledge-HC | Both/R |
| extreme-poverty | ~38% (1990) → ~9% today | World Bank/OWID | Knowledge-HC | Left |
| depression-prevalence | 8.3% past-year MDE | NSDUH/NIMH | ✅ | Both |
| abortion-timing | 1.1% at ≥21 weeks | CDC 2022 | ✅ | Right |
| teen-births | −79% since 1991 | CDC/NCHS | ✅ | Right |
| air-quality | Six pollutants −78% since 1970 | EPA | Knowledge-HC | Left |

### New 20 (added 2026-07-16)

| id | Claim (answer) | Source | Verified | Punctures |
|---|---|---|---|---|
| rifles-share | Rifles ~3% of gun murders (< knives) | FBI UCR 2019 | ✅ | Left |
| lgbt-share | ~9% LGBT (public guesses 23%) | Gallup 2025 | ✅ | Right |
| life-expectancy | US several yrs below peers, 2× spend | Peterson-KFF/OECD | ✅ | Right |
| vaping-harm | ~95% less harmful than smoking | PHE 2015 (funding noted) | ✅ | Left |
| ceo-pay | 21:1 (1965) → 344:1 (2022) | EPI 2022 (funding noted) | ✅ | Right |
| prayer-step | Intercessory prayer: no effect | Benson, Am Heart J 2006 | ✅ | Religious |
| religious-giving | Religious give/volunteer more | Brooks 2006 (funding noted) | ✅ | Secular |
| death-penalty | NAS: can't establish deterrence | NRC 2012 | ✅ | Right |
| us-emissions | US CO₂ −18% since 2007 peak | EIA/C2ES | ✅ | Left |
| clearance-rate | ~12% property crimes cleared | FBI 2022 | ✅ | Right |
| religious-fertility | Weekly attenders ~2.1 vs ~1.4 TFR | IFS/Pew 2025 | ✅ | Secular |
| muslim-share | ~1% Muslim (public guesses 17%) | Ipsos/Pew | ✅ | Right |
| vaccine-autism | No link (657k Danish kids) | Hviid, Annals IM 2019 | ✅ | Cross (antivax) |
| wealth-top1 | Top 1% own ~31% of wealth | Federal Reserve DFA 2024 | ✅ | Right |
| snap-fraud | ~1.5% trafficking (not 10.6%) | USDA/GAO | ✅ | Right |
| rent-control | SF: supply −15%, rents +5% | Diamond, AER 2019 | ✅ | Left |
| mj-teen-use | Legalization: no teen-use rise | JAMA Pediatrics | ✅ | Right |
| plastic-recycling | Only ~9% of plastic recycled | OECD 2022 | ✅ | Left |
| solar-cost | Solar/wind cheapest new power | Lazard 2024/25 | ✅ | Right |
| historical-jesus | Near-universal: Jesus existed | Ehrman 2012 | Knowledge-HC | Secular |

## Framing rules (unchanged from v1)

- Rates not totals; anchors in `context` where a lay reader lacks a reference.
- Explanations written to be **non-dismissible for the punctured side** —
  several state the "other half" of the truth (police-unarmed states the 2×
  disparity; pay-gap affirms the structural gap; life-expectancy notes US
  health prices; wealth-top1 notes debt/young-household nuance).
- Caveats stated plainly. Funding notes on JHU gun center, Payscale, EPI
  (labor-aligned), PHE (95% is an expert estimate), Brooks (conservative).
- `why` blocks are hypotheses, labeled "a proposed explanation," and name
  competing mechanisms where the cause is contested (single-parent poverty,
  police disparity, abstinence-ed, depression trend).

## Cut candidates (considered, not included)

Right-to-carry vs crime (literature genuinely contested); defensive gun uses
(estimates span 60k–2.5M); evangelical vs secular divorce rates (poor data);
per-pupil spending vs OECD (28–49% depending on method). All were too
dismissible to meet the non-dismissibility bar. On deck for a left-puncturing
rebalance round: homelessness-vs-housing-cost, free-trade/tariff price effects,
nuclear-waste deaths (~0), ocean plastic concentrated in a few rivers.
