import { useCallback, useEffect, useState } from 'react';
import type { Question } from '../types';
import { recordAnswer, recordRound, setFeedback } from '../lib/storage';
import { categoryVar } from '../lib/categories';
import type { RoundResult } from './Results';

interface Props {
  round: Question[];
  onDone: (results: RoundResult[]) => void;
}

export default function Quiz({ round, onDone }: Props) {
  const [index, setIndex] = useState(0);
  const [guess, setGuess] = useState<number | null>(null);
  const [results, setResults] = useState<RoundResult[]>([]);
  const [thumb, setThumb] = useState<1 | -1 | null>(null);

  const q = round[index];
  const answered = guess !== null;
  const correct = answered && guess === q.answerIndex;
  const score = results.filter((r) => r.correct).length;

  const pick = useCallback(
    (i: number) => {
      if (guess !== null || i >= q.options.length) return;
      const isCorrect = i === q.answerIndex;
      setGuess(i);
      setResults((prev) => [...prev, { question: q, guess: i, correct: isCorrect }]);
      recordAnswer(q.id, i, isCorrect);
    },
    [guess, q],
  );

  const next = useCallback(() => {
    if (index + 1 >= round.length) {
      recordRound(results.filter((r) => r.correct).length, round.length);
      onDone(results);
    } else {
      setIndex((n) => n + 1);
      setGuess(null);
      setThumb(null);
    }
  }, [index, round.length, results, onDone]);

  // Keyboard: 1–9 to answer, Enter/Space to advance.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.metaKey || e.ctrlKey || e.altKey) return;
      if (!answered && /^[1-9]$/.test(e.key)) {
        pick(Number(e.key) - 1);
      } else if (answered && (e.key === 'Enter' || e.key === ' ')) {
        e.preventDefault();
        next();
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [answered, pick, next]);

  const optionClass = (i: number): string => {
    if (!answered) return 'option';
    if (i === q.answerIndex) return 'option correct';
    if (i === guess) return 'option wrong';
    return 'option dim';
  };

  return (
    <div className="quiz" style={{ ['--cat' as string]: `var(${categoryVar(q.category)})` }}>
      <div className="quiz-meta">
        <span className="chip">
          <span className="dot" />
          {q.category}
        </span>
        <span className="counter">
          {index + 1} / {round.length} · {score} correct
        </span>
      </div>

      <div className="pips" aria-hidden="true">
        {round.map((_, i) => {
          const r = results[i];
          const cls = r ? (r.correct ? 'pip hit' : 'pip miss') : i === index ? 'pip now' : 'pip';
          return <span className={cls} key={i} />;
        })}
      </div>

      {q.context && (
        <p className="anchor">
          <span className="anchor-label">Anchor</span>
          {q.context}
        </p>
      )}

      <h2 className="prompt">{q.prompt}</h2>

      <div className="options">
        {q.options.map((opt, i) => (
          <button key={i} className={optionClass(i)} onClick={() => pick(i)} disabled={answered}>
            <span className="key" aria-hidden="true">
              {i + 1}
            </span>
            <span>{opt}</span>
          </button>
        ))}
      </div>

      {!answered && (
        <p className="hint">
          Press <kbd>1</kbd>–<kbd>{q.options.length}</kbd> to answer
        </p>
      )}

      {answered && (
        <div className={`reveal ${correct ? 'reveal-correct' : 'reveal-wrong'}`} aria-live="polite">
          <p className="verdict">{correct ? 'Your prior held.' : 'Reality disagrees.'}</p>
          <p className="explanation">{q.explanation}</p>
          {q.caveat && (
            <p className="caveat">
              <b>Caveat.</b> {q.caveat}
            </p>
          )}
          <p className="source">
            Source: <strong>{q.source.name}</strong> — {q.source.detail}{' '}
            <a href={q.source.url} target="_blank" rel="noreferrer">
              view ↗
            </a>
          </p>
          {q.source.funding && <p className="funding">Funding note: {q.source.funding}</p>}

          {q.why && (
            <details className="why">
              <summary>
                Why might this be? <span className="why-hint">a proposed explanation</span>
              </summary>
              <div className="why-body">
                <p>{q.why.body}</p>
                {q.why.sources?.map((s, i) => (
                  <p className="source" key={i}>
                    <strong>{s.name}</strong> — {s.detail}{' '}
                    <a href={s.url} target="_blank" rel="noreferrer">
                      view ↗
                    </a>
                  </p>
                ))}
              </div>
            </details>
          )}

          <div className="reveal-foot">
            <span className="thumbs">
              Fair question?
              <button
                className={`thumb ${thumb === 1 ? 'on' : ''}`}
                aria-label="Fair question"
                onClick={() => {
                  setFeedback(q.id, 1);
                  setThumb(1);
                }}
              >
                👍
              </button>
              <button
                className={`thumb ${thumb === -1 ? 'on' : ''}`}
                aria-label="Unfair question"
                onClick={() => {
                  setFeedback(q.id, -1);
                  setThumb(-1);
                }}
              >
                👎
              </button>
            </span>
            <button className="cta small" onClick={next}>
              {index + 1 >= round.length ? 'See results' : 'Next'} <kbd>↵</kbd>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
