import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { formfieldShowcaseRoutes } from './formfield-showcase.routes';

const routes: Routes = formfieldShowcaseRoutes;

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormfieldShowcaseRoutingModule {}
