import { Routes } from '@angular/router';
import { FormfieldPlaygroundComponent } from './formfield-playground/formfield-playground.component';

export const playgroundRoutes: Routes = [
  { path: 'formfield', component: FormfieldPlaygroundComponent, pathMatch: 'full' },
  { path: '**', redirectTo: '../not-found', pathMatch: 'full' },
];
