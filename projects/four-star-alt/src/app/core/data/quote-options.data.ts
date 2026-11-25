import {
  BuildingTypeOption,
  CleaningTimeOption,
  FacilitySizeOption,
  FrequencyOption,
} from '../models';
import { SERVICES } from './services.data';

/** Quote dropdown options stay aligned with the shared service catalog. */
export const QUOTE_SERVICE_OPTIONS = SERVICES.map((s) => ({
  value: s.id,
  label: s.name,
}));

export const BUILDING_TYPES: BuildingTypeOption[] = [
  { value: 'office', label: 'Corporate / professional office' },
  { value: 'retail', label: 'Retail store or showroom' },
  { value: 'medical', label: 'Medical / dental / clinic' },
  { value: 'bank', label: 'Bank or financial branch' },
  { value: 'school', label: 'School or education facility' },
  { value: 'warehouse', label: 'Warehouse or light industrial' },
  { value: 'mixed', label: 'Mixed-use commercial building' },
  { value: 'other', label: 'Other commercial space' },
];

export const FREQUENCIES: FrequencyOption[] = [
  { value: 'unsure', label: 'I’m not sure yet' },
  { value: '1x-week', label: '1× per week', hint: 'Minimum program' },
  { value: '2x-week', label: '2× per week' },
  { value: '3x-week', label: '3× per week' },
  { value: '4x-week', label: '4× per week' },
  { value: '5x-week', label: '5× per week' },
  { value: '6x-week', label: '6× per week' },
  { value: '7x-week', label: '7× per week' },
  { value: 'monthly', label: 'Monthly recurring' },
];

export const FACILITY_SIZES: FacilitySizeOption[] = [
  { value: '', label: 'Prefer not to say' },
  { value: 'under-2k', label: 'Under 2,000 sq ft' },
  { value: '2k-5k', label: '2,000–5,000 sq ft' },
  { value: '5k-10k', label: '5,000–10,000 sq ft' },
  { value: '10k-25k', label: '10,000–25,000 sq ft' },
  { value: 'over-25k', label: 'Over 25,000 sq ft' },
];

export const CLEANING_TIMES: CleaningTimeOption[] = [
  { value: '', label: 'No preference' },
  { value: 'daytime', label: 'Daytime' },
  { value: 'evening', label: 'Evening' },
  { value: 'overnight', label: 'Overnight' },
  { value: 'weekend', label: 'Weekend' },
];

/** Map facility detail slugs → quote buildingType values. */
export const FACILITY_BUILDING_TYPE: Record<string, string> = {
  offices: 'office',
  'small-offices': 'office',
  'commercial-offices-buildings': 'office',
  'computer-firms': 'office',
  'retail-stores': 'retail',
  'jewellery-stores': 'retail',
  'medical-facilities': 'medical',
  'dental-offices': 'medical',
  spas: 'medical',
  banks: 'bank',
  schools: 'school',
  'warehouses-factories': 'warehouse',
};

/** Sample entries for live sales demos — not real leads. */
export const DEMO_SAMPLE_QUOTE = {
  stepOne: {
    serviceId: 'office',
    buildingType: 'office',
    zipCode: '10010',
    frequency: '3x-week',
    facilitySize: '5k-10k',
    preferredTime: 'after-close',
  },
  stepTwo: {
    firstName: 'Alex',
    lastName: 'Morgan',
    company: 'Hudson Square Partners',
    email: 'alex.morgan@example.com',
    phone: '(212) 555-0148',
    notes: 'Need evening cleaning for a 7th-floor suite; freight elevator access after 6 PM.',
    requestWalkthrough: true,
    acceptTerms: true,
  },
};
