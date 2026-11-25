import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AWARDS } from '../../core/data/awards.data';
import { COMPANY } from '../../core/data/company.data';
import { FACILITIES } from '../../core/data/facilities.data';
import { getVisibleOffers } from '../../core/data/offers.data';
import { BOROUGHS } from '../../core/data/service-area.data';
import { getCoreServices } from '../../core/data/services.data';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
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
  readonly heroImage = '/images/hero-cleaner-nyc.jpg';

  readonly steps = [
    { title: 'Request a quote', text: 'Share your service, building type, ZIP, and frequency.' },
    { title: 'Discuss your needs', text: 'Optional walkthrough to refine scope and access.' },
    { title: 'Agree on a schedule', text: 'Recurring visits—minimum one two-hour clean per week.' },
  ];
}