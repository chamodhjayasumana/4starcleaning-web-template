import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { REVIEWS } from '../../core/data/reviews.data';

@Component({
  selector: 'app-reviews',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './reviews.component.html',
  styleUrl: './reviews.component.scss',
})
export class ReviewsComponent {
  readonly reviews = REVIEWS;
}
