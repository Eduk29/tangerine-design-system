import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { showcaseRoutes } from './showcase.routes';

const routes: Routes = showcaseRoutes;

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShowcaseRoutingModule {}
