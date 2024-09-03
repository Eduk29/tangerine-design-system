import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { homeRoutes } from './configs/home.routes';

const routes: Routes = homeRoutes;

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
