import { SpecialOffer } from '../models';

/**
 * Sample promotions. Offers with expiresAt before today are treated as expired
 * and hidden by the offers page / homepage helpers.
 */
export const SPECIAL_OFFERS: SpecialOffer[] = [
  {
    id: 'spring-300',
    title: 'New monthly weekday program',
    description:
      'Sample promotion for demo purposes: credit toward the first month when you enroll in a five-times-per-week commercial plan.',
    discountLabel: '$300 off',
    terms:
      'Illustrative demo offer. Applies to new monthly 5×/week commercial cleaning programs. Not a live booking incentive.',
    expiresAt: '2026-11-30',
    active: true,
  },
  {
    id: 'welcome-300',
    title: 'Weekday recurring service credit',
    description:
      'Sample promotion highlighting a first-month credit for businesses starting a five-day weekly cleaning schedule.',
    discountLabel: '$300 off',
    terms:
      'Illustrative demo offer for sales walkthroughs. Valid only while listed as active and before the expiry date.',
    expiresAt: '2026-03-31',
    active: true,
  },
  {
    id: 'expired-holiday',
    title: 'Holiday kickoff credit (expired sample)',
    description:
      'This sample offer is intentionally expired so the demo can show automatic hiding of outdated promotions.',
    discountLabel: '$150 off',
    terms: 'Expired sample — should not appear in the public offer list.',
    expiresAt: '2024-12-31',
    active: true,
  },
];

export function isOfferVisible(offer: SpecialOffer, today = new Date()): boolean {
  if (!offer.active) {
    return false;
  }
  const [year, month, day] = offer.expiresAt.split('-').map(Number);
  const expiry = new Date(year, month - 1, day, 23, 59, 59);
  return expiry.getTime() >= today.getTime();
}

export function getVisibleOffers(today = new Date()): SpecialOffer[] {
  return SPECIAL_OFFERS.filter((offer) => isOfferVisible(offer, today));
}
