import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ButtonShowcaseModule } from './button-showcase/button-showcase.module';
import { CardShowcaseModule } from './card-showcase/card-showcase.module';
import { IconShowcaseModule } from './icon-showcase/icon-showcase.module';
import { NavbarShowcaseModule } from './navbar-showcase/navbar-showcase.module';
import { ShowcaseRoutingModule } from './showcase-routing.module';
import { SnackbarShowcaseModule } from './snackbar-showcase/snackbar-showcase.module';

@NgModule({
  declarations: [],
  imports: [
    ButtonShowcaseModule,
    CardShowcaseModule,
    CommonModule,
    IconShowcaseModule,
    NavbarShowcaseModule,
    ShowcaseRoutingModule,
    SnackbarShowcaseModule,
  ],
  exports: [],
})
export class ShowcaseModule {}
