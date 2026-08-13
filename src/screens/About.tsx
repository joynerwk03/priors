import { useState } from 'react';
import { QUESTIONS } from '../data/questions';
import { DONATE_URL, FEEDBACK_FORM_URL, SHOW_DONATE, SUBMIT_MAILTO } from '../config';
import { exportFeedback } from '../lib/storage';

interface Props {
  onBack: () => void;
}

type CopyState = 'idle' | 'copied' | 'empty' | 'failed';

export default function About({ onBack }: Props) {
  const [copyState, setCopyState] = useState<CopyState>('idle');

  async function copyRatings() {
    const text = exportFeedback();
    if (!text) {
      setCopyState('empty');
      return;
    }
    try {
      await navigator.clipboard.writeText(text);
      setCopyState('copied');
    } catch {
      // Clipboard API needs a secure context and permission; both can fail.
      setCopyState('failed');
    }
  }

  const copyMessage: Record<CopyState, string> = {
    idle: '',
    copied: 'Copied. Paste it into the form.',
    empty: "You haven't rated any questions yet.",
    failed: 'Copy failed. Your browser blocked clipboard access.',
  };

  return (
    <div className="about">
      <p className="kicker">Methodology</p>
      <h1>How it works</h1>

      <h3>The idea</h3>
      <p>
        In machine learning, a world model is only as good as its predictions of the environment. In
        science, a theory is only as good as its predictions of experiments. A worldview should be
        held to the same standard: it is only as good as its ability to predict the world around
        you. That makes it testable — objectively, and without arguing about values.
      </p>
      <p>
        So every question here is a prediction task about a real, measured fact, chosen because
        people with different worldviews expect confidently different answers. If a question
        wouldn't surprise anyone, it gets cut. The sting when a number contradicts you isn't a bug;
        it's the entire product. Surprise is what updating feels like.
      </p>

      <h3>The rules we hold ourselves to</h3>
      <ul>
        <li>
          <strong>Reasoning, not recall.</strong> Stats are framed as rates — per person, per user,
          per unit of electricity — and anchor comparisons are provided, so a good model of the
          world, not a good memory, is what scores.
        </li>
        <li>
          <strong>No giveaways.</strong> Every option in a question shares the same form and
          precision, and the true answer is often not the most extreme choice. You should not be
          able to game a question without reasoning about it.
        </li>
        <li>
          <strong>Primary sources, always.</strong> Every answer links the study or dataset and
          names sample sizes. Where the publisher has a stake, a funding note says so.
        </li>
        <li>
          <strong>Honest caveats.</strong> If a finding is correlational, contested, or narrow in
          scope, the answer says so. A stat you can dismiss is a stat we failed to present.
        </li>
        <li>
          <strong>Balanced offense.</strong> The bank is curated so every worldview runs into
          results that fight its priors. If only one tribe is ever surprised, we're doing
          propaganda, not calibration.
        </li>
      </ul>

      <h3>About the "why" explanations</h3>
      <p>
        The statistic is the solid part; the <em>cause</em> is usually where the argument lives. So
        the optional "Why might this be?" panel gives a <strong>proposed mechanism</strong> — a
        hypothesis, not a verdict — and where the cause is genuinely disputed, it names the
        competing explanations instead of picking one. A fact can be rock-solid while its
        explanation is still being fought over. That's not a hedge; it's the honest state of play.
      </p>

      <h3>Scoring</h3>
      <p>
        Your score measures calibration: how often the world behaves the way your model predicts.
        Results and per-category stats live only in your browser — there are no accounts and no
        tracking. All {QUESTIONS.length} questions are researched by hand.
      </p>

      <h3>Help make it better</h3>
      <p>
        Thumbs up or down on any question.{' '}
        <a href={FEEDBACK_FORM_URL} target="_blank" rel="noreferrer">
          Send feedback
        </a>{' '}
        on anything else, or <a href={SUBMIT_MAILTO}>propose a new statistic</a> — the best
        questions are the ones where confident people disagree about what the data will say.
        {SHOW_DONATE && (
          <>
            {' '}
            If Priors is useful to you,{' '}
            <a href={DONATE_URL} target="_blank" rel="noreferrer">
              you can support it here
            </a>
            .
          </>
        )}
      </p>
      <p>
        Your thumbs are stored in your browser and never sent anywhere on their own. If you want
        them to count, copy them and paste them into the form.{' '}
        <button className="linklike" type="button" onClick={copyRatings}>
          Copy my ratings
        </button>
        {copyState !== 'idle' && <span className="copy-note"> {copyMessage[copyState]}</span>}
      </p>

      <button className="cta" onClick={onBack}>
        Back to the test
      </button>
    </div>
  );
}
