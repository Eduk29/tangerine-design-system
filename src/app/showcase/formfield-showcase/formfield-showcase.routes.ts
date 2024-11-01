import { Routes } from '@angular/router';

import { EmailFormfieldShowcaseComponent } from './email-formfield-showcase/email-formfield-showcase.component';
import { PasswordFormfieldShowcaseComponent } from './password-formfield-showcase/password-formfield-showcase.component';
import { SelectFormfieldShowcaseComponent } from './select-formfield-showcase/select-formfield-showcase.component';
import { TextFormfieldShowcaseComponent } from './text-formfield-showcase/text-formfield-showcase.component';

export const FormfieldShowcaseRoutes: Routes = [
  { path: 'email', component: EmailFormfieldShowcaseComponent, pathMatch: 'full' },
  { path: 'password', component: PasswordFormfieldShowcaseComponent, pathMatch: 'full' },
  { path: 'select', component: SelectFormfieldShowcaseComponent, pathMatch: 'full' },
  { path: 'text', component: TextFormfieldShowcaseComponent, pathMatch: 'full' },
];
