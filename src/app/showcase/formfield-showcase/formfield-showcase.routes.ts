import { Routes } from '@angular/router';

import { TextFormfieldShowcaseComponent } from './text-formfield-showcase/text-formfield-showcase.component';
import { PasswordFormfieldShowcaseComponent } from './password-formfield-showcase/password-formfield-showcase.component';

export const formfieldShowcaseRoutes: Routes = [
  { path: 'password', component: PasswordFormfieldShowcaseComponent, pathMatch: 'full' },
  { path: 'text', component: TextFormfieldShowcaseComponent, pathMatch: 'full' },
];
