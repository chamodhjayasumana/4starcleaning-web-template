import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/home/home.component').then((m) => m.HomeComponent),
    title: 'Four Star General Cleaning Service | Demo B',
  },
  {
    path: 'services',
    loadComponent: () =>
      import('./pages/services/services.component').then((m) => m.ServicesComponent),
    title: 'Cleaning Services | Four Star Demo B',
  },
  {
    path: 'services/:slug',
    loadComponent: () =>
      import('./pages/service-detail/service-detail.component').then(
        (m) => m.ServiceDetailComponent
      ),
  },
  {
    path: 'facilities',
    loadComponent: () =>
      import('./pages/facilities/facilities.component').then((m) => m.FacilitiesComponent),
    title: 'Facilities We Clean | Four Star Demo B',
  },
  {
    path: 'facilities/:slug',
    loadComponent: () =>
      import('./pages/facility-detail/facility-detail.component').then(
        (m) => m.FacilityDetailComponent
      ),
  },
  {
    path: 'service-area',
    loadComponent: () =>
      import('./pages/service-area/service-area.component').then((m) => m.ServiceAreaComponent),
    title: 'Service Area | Four Star Demo B',
  },
  {
    path: 'about',
    loadComponent: () =>
      import('./pages/about/about.component').then((m) => m.AboutComponent),
    title: 'About | Four Star Demo B',
  },
  {
    path: 'reviews',
    loadComponent: () =>
      import('./pages/reviews/reviews.component').then((m) => m.ReviewsComponent),
    title: 'Reviews | Four Star Demo B',
  },
  {
    path: 'articles',
    loadComponent: () =>
      import('./pages/articles/articles.component').then((m) => m.ArticlesComponent),
    title: 'Articles | Four Star Demo B',
  },
  {
    path: 'articles/:slug',
    loadComponent: () =>
      import('./pages/article-detail/article-detail.component').then(
        (m) => m.ArticleDetailComponent
      ),
  },
  {
    path: 'special-offers',
    loadComponent: () =>
      import('./pages/offers/offers.component').then((m) => m.OffersComponent),
    title: 'Special Offers | Four Star Demo B',
  },
  {
    path: 'quote',
    loadComponent: () =>
      import('./pages/quote/quote.component').then((m) => m.QuoteComponent),
    title: 'Get a Free Quote | Four Star Demo B',
  },
  {
    path: 'privacy-policy',
    loadComponent: () =>
      import('./pages/legal/legal.component').then((m) => m.LegalComponent),
    data: { slug: 'privacy-policy' },
  },
  {
    path: 'terms-and-conditions',
    loadComponent: () =>
      import('./pages/legal/legal.component').then((m) => m.LegalComponent),
    data: { slug: 'terms-and-conditions' },
  },
  { path: '**', redirectTo: '' },
];
