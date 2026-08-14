# Question bank — review doc

**Status (2026-08-13): LAUNCHED** at joynerwk03.github.io/priors. Bank approved
by William 2026-07-17; all 80 rows verified as of 2026-08-13 (see the
verification log). This mirrors `src/data/questions.ts` — keep the two in sync.

**Two edits still want William's sign-off**: `warming-amount` and
`extreme-poverty` had their answer *options* changed during verification
because the underlying figures moved. Details in the verification log.

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

**80 questions** across 8 categories, 10 each. Every question also has a `why` —
a proposed *mechanism* for the trend, framed as a hypothesis (not settled fact),
shown behind a "Why might this be?" dropdown after the player answers. Where a
cause is genuinely contested, the `why` names the competing explanations
instead of picking one.

"Verified ✅" = the specific number was checked against the listed source via
web search (2026-07-16, or 2026-08-13 for rows marked `✅ 8/13`).
**Every row in the bank is now verified.** The former "Knowledge-HC" marker
(well-known finding cited from model knowledge, never checked) has been retired
— see the verification log below for what those checks turned up.

## ⚠️ Balance: a diagnostic, not a target

**The old balance-audit section that lived here was deleted 2026-08-13.** It
recommended adding "~5–7 more left-puncturing questions" and more
religion-puncturing ones to hit a "gores everyone equally" bar. That advice is
now considered wrong, and invariant 3 in `CLAUDE.md` was rewritten to say so:

> Selecting statistics for ideological balance is a bias. Questions are chosen
> for relevance and strength of evidence, never to hit an ideological quota.

The current tally lives in the balance-audit addendum at the bottom of this
file, along with the rule for how to read it. Short version: measure it, never
optimize it, and never add a weak question to even a column.

## Verification log — 2026-08-13

The 7 rows previously marked "Knowledge-HC" (cited from model knowledge, never
checked) were verified against their sources. **Three were stale and one was
imprecise; all four are fixed in `src/data/questions.ts`.**

| id | Verdict | Action |
|---|---|---|
| `gmo-safety` | ✅ Confirmed | NASEM 2016 examined ~900 publications and found no persuasive evidence of adverse health effects. No change. |
| `mobility` | ✅ Confirmed | Chetty et al. 2014: Charlotte 4.4%, San Jose 12.9% confirmed directly. No change. |
| `historical-jesus` | ✅ Stands | Qualitative consensus claim, not a number. No change. |
| `organic-nutrition` | ⚠️ Imprecise | 237 studies and "no nutritional superiority" confirmed. But the paper reports a **risk difference of ~30 percentage points** for detectable pesticide residues, not a "30% lower risk" — a distinction the popular retelling loses. Explanation reworded to state it correctly and name the common error. |
| `air-quality` | ❌ Stale | EPA now reports **79% (1970–2024)**, not 78% (1970–2020). Updated. Answer option unchanged ("about three-quarters" still correct). |
| `warming-amount` | ❌ Stale | WMO puts 2025 at **1.44°C** above 1850–1900 and the 2023–2025 average at **1.48°C**; the past 11 years are the 11 warmest. "About 1.3°C" understated it. **Answer option changed from 1.3°C to 1.4°C** and the explanation rewritten. ⚠️ This edits an approved question's options — William should confirm. |
| `extreme-poverty` | ❌ Superseded | The World Bank **replaced the $2.15 (2017 PPP) line with $3.00 (2021 PPP) in June 2025.** The question's framing was built on the retired line. Updated to the current line: 1990 ≈ 36% (was 38%), today ≈ 10% (2025: 808 million, down from 2.31 billion in 1990). **Answer option changed from "About 9%" to "About 10%."** Caveat now explains the line change so older sources citing "9% under $2.15" still reconcile. ⚠️ William should confirm. |

**Why this mattered:** the product's central promise is non-dismissibility. A
reader who checks one claim and finds a retired poverty line or a two-degree-old
climate figure has grounds to dismiss the whole bank, which is exactly the
failure mode the design is built to avoid. Time-sensitive numbers need a recheck
cadence, not a one-time verification.

**Recheck candidates (numbers that move):** `warming-amount`, `extreme-poverty`,
`air-quality`, `us-emissions`, `crime-trend`, `teen-births`, `lgbt-share`,
`life-expectancy`, `prison-decline`, `solar cost`, `muslim-share`.

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
| warming-amount | ~1.3°C since 1850–1900 | NASA/WMO | ✅ 8/13 | Both |
| gmo-safety | NASEM: no substantiated risk | NASEM 2016 | ✅ 8/13 | Left |
| organic-nutrition | No nutrient advantage | Annals IM 2012 | ✅ 8/13 | Left |
| abstinence-ed | Abstinence emphasis ↔ more pregnancy | Stanger-Hall 2011 | ✅ | Right |
| min-wage | 138 hikes: low-wage jobs flat | Cengiz, QJE 2019 | ✅ | Right |
| mobility | 7.5% bottom→top quintile | Chetty, QJE 2014 | ✅ 8/13 | Both/R |
| extreme-poverty | ~38% (1990) → ~9% today | World Bank/OWID | ✅ 8/13 | Left |
| depression-prevalence | 8.3% past-year MDE | NSDUH/NIMH | ✅ | Both |
| abortion-timing | 1.1% at ≥21 weeks | CDC 2022 | ✅ | Right |
| teen-births | −79% since 1991 | CDC/NCHS | ✅ | Right |
| air-quality | Six pollutants −78% since 1970 | EPA | ✅ 8/13 | Left |

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
| historical-jesus | Near-universal: Jesus existed | Ehrman 2012 | ✅ 8/13 | Secular |

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

