import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { getVisibleOffers, SPECIAL_OFFERS } from '../../core/data/offers.data';

@Component({
  selector: 'app-offers',
  standalone: true,
  imports: [RouterLink, DatePipe],
  templateUrl: './offers.component.html',
  styleUrl: './offers.component.scss',
})
export class OffersComponent {
  readonly offers = getVisibleOffers();
  readonly hiddenCount = SPECIAL_OFFERS.length - this.offers.length;
}