import { useState } from 'react';
import type { Question } from '../types';
import { recordAnswer, recordRound, setFeedback } from '../lib/storage';
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

  const pick = (i: number) => {
    if (answered) return;
    const isCorrect = i === q.answerIndex;
    setGuess(i);
    setResults([...results, { question: q, guess: i, correct: isCorrect }]);
    recordAnswer(q.id, i, isCorrect);
  };

  const next = () => {
    if (index + 1 >= round.length) {
      recordRound(score, round.length);
      onDone(results);
    } else {
      setIndex(index + 1);
      setGuess(null);
      setThumb(null);
    }
  };

  const optionClass = (i: number): string => {
    if (!answered) return 'option';
    if (i === q.answerIndex) return 'option correct';
    if (i === guess) return 'option wrong';
    return 'option dim';
  };

  return (
    <div className="quiz">
      <div className="quiz-meta">
        <span className="chip">{q.category}</span>
        <span className="counter">
          {index + 1} / {round.length}
        </span>
        <span className="score">✓ {score}</span>
      </div>
      <div className="progress">
        <div className="progress-fill" style={{ width: `${(index / round.length) * 100}%` }} />
      </div>

      {q.context && (
        <p className="anchor">
          <span className="anchor-label">Anchor</span> {q.context}
        </p>
      )}

      <h2 className="prompt">{q.prompt}</h2>

      <div className="options">
        {q.options.map((opt, i) => (
          <button key={i} className={optionClass(i)} onClick={() => pick(i)} disabled={answered}>
            {opt}
          </button>
        ))}
      </div>

      {answered && (
        <div className={`reveal ${correct ? 'reveal-correct' : 'reveal-wrong'}`}>
          <p className="verdict">{correct ? 'Your prior held.' : 'Reality disagrees.'}</p>
          <p className="explanation">{q.explanation}</p>
          {q.caveat && <p className="caveat">Caveat: {q.caveat}</p>}
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
                Why might this be? <span className="why-hint">a proposed explanation ↓</span>
              </summary>
              <div className="why-body">
                <p>{q.why.body}</p>
                {q.why.sources?.map((s, i) => (
                  <p className="source" key={i}>
                    {s.name} — {s.detail}{' '}
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
                aria-label="Thumbs up"
                onClick={() => {
                  setFeedback(q.id, 1);
                  setThumb(1);
                }}
              >
                👍
              </button>
              <button
                className={`thumb ${thumb === -1 ? 'on' : ''}`}
                aria-label="Thumbs down"
                onClick={() => {
                  setFeedback(q.id, -1);
                  setThumb(-1);
                }}
              >
                👎
              </button>
            </span>
            <button className="cta small" onClick={next}>
              {index + 1 >= round.length ? 'See results' : 'Next question'}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
