import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { COMPANY } from '../../../core/data/company.data';

@Component({
  selector: 'app-sticky-cta',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div class="sticky" role="region" aria-label="Quick actions">
      <a class="sticky__call" [href]="'tel:' + company.phoneTel">Call</a>
      <a class="sticky__quote" routerLink="/quote">Get a Free Quote</a>
    </div>
  `,
  styles: [
    `
      .sticky {
        position: fixed;
        inset: auto 0 0;
        z-index: 60;
        display: grid;
        grid-template-columns: 1fr 1.25fr;
        min-height: var(--sticky-h);
        background: #fff;
        box-shadow: 0 -8px 24px rgba(43, 62, 80, 0.14);
      }
      .sticky a {
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: 700;
        min-height: var(--sticky-h);
      }
      .sticky__call {
        background: var(--navy-deep);
        color: #fff;
      }
      .sticky__quote {
        background: var(--cyan);
        color: #fff;
      }
      @media (min-width: 768px) {
        .sticky {
          display: none;
        }
      }
    `,
  ],
})
export class StickyCtaComponent {
  readonly company = COMPANY;
}
