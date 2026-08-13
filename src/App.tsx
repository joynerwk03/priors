import { useMemo, useState } from 'react';
import { QUESTIONS } from './data/questions';
import type { Category, Question } from './types';
import { buildRound } from './lib/round';
import { lifetimeStats } from './lib/storage';
import { DONATE_URL, FEEDBACK_FORM_URL, SHOW_DONATE, SUBMIT_MAILTO } from './config';
import Home from './screens/Home';
import Quiz from './screens/Quiz';
import Results from './screens/Results';
import type { RoundResult } from './screens/Results';
import About from './screens/About';

type Screen =
  | { name: 'home' }
  | { name: 'about' }
  | { name: 'quiz'; round: Question[]; category?: Category }
  | { name: 'results'; results: RoundResult[]; category?: Category };

export default function App() {
  const [screen, setScreen] = useState<Screen>({ name: 'home' });

  const categoryOf = useMemo(() => {
    const m = new Map(QUESTIONS.map((q) => [q.id, q.category]));
    return (id: string) => m.get(id);
  }, []);

  const startRound = (category?: Category) => {
    const { seenIds } = lifetimeStats(categoryOf);
    const pool = category ? QUESTIONS.filter((q) => q.category === category) : QUESTIONS;
    setScreen({ name: 'quiz', round: buildRound(pool, seenIds), category });
    window.scrollTo({ top: 0 });
  };

  const goHome = () => setScreen({ name: 'home' });

  return (
    <div className="shell">
      <header className="topbar">
        <button className="wordmark" onClick={goHome}>
          Priors
        </button>
        <nav className="topnav">
          <button className="navlink" onClick={() => setScreen({ name: 'about' })}>
            How it works
          </button>
          {SHOW_DONATE && (
            <a className="navlink" href={DONATE_URL} target="_blank" rel="noreferrer">
              Donate
            </a>
          )}
        </nav>
      </header>

      <main className="content">
        {screen.name === 'home' && <Home onStart={startRound} categoryOf={categoryOf} />}
        {screen.name === 'about' && <About onBack={goHome} />}
        {screen.name === 'quiz' && (
          <Quiz
            round={screen.round}
            onDone={(results) => setScreen({ name: 'results', results, category: screen.category })}
          />
        )}
        {screen.name === 'results' && (
          <Results
            results={screen.results}
            category={screen.category}
            onAgain={() => startRound(screen.category)}
            onPickCategory={goHome}
            categoryOf={categoryOf}
          />
        )}
      </main>

      <footer className="foot">
        <span>Every answer cites a primary source.</span>
        <span className="foot-links">
          <a href={FEEDBACK_FORM_URL} target="_blank" rel="noreferrer">
            Feedback
          </a>
          <a href={SUBMIT_MAILTO}>Submit a stat</a>
          {SHOW_DONATE && (
            <a href={DONATE_URL} target="_blank" rel="noreferrer">
              Donate
            </a>
          )}
        </span>
      </footer>
    </div>
  );
}
