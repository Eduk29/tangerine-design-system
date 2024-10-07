import { Routes } from '@angular/router';

import { ButtonShowcaseComponent } from './button-showcase/button-showcase.component';
import { CardShowcaseComponent } from './card-showcase/card-showcase.component';
import { IconShowcaseComponent } from './icon-showcase/icon-showcase.component';
import { NavbarShowcaseComponent } from './navbar-showcase/navbar-showcase.component';
import { SnackbarShowcaseComponent } from './snackbar-showcase/snackbar-showcase.component';

export const showcaseRoutes: Routes = [
  { path: 'button', component: ButtonShowcaseComponent, pathMatch: 'full' },
  { path: 'card', component: CardShowcaseComponent, pathMatch: 'full' },
  { path: 'navbar', component: NavbarShowcaseComponent, pathMatch: 'full' },
  { path: 'icon', component: IconShowcaseComponent, pathMatch: 'full' },
  { path: 'snackbar', component: SnackbarShowcaseComponent, pathMatch: 'full' },
  {
    path: 'formfield',
    loadChildren: () => import('./formfield-showcase/formfield-showcase.module').then(m => m.FormfieldShowcaseModule),
  },
  { path: '', redirectTo: 'button', pathMatch: 'full' },
];
