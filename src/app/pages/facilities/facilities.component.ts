import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FACILITIES } from '../../core/data/facilities.data';

@Component({
  selector: 'app-facilities',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './facilities.component.html',
  styleUrl: './facilities.component.scss',
})
export class FacilitiesComponent {
  readonly facilities = FACILITIES;
}
