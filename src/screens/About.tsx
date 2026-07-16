import { FEEDBACK_MAILTO, SUBMIT_MAILTO } from '../App';

interface Props {
  onBack: () => void;
}

export default function About({ onBack }: Props) {
  return (
    <div className="about">
      <h1>How it works</h1>

      <h3>The idea</h3>
      <p>
        In machine learning, a world model is only as good as its predictions of the environment.
        In science, a theory is only as good as its predictions of experiments. A worldview should
        be held to the same standard: it is only as good as its ability to predict the world
        around you. That makes it testable — objectively, and without arguing about values.
      </p>
      <p>
        So every question here is a prediction task on a real, measured fact — chosen specifically
        because people with different worldviews (religious and secular, left and right) expect
        confidently different answers. If a question wouldn't surprise anyone, it gets cut. The
        sting when a number contradicts you isn't a bug; it's the entire product. Surprise is what
        updating feels like.
      </p>

      <h3>The rules we hold ourselves to</h3>
      <ul>
        <li>
          <strong>Reasoning, not recall.</strong> Stats are framed as rates (per person, per user,
          per unit of electricity), and anchor comparisons are provided, so a good model of the
          world — not memorized facts — is what scores.
        </li>
        <li>
          <strong>Primary sources, always.</strong> Every answer links the study or dataset and
          names sample sizes. Where the publisher has a stake, a funding note says so.
        </li>
        <li>
          <strong>Honest caveats.</strong> If a finding is correlational, contested, or limited in
          scope, the answer says that too. A stat you can dismiss is a stat we failed to present.
        </li>
        <li>
          <strong>Balanced offense.</strong> The bank is curated so every worldview runs into
          results that fight its priors. If only one tribe is ever surprised, we're doing
          propaganda, not calibration.
        </li>
      </ul>

      <h3>Scoring</h3>
      <p>
        Your score measures calibration: how often the world behaves the way your model predicts.
        Results and per-category stats are stored only in your browser — there are no accounts and
        no tracking.
      </p>

      <h3>Help make it better</h3>
      <p>
        Thumbs up/down on any question. <a href={FEEDBACK_MAILTO}>Send feedback</a> on anything
        else, or <a href={SUBMIT_MAILTO}>propose a new statistic</a> — the best questions are ones
        where confident people disagree about what the data will say.
      </p>

      <button className="cta" onClick={onBack}>
        Back
      </button>
    </div>
  );
}
