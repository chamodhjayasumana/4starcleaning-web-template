import { Injectable } from '@angular/core';
import { QuoteStepOne, QuoteStepTwo, QuoteSubmission } from '../models';

const EMPTY_STEP_ONE: QuoteStepOne = {
  serviceId: '',
  buildingType: '',
  zipCode: '',
  frequency: '',
  facilitySize: '',
  preferredTime: '',
};

const EMPTY_STEP_TWO: QuoteStepTwo = {
  firstName: '',
  lastName: '',
  company: '',
  email: '',
  phone: '',
  notes: '',
  requestWalkthrough: false,
};

@Injectable({ providedIn: 'root' })
export class QuoteStateService {
  private stepOne: QuoteStepOne = { ...EMPTY_STEP_ONE };
  private stepTwo: QuoteStepTwo = { ...EMPTY_STEP_TWO };
  private submissions: QuoteSubmission[] = [];
  private lastSubmission: QuoteSubmission | null = null;

  getStepOne(): QuoteStepOne {
    return { ...this.stepOne };
  }

  getStepTwo(): QuoteStepTwo {
    return { ...this.stepTwo };
  }

  saveStepOne(value: QuoteStepOne): void {
    this.stepOne = { ...value };
  }

  saveStepTwo(value: QuoteStepTwo): void {
    this.stepTwo = { ...value };
  }

  prefillService(serviceId: string): void {
    if (serviceId) {
      this.stepOne = { ...this.stepOne, serviceId };
    }
  }

  loadSample(stepOne: QuoteStepOne, stepTwo: QuoteStepTwo): void {
    this.stepOne = { ...stepOne };
    this.stepTwo = { ...stepTwo };
  }

  submit(): QuoteSubmission {
    const submission: QuoteSubmission = {
      ...this.stepOne,
      ...this.stepTwo,
      submittedAt: new Date().toISOString(),
      referenceId: `DEMO-${Date.now().toString(36).toUpperCase()}`,
    };
    this.submissions = [...this.submissions, submission];
    this.lastSubmission = submission;
    return submission;
  }

  getLastSubmission(): QuoteSubmission | null {
    return this.lastSubmission ? { ...this.lastSubmission } : null;
  }

  getSubmissions(): QuoteSubmission[] {
    return [...this.submissions];
  }

  clearForm(keepServiceId = false): void {
    const serviceId = keepServiceId ? this.stepOne.serviceId : '';
    this.stepOne = { ...EMPTY_STEP_ONE, serviceId };
    this.stepTwo = { ...EMPTY_STEP_TWO };
    this.lastSubmission = null;
  }
}
