import type { Question } from '../types';

/**
 * The question bank. Every entry follows the invariants in CLAUDE.md:
 * reasoning-answerable, primary-sourced, honestly caveated, and controversial
 * enough that distinct worldviews predict different answers.
 *
 * `why` is an OPTIONAL, opt-in deeper dive: a proposed mechanism for the
 * trend, framed as a hypothesis (not settled fact). Where the cause is
 * genuinely contested, it names the competing explanations. Hidden behind a
 * dropdown so it never contaminates the player's raw prediction.
 *
 * Human review doc: QUESTIONS.md (keep in sync when editing).
 */
export const QUESTIONS: Question[] = [
  {
    id: 'weed-iq-twins',
    category: 'Drugs & Health',
    prompt:
      'Two twins grow up in the same home. One uses marijuana as a teenager; the other never does. By late adolescence, how do their IQ changes compare?',
    context:
      'Two longitudinal twin studies (3,066 participants) tracked IQ from before adolescence into early adulthood.',
    options: [
      'The marijuana-using twin declines significantly more',
      'No significant difference between the twins',
      'A gap appears, but only with frequent use',
    ],
    answerIndex: 1,
    explanation:
      'Marijuana users did score lower than non-users overall — but their abstinent co-twins declined just as much, and heavier use did not predict more decline. The IQ gap tracks family background, not the drug itself.',
    caveat:
      'This is specifically about teen use and IQ. It says nothing about psychosis risk, dependence, or other harms.',
    why: {
      body: 'The likely mechanism is confounding: the same family environment and genetics that make a teen more likely to try marijuana also predict a lower academic trajectory. Because identical twins share both, comparing one twin to the other cancels out that hidden common cause — and the apparent "weed lowers IQ" effect disappears.',
    },
    source: {
      name: 'PNAS',
      detail: 'Jackson et al., 2016 — two longitudinal twin samples, n=3,066',
      url: 'https://www.pnas.org/doi/10.1073/pnas.1516648113',
    },
  },
  {
    id: 'cannabis-dependence',
    category: 'Drugs & Health',
    prompt: 'Of everyone who ever tries cannabis, what share ever becomes dependent on it?',
    context:
      'Anchors from the same survey: about 23% of people who ever drink alcohol become dependent on it; for nicotine it is about 68%.',
    options: ['About 9%', 'About 22%', 'About 34%', 'About 50%'],
    answerIndex: 0,
    explanation:
      'Cumulative probability of dependence: nicotine 67.5%, alcohol 22.7%, cocaine 20.9%, cannabis 8.9% (US national survey, ~43,000 adults). Cannabis dependence is real — but it is the least likely of the four, at less than half the rate of alcohol.',
    why: {
      body: "One proposed explanation is pharmacological: nicotine's fast, frequent reinforcement makes it exceptionally habit-forming, while cannabis acts on the cannabinoid system with slower, less compulsive reinforcement for most users. Caveat on the caveat: today's higher-potency products may raise dependence risk above these older-survey figures.",
    },
    source: {
      name: 'Drug and Alcohol Dependence (NESARC)',
      detail: 'Lopez-Quintero et al., 2011 — National Epidemiologic Survey on Alcohol and Related Conditions',
      url: 'https://pubmed.ncbi.nlm.nih.gov/21145178/',
    },
  },
  {
    id: 'gun-suicides',
    category: 'Politics',
    prompt: 'Of all gun deaths in the United States, what share are suicides?',
    context: 'About 44,000 Americans died from guns in 2024.',
    options: ['About 1 in 5', 'About 2 in 5', 'About 3 in 5'],
    answerIndex: 2,
    explanation:
      'In 2024, 62% of US gun deaths were suicides (homicides: 35%). Suicides have been the majority of American gun deaths every single year since 1995 — the "gun death" debate is mostly a suicide story, which fits neither side\'s preferred imagery.',
    why: {
      body: 'A leading explanation is means lethality. Suicide attempts are often impulsive and most methods are survivable, but firearms are lethal ~90% of the time, so a gun in the home converts more attempts into deaths. The demographics of gun ownership (older, rural men) also overlap with the highest-suicide-risk groups.',
      sources: [
        {
          name: 'Harvard T.H. Chan School — Means Matter',
          detail: 'Research on method lethality and firearm access in suicide',
          url: 'https://www.hsph.harvard.edu/means-matter/',
        },
      ],
    },
    source: {
      name: 'CDC data via Johns Hopkins Center for Gun Violence Solutions',
      detail: 'CDC WONDER mortality data, 2023–2024',
      url: 'https://publichealth.jhu.edu/center-for-gun-violence-solutions/data/annual-gun-violence-data',
      funding: 'The Johns Hopkins center advocates for gun regulation; the underlying counts are CDC death certificates.',
    },
  },
  {
    id: 'immigrant-crime',
    category: 'Politics',
    prompt:
      'Texas records the legal status of everyone it arrests. From 2012–2018, how did felony arrest rates of undocumented immigrants compare with US-born citizens?',
    options: [
      'Undocumented immigrants substantially higher',
      'About the same',
      'US-born citizens about twice as likely (or more)',
    ],
    answerIndex: 2,
    explanation:
      'US-born citizens were over 2× more likely to be arrested for violent crimes than undocumented immigrants, 2.5× for drug crimes, and 4× for property crimes. Undocumented immigrants had the lowest homicide arrest rate in every year studied.',
    caveat:
      'One state (a border state), arrests rather than all offending, 2012–2018. The authors\' results held under reclassification and robustness checks; a Center for Immigration Studies critique disputes the status identification.',
    why: {
      body: 'The most common explanation is selection: people who choose to migrate are disproportionately young adults motivated to work and avoid trouble, and the undocumented in particular have a lot to lose (deportation) from any arrest. That self-selection tends to produce lower offending than the general population.',
    },
    source: {
      name: 'PNAS',
      detail: 'Light, He & Robey, 2020 — Texas Department of Public Safety arrest records',
      url: 'https://www.pnas.org/doi/10.1073/pnas.2014704117',
    },
  },
  {
    id: 'police-unarmed',
    category: 'Justice & Crime',
    prompt: 'In 2019, how many unarmed Black people were fatally shot by police in the United States?',
    context:
      'US police fatally shoot about 1,000 people of all races each year. The US Black population is about 44 million.',
    options: ['About 15', 'About 150', 'About 1,500'],
    answerIndex: 0,
    explanation:
      'The Washington Post\'s Fatal Force database counted 14 in 2019; the 2015–2020 average was roughly 20–25 per year. Two things are true at once: the raw number is far smaller than most people on the left estimate, and Black Americans are shot by police at about twice the population-adjusted rate of white Americans.',
    caveat: '"Unarmed" classifications are contested at the margins (vehicles, replica weapons).',
    why: {
      body: 'Why both a small absolute number and a real disparity? Fatal police shootings are rare events overall, so counts are low. The racial gap is genuinely contested: some researchers attribute it to differences in rates of police encounters and violent-crime exposure (Fryer 2016 found no black-white gap in shootings conditional on an encounter), others to bias in who gets stopped in the first place. Both mechanisms can operate.',
      sources: [
        {
          name: 'Roland Fryer, NBER',
          detail: '"An Empirical Analysis of Racial Differences in Police Use of Force," 2016',
          url: 'https://www.nber.org/papers/w22399',
        },
      ],
    },
    source: {
      name: 'Washington Post Fatal Force database',
      detail: 'Every fatal on-duty police shooting since 2015, compiled from news and public records',
      url: 'https://www.washingtonpost.com/graphics/investigations/police-shootings-database/',
    },
  },
  {
    id: 'scientists-god',
    category: 'Religion',
    prompt: 'What share of US scientists say they believe in God or a universal spirit / higher power?',
    context: 'Among the general American public, about 95% say they do.',
    options: ['About 10%', 'About 30%', 'About half', 'About 75%'],
    answerIndex: 2,
    explanation:
      '51% — 33% believe in God, another 18% in a universal spirit or higher power (survey of AAAS scientists). Scientists are half as likely as the public to believe — yet far from the near-zero that both hardline atheists and believers tend to predict.',
    why: {
      body: 'It is contested whether science itself erodes belief or whether less-religious people are simply more likely to become scientists (selection). Sociologist Elaine Ecklund\'s interviews suggest much of scientists\' lower religiosity predates their careers — they were raised less religious — rather than being caused by scientific training.',
      sources: [
        {
          name: 'Pew Research Center',
          detail: 'Ecklund’s work on religion among scientists is summarized alongside the survey',
          url: 'https://www.pewresearch.org/religion/2009/11/05/scientists-and-belief/',
        },
      ],
    },
    source: {
      name: 'Pew Research Center',
      detail: '2009 survey of American Association for the Advancement of Science members, n=2,533',
      url: 'https://www.pewresearch.org/religion/2009/11/05/scientists-and-belief/',
    },
  },
  {
    id: 'religion-happiness',
    category: 'Religion',
    prompt: 'In the US, which group is most likely to describe themselves as "very happy"?',
    options: [
      'Actively religious (attend services regularly)',
      'Inactively religious (identify but rarely attend)',
      'Religiously unaffiliated',
      'No meaningful difference between groups',
    ],
    answerIndex: 0,
    explanation:
      '36% of actively religious Americans say they are very happy, vs 25% of both the inactively religious and the unaffiliated — a pattern repeated across most of the 26 countries studied. Notably, the same study found no clear link between religiosity and self-rated health.',
    caveat:
      'Correlation. Congregations bundle community and social ties; Pew explicitly does not claim religion causes happiness.',
    why: {
      body: 'The most-supported explanation is social, not supernatural: it is the "actively" part that matters. Regular attendance builds dense community, routine, and mutual support — the same ingredients that make any club or social network raise wellbeing. Reverse causation is also possible (happy people join and stay in congregations).',
    },
    source: {
      name: 'Pew Research Center',
      detail: '2019, "Religion\'s Relationship to Happiness, Civic Engagement and Health," 26 countries',
      url: 'https://www.pewresearch.org/religion/2019/01/31/religions-relationship-to-happiness-civic-engagement-and-health-around-the-world/',
    },
  },
  {
    id: 'church-mortality',
    category: 'Religion',
    prompt:
      'The Nurses\' Health Study followed 74,534 women for 16 years. Compared with women who never attended religious services, those attending more than once a week had all-cause mortality that was…',
    options: ['About the same', 'About 15% lower', 'About 33% lower', 'Higher'],
    answerIndex: 2,
    explanation:
      '33% lower (hazard ratio 0.67) over 16 years, after adjusting for a long list of health and social confounders. Researchers point to social support, lower smoking and depression as partial mediators.',
    caveat:
      'Observational; attendance may still proxy for unmeasured health or personality differences. But the sample and adjustment set are unusually strong.',
    why: {
      body: 'The study tested the pathways directly: attendance was linked to more social support, less smoking, lower depression, and greater optimism — and these mediators explained much (not all) of the mortality gap. In other words, the proposed mechanism is the behaviors and social ties that religious practice bundles, more than belief per se.',
    },
    source: {
      name: 'JAMA Internal Medicine',
      detail: 'Li, Stampfer, Williams & VanderWeele, 2016 — Nurses\' Health Study, n=74,534',
      url: 'https://jamanetwork.com/journals/jamainternalmedicine/fullarticle/2521827',
    },
  },
  {
    id: 'single-parent-poverty',
    category: 'Society',
    prompt:
      'In the US, how does the child poverty rate in single-mother families compare with married-couple families?',
    options: ['Roughly the same', 'About twice as high', 'About six times as high'],
    answerIndex: 2,
    explanation:
      'Official 2024 poverty rates: 31.3% for single-mother families vs 5.5% for married-couple families — nearly a 6× gap. Family structure is one of the strongest poverty correlates in US data, however uncomfortable that is for narratives that ignore it.',
    caveat:
      'Correlation and causation tangle here: poverty also makes marriage less likely. Selection effects are real; the size of the gap is too.',
    why: {
      body: 'Two mechanisms are debated and both likely operate. Structural: two adults can pool two incomes and split childcare, so one household simply has more resources and time. Selection: the same economic precarity that causes poverty also makes stable marriage less likely, so poorer people are less likely to be married in the first place — meaning marriage is partly a marker of advantage, not only a cause of it.',
    },
    source: {
      name: 'US Census Bureau (Current Population Survey)',
      detail: 'Official poverty measure, 2024; see also St. Louis Fed summary',
      url: 'https://fredblog.stlouisfed.org/2024/09/single-parent-poverty/',
    },
  },
  {
    id: 'pay-gap-controlled',
    category: 'Economics',
    prompt:
      'US women overall earn about 82¢ for every male dollar. Comparing a woman and a man with the same job title, experience, education, and hours — what does she earn?',
    options: ['Still about 82¢', 'About 91¢', 'About 99¢'],
    answerIndex: 2,
    explanation:
      'The controlled gap is about 99¢ on the dollar. The raw 18¢ gap is real but overwhelmingly reflects different jobs, hours, and career interruptions — above all parenthood: mothers earn about 74¢ uncontrolled. Near-parity for identical work and a large structural gap are both true.',
    why: {
      body: 'Economist Claudia Goldin (2023 Nobel) locates most of the remaining gap in the "motherhood penalty": many well-paid jobs disproportionately reward long, inflexible hours, and women more often take career interruptions or flexibility around childbirth. So the gap is less "same job, less pay" and more about which jobs and hours women and men end up in after kids.',
      sources: [
        {
          name: 'The Nobel Prize in Economic Sciences 2023',
          detail: 'Claudia Goldin, for advancing understanding of women’s labor-market outcomes',
          url: 'https://www.nobelprize.org/prizes/economic-sciences/2023/goldin/facts/',
        },
      ],
    },
    source: {
      name: 'Payscale Gender Pay Gap Report',
      detail: '2026 report, ~300k+ salary profiles',
      url: 'https://www.payscale.com/featured-content/gender-pay-gap',
      funding: 'Payscale sells compensation software; data comes from its own salary survey.',
    },
  },
  {
    id: 'trans-regret',
    category: 'Society',
    prompt:
      'Across 27 studies covering 7,928 patients, what share of people who underwent gender-affirming surgery reported regret?',
    options: ['About 1%', 'About 10%', 'About 25%', 'About 40%'],
    answerIndex: 0,
    explanation:
      'Pooled regret prevalence was 1% (95% CI <1%–2%). For scale, reported regret rates for many common elective surgeries run far higher.',
    caveat:
      'Several underlying studies have short follow-ups and loss-to-follow-up, so regret could be undercounted; critics have pressed this point. Reviews to date consistently land in the low single digits.',
    why: {
      body: 'One proposed explanation is heavy gatekeeping: surgery is typically preceded by extended assessment, mental-health evaluation, and (often) a period of living in the gender role, which screens out ambivalent candidates before they reach the operating room. The debate is whether that selection genuinely produces low regret or whether short follow-up hides later regret.',
    },
    source: {
      name: 'Plastic & Reconstructive Surgery — Global Open',
      detail: 'Bustos et al., 2021 — systematic review & meta-analysis, 27 studies, n=7,928',
      url: 'https://journals.lww.com/prsgo/fulltext/2022/04000/regret_after_gender_affirmation_surgery__a.63.aspx',
    },
  },
  {
    id: 'foreign-aid',
    category: 'Politics',
    prompt: 'What share of the US federal budget goes to foreign aid?',
    options: ['About 1%', 'About 5%', 'About 12%', 'About 25%'],
    answerIndex: 0,
    explanation:
      'About 1%, historically. The average American guesses 26%, and 86% of adults overestimate it. When people are told the real number, support for "we spend too much on foreign aid" falls from 58% to 34%.',
    why: {
      body: 'The overestimate is a mix of innumeracy about a very large budget and salience — foreign aid is politically visible and frequently invoked, so it looms larger in memory than its actual line-item. That the correction moves opinions so much suggests the "we spend too much" view was resting on the wrong number, not a values disagreement.',
    },
    source: {
      name: 'KFF Health Tracking Poll',
      detail: 'February 2025; budget share from federal budget data',
      url: 'https://www.kff.org/global-health-policy/kff-health-tracking-poll-february-2025-the-publics-views-on-global-health-and-usaid/',
    },
  },
  {
    id: 'recidivism',
    category: 'Justice & Crime',
    prompt: 'Of US state prisoners released in 2008, what share were rearrested within 10 years?',
    options: ['About 40%', 'About 60%', 'About 80%'],
    answerIndex: 2,
    explanation:
      '82% were arrested at least once within 10 years (66% within 3). Whatever your theory of prison — rehabilitation, deterrence, or punishment — the US system releases people who overwhelmingly come back into contact with it.',
    caveat: 'Rearrest, not reconviction — an arrest is not proof of a new crime. Annual arrest rates fall from 43% in year 1 to 22% by year 10.',
    why: {
      body: 'Proposed drivers include the "collateral consequences" of a record — barriers to jobs and housing that push people back toward crime — plus parole/probation systems that generate technical-violation arrests, and release back into the same high-crime environments. Note also a measurement effect: this counts any arrest, so heavy police contact with former prisoners inflates the figure.',
    },
    source: {
      name: 'Bureau of Justice Statistics',
      detail: '2021 report — prisoners released in 24 states in 2008, 10-year follow-up',
      url: 'https://bjs.ojp.gov/library/publications/recidivism-prisoners-released-24-states-2008-10-year-follow-period-2008-2018',
    },
  },
  {
    id: 'crime-trend',
    category: 'Justice & Crime',
    prompt: 'How has the US violent crime rate changed since its 1991 peak?',
    options: ['Roughly doubled', 'About the same', 'Fallen by about half'],
    answerIndex: 2,
    explanation:
      'Down about 53% — from 758 to 359 violent crimes per 100,000 people. Meanwhile, in 23 of 27 Gallup surveys since 1993, at least 60% of Americans said crime was higher than the year before. The perception gap is the story.',
    why: {
      body: 'The leading explanation for the perception gap is the availability heuristic amplified by media: violent incidents are vivid and heavily covered ("if it bleeds, it leads"), while a gradual statistical decline is invisible. Tellingly, people usually rate their own local area as safe but the "nation" as dangerous — a sign they are judging from news, not experience.',
    },
    source: {
      name: 'FBI Uniform Crime Reports (via Pew Research)',
      detail: 'Violent crime rate per 100,000, 1991–2023; Gallup perception polling',
      url: 'https://www.pewresearch.org/short-reads/2024/04/24/what-the-data-says-about-crime-in-the-us/',
    },
  },
  {
    id: 'disaster-deaths',
    category: 'Environment',
    prompt: 'Since the 1920s, the global death rate from natural disasters (per 100,000 people) has…',
    options: ['Risen — more extreme weather', 'Stayed about flat', 'Fallen by over 90%'],
    answerIndex: 2,
    explanation:
      'Fallen by well over 90% — the 1920s averaged over 500,000 disaster deaths a year; the 2010s about 45,000, while world population quadrupled. Wealth, forecasting, and infrastructure did this. Note what this is not: it is not a claim that warming is fake or that damage costs aren\'t rising.',
    why: {
      body: 'The mechanism is resilience, not fewer hazards: early-warning systems, sturdier buildings, evacuation logistics, and richer societies that can prepare and respond. The same-strength storm kills far fewer people in a wealthy, well-warned society. This is why economic damage can rise (more valuable stuff in harm\'s way) even as deaths fall.',
    },
    source: {
      name: 'Our World in Data (EM-DAT)',
      detail: 'Global disaster deaths per 100,000, 1900–present',
      url: 'https://ourworldindata.org/natural-disasters',
    },
  },
  {
    id: 'nuclear-safety',
    category: 'Environment',
    prompt:
      'Counting accidents AND air pollution, how do deaths per unit of electricity compare between coal and nuclear power?',
    context: 'Includes Chernobyl and Fukushima in the nuclear count.',
    options: [
      'Coal causes about 3× more deaths',
      'Coal causes about 40× more deaths',
      'Coal causes hundreds of times more deaths',
      'Nuclear causes more deaths',
    ],
    answerIndex: 2,
    explanation:
      'Coal: ~25 deaths per terawatt-hour (mostly air pollution). Nuclear: ~0.03 — roughly 800× fewer, about the same as wind and solar. The deadliest thing about nuclear power has been the fear of it.',
    why: {
      body: 'The gap between reality and perception is a textbook "dread risk" effect (Paul Slovic): people overweight rare, vivid, catastrophic events (Chernobyl) and underweight invisible, chronic, distributed harm (coal air pollution kills quietly, a few premature deaths per plant per year, adding up to millions). The statistical toll and the emotional toll point in opposite directions.',
    },
    source: {
      name: 'Our World in Data',
      detail: 'Deaths per TWh by energy source (Markandya & Wilkinson; Sovacool et al.)',
      url: 'https://ourworldindata.org/safest-sources-of-energy',
    },
  },
  {
    id: 'warming-amount',
    category: 'Environment',
    prompt: 'How much has average global surface temperature risen since pre-industrial times (1850–1900)?',
    options: ['About 0.3°C', 'About 1.3°C', 'About 3.2°C', 'About 5°C'],
    answerIndex: 1,
    explanation:
      'About 1.3°C on the long-term average (2024 alone touched ~1.5°C). Miscalibration runs both directions: it is neither the "barely anything" of dismissives nor the "5 degrees already" of catastrophizers — and the next degree matters enormously.',
    caveat:
      'A global average masks big regional variation — land and the Arctic have warmed much more than the ocean-heavy global mean.',
    why: {
      body: 'The number is smaller than alarmed intuitions and larger than dismissive ones for the same reason: it is a global, ocean-weighted average, and oceans warm slowly, damping the headline figure. Land areas and especially the Arctic have already warmed far more, which is why lived experience in some places outruns the "1.3°C" global number.',
    },
    source: {
      name: 'NASA GISS / WMO',
      detail: 'Global surface temperature anomaly vs 1850–1900 baseline',
      url: 'https://climate.nasa.gov/vital-signs/global-temperature/',
    },
  },
  {
    id: 'gmo-safety',
    category: 'Science',
    prompt:
      'In 2016, the US National Academies of Sciences reviewed ~900 studies spanning 20 years of GMO crops. On human health, they concluded…',
    options: [
      'Evidence of increased health risk',
      'Evidence too mixed to say either way',
      'No substantiated evidence GMO foods are riskier than conventional ones',
    ],
    answerIndex: 2,
    explanation:
      'The review found no substantiated evidence that foods from genetically engineered crops are less safe than conventionally bred ones — using data including long-term health trends across populations eating them for decades.',
    why: {
      body: 'Why does fear persist against the evidence? Proposed reasons: a "naturalness" bias (engineered = unnatural = unsafe, a moral intuition more than a scientific one), disgust/dread of "tampering with genes," and distrust of the agribusiness firms (e.g., Monsanto) that sell the seeds — so opposition to the companies gets transferred onto the technology.',
    },
    source: {
      name: 'National Academies of Sciences, Engineering, and Medicine',
      detail: '"Genetically Engineered Crops: Experiences and Prospects," 2016',
      url: 'https://www.nationalacademies.org/news/2016/05/genetically-engineered-crops-experiences-and-prospects-new-report',
    },
  },
  {
    id: 'organic-nutrition',
    category: 'Science',
    prompt:
      'A Stanford meta-analysis compared organic and conventional foods across 237 studies. On nutritional content, it found…',
    options: [
      'Organic is significantly more nutritious',
      'Little to no nutritional difference',
      'Conventional is more nutritious',
    ],
    answerIndex: 1,
    explanation:
      'No significant vitamin or nutrient advantage for organic. Organic produce did carry ~30% lower risk of pesticide residues — though residues on conventional produce were generally within allowed limits. Pay for organic for pesticide or environmental reasons if you like; not for nutrition.',
    why: {
      body: 'The belief that organic is more nutritious is likely a "health halo": the label signals virtue (natural, eco, premium price), and people generalize that halo to nutrition even though the plant\'s vitamin content barely depends on farming method. Marketing reinforces the association.',
    },
    source: {
      name: 'Annals of Internal Medicine',
      detail: 'Smith-Spangler et al., 2012 — Stanford systematic review, 237 studies',
      url: 'https://www.acpjournals.org/doi/10.7326/0003-4819-157-5-201209040-00007',
    },
  },
  {
    id: 'abstinence-ed',
    category: 'Politics',
    prompt:
      'Across US states, after controlling for income, education, ethnicity, and family-planning access, states emphasizing abstinence-only sex education had teen pregnancy rates that were…',
    options: ['Lower', 'About the same', 'Higher'],
    answerIndex: 2,
    explanation:
      'Higher. Abstinence emphasis correlated positively with teen pregnancy and birth rates even after socioeconomic controls; states teaching comprehensive sex ed had the lowest rates. Intending an outcome is not the same as producing it.',
    caveat: 'State-level correlation, 2005 data — it cannot fully rule out unmeasured cultural confounders.',
    why: {
      body: 'Two explanations compete. The causal one: abstinence-only curricula leave teens (who often have sex anyway) less equipped to use contraception. The confounding one: religious, conservative states both mandate abstinence education and have other cultural factors linked to earlier childbearing — so the curriculum may be a marker rather than the cause. The authors argue the pattern survives socioeconomic controls, but state-level data can\'t fully settle it.',
    },
    source: {
      name: 'PLoS ONE',
      detail: 'Stanger-Hall & Hall, 2011 — 48 states, 2005 cohort data',
      url: 'https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0024658',
    },
  },
  {
    id: 'min-wage',
    category: 'Economics',
    prompt:
      'Economists tracked 138 US state minimum-wage increases from 1979–2016. In the five years after an increase, the total number of low-wage jobs…',
    options: ['Fell significantly', 'Was essentially unchanged', 'Rose significantly'],
    answerIndex: 1,
    explanation:
      'Essentially unchanged: jobs paying below the new minimum disappeared but were offset almost exactly by new jobs just above it. Econ-101 intuition predicts job losses; three decades of US increases largely didn\'t deliver them.',
    caveat: 'Covers moderate, US-style increases. It is not a blank check for arbitrarily high minimums.',
    why: {
      body: 'The leading explanation is monopsony: low-wage labor markets aren\'t the perfectly competitive textbook, so employers have some wage-setting power and were paying below workers\' value. A moderate mandated raise can come out of that margin (and reduced turnover) rather than out of headcount — up to a point.',
    },
    source: {
      name: 'Quarterly Journal of Economics',
      detail: 'Cengiz, Dube, Lindner & Zipperer, 2019 — bunching estimator, CPS data',
      url: 'https://academic.oup.com/qje/article-abstract/134/3/1405/5484905',
    },
  },
  {
    id: 'mobility',
    category: 'Economics',
    prompt:
      'A child born into the poorest 20% of US households — what is the chance they reach the richest 20% as an adult?',
    context: 'If birth didn\'t matter at all, the answer would be 20% (1 in 5).',
    options: ['About 1 in 40', 'About 1 in 13', 'About 1 in 5'],
    answerIndex: 1,
    explanation:
      'About 7.5% nationally (1 in 13), computed from 40 million tax records — ranging from ~4.4% in Charlotte to ~12.9% in San Jose. The American Dream is neither dead (1 in 40) nor healthy (1 in 5); it is precisely measurable and it depends heavily on where you grow up.',
    why: {
      body: 'Raj Chetty\'s follow-up work links the place-to-place differences to a handful of factors: less residential segregation, better schools, more two-parent households in the community, and — in a 2022 study — "economic connectedness," i.e., poorer kids having friendships with higher-income peers. Geography acts largely through the social and educational environment a child is embedded in.',
      sources: [
        {
          name: 'Opportunity Insights (Chetty et al.)',
          detail: 'The Opportunity Atlas and the 2022 social-capital studies',
          url: 'https://opportunityinsights.org/',
        },
      ],
    },
    source: {
      name: 'Quarterly Journal of Economics / Opportunity Insights',
      detail: 'Chetty, Hendren, Kline & Saez, 2014 — "Where is the Land of Opportunity?"',
      url: 'https://opportunityinsights.org/paper/land-of-opportunity/',
    },
  },
  {
    id: 'extreme-poverty',
    category: 'Economics',
    prompt:
      'In 1990, about 38% of humanity lived in extreme poverty (under $2.15/day, inflation- and price-adjusted). What is that share today?',
    options: ['About 45% — it has risen', 'About 25% — slowly falling', 'Under 10%'],
    answerIndex: 2,
    explanation:
      'Under 10% — roughly 9%. The past three decades saw the largest escape from poverty in human history, mostly in Asia. In surveys, large majorities in rich countries guess this trend backwards.',
    caveat: '$2.15/day is a deliberately extreme line; hundreds of millions more live just above it.',
    why: {
      body: 'The driver was economic growth in populous Asian economies (China, then India and others) integrating into global trade — hundreds of millions moving from subsistence farming into higher-productivity work. Why do people guess wrong? Good news that unfolds gradually is not "news"; media negativity bias means we hear about famines and crises, not the slow, undramatic climb out of poverty.',
    },
    source: {
      name: 'World Bank via Our World in Data',
      detail: 'Global extreme poverty headcount ratio, 1990–present',
      url: 'https://ourworldindata.org/extreme-poverty',
    },
  },
  {
    id: 'depression-prevalence',
    category: 'Drugs & Health',
    prompt: 'In a given year, what share of US adults experience a major depressive episode?',
    context:
      'Major depressive episode = clinical bar: two weeks or more of depressed mood or loss of interest, plus multiple other symptoms.',
    options: ['About 3%', 'About 8%', 'About 20%', 'About 35%'],
    answerIndex: 1,
    explanation:
      'About 8.3% of adults (~21 million people) in 2021 — higher than the "everyone\'s fine" crowd assumes, lower than the "everyone\'s depressed" discourse implies. Among adults 18–25 it is roughly one in five.',
    why: {
      body: 'It is genuinely debated how much of the recent rise (especially among young adults) is a true increase in suffering versus greater willingness to report and diagnose symptoms that were always there. Most researchers think it is some of both — real increases in youth distress plus reduced stigma and more screening lifting the measured rate.',
    },
    source: {
      name: 'SAMHSA NSDUH / NIMH',
      detail: 'National Survey on Drug Use and Health, 2021',
      url: 'https://www.nimh.nih.gov/health/statistics/major-depression',
    },
  },
  {
    id: 'abortion-timing',
    category: 'Politics',
    prompt: 'What share of US abortions occur at or after 21 weeks — around the threshold of potential viability?',
    options: ['About 1%', 'About 8%', 'About 20%'],
    answerIndex: 0,
    explanation:
      '1.1%. And 92.8% occur at or before 13 weeks. The cases that dominate the political imagery on both sides — late-term procedures — represent about one in a hundred actual abortions.',
    why: {
      body: 'Most people seek abortion as soon as they know and can arrange it, which is early; the rare later procedures disproportionately involve fetal anomalies detected at the ~20-week anatomy scan, or access barriers (cost, travel, laws) that pushed an early-intended abortion later. The political debate foregrounds the 1% because it is the hardest case, not the typical one.',
    },
    source: {
      name: 'CDC Abortion Surveillance',
      detail: 'United States, 2022 (MMWR, published 2024)',
      url: 'https://www.cdc.gov/mmwr/volumes/73/ss/ss7307a1.htm',
    },
  },
  {
    id: 'teen-births',
    category: 'Society',
    prompt: 'Since 1991, the US teen birth rate has…',
    options: ['Risen about 30%', 'Stayed about flat', 'Fallen almost 80%'],
    answerIndex: 2,
    explanation:
      'Fallen 79% — from 61.8 births per 1,000 teenage girls in 1991 to 13.1 in 2023, a record low. The evidence credits both more teens delaying sex and much better contraception use. Whatever "kids these days" are doing, it is the least teen pregnancy on record.',
    why: {
      body: 'Researchers credit better and longer-acting contraception plus later sexual initiation. One well-identified contributor is surprising: economists Kearney and Levine found the MTV show 16 and Pregnant measurably reduced teen births by making the costs vivid — media as accidental public-health campaign. Smartphones and shifting teen social life may also cut in-person risk exposure.',
      sources: [
        {
          name: 'Kearney & Levine, NBER',
          detail: '"Media Influences on Social Outcomes: The Impact of 16 and Pregnant," 2014',
          url: 'https://www.nber.org/papers/w19795',
        },
      ],
    },
    source: {
      name: 'CDC / National Center for Health Statistics',
      detail: 'Births per 1,000 females aged 15–19, 1991–2023',
      url: 'https://www.cdc.gov/reproductive-health/teen-pregnancy/index.html',
    },
  },
  {
    id: 'air-quality',
    category: 'Environment',
    prompt: 'Since 1970, combined US emissions of the six most common air pollutants have…',
    context: 'Over the same period, US GDP roughly quadrupled and vehicle-miles driven nearly tripled.',
    options: ['Risen along with GDP', 'Held about flat', 'Fallen by roughly three-quarters'],
    answerIndex: 2,
    explanation:
      'Down about 78% (1970–2020) while the economy quadrupled — one of the Clean Air Act\'s quiet triumphs. Note this covers criteria pollutants (smog, lead, particulates…), not CO₂. Environmental doom and environmental complacency are both miscalibrated here.',
    why: {
      body: 'The mechanism is regulation plus technology: the Clean Air Act forced catalytic converters on cars, scrubbers on smokestacks, and the removal of lead from gasoline, decoupling pollution from economic growth. It is a concrete case where a mandate worked — which is why it cuts against pure complacency ("markets fix it") and pure doom ("nothing improves") alike.',
    },
    source: {
      name: 'US Environmental Protection Agency',
      detail: 'Air quality trends, aggregate emissions of six criteria pollutants',
      url: 'https://www.epa.gov/air-trends',
    },
  },

  // ---------- Added 2026-07-16 (expansion round) ----------

  {
    id: 'rifles-share',
    category: 'Politics',
    prompt:
      'Of US gun murders where the weapon is identified, what share are committed with rifles — the category that includes so-called "assault weapons"?',
    context:
      'Handguns are the other main category. For scale, in a typical year more people are murdered with knives than with rifles.',
    options: ['About 3%', 'About 20%', 'About 45%'],
    answerIndex: 0,
    explanation:
      'Roughly 3%. In 2019 the FBI recorded about 360 rifle murders versus ~1,600 with knives and ~6,300 with handguns. The gun-policy debate centers on rifles; actual gun homicide is overwhelmingly handguns.',
    caveat:
      'Thousands of gun murders each year are logged as "firearm type not stated," so the rifle count is a floor, not exact. Even generously, rifles are a small minority.',
    why: {
      body: 'Handguns are concealable, cheap, and ubiquitous, so they dominate everyday interpersonal violence, while rifles are bulkier and less practical for it. Rifles loom large in the debate because they feature in mass shootings — which are horrifying but a tiny fraction of total gun deaths — so imagery and statistics diverge.',
    },
    source: {
      name: 'FBI Uniform Crime Reports',
      detail: 'Expanded Homicide Data, murders by weapon type, 2019',
      url: 'https://ucr.fbi.gov/crime-in-the-u.s/2019/crime-in-the-u.s.-2019/topic-pages/expanded-homicide',
    },
  },
  {
    id: 'lgbt-share',
    category: 'Society',
    prompt: 'What share of US adults identify as LGBT?',
    context: 'Asked to estimate, the average American guesses about 23%.',
    options: ['About 9%', 'About 23%', 'About 40%'],
    answerIndex: 0,
    explanation:
      'About 9% (Gallup, 2025) — and rising fast among Gen Z — but far below the ~23% the average American guesses. The overestimate is large and bipartisan.',
    caveat:
      'Self-identification has roughly doubled since 2012, driven by younger cohorts and greater openness, so the real figure is genuinely climbing.',
    why: {
      body: 'The overestimate is mostly the availability heuristic: media visibility and concentration of LGBT people in big cities and online make the group feel far larger than its national share. General innumeracy about small percentages compounds it — people rarely guess single digits for any salient group.',
      sources: [
        {
          name: 'Gallup',
          detail: 'Americans greatly overestimate the gay population (2019); LGBTQ+ identification ~9% (2025)',
          url: 'https://news.gallup.com/poll/259571/americans-greatly-overestimate-gay-population.aspx',
        },
      ],
    },
    source: {
      name: 'Gallup',
      detail: '"LGBTQ+ Identification in the U.S." tracking, 2025',
      url: 'https://news.gallup.com/poll/702206/lgbtq-identification-holds.aspx',
    },
  },
  {
    id: 'life-expectancy',
    category: 'Drugs & Health',
    prompt:
      'The US spends about twice as much per person on health care as the average wealthy country. How does US life expectancy compare with those countries?',
    options: ['Higher — the spending buys results', 'About the same', 'Several years lower'],
    answerIndex: 2,
    explanation:
      'Several years lower — about 3–4 years below the comparable-country average, and the lowest among high-income peers — despite the highest per-capita spending in the OECD (~$13,800). More money, worse headline outcome.',
    caveat:
      'Life expectancy reflects far more than medical care — diet, guns, drugs, cars, and inequality all feed in. US health prices are also uniquely high, so dollars overstate the care actually delivered.',
    why: {
      body: 'Two mechanisms. First, most extra US spending buys higher prices, not more care — the same drug or procedure simply costs more. Second, life expectancy is dragged down by things hospitals don\'t control: obesity, drug overdoses ("deaths of despair"), homicide, and traffic deaths, which are all elevated in the US.',
      sources: [
        {
          name: 'Peterson-KFF Health System Tracker',
          detail: 'US life expectancy and health spending vs comparable countries',
          url: 'https://www.healthsystemtracker.org/chart-collection/u-s-life-expectancy-compare-countries/',
        },
      ],
    },
    source: {
      name: 'Peterson-KFF Health System Tracker / OECD',
      detail: 'Health spending per capita and life expectancy, comparable-country analysis',
      url: 'https://www.healthsystemtracker.org/chart-collection/u-s-life-expectancy-compare-countries/',
    },
  },
  {
    id: 'vaping-harm',
    category: 'Drugs & Health',
    prompt: "England's public health agency estimated that vaping (e-cigarettes) is how much less harmful than smoking cigarettes?",
    options: ['Not meaningfully safer', 'About 50% less harmful', 'About 95% less harmful'],
    answerIndex: 2,
    explanation:
      'At least ~95% less harmful, per Public Health England\'s expert review — because most of smoking\'s harm comes from combustion (tar, carbon monoxide), not nicotine. The UK actively recommends switching to vaping to quit smoking — nearly the opposite of typical US messaging.',
    caveat:
      'The 95% figure is an expert estimate, not a precise measurement, and long-term data is still accumulating. "Far safer than smoking" is not "safe," and youth uptake is a real concern.',
    why: {
      body: "The lethal load of a cigarette is combustion byproducts — tar and carbon monoxide from burning tobacco — not the nicotine, which is addictive but comparatively low-harm. Vaping delivers nicotine without setting anything on fire, removing most of the carcinogens, which is the basis for the ~95% estimate.",
      sources: [
        {
          name: 'Public Health England / GOV.UK',
          detail: '"E-cigarettes around 95% less harmful than tobacco," landmark evidence review, 2015',
          url: 'https://www.gov.uk/government/news/e-cigarettes-around-95-less-harmful-than-tobacco-estimates-landmark-review',
        },
      ],
    },
    source: {
      name: 'Public Health England',
      detail: 'Independent expert e-cigarette evidence review, 2015 (reaffirmed in later updates)',
      url: 'https://www.gov.uk/government/news/e-cigarettes-around-95-less-harmful-than-tobacco-estimates-landmark-review',
      funding: 'Government public-health agency; the 95% estimate is an expert judgment that has drawn academic debate.',
    },
  },
  {
    id: 'ceo-pay',
    category: 'Economics',
    prompt: 'In 1965, the CEO of a big US firm earned about 21× the typical worker. What is that ratio now?',
    options: ['About 30 to 1', 'About 100 to 1', 'About 340 to 1'],
    answerIndex: 2,
    explanation:
      'About 344 to 1 (2022, "realized" pay) — a more than 16-fold widening since 1965. CEO pay rose roughly 1,200% since 1978 while typical worker pay rose about 15%.',
    caveat:
      '"Realized" pay swings with the stock market — it topped 400:1 in 2021. Much of the gap is stock-based, tying CEO pay to shareholder returns rather than salary alone.',
    why: {
      body: 'The proposed driver is the shift, from the 1980s–90s onward, to stock-based executive compensation, which rides a rising market, plus board pay-setting that benchmarks each CEO against peers — a ratchet that pushes pay up industry-wide. Whether this reflects genuine value creation or governance failure is exactly the contested part.',
    },
    source: {
      name: 'Economic Policy Institute',
      detail: 'CEO Pay report, 2022 (CEO-to-worker compensation ratio, realized measure)',
      url: 'https://www.epi.org/publication/ceo-pay-in-2022/',
      funding: 'EPI is a labor-aligned think tank; the underlying pay figures come from SEC filings and BLS wage data.',
    },
  },
  {
    id: 'prayer-step',
    category: 'Religion',
    prompt:
      'A rigorous randomized trial had strangers pray for some heart-surgery patients and not others. What happened to the patients who were prayed for?',
    context: '1,800 patients, 6 hospitals, published in the American Heart Journal.',
    options: ['Fewer complications', 'No difference', 'Slightly more complications'],
    answerIndex: 1,
    explanation:
      'No difference in complication-free recovery between the prayed-for and not-prayed-for groups. Oddly, the one group told for certain they were being prayed for had slightly MORE complications (59% vs 52%).',
    caveat:
      'This tests intercessory prayer by strangers on one surgical outcome — not personal prayer, faith, or meaning, which it can\'t speak to.',
    why: {
      body: 'From a naturalistic view there is no causal pathway by which a stranger\'s prayer would change a specific patient\'s surgical recovery, so a null result is expected. The slightly-worse outcome in the "told for certain" group may be a psychological effect — performance anxiety or the stress of inferring "I must be gravely ill if they organized prayer for me."',
      sources: [
        {
          name: 'American Heart Journal',
          detail: 'Benson et al., 2006 — Study of the Therapeutic Effects of Intercessory Prayer (STEP)',
          url: 'https://pubmed.ncbi.nlm.nih.gov/16569567/',
        },
      ],
    },
    source: {
      name: 'American Heart Journal',
      detail: 'Benson et al., 2006 — STEP trial, n=1,802 across 6 hospitals',
      url: 'https://pubmed.ncbi.nlm.nih.gov/16569567/',
    },
  },
  {
    id: 'religious-giving',
    category: 'Religion',
    prompt:
      'Who gives more to charity — including to secular, non-religious causes: religious Americans or secular Americans?',
    context: '"Religious" here means roughly weekly attendance; "secular" means seldom or never.',
    options: ['Religious, by a wide margin', 'About equal', 'Secular, by a wide margin'],
    answerIndex: 0,
    explanation:
      'Religious Americans give substantially more — and not only to churches. Even excluding religious donations, they give more to secular charities and volunteer more (about 67% vs 44%). The stereotype of stingy believers or uniquely generous secularists runs backwards in the data.',
    caveat:
      'The best-known analyst, Arthur Brooks, leans conservative — but the pattern replicates across many datasets. Causation is unclear.',
    why: {
      body: 'The leading explanation is social infrastructure: congregations are dense networks that repeatedly ask members to give and volunteer, normalize generosity (tithing, service), and provide the organizational channels to do it. Selection may also play a role — generous people may be drawn to religious community. It is likely more about the community than the theology.',
      sources: [
        {
          name: 'Hoover Institution',
          detail: 'Summary of Arthur Brooks, "Who Really Cares" (2006), drawing on 15 datasets',
          url: 'https://www.hoover.org/research/religious-faith-and-charitable-giving',
        },
      ],
    },
    source: {
      name: 'Arthur Brooks, "Who Really Cares" (2006)',
      detail: 'Analysis of ~15 datasets on giving and volunteering by religiosity',
      url: 'https://www.hoover.org/research/religious-faith-and-charitable-giving',
      funding: 'Brooks is a conservative scholar; findings replicate across multiple independent datasets.',
    },
  },
  {
    id: 'death-penalty',
    category: 'Justice & Crime',
    prompt:
      'Does the death penalty deter murder more than life imprisonment? What did the National Academies conclude after reviewing 30+ years of studies?',
    options: ['Yes — a clear deterrent effect', "The research can't tell us either way", 'It increases murder'],
    answerIndex: 1,
    explanation:
      'The National Research Council (2012) concluded the studies are "not informative" — they cannot establish whether capital punishment raises, lowers, or has no effect on murder, largely because none properly account for the alternative (life without parole). Both "it obviously deters" and "it obviously doesn\'t" overreach the evidence.',
    caveat:
      'This is "we can\'t tell," not "proven to have no effect." It is an indictment of the research quality, not a final verdict on deterrence.',
    why: {
      body: 'For deterrence to work, would-be murderers must weigh the marginal difference between execution and life imprisonment — yet most homicides are impulsive or committed by people who don\'t expect to be caught, so that margin may barely register. The deeper point the Academies made, though, is methodological: existing studies simply can\'t isolate the death penalty\'s effect from everything else driving murder rates.',
      sources: [
        {
          name: 'National Research Council',
          detail: '"Deterrence and the Death Penalty," 2012',
          url: 'https://www.nationalacademies.org/publications/13363',
        },
      ],
    },
    source: {
      name: 'National Research Council (National Academies)',
      detail: '"Deterrence and the Death Penalty," 2012 — review of 30+ years of research',
      url: 'https://www.nationalacademies.org/publications/13363',
    },
  },
  {
    id: 'us-emissions',
    category: 'Environment',
    prompt: 'Since its mid-2000s peak, what have US energy-related CO₂ emissions done?',
    context: 'Over the same period, US GDP and population both grew.',
    options: ['Risen', 'Held about flat', 'Fallen about 18%'],
    answerIndex: 2,
    explanation:
      'Fallen roughly 18–20% since the 2007 peak — the largest absolute drop of any country — mainly because cheap natural gas and renewables displaced coal. The US is often described as "doing nothing" on emissions; its emissions have in fact declined substantially.',
    caveat:
      '"Better than rising" is not "enough": the decline is far slower than climate targets require, and it partly reflects offshored manufacturing and a lucky gas boom, not only policy.',
    why: {
      body: 'The main mechanism was market-driven fuel switching: the fracking boom made natural gas — which emits about half the CO₂ of coal per unit of electricity — cheaper than coal, while wind and solar costs collapsed. Coal plants retired on economics as much as regulation. Efficiency gains and slower industrial growth added to it.',
      sources: [
        {
          name: 'Center for Climate and Energy Solutions (C2ES)',
          detail: 'US emissions trends, drawing on EPA and EIA data',
          url: 'https://www.c2es.org/content/u-s-emissions/',
        },
      ],
    },
    source: {
      name: 'US Energy Information Administration / C2ES',
      detail: 'Energy-related CO₂ emissions, 2005/2007 peak to present',
      url: 'https://www.c2es.org/content/u-s-emissions/',
    },
  },
  {
    id: 'clearance-rate',
    category: 'Justice & Crime',
    prompt: 'In the US, what share of reported property crimes (burglary, theft) end in an arrest?',
    context: 'For murder, about half are solved.',
    options: ['About 12%', 'About 40%', 'About 70%'],
    answerIndex: 0,
    explanation:
      'Only about 12% of property crimes are "cleared" — and even murder clearance has fallen to ~52%, a record low. For most crimes, the odds of an arrest are low. The system solves far fewer crimes than "tough on crime" rhetoric implies.',
    caveat:
      '"Cleared" means an arrest or case closure, not a conviction. Low clearance partly reflects under-resourcing and low reporting, not only failure.',
    why: {
      body: 'Property crimes rarely have witnesses, usable forensic evidence, or a suspect, so most go unsolved; police also triage scarce resources toward violent crime. Clearance rates have drifted downward as case volumes, staffing shortages, and eroding community cooperation compound the problem.',
      sources: [
        {
          name: 'FBI Crime Data Explorer',
          detail: 'National clearance rates by offense type, 2022',
          url: 'https://cde.ucr.cjis.gov/',
        },
      ],
    },
    source: {
      name: 'FBI Uniform Crime Reporting',
      detail: 'Clearance rates by offense, 2022 (murder ~52%, property ~12%)',
      url: 'https://cde.ucr.cjis.gov/',
    },
  },
  {
    id: 'religious-fertility',
    category: 'Religion',
    prompt:
      'Comparing US women who attend religious services weekly with those who never attend, how do their family sizes differ?',
    context: 'The US overall fertility rate is about 1.6 children per woman — below the 2.1 "replacement" level.',
    options: ['Weekly attenders have notably more children', 'About the same', 'Never-attenders have more'],
    answerIndex: 0,
    explanation:
      'Weekly attenders average near replacement (~2.0–2.1 children); the nonreligious are well below (~1.4–1.5). The gap has widened to record levels — meaning each new generation is, on average, born disproportionately to more-religious parents.',
    caveat:
      'Fertility intentions and economics drive much of this too; religiosity correlates with earlier marriage and pro-natal norms rather than necessarily causing births.',
    why: {
      body: 'Proposed mechanisms: many faiths actively value marriage and children (sometimes as a duty), congregations provide the community and childcare support that make larger families more manageable, and religiosity correlates with prioritizing family formation over competing life scripts (career, extended education, mobility). It is culture and community as much as doctrine.',
      sources: [
        {
          name: 'Pew Research Center',
          detail: '"Religion, Fertility and Child-Rearing," 2025',
          url: 'https://www.pewresearch.org/religion/2025/02/26/religion-fertility-and-child-rearing/',
        },
      ],
    },
    source: {
      name: 'Institute for Family Studies / Pew Research Center',
      detail: 'US fertility by religious attendance; growing religious–secular fertility divide',
      url: 'https://www.pewresearch.org/religion/2025/02/26/religion-fertility-and-child-rearing/',
    },
  },
  {
    id: 'muslim-share',
    category: 'Society',
    prompt: 'What share of the US population is Muslim?',
    context: 'Asked to estimate, the average American guesses about 17%.',
    options: ['About 1%', 'About 10%', 'About 17%'],
    answerIndex: 0,
    explanation:
      'About 1% — roughly 3.5 million people. Americans guess about 17 times too high, one of the largest perception gaps ever measured. The same overestimate of Muslim populations shows up across nearly every Western country.',
    caveat:
      'Muslims are unevenly distributed, so in some cities the local share is far higher, which may feed the national overestimate.',
    why: {
      body: 'Salience is the leading explanation: decades of terrorism coverage and political focus make Islam highly "available" in memory, so people extrapolate from the news and from dense urban pockets to the whole country. It is the same availability mechanism that inflates estimates of any group that dominates headlines.',
      sources: [
        {
          name: 'Ipsos',
          detail: '"Perils of Perception" — Americans overestimate the Muslim population ~17x',
          url: 'https://www.ipsos.com/en-us/news-polls/perils-perception-americans-fail-all-measures-perceptions-versus-facts-unique-socio-demographic',
        },
      ],
    },
    source: {
      name: 'Ipsos "Perils of Perception" / Pew Research Center',
      detail: 'Perceived vs actual Muslim share of the US population',
      url: 'https://www.ipsos.com/en-us/news-polls/perils-perception-americans-fail-all-measures-perceptions-versus-facts-unique-socio-demographic',
    },
  },
  {
    id: 'vaccine-autism',
    category: 'Science',
    prompt:
      'A Danish study followed 657,000 children — including kids with autism risk factors. What did it find about the MMR vaccine and autism?',
    options: ['Higher autism risk in vaccinated kids', 'No link', 'Lower autism in vaccinated kids'],
    answerIndex: 1,
    explanation:
      'No association — autism occurred just as often in unvaccinated children, with no clustering after vaccination, even among high-risk kids. This is one of many large studies converging on the same null; the original 1998 alarm was retracted as fraudulent.',
    caveat:
      'Science can\'t prove a negative with perfect certainty, but across millions of children in multiple countries, no credible link has ever emerged.',
    why: {
      body: 'Why did the myth take hold against the evidence? A small 1998 paper (Wakefield) claimed a link; it was later retracted and its author lost his medical license for fraud, but the scare had spread. The core error is a timing coincidence: the first signs of autism and the routine MMR shot both appear around age 1–2, which invites a false cause-and-effect inference.',
      sources: [
        {
          name: 'Annals of Internal Medicine',
          detail: 'Hviid et al., 2019 — nationwide cohort of 657,461 Danish children',
          url: 'https://www.acpjournals.org/doi/10.7326/M18-2101',
        },
      ],
    },
    source: {
      name: 'Annals of Internal Medicine',
      detail: 'Hviid et al., 2019 — "MMR Vaccination and Autism: A Nationwide Cohort Study," n=657,461',
      url: 'https://www.acpjournals.org/doi/10.7326/M18-2101',
    },
  },
  {
    id: 'wealth-top1',
    category: 'Economics',
    prompt: 'What share of all US household wealth is owned by the richest 1%?',
    context: 'If wealth were spread evenly, the top 1% would hold 1%.',
    options: ['About 10%', 'About 20%', 'About 31%'],
    answerIndex: 2,
    explanation:
      'About 31% (Federal Reserve, 2024) — up from 23% in 1989. The top 1% now own more than the entire middle 40% combined. Alarming or fine, the concentration is larger than most people guess.',
    caveat:
      'Wealth is lumpier than income and is net of debt, so many "bottom" households have near-zero or negative net worth (e.g., young people with mortgages and student loans).',
    why: {
      body: 'The leading mechanism is that returns to capital compound: asset prices (stocks, real estate) have grown strongly, and those gains accrue to people who already own assets. Wages — which the middle and bottom mostly rely on — grew far more slowly, so the wealth share tilts upward over time.',
      sources: [
        {
          name: 'US Federal Reserve',
          detail: 'Distributional Financial Accounts, share of net worth by wealth percentile',
          url: 'https://www.federalreserve.gov/releases/z1/dataviz/dfa/distribute/chart/',
        },
      ],
    },
    source: {
      name: 'US Federal Reserve',
      detail: 'Distributional Financial Accounts, top-1% wealth share, Q1 2024 (~30.5%)',
      url: 'https://www.federalreserve.gov/releases/z1/dataviz/dfa/distribute/chart/',
    },
  },
  {
    id: 'snap-fraud',
    category: 'Politics',
    prompt:
      'What share of food-stamp (SNAP) benefits are lost to recipient fraud — people trafficking benefits for cash?',
    options: ['About 1–2%', 'About 15%', 'About 30%'],
    answerIndex: 0,
    explanation:
      'Around 1.5% by benefit value (federal trafficking studies), with states establishing far less in confirmed fraud. A widely-cited "10.6% improper payment" figure is mostly clerical errors — caseworker over- and under-payments — not recipient fraud, and the reports explicitly warn against conflating the two.',
    caveat:
      'Improper payments (~10%) are real money worth fixing — just not "fraud." Separately, EBT card theft/skimming is a real and growing problem.',
    why: {
      body: 'The confusion is mechanical: the headline "improper payment" rate bundles administrative miscalculations and honest recipient reporting mistakes together with the small slice of intentional trafficking. Actual trafficking has also fallen structurally — paper coupons (easy to sell) were replaced by electronic EBT cards, which are harder to exchange for cash.',
      sources: [
        {
          name: 'US Government Accountability Office',
          detail: 'Oversight of SNAP improper payments vs trafficking/fraud',
          url: 'https://www.gao.gov/products/gao-24-107461',
        },
      ],
    },
    source: {
      name: 'USDA / Government Accountability Office',
      detail: 'SNAP trafficking rate (~1.5%) vs improper-payment rate; established state fraud far lower',
      url: 'https://www.gao.gov/products/gao-24-107461',
    },
  },
  {
    id: 'rent-control',
    category: 'Economics',
    prompt:
      'San Francisco expanded rent control to more buildings in 1994. Over the following years, what happened to the rental housing supply in the affected buildings?',
    options: ['It grew', 'No change', 'It shrank about 15%'],
    answerIndex: 2,
    explanation:
      'Landlords cut rental supply ~15% — converting to condos, selling to owner-occupants, or redeveloping — which pushed citywide rents UP about 5%. Rent control helped the specific tenants who kept their units, but worsened affordability overall, the opposite of its intent.',
    caveat:
      'It did protect incumbent tenants from displacement, a real benefit. This is one city\'s policy design; effects vary with the specific rules.',
    why: {
      body: 'The mechanism is basic supply response: capping the rent lowers the return to renting a unit out, so owners exit the rental market (sell or convert). Less rental supply raises market rents for everyone not already protected — a case where a policy helps a visible in-group while shifting costs onto everyone else. Economists broadly agree rent control reduces long-run supply.',
      sources: [
        {
          name: 'American Economic Review',
          detail: 'Diamond, McQuade & Qian, 2019 — natural experiment from SF\'s 1994 expansion',
          url: 'https://www.aeaweb.org/articles?id=10.1257/aer.20181289',
        },
      ],
    },
    source: {
      name: 'American Economic Review',
      detail: 'Diamond, McQuade & Qian, 2019 — "The Effects of Rent Control Expansion... San Francisco"',
      url: 'https://www.aeaweb.org/articles?id=10.1257/aer.20181289',
    },
  },
  {
    id: 'mj-teen-use',
    category: 'Drugs & Health',
    prompt: 'After US states legalized recreational marijuana for adults, what happened to teen marijuana use?',
    options: ['It rose sharply', 'No net increase', 'It fell to near zero'],
    answerIndex: 1,
    explanation:
      'No net increase — studies covering ~900,000 teens across dozens of states found legalization was not associated with higher adolescent use, and some found modest decreases in teen drinking and vaping. The "legalization will hook kids" prediction hasn\'t materialized in the data so far.',
    caveat:
      'This covers roughly the first decade of legalization; long-run and product-potency effects are still being studied, and it says nothing about adult use or health harms.',
    why: {
      body: 'A leading explanation is that teens already reported easy access to illegal cannabis, so adding a legal, age-gated, ID-checking retail channel for adults didn\'t change their access much. Displacing unregulated street dealers — who don\'t check IDs — may even make it slightly harder for minors to buy.',
      sources: [
        {
          name: 'JAMA Pediatrics',
          detail: 'Recreational cannabis legalization and adolescent substance use through 2021',
          url: 'https://jamanetwork.com/journals/jamapediatrics/fullarticle/2817566',
        },
      ],
    },
    source: {
      name: 'JAMA Pediatrics',
      detail: 'Multiple cohort studies (Anderson & Rees; 2024 analysis of ~900k teens, 2011–2021)',
      url: 'https://jamanetwork.com/journals/jamapediatrics/fullarticle/2817566',
    },
  },
  {
    id: 'plastic-recycling',
    category: 'Environment',
    prompt: 'Of all the plastic waste the world generates, what share actually gets recycled?',
    options: ['About 9%', 'About 35%', 'About 60%'],
    answerIndex: 0,
    explanation:
      'About 9% globally (OECD). Nearly half is landfilled, roughly a fifth incinerated, and roughly a fifth mismanaged — dumped or burned in the open. The blue recycling bin is far less effective than most conscientious recyclers assume.',
    caveat:
      'Rates vary a lot by material and country — some plastics (like PET bottles) recycle far better than films and mixed plastics.',
    why: {
      body: 'Most plastics are costly or technically hard to recycle — contamination, mixed polymers, and low resale value — while virgin plastic made from cheap fossil feedstock is usually cheaper than recycled, so there\'s little market pull. For years much "recycling" was simply exported to countries with weaker waste systems, where a lot leaked into the environment.',
      sources: [
        {
          name: 'OECD',
          detail: 'Global Plastics Outlook, 2022 — only 9% of plastic waste recycled',
          url: 'https://www.oecd.org/en/about/news/press-releases/2022/02/plastic-pollution-is-growing-relentlessly-as-waste-management-and-recycling-fall-short.html',
        },
      ],
    },
    source: {
      name: 'OECD Global Plastics Outlook',
      detail: '2022 report — 9% of plastic waste recycled globally',
      url: 'https://www.oecd.org/en/about/news/press-releases/2022/02/plastic-pollution-is-growing-relentlessly-as-waste-management-and-recycling-fall-short.html',
    },
  },
  {
    id: 'solar-cost',
    category: 'Environment',
    prompt:
      'To build a brand-new power plant in the US, which source produces the cheapest electricity per unit — before any subsidies?',
    options: ['Coal', 'Natural gas', 'Solar and onshore wind'],
    answerIndex: 2,
    explanation:
      'Utility-scale solar and onshore wind — the cheapest new-build power for a decade running (Lazard), unsubsidized (~$50–61/MWh vs ~$76 for new gas). The notion that renewables only survive on subsidies is out of date for new generation.',
    caveat:
      'This is the cost of energy produced; it excludes firming intermittent output with storage or backup, which narrows the gap. An existing, paid-off plant can still be cheaper to run than building anything new.',
    why: {
      body: 'The mechanism is the manufacturing learning curve: solar panel and wind turbine costs fell roughly 90% and 70% over the past decade as production scaled globally, while fossil plants must keep buying fuel every year. Once the hardware is cheap enough, sunshine and wind are free inputs — so the crossover was a matter of when, not if.',
      sources: [
        {
          name: 'Lazard',
          detail: 'Levelized Cost of Energy+ (LCOE+), 2024/2025 editions',
          url: 'https://www.lazard.com/research-insights/levelized-cost-of-energyplus-lcoeplus/',
        },
      ],
    },
    source: {
      name: 'Lazard LCOE+',
      detail: 'Unsubsidized levelized cost of energy by source, 2024–2025',
      url: 'https://www.lazard.com/research-insights/levelized-cost-of-energyplus-lcoeplus/',
    },
  },
  {
    id: 'historical-jesus',
    category: 'Religion',
    prompt:
      'Among historians and scholars of antiquity — of all faiths and none — what is the consensus on whether Jesus of Nazareth existed as a real person?',
    context: 'This is only about historical existence — not divinity, miracles, or the accuracy of the Gospels.',
    options: ['Near-universal agreement he existed', 'Roughly split', 'Most think he was mythical'],
    answerIndex: 0,
    explanation:
      'Near-universal agreement that a Jewish preacher named Jesus existed and was crucified under Pontius Pilate — held by secular, Jewish, and atheist scholars alike (e.g., the agnostic scholar Bart Ehrman). "Jesus never existed" is a fringe position among trained historians, even as the theological claims remain contested.',
    caveat:
      'Consensus on existence says nothing about the supernatural claims, which historians as historians don\'t adjudicate. Ancient-history standards of evidence are looser than modern ones.',
    why: {
      body: 'The historical case rests on multiple independent early sources — Paul\'s letters within ~20 years of the events, the Gospels, and hostile or neutral mentions by the Roman Tacitus and the Jewish Josephus — plus the "criterion of embarrassment": inventors of a hero rarely saddle him with a shameful crucifixion, so the awkward details read as remembered rather than fabricated. A real founder is simply the simplest explanation. This cuts against online "mythicism," which skews secular.',
      sources: [
        {
          name: 'Bart D. Ehrman',
          detail: '"Did Jesus Exist? The Historical Argument for Jesus of Nazareth," 2012',
          url: 'https://ehrmanblog.org/another-take-on-jesus-existence/',
        },
      ],
    },
    source: {
      name: 'Bart D. Ehrman (agnostic New Testament scholar)',
      detail: '"Did Jesus Exist?" (2012); reflects mainstream scholarly consensus',
      url: 'https://ehrmanblog.org/another-take-on-jesus-existence/',
    },
  },
];
