import { Routes } from '@angular/router';

export const appBaseRoutes: Routes = [
  { path: 'showcase', loadChildren: () => import('./showcase/showcase.module').then(m => m.ShowcaseModule) },
  { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];
