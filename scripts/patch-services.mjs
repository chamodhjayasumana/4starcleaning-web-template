import fs from 'fs';

const path = 'src/app/core/data/services.data.ts';
let s = fs.readFileSync(path, 'utf8');
s = s.replace(/\r\n/g, '\n');

if (!s.includes("category: 'core'")) {
  s = s.replace(/\n    image:\n/g, "\n    category: 'core',\n    image:\n");
}

const specialty = `  {
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
`;

if (!s.includes("id: 'covid'")) {
  const marker = '\n];\n\nexport function getServiceBySlug';
  const insert = `,\n${specialty}\n];\n\nexport function getCoreServices(): CleaningService[] {\n  return SERVICES.filter((s) => s.category === 'core');\n}\n\nexport function getSpecialtyServices(): CleaningService[] {\n  return SERVICES.filter((s) => s.category === 'specialty');\n}\n\nexport function getServiceBySlug`;
  if (!s.includes(marker)) {
    console.error('marker not found', JSON.stringify(s.slice(-120)));
    process.exit(1);
  }
  s = s.replace(marker, insert);
}

fs.writeFileSync(path, s.replace(/\n/g, '\r\n'));
console.log('services updated ok');
