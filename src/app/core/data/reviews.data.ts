import { Review } from '../models';

/** Neutral placeholders until client-approved testimonials are supplied. */
export const REVIEWS: Review[] = [
  {
    id: 'r1',
    quote:
      'Placeholder review: Our Midtown suite has looked consistently presentable for visitors and staff since we started a three-day weekly schedule.',
    author: 'Operations lead',
    role: 'Professional services firm · Manhattan',
    rating: 5,
    placeholder: true,
  },
  {
    id: 'r2',
    quote:
      'Placeholder review: Evening cleaning stays out of the way of retail hours, and the entrance glass and floors are ready before we open.',
    author: 'Store manager',
    role: 'Specialty retail · Brooklyn',
    rating: 5,
    placeholder: true,
  },
  {
    id: 'r3',
    quote:
      'Placeholder review: The same crew knows our clinic layout, which makes restroom and waiting-room standards easier to maintain.',
    author: 'Practice administrator',
    role: 'Medical office · Manhattan',
    rating: 5,
    placeholder: true,
  },
  {
    id: 'r4',
    quote:
      'Placeholder review: Flexible overnight windows and a clear point of contact have made recurring janitorial coverage straightforward.',
    author: 'Facilities coordinator',
    role: 'Multi-tenant commercial building · Queens',
    rating: 4,
    placeholder: true,
  },
];
