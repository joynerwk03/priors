/**
 * ⚠️ SET THIS BEFORE DEPLOYING.
 *
 * `DONATE_URL` is a PLACEHOLDER and does not point at a real account. Replace
 * it with your own Ko-fi / Buy Me a Coffee / GitHub Sponsors / Stripe page.
 * Left as-is, the donate link goes nowhere useful.
 */
export const DONATE_URL = 'https://ko-fi.com/YOUR_HANDLE';

/** Set false to hide every donate affordance until the URL above is real. */
export const SHOW_DONATE = true;

export const CONTACT_EMAIL = 'joynerwk03@gmail.com';

export const FEEDBACK_MAILTO =
  `mailto:${CONTACT_EMAIL}?subject=` + encodeURIComponent('Priors feedback');

export const SUBMIT_MAILTO =
  `mailto:${CONTACT_EMAIL}?subject=` +
  encodeURIComponent('Priors: new stat proposal') +
  '&body=' +
  encodeURIComponent(
    'The claim or relationship:\n\n' +
      'The data source it would cite:\n\n' +
      'Why people with different worldviews would predict different answers:\n\n',
  );
