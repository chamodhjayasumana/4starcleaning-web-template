import { Component, OnInit, inject } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { getFacilityBySlug } from '../../core/data/facilities.data';
import { FacilityType } from '../../core/models';

@Component({
  selector: 'app-facility-detail',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './facility-detail.component.html',
  styleUrl: './facility-detail.component.scss',
})
export class FacilityDetailComponent implements OnInit {
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  private readonly title = inject(Title);

  facility: FacilityType | null = null;

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const slug = params.get('slug') || '';
      const found = getFacilityBySlug(slug);
      if (!found) {
        this.router.navigateByUrl('/facilities');
        return;
      }
      this.facility = found;
      this.title.setTitle(`${found.name} · Four Star Demo`);
    });
  }
}
