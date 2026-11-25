import { Component, OnInit, inject } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  ReactiveFormsModule,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { lookupCoverage } from '../../core/data/coverage.data';
import {
  BUILDING_TYPES,
  CLEANING_TIMES,
  DEMO_SAMPLE_QUOTE,
  FACILITY_SIZES,
  FREQUENCIES,
  QUOTE_SERVICE_OPTIONS,
} from '../../core/data/quote-options.data';
import { getServiceById, getServiceBySlug } from '../../core/data/services.data';
import { QuoteSubmission, ZipCoverage } from '../../core/models';
import { QuoteStateService } from '../../core/services/quote-state.service';

function zipValidator(control: AbstractControl): ValidationErrors | null {
  const value = String(control.value ?? '').trim();
  if (!value) {
    return null;
  }
  return /^\d{5}$/.test(value) ? null : { zipFormat: true };
}

@Component({
  selector: 'app-quote',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './quote.component.html',
  styleUrl: './quote.component.scss',
})
export class QuoteComponent implements OnInit {
  private readonly fb = inject(FormBuilder);
  private readonly route = inject(ActivatedRoute);
  private readonly quoteState = inject(QuoteStateService);

  readonly serviceOptions = QUOTE_SERVICE_OPTIONS;
  readonly buildingTypes = BUILDING_TYPES;
  readonly frequencies = FREQUENCIES;
  readonly facilitySizes = FACILITY_SIZES;
  readonly cleaningTimes = CLEANING_TIMES;

  step = 1;
  submitted = false;
  confirmation: QuoteSubmission | null = null;
  coverage: ZipCoverage | null = null;

  stepOneForm = this.fb.nonNullable.group({
    serviceId: ['', Validators.required],
    buildingType: ['', Validators.required],
    zipCode: ['', [Validators.required, zipValidator]],
    frequency: ['', Validators.required],
    facilitySize: [''],
    preferredTime: [''],
  });

  stepTwoForm = this.fb.nonNullable.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    company: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    phone: ['', [Validators.required, Validators.minLength(7)]],
    notes: [''],
    requestWalkthrough: [false],
  });


  ngOnInit(): void {
    const savedOne = this.quoteState.getStepOne();
    const savedTwo = this.quoteState.getStepTwo();
    this.stepOneForm.patchValue(savedOne);
    this.stepTwoForm.patchValue(savedTwo);

    const serviceParam =
      this.route.snapshot.queryParamMap.get('service') ||
      this.route.snapshot.queryParamMap.get('serviceId');

    if (serviceParam) {
      const fromCatalog =
        getServiceById(serviceParam) || getServiceBySlug(serviceParam);
      const id = fromCatalog?.id || serviceParam;
      if (QUOTE_SERVICE_OPTIONS.some((option) => option.value === id)) {
        this.quoteState.prefillService(id);
        this.stepOneForm.patchValue({ serviceId: id });
      }
    }

    this.updateCoverage(this.stepOneForm.controls.zipCode.value);

    this.stepOneForm.controls.zipCode.valueChanges.subscribe((zip) => {
      this.updateCoverage(zip);
    });
  }

  get selectedServiceName(): string {
    const id = this.stepOneForm.controls.serviceId.value;
    return getServiceById(id)?.name ?? 'your service';
  }

  updateCoverage(zip: string): void {
    const trimmed = (zip || '').trim();
    this.coverage = /^\d{5}$/.test(trimmed) ? lookupCoverage(trimmed) : null;
  }

  continueToStepTwo(): void {
    this.stepOneForm.markAllAsTouched();
    if (this.stepOneForm.invalid) {
      return;
    }
    this.quoteState.saveStepOne(this.stepOneForm.getRawValue());
    this.step = 2;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  backToStepOne(): void {
    this.quoteState.saveStepTwo(this.stepTwoForm.getRawValue());
    this.step = 1;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  loadSample(): void {
    this.quoteState.loadSample(DEMO_SAMPLE_QUOTE.stepOne, DEMO_SAMPLE_QUOTE.stepTwo);
    this.stepOneForm.patchValue(DEMO_SAMPLE_QUOTE.stepOne);
    this.stepTwoForm.patchValue(DEMO_SAMPLE_QUOTE.stepTwo);
    this.updateCoverage(DEMO_SAMPLE_QUOTE.stepOne.zipCode);
    this.submitted = false;
    this.confirmation = null;
    this.step = 1;
  }

  submit(): void {
    this.stepTwoForm.markAllAsTouched();
    if (this.stepTwoForm.invalid) {
      return;
    }
    this.quoteState.saveStepOne(this.stepOneForm.getRawValue());
    this.quoteState.saveStepTwo(this.stepTwoForm.getRawValue());
    this.confirmation = this.quoteState.submit();
    this.submitted = true;
    this.step = 3;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  startAnother(): void {
    this.quoteState.clearForm();
    this.stepOneForm.reset({
      serviceId: '',
      buildingType: '',
      zipCode: '',
      frequency: '',
      facilitySize: '',
      preferredTime: '',
    });
    this.stepTwoForm.reset({
      firstName: '',
      lastName: '',
      company: '',
      email: '',
      phone: '',
      notes: '',
      requestWalkthrough: false,
    });
    this.coverage = null;
    this.confirmation = null;
    this.submitted = false;
    this.step = 1;
  }

  labelFor(
    list: { value: string; label: string }[],
    value: string
  ): string {
    return list.find((item) => item.value === value)?.label ?? value;
  }

  invalid(controlName: string, form: 'one' | 'two' = 'one'): boolean {
    const control =
      form === 'one'
        ? this.stepOneForm.get(controlName)
        : this.stepTwoForm.get(controlName);
    return !!control && control.invalid && control.touched;
  }
}
