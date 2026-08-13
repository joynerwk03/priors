/** William's Ko-fi page. Set 2026-08-13, replacing the launch-blocking placeholder. */
export const DONATE_URL = 'https://ko-fi.com/joynerwk03';

/** Set false to hide every donate affordance until the URL above is real. */
export const SHOW_DONATE = true;

/**
 * Google Form for feedback. This is the primary channel: `mailto:` links do
 * nothing for the many desktop visitors who use webmail and have no mail
 * client registered, and they fail silently, which is the worst kind of
 * failure for a feature whose whole job is collecting data.
 */
export const FEEDBACK_FORM_URL =
  'https://docs.google.com/forms/d/e/1FAIpQLSdmwFkSk0YuUemXlLP_x6Bc7m5aontrZScmILo6JgLweR4ONQ/viewform';

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
