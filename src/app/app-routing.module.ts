import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { appBaseRoutes } from './app.routes';

const routes: Routes = appBaseRoutes;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
