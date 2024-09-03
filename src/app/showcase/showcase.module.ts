import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ButtonShowcaseModule } from './button-showcase/button-showcase.module';
import { IconShowcaseModule } from './icon-showcase/icon-showcase.module';
import { ShowcaseRoutingModule } from './showcase-routing.module';

@NgModule({
  declarations: [],
  imports: [ButtonShowcaseModule, CommonModule, IconShowcaseModule, ShowcaseRoutingModule],
  exports: [],
})
export class ShowcaseModule {}
