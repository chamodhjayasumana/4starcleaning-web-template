import { FacilityType } from '../models';

/** Facility types matching the live site’s “Facilities We Clean” set (demo copy). */
export const FACILITIES: FacilityType[] = [
  {
    id: 'retail',
    slug: 'retail-stores',
    name: 'Retail stores',
    summary: 'Sales floors, fitting rooms, and storefront glass ready for open.',
    description:
      'Demo facility page for clothing and specialty retail. Recurring programs cover floors, displays, restrooms, entrances, and glass around selling hours.',
    highlights: [
      'Before-open or after-close windows',
      'Entrance and glass focus',
      'Fitting rooms and restrooms',
      'Display dusting without disrupting merchandising',
    ],
    image:
      'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1000&q=80',
    imageAlt: 'Retail clothing store interior',
  },
  {
    id: 'commercial',
    slug: 'commercial-offices-buildings',
    name: 'Commercial offices & buildings',
    summary: 'Multi-tenant corridors, elevators, restrooms, and shared amenities.',
    description:
      'Demo page for commercial buildings and multi-tenant properties needing consistent common-area and suite support on recurring schedules.',
    highlights: [
      'Lobbies and elevator landings',
      'Shared restrooms',
      'Suite turnovers on request',
      '24/7 scheduling flexibility',
    ],
    image:
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1000&q=80',
    imageAlt: 'Glass commercial building facade',
  },
  {
    id: 'offices',
    slug: 'offices',
    name: 'Offices',
    summary: 'Corporate and professional workplaces kept visitor-ready.',
    description:
      'Demo facility page for general office environments—workstations, conference rooms, kitchens, and restrooms on daily, weekly, or monthly plans.',
    highlights: [
      'Workstations and meeting rooms',
      'Breakrooms and restrooms',
      'Waste and recycling',
      'Minimum one weekly 2-hour visit',
    ],
    image:
      'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1000&q=80',
    imageAlt: 'Modern open-plan office',
  },
  {
    id: 'small-offices',
    slug: 'small-offices',
    name: 'Small offices',
    summary: 'Compact suites and local business spaces with reliable weekly coverage.',
    description:
      'Demo page for smaller commercial suites that still need bonded, insured recurring cleaning without a large facilities team on staff.',
    highlights: [
      'Right-sized weekly programs',
      'Flexible evening windows',
      'Same-crew consistency',
      'Green product options',
    ],
    image:
      'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1000&q=80',
    imageAlt: 'Small business office workspace',
  },
  {
    id: 'medical',
    slug: 'medical-facilities',
    name: 'Medical facilities',
    summary: 'Clinics and practices where disinfection standards matter.',
    description:
      'Demo facility page for medical offices and clinics—waiting rooms, restrooms, and clinical support areas with trained, insured teams.',
    highlights: [
      'Disinfectant-aware routines',
      'Waiting room upkeep',
      'Restroom standards',
      'Optional day porter support',
    ],
    image:
      'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1000&q=80',
    imageAlt: 'Medical facility corridor',
  },
  {
    id: 'spas',
    slug: 'spas',
    name: 'Spas & wellness centers',
    summary: 'Treatment rooms and lounges kept calm and guest-ready.',
    description:
      'Demo page for spas and wellness centers needing discreet, recurring cleaning between guest traffic peaks.',
    highlights: [
      'Treatment and lounge areas',
      'Restroom and shower care',
      'Low-fragrance options',
      'Flexible hours',
    ],
    image:
      'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1000&q=80',
    imageAlt: 'Spa wellness treatment room',
  },
  {
    id: 'dental',
    slug: 'dental-offices',
    name: 'Dental offices',
    summary: 'Reception, operatories support areas, and restrooms cleaned carefully.',
    description:
      'Demo facility page for dental practices—reception, restrooms, and non-clinical support areas maintained on recurring schedules.',
    highlights: [
      'Reception presentation',
      'Restroom disinfection',
      'After-hours friendly',
      'Consistent crew',
    ],
    image:
      'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1000&q=80',
    imageAlt: 'Dental office treatment room',
  },
  {
    id: 'schools',
    slug: 'schools',
    name: 'Schools',
    summary: 'Classrooms, corridors, and common areas on education calendars.',
    description:
      'Demo page for schools and education facilities needing recurring corridor, restroom, and classroom support.',
    highlights: [
      'Classroom and hallway care',
      'Restroom programs',
      'Calendar-aware scheduling',
      'Bonded and insured staff',
    ],
    image:
      'https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=1000&q=80',
    imageAlt: 'School hallway with lockers',
  },
  {
    id: 'banks',
    slug: 'banks',
    name: 'Banks',
    summary: 'Lobbies and back-office areas that must look trustworthy daily.',
    description:
      'Demo facility page for bank branches—lobbies, teller areas, restrooms, and offices on recurring commercial plans.',
    highlights: [
      'Lobby presentation',
      'Secure-area coordination',
      'After-close cleaning',
      'Consistent quality checks',
    ],
    image:
      'https://images.unsplash.com/photo-1541354329998-f4d9a9f9297f?auto=format&fit=crop&w=1000&q=80',
    imageAlt: 'Modern bank lobby',
  },
  {
    id: 'tech',
    slug: 'computer-firms',
    name: 'Computer & tech firms',
    summary: 'Open offices and collaboration spaces cleaned around product schedules.',
    description:
      'Demo page for tech and computer firms with open floors, meeting rooms, and kitchens that need overnight or evening service.',
    highlights: [
      'Open-plan dusting and floors',
      'Conference room resets',
      'Kitchenette care',
      'Overnight options',
    ],
    image:
      'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1000&q=80',
    imageAlt: 'Tech office workstations',
  },
  {
    id: 'jewelry',
    slug: 'jewellery-stores',
    name: 'Jewellery stores',
    summary: 'Showrooms and entrances maintained for a polished client experience.',
    description:
      'Demo facility page for jewellery and luxury retail showrooms emphasizing glass, displays, and entrances.',
    highlights: [
      'Showroom presentation',
      'Glass and case exteriors',
      'Discreet after-hours service',
      'Detail-focused crews',
    ],
    image:
      'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=1000&q=80',
    imageAlt: 'Jewelry store display cases',
  },
  {
    id: 'warehouse',
    slug: 'warehouses-factories',
    name: 'Warehouses & factories',
    summary: 'Light industrial floors, break areas, and offices with steady upkeep.',
    description:
      'Demo page for warehouses and light industrial sites—break rooms, offices, and accessible floor areas on recurring plans.',
    highlights: [
      'Break area and office cleaning',
      'Accessible floor care',
      'Flexible shift windows',
      'Safety-aware crews',
    ],
    image:
      'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1000&q=80',
    imageAlt: 'Warehouse interior with shelving',
  },
];

export function getFacilityBySlug(slug: string): FacilityType | undefined {
  return FACILITIES.find((f) => f.slug === slug);
}
