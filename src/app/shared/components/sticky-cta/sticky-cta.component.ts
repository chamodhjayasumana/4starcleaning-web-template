import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { COMPANY } from '../../../core/data/company.data';

@Component({
  selector: 'app-sticky-cta',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div class="sticky-cta" role="region" aria-label="Quick actions">
      <a class="sticky-cta__call" [href]="'tel:' + company.phoneTel">Call</a>
      <a class="sticky-cta__quote" routerLink="/quote">Get a Quote</a>
    </div>
  `,
  styles: [
    `
      .sticky-cta {
        position: fixed;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 50;
        display: grid;
        grid-template-columns: 1fr 1.2fr;
        min-height: var(--sticky-cta-h);
        background: rgba(7, 17, 31, 0.96);
        border-top: 1px solid rgba(201, 162, 39, 0.35);
        backdrop-filter: blur(8px);
      }

      .sticky-cta a {
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: 700;
        min-height: var(--sticky-cta-h);
      }

      .sticky-cta__call {
        color: #fff;
        border-right: 1px solid rgba(255, 255, 255, 0.12);
      }

      .sticky-cta__quote {
        background: var(--gold-500);
        color: var(--navy-950);
      }

      @media (min-width: 768px) {
        .sticky-cta {
          display: none;
        }
      }
    `,
  ],
})
export class StickyCtaComponent {
  readonly company = COMPANY;
}
