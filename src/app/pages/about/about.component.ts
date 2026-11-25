import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { COMPANY } from '../../core/data/company.data';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {
  readonly company = COMPANY;

  readonly pillars = [
    {
      title: 'Quality of service',
      text: 'Detail-focused commercial cleaning with consistent standards across every visit.',
    },
    {
      title: 'Reliability & flexibility',
      text: 'Daily, weekly, or monthly programs with daytime, evening, or overnight windows.',
    },
    {
      title: 'Experience',
      text: `${COMPANY.yearsExperience}+ years serving NYC commercial facilities with bonded, insured teams.`,
    },
  ];
}
