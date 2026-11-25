import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { COMPANY } from '../../../core/data/company.data';

@Component({
  selector: 'app-sticky-cta',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div class="sticky" role="region" aria-label="Quick actions">
      <a class="sticky__call" [href]="'tel:' + company.phoneTel">
        <span aria-hidden="true">📞</span> Call
      </a>
      <a class="sticky__quote" routerLink="/quote">Get a Free Quote</a>
    </div>
  `,
  styles: [
    `
      .sticky {
        position: fixed;
        inset: auto 0 0;
        z-index: 50;
        display: grid;
        grid-template-columns: 1fr 1.25fr;
        min-height: var(--sticky-h);
        background: #fff;
        box-shadow: 0 -8px 24px rgba(11, 44, 90, 0.12);
      }
      .sticky a {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.4rem;
        font-weight: 700;
        min-height: var(--sticky-h);
      }
      .sticky__call {
        background: var(--navy);
        color: #fff;
      }
      .sticky__quote {
        background: var(--yellow);
        color: var(--navy);
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
