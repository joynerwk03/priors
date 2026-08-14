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

// The mailto constants that used to live here were removed 2026-08-13. The
// form now has fields for feedback, stat proposals, and pasted ratings, so
// every channel goes through one reliable link. Dead mailto helpers were only
// an invitation to re-adopt a channel that silently fails for webmail users.
