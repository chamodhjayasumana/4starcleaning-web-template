import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AWARDS } from '../../core/data/awards.data';
import { COMPANY } from '../../core/data/company.data';
import { FACILITIES } from '../../core/data/facilities.data';
import { getVisibleOffers } from '../../core/data/offers.data';
import { BOROUGHS } from '../../core/data/service-area.data';
import { getCoreServices } from '../../core/data/services.data';
import { ServiceCardComponent } from '../../shared/components/service-card/service-card.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, ServiceCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  readonly company = COMPANY;
  readonly services = getCoreServices();
  readonly facilities = FACILITIES.slice(0, 6);
  readonly offers = getVisibleOffers();
  readonly awards = AWARDS;
  readonly boroughs = BOROUGHS;

  readonly process = [
    {
      step: '01',
      title: 'Request a quote',
      text: 'Tell us the service, building type, ZIP, and how often you need cleaning.',
    },
    {
      step: '02',
      title: 'Discuss your cleaning needs',
      text: 'We review your facility details—and can schedule a walkthrough if you want one.',
    },
    {
      step: '03',
      title: 'Agree on a recurring schedule',
      text: 'Lock in daytime, evening, or overnight visits. Minimum: one two-hour visit per week.',
    },
  ];

  readonly heroImage =
    'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1800&q=80';
}
