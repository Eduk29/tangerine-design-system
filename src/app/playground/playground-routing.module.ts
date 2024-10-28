import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { playgroundRoutes } from './playground.routes';

const routes: Routes = playgroundRoutes;

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlaygroundRoutingModule {}
