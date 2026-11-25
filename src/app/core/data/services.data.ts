import { CleaningService } from '../models';

/** Shared service catalog — used by nav cards, detail pages, and quote options. */
export const SERVICES: CleaningService[] = [
  {
    id: 'office',
    slug: 'office-cleaning',
    name: 'Office Cleaning',
    shortName: 'Office',
    tagline: 'Keep workplaces sharp for teams and visitors.',
    summary:
      'Recurring office cleaning for NYC commercial spaces—desks, floors, restrooms, breakrooms, and shared areas on a schedule that fits your hours.',
    description:
      'Four Star builds ongoing office cleaning programs for single-floor suites, multi-floor buildings, and mixed-use commercial spaces across New York City. Teams handle dusting, floor care, restroom sanitizing and restocking, kitchen and breakroom cleaning, glass and entryways, waste and recycling, and spot cleaning. Service is available around the clock; the minimum commitment is one weekly visit of at least two hours. One-time residential jobs are not offered—this demo focuses on recurring commercial programs.',
    highlights: [
      'Custom daily, weekly, or monthly schedules',
      '24/7 availability for after-hours service',
      'Minimum one weekly visit (2 hours)',
      'Insured and bonded cleaning teams',
    ],
    includes: [
      'Workstation and common-area dusting',
      'Carpet vacuuming and hard-floor care',
      'Restroom cleaning and supply restocking',
      'Breakroom and kitchen sanitizing',
      'Trash and recycling removal',
      'Entry glass and high-touch surface care',
    ],
    category: 'core',
    image:
      'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1400&q=80',
    imageAlt: 'Bright modern office interior with desks and large windows',
  },
  {
    id: 'janitorial',
    slug: 'janitorial-services',
    name: 'Janitorial Services',
    shortName: 'Janitorial',
    tagline: 'Steady facility maintenance from a consistent crew.',
    summary:
      'Scheduled janitorial maintenance for commercial, medical, and industrial facilities—same trusted team, predictable quality checks, flexible hours.',
    description:
      'Janitorial programs emphasize continuity: uniformed, bonded, and insured staff who stay with accounts for years so your building is not cleaned by a rotating cast of strangers. Core work covers surfaces, kitchens, floors, restrooms, glass, trash, spill response, and high dusting. Optional add-ons include day porter coverage, window washing, electrostatic disinfecting, and restroom supply ordering. Like all Four Star programs, service is recurring with a weekly two-hour minimum.',
    highlights: [
      'Uniformed, bonded, and insured staff',
      'Stable crews familiar with your site',
      'Regular quality checks',
      'Day porter and specialty add-ons available',
    ],
    includes: [
      'Surface washing and sanitizing',
      'Floor sweeping, mopping, vacuuming, and buffing',
      'Restroom sanitizing and restocking',
      'Kitchen appliance and counter care',
      'Window, mirror, and glass door cleaning',
      'Trash, recycling, and spill response',
    ],
    category: 'core',
    image:
      'https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?auto=format&fit=crop&w=1400&q=80',
    imageAlt: 'Commercial hallway with polished floors ready for janitorial care',
  },
  {
    id: 'retail',
    slug: 'retail-cleaning',
    name: 'Retail Cleaning',
    shortName: 'Retail',
    tagline: 'Storefronts that look ready the moment doors open.',
    summary:
      'Retail cleaning tuned to foot traffic—floors, displays, fitting areas, restrooms, and entrances that support a strong first impression.',
    description:
      'Retail environments need clean floors, dust-free displays, clear glass, and welcoming entrances without interrupting sales hours. Four Star schedules work before open, after close, or around peak traffic. Typical scopes cover floor care, shelving and display dusting, restroom sanitizing, window cleaning, trash removal, and deeper steam or entrance resets as needed. Programs are ongoing, not one-off deep cleans only.',
    highlights: [
      'Before-open or after-hours scheduling',
      'Entrance and window focus for curb appeal',
      'Display and high-touch surface care',
      'Green product options available',
    ],
    includes: [
      'Sales-floor vacuuming, sweeping, and mopping',
      'Shelf, fixture, and display dusting',
      'Fitting-room and restroom cleaning',
      'Front entrance and glass maintenance',
      'Trash and recycling pickup',
      'Periodic deep or steam cleaning',
    ],
    category: 'core',
    image:
      'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1400&q=80',
    imageAlt: 'Open retail store interior with clothing displays and clean aisles',
  },
  {
    id: 'medical',
    slug: 'medical-office-cleaning',
    name: 'Medical Office Cleaning',
    shortName: 'Medical',
    tagline: 'Clinical spaces cleaned to a higher hygiene bar.',
    summary:
      'Cleaning for doctors’ offices, dental practices, clinics, and wellness spaces—with trained, insured teams and disinfectant-aware routines.',
    description:
      'Medical and wellness facilities require careful surface disinfection, waiting-room upkeep, exam-area support, and restroom standards that protect patients and staff. Four Star assigns certified, insured cleaners familiar with healthcare environments and green cleaning practices that avoid unnecessary airborne chemicals. Scopes may include approved disinfectant wipe-downs, hard-floor disinfection, furniture dusting, trash removal, and optional day porter support for high-traffic clinics.',
    highlights: [
      'Trained teams for clinical environments',
      'Approved disinfectant protocols',
      'Waiting rooms, stations, and restrooms covered',
      'OSHA-aware commercial practices',
    ],
    includes: [
      'Exam and work-surface sanitizing',
      'Waiting-room and reception cleaning',
      'Bathroom disinfection',
      'Hard-floor dust mopping and disinfecting',
      'Furniture and cabinet dusting',
      'Waste removal and liner replacement',
    ],
    category: 'core',
    image:
      'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1400&q=80',
    imageAlt: 'Clean medical clinic corridor with natural light',
  },
  {
    id: 'green',
    slug: 'green-cleaning',
    name: 'Green Cleaning',
    shortName: 'Green',
    tagline: 'Commercial results with lower-impact products.',
    summary:
      'Eco-conscious cleaning programs using toxin-free supplies, efficient equipment, and recycling-minded practices for NYC workplaces.',
    description:
      'Green cleaning pairs the same recurring commercial standards with products and methods chosen to reduce toxins, allergens, and waste. Programs emphasize toxin-free supplies, energy-efficient equipment, recycling participation, and avoiding unnecessary airborne chemicals—useful for offices, medical suites, and retail floors where staff and customers share the air. Green options can be layered onto office, janitorial, retail, or medical scopes.',
    highlights: [
      'Toxin-free cleaning supplies',
      'Energy-efficient equipment',
      'Recycling-minded waste handling',
      'Lower airborne chemical load',
    ],
    includes: [
      'Green-certified product selection where suitable',
      'Standard commercial cleaning scope',
      'Reduced fragrance and VOC options',
      'Recycling stream support',
      'Compatible with office, retail, and medical plans',
      'Ongoing schedule—not one-time only',
    ],
    category: 'core',
    image:
      'https://images.unsplash.com/photo-1611284446314-60a58ac0deb9?auto=format&fit=crop&w=1400&q=80',
    imageAlt: 'Natural cleaning supplies and plants suggesting eco-friendly care',
  },
  {
    id: 'covid',
    slug: 'covid-19-cleaning',
    name: 'COVID-19 Cleaning',
    shortName: 'COVID-19',
    tagline: 'Disinfecting support layered onto recurring commercial programs.',
    summary:
      'Demo specialty program for heightened disinfection routines on high-touch surfaces within ongoing commercial cleaning schedules.',
    description:
      'This demo page summarizes COVID-era disinfection add-ons still requested by some NYC facilities. Work focuses on high-touch surfaces, restrooms, and shared equipment using commercial disinfectant protocols. It is offered as part of recurring commercial programs—not as a one-time residential service. Content is illustrative for sales demos.',
    highlights: [
      'High-touch surface emphasis',
      'Fits daily or multi-day schedules',
      'Pairs with office, medical, and retail scopes',
      'Demo content — confirm live protocols with operations',
    ],
    includes: [
      'Door handles, switches, and shared controls',
      'Restroom and breakroom disinfection',
      'Reception and common-area wipe-downs',
      'Optional electrostatic support where specified',
    ],
    category: 'specialty',
    image:
      'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1400&q=80',
    imageAlt: 'Disinfecting cleaning supplies on a commercial surface',
  },
  {
    id: 'carpet',
    slug: 'carpet-cleaning',
    name: 'Carpet Cleaning',
    shortName: 'Carpet',
    tagline: 'Scheduled carpet care for commercial floors.',
    summary:
      'Vacuuming plus periodic deep or low-moisture carpet cleaning for offices, retail, and common areas on recurring plans.',
    description:
      'Demo specialty for commercial carpet maintenance: routine vacuuming during visits and periodic extraction or low-moisture deep cleans. Frequency depends on traffic. Residential carpet jobs are out of scope for this commercial demo.',
    highlights: [
      'Routine vacuuming on service nights',
      'Periodic deep cleaning options',
      'HEPA-minded commercial equipment where available',
      'Scheduled with your recurring program',
    ],
    includes: [
      'Traffic-lane vacuuming',
      'Spot treatment during visits',
      'Periodic steam or low-moisture cleaning',
      'Coordination with after-hours access',
    ],
    category: 'specialty',
    image:
      'https://images.unsplash.com/photo-1558317374-067fb5f30001?auto=format&fit=crop&w=1400&q=80',
    imageAlt: 'Commercial carpeted office corridor',
  },
  {
    id: 'stripping',
    slug: 'stripping-and-sealing',
    name: 'Stripping and Sealing',
    shortName: 'Floors',
    tagline: 'Hard-floor restoration for commercial spaces.',
    summary:
      'Demo specialty for stripping, sealing, and refinishing hard floors as part of ongoing facility care.',
    description:
      'Illustrative specialty for commercial vinyl, VCT, and similar hard floors that need periodic strip and seal or wax cycles. Usually scheduled outside peak hours within a recurring relationship.',
    highlights: [
      'Strip, seal, and wax cycles',
      'After-hours friendly scheduling',
      'Pairs with janitorial floor care',
      'Demo scope — finalize finishes on walkthrough',
    ],
    includes: [
      'Floor assessment and prep',
      'Strip and neutralize',
      'Seal / finish coats',
      'Burnish or buff as specified',
    ],
    category: 'specialty',
    image:
      'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1400&q=80',
    imageAlt: 'Polished commercial hard floor hallway',
  },
  {
    id: 'high-dusting',
    slug: 'high-dusting',
    name: 'High Dusting',
    shortName: 'High dust',
    tagline: 'Above-reach dusting for ceilings, vents, and fixtures.',
    summary:
      'Periodic high dusting for commercial interiors—vents, pipes, ceiling corners, and tall fixtures.',
    description:
      'Demo specialty covering elevated dusting that standard nightly scopes may skip. Useful for offices, warehouses, and medical corridors. Usually booked on a recurring cadence or as periodic deep-clean add-ons.',
    highlights: [
      'Vents, pipes, and high corners',
      'Scheduled periodic visits',
      'Safety-minded commercial methods',
      'Works with office and industrial accounts',
    ],
    includes: [
      'Ceiling corners and ledges',
      'Air vents and returns (accessible)',
      'Tall fixtures and signage',
      'Coordination with site safety rules',
    ],
    category: 'specialty',
    image:
      'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1400&q=80',
    imageAlt: 'Commercial interior ceiling and lighting fixtures',
  },
  {
    id: 'spring',
    slug: 'spring-cleaning',
    name: 'Spring / Deep Cleaning',
    shortName: 'Deep clean',
    tagline: 'Seasonal deep-clean boosts on top of weekly service.',
    summary:
      'Demo specialty for deeper seasonal resets while keeping the minimum weekly recurring commitment.',
    description:
      'Illustrative deep-clean add-on for commercial accounts that already have recurring service. May include detailed kitchen resets, detail dusting, and harder-to-reach areas. Not a substitute for one-time-only residential cleans.',
    highlights: [
      'Seasonal or quarterly deep resets',
      'Builds on weekly minimum service',
      'Custom checklist per facility',
      'Demo content for sales conversations',
    ],
    includes: [
      'Detailed dusting and detailing',
      'Appliance and cabinet exteriors',
      'Baseboards and corners',
      'Agreed specialty areas',
    ],
    category: 'specialty',
    image:
      'https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?auto=format&fit=crop&w=1400&q=80',
    imageAlt: 'Bright clean commercial interior ready after deep cleaning',
  },

];

export function getCoreServices(): CleaningService[] {
  return SERVICES.filter((s) => s.category === 'core');
}

export function getSpecialtyServices(): CleaningService[] {
  return SERVICES.filter((s) => s.category === 'specialty');
}

export function getServiceBySlug(slug: string): CleaningService | undefined {
  return SERVICES.find((s) => s.slug === slug);
}

export function getServiceById(id: string): CleaningService | undefined {
  return SERVICES.find((s) => s.id === id);
}
