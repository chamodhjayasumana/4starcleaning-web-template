import { Component } from '@angular/core';

@Component({
  selector: 'app-demo-badge',
  standalone: true,
  template: `<p class="demo-badge" aria-label="Website concept demo">Website concept · Demo</p>`,
  styles: [
    `
      .demo-badge {
        margin: 0;
        font-size: 0.72rem;
        letter-spacing: 0.04em;
        color: rgba(255, 255, 255, 0.72);
        font-weight: 500;
      }

      :host-context(.demo-badge--dark) .demo-badge {
        color: var(--muted);
      }
    `,
  ],
})
export class DemoBadgeComponent {}
