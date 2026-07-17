import { QUESTIONS } from '../data/questions';
import type { Category } from '../types';
import { lifetimeStats } from '../lib/storage';
import { CATEGORY_BLURB, categoryVar } from '../lib/categories';

interface Props {
  onStart: (category?: Category) => void;
  categoryOf: (id: string) => Category | undefined;
}

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
        A scientific theory earns trust by predicting experiments. A worldview should earn trust the
        same way — by predicting the world. Each question asks you to predict a real statistic that
        people of different worldviews expect wildly different answers to. Reason it out, commit,
        then see what the data says.
      </p>

      <button className="cta big-cta" onClick={() => onStart()}>
        <span>Take the mixed test</span>
        <span className="cta-sub">10 questions drawn from every topic</span>
      </button>

      <p className="rule-label">or pick your battleground</p>

      <div className="cat-grid">
        {categories.map((c) => {
          const stat = life.byCategory.get(c);
          const pct =
            stat && stat.answered > 0 ? Math.round((100 * stat.correct) / stat.answered) : null;
          return (
            <button
              className="cat-card"
              key={c}
              style={{ ['--cat' as string]: `var(${categoryVar(c)})` }}
              onClick={() => onStart(c)}
            >
              <span className="cat-head">
                <span className="dot" />
                <span className="cat-title">{c}</span>
              </span>
              <span className="cat-blurb">{CATEGORY_BLURB[c]}</span>
              <span className="cat-foot">
                <span>{counts.get(c)} questions</span>
                {pct !== null && (
                  <span className="cat-acc">
                    <span className="mini-meter">
                      <span style={{ width: `${pct}%` }} />
                    </span>
                    {pct}%
                  </span>
                )}
              </span>
            </button>
          );
        })}
      </div>

      <p className="fineprint">
        {QUESTIONS.length} questions · every answer cites a primary source · results never leave
        your browser
        {life.rounds > 0 && life.answered > 0 && (
          <>
            {' '}
            · your lifetime accuracy {Math.round((100 * life.correct) / life.answered)}% over{' '}
            {life.rounds} round{life.rounds === 1 ? '' : 's'}
          </>
        )}
      </p>
    </div>
  );
}
