import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { COMPANY } from '../../../core/data/company.data';
import { FACILITIES } from '../../../core/data/facilities.data';
import { getCoreServices, getSpecialtyServices } from '../../../core/data/services.data';
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
  openMenu: 'services' | 'facilities' | 'about' | null = null;

  readonly coreServices = getCoreServices();
  readonly specialtyServices = getSpecialtyServices().filter((s) =>
    ['covid', 'carpet', 'stripping', 'high-dusting', 'spring'].includes(s.id)
  );
  readonly facilities = FACILITIES;

  readonly aboutLinks = [
    { path: '/about', label: 'About Us' },
    { path: '/articles', label: 'Our Articles' },
    { path: '/special-offers', label: 'Special Offers' },
  ];

  toggle(): void {
    this.menuOpen = !this.menuOpen;
    if (!this.menuOpen) {
      this.openMenu = null;
    }
  }

  close(): void {
    this.menuOpen = false;
    this.openMenu = null;
  }

  setOpen(menu: 'services' | 'facilities' | 'about' | null): void {
    this.openMenu = menu;
  }

  toggleSection(menu: 'services' | 'facilities' | 'about'): void {
    this.openMenu = this.openMenu === menu ? null : menu;
  }
}
