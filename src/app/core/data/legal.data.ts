import { LegalPage } from '../models';

/** Demo legal placeholders — not production policies. */
export const LEGAL_PAGES: LegalPage[] = [
  {
    slug: 'privacy-policy',
    title: 'Privacy Policy',
    updatedAt: '2026-11-01',
    sections: [
      {
        heading: 'Demo notice',
        paragraphs: [
          'This privacy policy page is a placeholder for the sales demo. It does not describe live data practices for Four Star General Cleaning Service.',
          'The quote form on this demo stores submissions only in browser memory for the session. Nothing is emailed or sent to a production endpoint.',
        ],
      },
      {
        heading: 'Information you enter',
        paragraphs: [
          'During a walkthrough you may enter name, company, email, phone, ZIP, and facility details. Those values remain on the device until the page session is cleared.',
          'Replace this page with counsel-approved policy text before any public launch.',
        ],
      },
    ],
  },
  {
    slug: 'terms-and-conditions',
    title: 'Terms and Conditions',
    updatedAt: '2026-11-01',
    sections: [
      {
        heading: 'Demo notice',
        paragraphs: [
          'These terms are illustrative only for the private website concept demo. They are not a binding service agreement.',
          'Submitting a demo quote does not create a cleaning contract, booking, or obligation for either party.',
        ],
      },
      {
        heading: 'Service framing',
        paragraphs: [
          'Live Four Star programs emphasize recurring commercial cleaning with a minimum of one weekly visit of two hours. One-time residential services are outside this demo’s scope.',
          'Replace this page with approved terms before production use.',
        ],
      },
    ],
  },
];

export function getLegalPage(slug: string): LegalPage | undefined {
  return LEGAL_PAGES.find((p) => p.slug === slug);
}
