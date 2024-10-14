import { Routes } from '@angular/router';
import { NotFoundPageComponent } from './shared/pages/not-found-page/not-found-page.component';

export const appBaseRoutes: Routes = [
  {
    path: 'showcase',
    loadChildren: () => import('./showcase/showcase.module').then(m => m.ShowcaseModule),
  },
  { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
  {
    path: 'not-found',
    component: NotFoundPageComponent,
    pathMatch: 'full',
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'not-found', pathMatch: 'full' },
];
