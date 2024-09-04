import { Routes } from '@angular/router';

import { ButtonShowcaseComponent } from '../button-showcase/button-showcase.component';
import { IconShowcaseComponent } from '../icon-showcase/icon-showcase.component';
import { NavbarShowcaseComponent } from '../navbar-showcase/navbar-showcase.component';

export const showcaseRoutes: Routes = [
  { path: 'button', component: ButtonShowcaseComponent, pathMatch: 'full' },
  { path: 'navbar', component: NavbarShowcaseComponent, pathMatch: 'full' },
  { path: 'icon', component: IconShowcaseComponent, pathMatch: 'full' },
];
