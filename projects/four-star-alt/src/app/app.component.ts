import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SiteHeaderComponent } from './shared/components/site-header/site-header.component';
import { SiteFooterComponent } from './shared/components/site-footer/site-footer.component';
import { StickyCtaComponent } from './shared/components/sticky-cta/sticky-cta.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SiteHeaderComponent, SiteFooterComponent, StickyCtaComponent],
  template: `
    <div class="app-shell">
      <app-site-header />
      <main id="main"><router-outlet /></main>
      <app-site-footer />
      <app-sticky-cta />
    </div>
  `,
  styles: [`:host { display: block; }`],
})
export class AppComponent {}
