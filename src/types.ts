export type Category =
  | 'Politics'
  | 'Religion'
  | 'Science'
  | 'Drugs & Health'
  | 'Justice & Crime'
  | 'Economics'
  | 'Society'
  | 'Environment';

export interface Source {
  /** Publication / dataset name shown to the player. */
  name: string;
  /** Authors, year, sample size — whatever makes it checkable at a glance. */
  detail: string;
  url: string;
  /** Disclosed when the funder/publisher could color the result. */
  funding?: string;
}

export interface WhyExplanation {
  /**
   * Proposed mechanism(s) behind the statistic — framed as hypotheses, not
   * settled fact. Where the cause is genuinely contested, name the competing
   * explanations rather than pick one. Hidden behind a dropdown so it never
   * contaminates the player's raw prediction.
   */
  body: string;
  sources?: Source[];
}

export interface Question {
  id: string;
  category: Category;
  /** The prediction being asked for — answerable by reasoning, not recall. */
  prompt: string;
  /** Anchor facts that remove the need for specialist knowledge. */
  context?: string;
  options: string[];
  answerIndex: number;
  /** What the data says, written to be hard to dismiss. */
  explanation: string;
  /** Honest limitation of the finding. Stating it is a feature. */
  caveat?: string;
  /** Optional, opt-in deeper dive into WHY the trend exists. */
  why?: WhyExplanation;
  source: Source;
}