---

# Balance audit — 2026-08-13 (Claude's pass, AWAITING WILLIAM'S REVIEW)

The table above documents **47** questions. `src/data/questions.ts` ships
**80**. These are the **33 rows that were never added**, classified by which
prior each one punctures, so invariant 3 ("balanced offense") can actually be
checked against what is live.

**These classifications are Claude's judgment, not William's.** Several are
genuinely arguable and are flagged. Nothing here is approved until reviewed.

| id | Category | Claim (answer) | Punctures |
|---|---|---|---|
| alcohol-no-safe-level | Drugs & Health | Risk-minimizing alcohol intake is zero | Both |
| alcohol-vs-drugs | Drugs & Health | Alcohol kills more than all illegal drugs combined | Right |
| antidepressants | Drugs & Health | All 21 antidepressants beat placebo | Right |
| climate-consensus | Science | >97% of climate scientists agree warming is human-caused | Right |
| creationism-share | Religion | 37% of Americans are young-earth creationists | Secular |
| deterrence-certainty | Justice & Crime | Certainty of capture deters; sentence length barely does | Right |
| divorce-rate | Society | 42% of first marriages end in divorce, not 50%, and falling | Both |
| ev-lifecycle | Environment | EVs repay their battery emissions debt in ~2 years | Right |
| foreign-born-share | Society | 14% foreign-born is near, not above, the 1890 record | Right |
| global-greening | Environment | Earth's green leaf area rose ~10% since 2000 | Left |
| global-religiosity | Religion | The unaffiliated share of the world is projected to shrink | Secular |
| homelessness-housing | Society | Housing cost, not addiction, explains variation between cities | Right |
| interracial-marriage | Society | Approval went 4% → 94% in one lifetime | Left |
| iq-heritability | Science | IQ is ~70–80% heritable in adulthood | Left |
| learning-styles | Science | Matching teaching to "learning style" does nothing | Both |
| manufacturing-output | Economics | US manufacturing output rose ~80%; automation, not trade | Both |
| mass-shootings-share | Politics | Mass shootings are 1–3% of gun deaths | Left |
| middle-class-upward | Economics | The shrinking middle mostly moved UP | Left |
| multivitamins | Drugs & Health | Multivitamins cut mortality by zero | Both |
| murder-stranger | Justice & Crime | ~10% of murder victims are killed by strangers | Right |
| nuclear-waste | Science | Zero Americans killed by commercial nuclear waste | Left |
| ocean-plastic-rivers | Environment | 80%+ of riverine ocean plastic comes from Asian rivers | Left |
| perception-gap | Politics | Both parties roughly triple how extreme they think the other is | Both |
| placebo-objective | Science | Placebos move subjective symptoms, not objective outcomes | Both |
| prison-decline | Justice & Crime | US prison population has fallen ~22% since 2009 | Left |
| private-prisons | Justice & Crime | Only ~8% of prisoners are in private prisons | Left |
| race-genetics | Science | ~85% of human genetic variation is within populations | Right |
| religious-knowledge | Religion | Atheists and agnostics score highest on religious knowledge | Religious |
| replication-crisis | Science | ~36% of psychology experiments replicated | Secular |
| screen-time-teens | Society | The phones-caused-it evidence is small and contested | Both |
| tariffs | Economics | US firms and consumers paid the China tariffs, not China | Right |
| top1-tax-share | Politics | The top 1% pay ~38% of federal income tax | Left |
| wrongful-conviction | Justice & Crime | ~4% of death-sentenced people are likely innocent | Right |

⚠️ **Arguable calls, William should overrule freely:**
- `antidepressants` — "it's all placebo" skepticism is alt-health coded, which
  cuts across left and right. Could be Both.
- `placebo-objective` — same problem in reverse; filed Both, could be Left.
- `replication-crisis` — filed Secular because it punctures deference to
  peer-reviewed science, but that deference is not purely a secular trait.

## Full-bank tally (all 80)

| Punctures | Count |
|---|---|
| Right | 30 |
| Left | 25 |
| Both / cross-cutting | 14 |
| Secular | 8 (+1 Sec+Rel) |
| Religious | 2 (+1 Sec+Rel) |

**Left/right:** 20:14 (1.43:1) at 47 questions, 30:25 (1.20:1) at 80.
**Religious/secular:** 9 secular-puncturing against 3 religious-puncturing.

## ⚠️ How to read these numbers (William, 2026-08-13)

**These are a diagnostic, not a scorecard, and the 9:3 is not automatically a
defect.** Invariant 3 was rewritten after this audit because the original
wording ("gored roughly equally") mandated a bias:

> The goal isn't to balance question types by ideological category. It's to
> present the most relevant, provable statistics and let the story tell
> itself. If the important statistics have left-leaning implications, we
> shouldn't refuse to include them because of the bias. Selecting statistics
> for ideological balance is a bias.

So **do not close the 9:3 gap by adding religion-puncturing questions to hit a
quota.** A weak question added to balance a column is worse than an
unbalanced column, and it corrupts selection in precisely the way this product
exists to expose.

**The one legitimate use of this tally** is as a prompt to check *topic
coverage*: is there an important, well-evidenced finding that would surprise a
believer which simply never got considered? If yes, it belongs in the bank
because it is important, and the ratio moves as a side effect. If no, then 9:3
is the honest output of an honest process and it stays 9:3.

The number worth watching is not the ratio. It is whether any question in the
bank is there for a reason other than being important and true.
