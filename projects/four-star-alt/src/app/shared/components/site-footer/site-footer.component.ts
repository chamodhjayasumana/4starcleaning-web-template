import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { COMPANY } from '../../../core/data/company.data';
import { getCoreServices } from '../../../core/data/services.data';
import { DemoBadgeComponent } from '../demo-badge/demo-badge.component';

@Component({
  selector: 'app-site-footer',
  standalone: true,
  imports: [RouterLink, DemoBadgeComponent],
  templateUrl: './site-footer.component.html',
  styleUrl: './site-footer.component.scss',
})
export class SiteFooterComponent {
  readonly company = COMPANY;
  readonly services = getCoreServices();
  readonly year = new Date().getFullYear();
}
