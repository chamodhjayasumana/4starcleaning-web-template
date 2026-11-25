import { FacilityType } from '../models';

export const FACILITIES: FacilityType[] = [
  {
    id: 'banks',
    name: 'Banks & financial branches',
    summary:
      'Lobby, teller, and back-office areas that must look trustworthy every business day.',
    image:
      'https://images.unsplash.com/photo-1541354329998-f4d9a9f9297f?auto=format&fit=crop&w=1000&q=80',
    imageAlt: 'Modern bank lobby interior',
  },
  {
    id: 'retail',
    name: 'Clothing & retail stores',
    summary:
      'Sales floors, fitting rooms, and storefront glass kept ready for foot traffic.',
    image:
      'https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?auto=format&fit=crop&w=1000&q=80',
    imageAlt: 'Retail clothing boutique interior',
  },
  {
    id: 'commercial',
    name: 'Commercial buildings',
    summary:
      'Multi-tenant corridors, elevators, restrooms, and shared amenities on recurring plans.',
    image:
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1000&q=80',
    imageAlt: 'Glass commercial building facade in a city',
  },
  {
    id: 'tech',
    name: 'Computer & tech firms',
    summary:
      'Open offices, conference rooms, and collaboration spaces cleaned around product schedules.',
    image:
      'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1000&q=80',
    imageAlt: 'Open-plan tech office with workstations',
  },
  {
    id: 'corporate',
    name: 'Corporate offices',
    summary:
      'Executive floors and team suites with discreet after-hours service.',
    image:
      'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1000&q=80',
    imageAlt: 'Corporate office meeting area with city view',
  },
  {
    id: 'dental',
    name: 'Dental offices',
    summary:
      'Reception, operatories support areas, and restrooms cleaned with clinical care in mind.',
    image:
      'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1000&q=80',
    imageAlt: 'Dental office treatment room',
  },
  {
    id: 'local',
    name: 'Local businesses',
    summary:
      'Neighborhood commercial spaces that need reliable weekly or multi-day coverage.',
    image:
      'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1000&q=80',
    imageAlt: 'Small business workspace with tables and chairs',
  },
  {
    id: 'medical',
    name: 'Medical facilities',
    summary:
      'Clinics and practices where disinfection routines matter as much as appearance.',
    image:
      'https://images.unsplash.com/photo-1631217868264-e5b90bb7e629?auto=format&fit=crop&w=1000&q=80',
    imageAlt: 'Medical facility waiting area',
  },
  {
    id: 'jewelry',
    name: 'Jewellery stores',
    summary:
      'Display cases, showrooms, and entrances maintained for a polished client experience.',
    image:
      'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=1000&q=80',
    imageAlt: 'Jewelry store display cases',
  },
  {
    id: 'schools',
    name: 'Schools & education',
    summary:
      'Classrooms, corridors, and common areas on schedules that respect campus calendars.',
    image:
      'https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=1000&q=80',
    imageAlt: 'School hallway with lockers',
  },
  {
    id: 'spas',
    name: 'Spas & wellness centers',
    summary:
      'Treatment rooms, lounges, and restrooms kept calm, clean, and guest-ready.',
    image:
      'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1000&q=80',
    imageAlt: 'Spa wellness treatment room',
  },
  {
    id: 'warehouse',
    name: 'Warehouses & factories',
    summary:
      'Light industrial floors, break areas, and offices that need steady upkeep.',
    image:
      'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1000&q=80',
    imageAlt: 'Warehouse interior with shelving',
  },
];
