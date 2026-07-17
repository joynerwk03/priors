import { useState } from 'react';
import type { Category, Question } from '../types';
import { lifetimeStats } from '../lib/storage';
import { categoryVar } from '../lib/categories';
import { DONATE_URL, SHOW_DONATE } from '../config';

export interface RoundResult {
  question: Question;
  guess: number;
  correct: boolean;
}

interface Props {
  results: RoundResult[];
  category?: Category;
  onAgain: () => void;
  onPickCategory: () => void;
  categoryOf: (id: string) => Category | undefined;
}

function verdictFor(pct: number): string {
  if (pct >= 90) return 'Well calibrated. Your model of reality and reality are on speaking terms.';
  if (pct >= 70) return 'Mostly calibrated — with a few blind spots worth knowing about.';
  if (pct >= 50) return 'Reality had some news for you.';
  return 'Your worldview just got peer-reviewed.';
}

const R = 74;
const CIRC = 2 * Math.PI * R;

export default function Results({ results, category, onAgain, onPickCategory, categoryOf }: Props) {
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
    const marks = results.map((r) => (r.correct ? '🟩' : '🟥')).join('');
    const label = category ?? 'Mixed';
    const text = `Priors (${label}) — my worldview vs. reality: ${score}/${total}\n${marks}\nHow well does yours predict the world?`;
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard unavailable — the button simply won't confirm.
    }
  };

  return (
    <div className="results">
      <p className="kicker">{category ? `${category} round` : 'Mixed round'} complete</p>

      <div className="ring-wrap">
        <svg className="ring" width="168" height="168" viewBox="0 0 168 168" aria-hidden="true">
          <circle className="ring-track" cx="84" cy="84" r={R} fill="none" strokeWidth="10" />
          {/* Final offset is set on first paint; the sweep-in is pure CSS, so the
              ring is never stuck empty if JS timing or reduced-motion interferes. */}
          <circle
            className="ring-fill"
            cx="84"
            cy="84"
            r={R}
            fill="none"
            strokeWidth="10"
            strokeDasharray={CIRC}
            style={
              {
                ['--circ' as string]: `${CIRC}`,
                ['--offset' as string]: `${CIRC * (1 - pct / 100)}`,
              } as React.CSSProperties
            }
          />
        </svg>
        <div className="ring-label">
          <span className="ring-score">{score}</span>
          <span className="ring-of">OF {total}</span>
        </div>
      </div>

      <p className="verdict-line">{verdictFor(pct)}</p>

      <div className="marks" aria-label={`${score} of ${total} correct`}>
        {results.map((r, i) => (
          <span className={`mark ${r.correct ? 'hit' : ''}`} key={i} />
        ))}
      </div>

      {byCat.size > 1 && (
        <div className="breakdown">
          {[...byCat.entries()]
            .sort((a, b) => b[1].correct / b[1].total - a[1].correct / a[1].total)
            .map(([cat, c]) => (
              <div
                className="bd-row"
                key={cat}
                style={{ ['--cat' as string]: `var(${categoryVar(cat)})` }}
              >
                <span className="bd-name">
                  <span className="dot" />
                  {cat}
                </span>
                <span className="bd-bar">
                  <span style={{ width: `${(100 * c.correct) / c.total}%` }} />
                </span>
                <span className="bd-val">
                  {c.correct}/{c.total}
                </span>
              </div>
            ))}
        </div>
      )}

      <div className="results-actions">
        <button className="cta" onClick={onAgain}>
          {category ? `Another ${category} round` : 'Play another round'}
        </button>
        <button className="cta ghost" onClick={onPickCategory}>
          Pick a category
        </button>
        <button className="cta ghost" onClick={share}>
          {copied ? 'Copied ✓' : 'Copy result'}
        </button>
      </div>

      <p className="reflect">
        The misses are the interesting part. Each one marks a place where the world behaves
        differently than your model predicted — which is exactly the kind of thing worth knowing.
      </p>

      {life.answered > 0 && (
        <p className="fineprint">
          Lifetime: {Math.round((100 * life.correct) / life.answered)}% correct across{' '}
          {life.answered} answer{life.answered === 1 ? '' : 's'} in {life.rounds} round
          {life.rounds === 1 ? '' : 's'} — stored only in this browser.
        </p>
      )}

      {SHOW_DONATE && (
        <div className="donate-card">
          <span className="donate-copy">
            <strong>Priors is free and has no ads.</strong>
            Every question is researched and sourced by hand. If it changed your mind about
            something, you can help keep it going.
          </span>
          <a className="cta small" href={DONATE_URL} target="_blank" rel="noreferrer">
            Support the project
          </a>
        </div>
      )}
    </div>
  );
}
