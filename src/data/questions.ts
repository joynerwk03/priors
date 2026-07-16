import type { Question } from '../types';

/**
 * The question bank. Every entry follows the invariants in CLAUDE.md:
 * reasoning-answerable, primary-sourced, honestly caveated, and controversial
 * enough that distinct worldviews predict different answers.
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
    source: {
      name: 'US Environmental Protection Agency',
      detail: 'Air quality trends, aggregate emissions of six criteria pollutants',
      url: 'https://www.epa.gov/air-trends',
    },
  },
];
