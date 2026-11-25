import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { getCoreServices, getSpecialtyServices } from '../../core/data/services.data';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss',
})
export class ServicesComponent {
  readonly coreServices = getCoreServices();
  readonly specialtyServices = getSpecialtyServices();
}