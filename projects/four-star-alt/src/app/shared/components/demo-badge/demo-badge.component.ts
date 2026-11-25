import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-demo-badge',
  standalone: true,
  template: `<p class="demo-badge" [class.demo-badge--light]="light">Website concept · Demo 2</p>`,
  styles: [
    `
      .demo-badge {
        margin: 0;
        font-size: 0.7rem;
        font-weight: 500;
        letter-spacing: 0.03em;
        color: rgba(25, 40, 34, 0.55);
      }
      .demo-badge--light {
        color: rgba(248, 247, 242, 0.72);
      }
    `,
  ],
})
export class DemoBadgeComponent {
  @Input() light = false;
}
