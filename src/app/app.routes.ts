import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/home/home.component').then((m) => m.HomeComponent),
    title: 'Four Star General Cleaning Service · Demo',
  },
  {
    path: 'services',
    loadComponent: () =>
      import('./pages/services/services.component').then((m) => m.ServicesComponent),
    title: 'Cleaning Services · Four Star Demo',
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
    title: 'Facilities We Clean · Four Star Demo',
  },
  {
    path: 'about',
    loadComponent: () =>
      import('./pages/about/about.component').then((m) => m.AboutComponent),
    title: 'About · Four Star Demo',
  },
  {
    path: 'reviews',
    loadComponent: () =>
      import('./pages/reviews/reviews.component').then((m) => m.ReviewsComponent),
    title: 'Reviews · Four Star Demo',
  },
  {
    path: 'articles',
    loadComponent: () =>
      import('./pages/articles/articles.component').then((m) => m.ArticlesComponent),
    title: 'Articles · Four Star Demo',
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
    title: 'Special Offers · Four Star Demo',
  },
  {
    path: 'quote',
    loadComponent: () =>
      import('./pages/quote/quote.component').then((m) => m.QuoteComponent),
    title: 'Get a Free Quote · Four Star Demo',
  },
  { path: '**', redirectTo: '' },
];
