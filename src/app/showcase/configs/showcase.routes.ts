import { Routes } from '@angular/router';

import { ButtonShowcaseComponent } from '../button-showcase/button-showcase.component';
import { IconShowcaseComponent } from '../icon-showcase/icon-showcase.component';

export const showcaseRoutes: Routes = [
  { path: 'button', component: ButtonShowcaseComponent, pathMatch: 'full' },
  { path: 'icon', component: IconShowcaseComponent, pathMatch: 'full' },
];
