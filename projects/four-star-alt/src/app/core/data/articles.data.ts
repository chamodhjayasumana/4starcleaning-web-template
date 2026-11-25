import { Article } from '../models';

/** Neutral article placeholders until approved content is available. */
export const ARTICLES: Article[] = [
  {
    id: 'a1',
    slug: 'planning-recurring-office-cleaning',
    title: 'How to plan a recurring office cleaning schedule',
    excerpt:
      'A short placeholder guide to matching visit frequency with foot traffic, restroom count, and after-hours access.',
    body: [
      'This article is a content placeholder for the sales demo. Replace it with approved thought leadership when ready.',
      'Most NYC commercial accounts succeed with a clear weekly cadence—often starting at one two-hour visit and scaling to multi-day coverage as traffic grows.',
      'Document freight-elevator rules, alarm codes, and preferred product constraints before the first service night so the crew can work without interrupting operations.',
    ],
    publishedAt: '2026-09-12',
    category: 'Operations',
    placeholder: true,
  },
  {
    id: 'a2',
    slug: 'what-to-expect-from-a-walkthrough',
    title: 'What to expect from a cleaning walkthrough',
    excerpt:
      'Placeholder overview of site walks: measuring scope, noting finishes, and aligning on recurring frequency.',
    body: [
      'Placeholder copy for demo use only. A walkthrough typically covers square footage, floor types, restroom count, kitchenettes, and security constraints.',
      'Bring preferred service windows and any green-product requirements so the resulting plan reflects how the building actually operates.',
      'The quote form in this demo can flag a walkthrough request; in production that request would route to the operations team.',
    ],
    publishedAt: '2026-08-03',
    category: 'Getting started',
    placeholder: true,
  },
  {
    id: 'a3',
    slug: 'green-cleaning-in-shared-workspaces',
    title: 'Green cleaning basics for shared workspaces',
    excerpt:
      'Placeholder notes on toxin-conscious products, recycling streams, and communicating expectations to occupants.',
    body: [
      'Demo placeholder. Green programs emphasize lower-toxicity supplies and clearer waste separation without sacrificing commercial standards.',
      'Tell occupants where recycling belongs and which surfaces use fragrance-free products to reduce day-two confusion.',
      'Pair green product choices with the same recurring schedule discipline used on standard office and medical accounts.',
    ],
    publishedAt: '2026-06-18',
    category: 'Sustainability',
    placeholder: true,
  },
];

export function getArticleBySlug(slug: string): Article | undefined {
  return ARTICLES.find((a) => a.slug === slug);
}
