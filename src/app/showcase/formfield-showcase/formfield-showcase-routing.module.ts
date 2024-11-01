import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FormfieldShowcaseRoutes } from './formfield-showcase.routes';

const routes: Routes = FormfieldShowcaseRoutes;

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormfieldShowcaseRoutingModule {}
