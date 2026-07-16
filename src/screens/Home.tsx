import { QUESTIONS } from '../data/questions';
import type { Category } from '../types';
import { lifetimeStats } from '../lib/storage';

interface Props {
  onStart: (category?: Category) => void;
  categoryOf: (id: string) => Category | undefined;
}

const ICONS: Record<Category, string> = {
  Politics: '🏛️',
  Religion: '⛪',
  Science: '🔬',
  'Drugs & Health': '💊',
  'Justice & Crime': '⚖️',
  Economics: '📈',
  Society: '👥',
  Environment: '🌍',
};

export default function Home({ onStart, categoryOf }: Props) {
  const counts = new Map<Category, number>();
  for (const q of QUESTIONS) counts.set(q.category, (counts.get(q.category) ?? 0) + 1);
  const categories = [...counts.keys()].sort((a, b) => a.localeCompare(b));
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
        the same way: by predicting the world. Each question asks you to predict a real statistic
        that people with different worldviews expect wildly different answers to. Reason it out,
        commit to a guess, then see what the data says — with the source.
      </p>

      <button className="cta big-cta" onClick={() => onStart()}>
        Mixed round — {Math.min(10, QUESTIONS.length)} questions across every topic
      </button>

      <p className="pick-label">…or pick a category</p>
      <div className="cat-grid">
        {categories.map((c) => (
          <button className="cat-card" key={c} onClick={() => onStart(c)}>
            <span className="cat-icon" aria-hidden="true">
              {ICONS[c]}
            </span>
            <span className="cat-title">{c}</span>
            <span className="cat-count">{counts.get(c)} questions</span>
          </button>
        ))}
      </div>

      <p className="fineprint">
        {QUESTIONS.length} questions · sources cited on every answer · your results never leave
        your browser
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
