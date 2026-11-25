import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { getCoreServices, getSpecialtyServices } from '../../core/data/services.data';
import { ServiceCardComponent } from '../../shared/components/service-card/service-card.component';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [RouterLink, ServiceCardComponent],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss',
})
export class ServicesComponent {
  readonly coreServices = getCoreServices();
  readonly specialtyServices = getSpecialtyServices();
}
