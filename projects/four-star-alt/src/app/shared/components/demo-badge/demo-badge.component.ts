import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-demo-badge',
  standalone: true,
  template: `<p class="demo-badge" [class.demo-badge--dark]="dark">Website concept · Demo B</p>`,
  styles: [
    `
      .demo-badge {
        margin: 0;
        font-size: 0.7rem;
        font-weight: 500;
        letter-spacing: 0.03em;
        color: rgba(11, 44, 90, 0.55);
      }
      .demo-badge--dark {
        color: rgba(255, 255, 255, 0.7);
      }
    `,
  ],
})
export class DemoBadgeComponent {
  @Input() dark = false;
}
