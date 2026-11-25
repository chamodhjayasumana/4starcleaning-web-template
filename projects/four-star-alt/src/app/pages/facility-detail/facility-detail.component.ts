import { Component, OnInit, inject } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { getFacilityBySlug } from '../../core/data/facilities.data';
import { FACILITY_BUILDING_TYPE } from '../../core/data/quote-options.data';
import { FacilityType } from '../../core/models';
import { QuoteStateService } from '../../core/services/quote-state.service';

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
  private readonly quoteState = inject(QuoteStateService);

  facility: FacilityType | null = null;
  buildingType = '';

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const slug = params.get('slug') || '';
      const found = getFacilityBySlug(slug);
      if (!found) {
        this.router.navigateByUrl('/facilities');
        return;
      }
      this.facility = found;
      this.buildingType = FACILITY_BUILDING_TYPE[found.slug] || 'other';
      this.title.setTitle(`${found.name} · Four Star Demo 2`);
    });
  }

  startQuote(): void {
    if (this.buildingType) {
      this.quoteState.prefillBuildingType(this.buildingType);
    }
    void this.router.navigate(['/quote'], {
      queryParams: { buildingType: this.buildingType },
    });
  }
}
