import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { COMPANY } from '../../../core/data/company.data';
import { DemoBadgeComponent } from '../demo-badge/demo-badge.component';

@Component({
  selector: 'app-site-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, DemoBadgeComponent],
  templateUrl: './site-header.component.html',
  styleUrl: './site-header.component.scss',
})
export class SiteHeaderComponent {
  readonly company = COMPANY;
  menuOpen = false;

  readonly links = [
    { path: '/services', label: 'Services' },
    { path: '/facilities', label: 'Facilities' },
    { path: '/service-area', label: 'Service area' },
    { path: '/about', label: 'About' },
    { path: '/reviews', label: 'Reviews' },
    { path: '/articles', label: 'Articles' },
    { path: '/special-offers', label: 'Offers' },
  ];

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu(): void {
    this.menuOpen = false;
  }
}
