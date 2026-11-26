import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ElementRef,
  ViewChild,
  inject,
} from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { COMPANY } from '../../core/data/company.data';
import { FAQS } from '../../core/data/faqs.data';
import { FACILITIES } from '../../core/data/facilities.data';
import { BUILDING_TYPES } from '../../core/data/quote-options.data';
import { REVIEWS } from '../../core/data/reviews.data';
import { QuoteStateService } from '../../core/services/quote-state.service';
import { RevealDirective } from '../../shared/directives/reveal.directive';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule, RevealDirective],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements AfterViewInit {
  @ViewChild('heroVideoEl') heroVideoEl?: ElementRef<HTMLVideoElement>;

  private readonly fb = inject(FormBuilder);
  private readonly router = inject(Router);
  private readonly quoteState = inject(QuoteStateService);
  private readonly cdr = inject(ChangeDetectorRef);

  readonly company = COMPANY;
  readonly buildingTypes = BUILDING_TYPES;
  readonly reviews = REVIEWS.slice(0, 3);
  readonly faqs = FAQS;

  /** Prefer local asset; CDN fallback if Cloudflare omits/blocks the mp4. */
  readonly heroVideoLocal = '/videos/hero-cleaner.mp4';
  readonly heroVideoFallback =
    'https://cdn.jsdelivr.net/gh/chamodhjayasumana/4starcleaning-web-template@master/projects/four-star-alt/public/videos/hero-cleaner.mp4';
  heroVideoSrc = this.heroVideoLocal;
  readonly heroPoster =
    'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1400&q=80';

  readonly facilityCards = [
    FACILITIES.find((f) => f.slug === 'offices')!,
    FACILITIES.find((f) => f.slug === 'retail-stores')!,
    FACILITIES.find((f) => f.slug === 'medical-facilities')!,
  ];

  readonly hours = [
    {
      title: 'Daytime',
      text: 'Clean while teams are in—or between shifts—when your building allows it.',
    },
    {
      title: 'Evening',
      text: 'After-close service so offices and stores open to a ready floor.',
    },
    {
      title: 'Overnight',
      text: 'Quiet overnight windows for larger floors and multi-tenant buildings.',
    },
  ];

  readonly steps = [
    {
      title: 'Tell us about your space',
      text: 'Share building type, ZIP, and how often you need cleaning.',
    },
    {
      title: 'Discuss your cleaning needs',
      text: 'We review access, restrooms, and optional walkthrough notes.',
    },
    {
      title: 'Agree on a recurring schedule',
      text: 'Lock daytime, evening, or overnight visits—minimum one weekly visit.',
    },
  ];

  starterForm = this.fb.nonNullable.group({
    buildingType: ['', Validators.required],
    zipCode: ['', [Validators.required, Validators.pattern(/^\d{5}$/)]],
  });

  ngAfterViewInit(): void {
    const video = this.heroVideoEl?.nativeElement;
    if (!video) {
      return;
    }

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion) {
      video.pause();
      video.removeAttribute('autoplay');
      return;
    }

    video.muted = true;
    video.defaultMuted = true;
    video.playsInline = true;
    video.setAttribute('playsinline', '');
    video.setAttribute('webkit-playsinline', '');

    const applySrc = (src: string) => {
      this.heroVideoSrc = src;
      video.src = src;
      this.cdr.detectChanges();
      video.load();
      void video.play().catch(() => undefined);
    };

    video.addEventListener(
      'error',
      () => {
        if (this.heroVideoSrc !== this.heroVideoFallback) {
          applySrc(this.heroVideoFallback);
        }
      },
      { once: true }
    );

    // Probe local asset; if Cloudflare SPA fallback returns HTML, switch to CDN.
    void fetch(this.heroVideoLocal, { method: 'GET', headers: { Range: 'bytes=0-1' } })
      .then(async (res) => {
        const type = res.headers.get('content-type') || '';
        if (!res.ok || type.includes('text/html')) {
          applySrc(this.heroVideoFallback);
          return;
        }
        applySrc(this.heroVideoLocal);
      })
      .catch(() => applySrc(this.heroVideoFallback));
  }

  continueQuote(): void {
    this.starterForm.markAllAsTouched();
    if (this.starterForm.invalid) {
      return;
    }
    const value = this.starterForm.getRawValue();
    this.quoteState.prefillStarter({
      buildingType: value.buildingType,
      zipCode: value.zipCode.trim(),
    });
    void this.router.navigate(['/quote']);
  }

  invalid(control: 'buildingType' | 'zipCode'): boolean {
    const c = this.starterForm.controls[control];
    return c.invalid && c.touched;
  }
}
