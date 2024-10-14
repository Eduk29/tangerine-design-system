import { Routes } from '@angular/router';

import { PasswordFormfieldShowcaseComponent } from './password-formfield-showcase/password-formfield-showcase.component';
import { SelectFormfieldShowcaseComponent } from './select-formfield-showcase/select-formfield-showcase.component';
import { TextFormfieldShowcaseComponent } from './text-formfield-showcase/text-formfield-showcase.component';

export const formfieldShowcaseRoutes: Routes = [
  { path: 'password', component: PasswordFormfieldShowcaseComponent, pathMatch: 'full' },
  { path: 'select', component: SelectFormfieldShowcaseComponent, pathMatch: 'full' },
  { path: 'text', component: TextFormfieldShowcaseComponent, pathMatch: 'full' },
];
