import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { getServiceBySlug, SERVICES } from '../../core/data/services.data';
import { CleaningService } from '../../core/models';

@Component({
  selector: 'app-service-detail',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './service-detail.component.html',
  styleUrl: './service-detail.component.scss',
})
export class ServiceDetailComponent implements OnInit {
  service: CleaningService | null = null;
  readonly related = SERVICES;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly router: Router,
    private readonly title: Title
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const slug = params.get('slug') || '';
      const found = getServiceBySlug(slug);
      if (!found) {
        this.router.navigateByUrl('/services');
        return;
      }
      this.service = found;
      this.title.setTitle(`${found.name} · Four Star Demo`);
    });
  }
}
