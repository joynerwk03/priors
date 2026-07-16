import { QUESTIONS } from '../data/questions';
import type { Category } from '../types';
import { lifetimeStats } from '../lib/storage';

interface Props {
  onStart: () => void;
  categoryOf: (id: string) => Category | undefined;
}

export default function Home({ onStart, categoryOf }: Props) {
  const categories = [...new Set(QUESTIONS.map((q) => q.category))];
  const life = lifetimeStats(categoryOf);

  return (
    <div className="home">
      <p className="kicker">A worldview test — not a trivia quiz</p>
      <h1>
        Your worldview makes predictions.
        <br />
        <em>Test them.</em>
      </h1>
      <p className="lede">
        A scientific theory earns trust by predicting experiments. A worldview should earn trust
        the same way: by predicting the world. Each question below asks you to predict a real
        statistic that people with different worldviews expect wildly different answers to. Reason
        it out, commit to a guess, then see what the data says — with the source.
      </p>

      <ol className="how">
        <li>
          <strong>Read the question.</strong> Rates, not raw counts — and we give you anchor facts,
          so no specialist knowledge is needed.
        </li>
        <li>
          <strong>Reason from your model of the world.</strong> Every question is guessable. None
          are trivia.
        </li>
        <li>
          <strong>Face the data.</strong> Primary source, funding disclosure, and the honest
          caveats — dismissing it is meant to be hard.
        </li>
      </ol>

      <button className="cta" onClick={onStart}>
        Test your priors — 10 questions
      </button>

      <div className="chips">
        {categories.map((c) => (
          <span className="chip" key={c}>
            {c}
          </span>
        ))}
      </div>

      <p className="fineprint">
        {QUESTIONS.length} questions at launch · sources cited on every answer · your results never
        leave your browser
        {life.rounds > 0 && life.answered > 0 && (
          <>
            {' '}
            · lifetime: {Math.round((100 * life.correct) / life.answered)}% correct over{' '}
            {life.rounds} round{life.rounds === 1 ? '' : 's'}
          </>
        )}
      </p>
    </div>
  );
}
