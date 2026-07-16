import { useState } from 'react';
import type { Category, Question } from '../types';
import { lifetimeStats } from '../lib/storage';

export interface RoundResult {
  question: Question;
  guess: number;
  correct: boolean;
}

interface Props {
  results: RoundResult[];
  onAgain: () => void;
  categoryOf: (id: string) => Category | undefined;
}

function verdictFor(pct: number): string {
  if (pct >= 90) return 'Well calibrated. Your model of reality and reality are on speaking terms.';
  if (pct >= 70) return 'Mostly calibrated — with a few blind spots worth knowing about.';
  if (pct >= 50) return 'Reality had some news for you.';
  return 'Your worldview just got peer-reviewed.';
}

export default function Results({ results, onAgain, categoryOf }: Props) {
  const [copied, setCopied] = useState(false);
  const score = results.filter((r) => r.correct).length;
  const total = results.length;
  const pct = total > 0 ? (100 * score) / total : 0;

  const byCat = new Map<Category, { correct: number; total: number }>();
  for (const r of results) {
    const c = byCat.get(r.question.category) ?? { correct: 0, total: 0 };
    c.total += 1;
    if (r.correct) c.correct += 1;
    byCat.set(r.question.category, c);
  }

  const life = lifetimeStats(categoryOf);

  const share = async () => {
    const marks = results.map((r) => (r.correct ? '✅' : '❌')).join('');
    const text = `Priors — my worldview vs. reality: ${score}/${total}\n${marks}\nCan your worldview predict the data?`;
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard unavailable — nothing to do; button just won't confirm.
    }
  };

  return (
    <div className="results">
      <p className="kicker">Round complete</p>
      <h1 className="big-score">
        {score}
        <span className="of">/{total}</span>
      </h1>
      <p className="verdict-line">{verdictFor(pct)}</p>
      <p className="marks">{results.map((r) => (r.correct ? '✅' : '❌')).join(' ')}</p>

      <div className="cat-breakdown">
        {[...byCat.entries()].map(([cat, c]) => (
          <div className="cat-row" key={cat}>
            <span className="cat-name">{cat}</span>
            <span className="cat-score">
              {c.correct}/{c.total}
            </span>
          </div>
        ))}
      </div>

      {life.answered > 0 && (
        <p className="fineprint">
          Lifetime: {Math.round((100 * life.correct) / life.answered)}% correct across{' '}
          {life.answered} answer{life.answered === 1 ? '' : 's'}, {life.rounds} round
          {life.rounds === 1 ? '' : 's'} — stored only in this browser.
        </p>
      )}

      <div className="results-actions">
        <button className="cta" onClick={onAgain}>
          Play another round
        </button>
        <button className="cta ghost" onClick={share}>
          {copied ? 'Copied!' : 'Copy result to share'}
        </button>
      </div>

      <p className="reflect">
        The misses are the interesting part. Each one is a place where the world behaves
        differently than your model predicted — which is exactly the kind of thing worth knowing.
      </p>
    </div>
  );
}
