import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BOROUGHS, MANHATTAN_ZIPS } from '../../core/data/service-area.data';

@Component({
  selector: 'app-service-area',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './service-area.component.html',
  styleUrl: './service-area.component.scss',
})
export class ServiceAreaComponent {
  readonly boroughs = BOROUGHS;
  readonly zips = MANHATTAN_ZIPS;
}
