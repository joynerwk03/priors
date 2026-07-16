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
  source: Source;
}
