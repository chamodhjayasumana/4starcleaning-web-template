export type ServiceCategory = 'core' | 'specialty';

export interface CleaningService {
  id: string;
  slug: string;
  name: string;
  shortName: string;
  tagline: string;
  summary: string;
  description: string;
  highlights: string[];
  includes: string[];
  image: string;
  imageAlt: string;
  category: ServiceCategory;
}

export interface FacilityType {
  id: string;
  slug: string;
  name: string;
  summary: string;
  description: string;
  highlights: string[];
  image: string;
  imageAlt: string;
}

export interface Review {
  id: string;
  quote: string;
  author: string;
  role: string;
  rating: number;
  placeholder: boolean;
}

export interface Article {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  body: string[];
  publishedAt: string;
  category: string;
  placeholder: boolean;
}

export interface SpecialOffer {
  id: string;
  title: string;
  description: string;
  discountLabel: string;
  terms: string;
  expiresAt: string;
  active: boolean;
}

export interface BuildingTypeOption {
  value: string;
  label: string;
}

export interface FrequencyOption {
  value: string;
  label: string;
  hint?: string;
}

export interface FacilitySizeOption {
  value: string;
  label: string;
}

export interface CleaningTimeOption {
  value: string;
  label: string;
}

export interface ZipCoverage {
  zip: string;
  borough: string;
  status: 'covered' | 'limited' | 'outside';
  note: string;
}

export interface AwardBadge {
  id: string;
  label: string;
  detail: string;
}

export interface BoroughArea {
  id: string;
  name: string;
  summary: string;
}

export interface LegalPage {
  slug: string;
  title: string;
  updatedAt: string;
  sections: { heading: string; paragraphs: string[] }[];
}

export interface QuoteStepOne {
  serviceId: string;
  buildingType: string;
  zipCode: string;
  frequency: string;
  facilitySize: string;
  preferredTime: string;
}

export interface QuoteStepTwo {
  firstName: string;
  lastName: string;
  company: string;
  email: string;
  phone: string;
  notes: string;
  requestWalkthrough: boolean;
  acceptTerms: boolean;
}

export interface QuoteSubmission extends QuoteStepOne, QuoteStepTwo {
  submittedAt: string;
  referenceId: string;
}

export interface CompanyInfo {
  name: string;
  shortName: string;
  phoneDisplay: string;
  phoneTel: string;
  email: string;
  addressLine1: string;
  addressLine2: string;
  officeHours: string;
  serviceHours: string;
  yearsExperience: number;
}
