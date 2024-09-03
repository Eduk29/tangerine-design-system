import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ButtonShowcaseModule } from './button-showcase/button-showcase.module';
import { IconShowcaseModule } from './icon-showcase/icon-showcase.module';
import { ShowcaseRoutingModule } from './showcase-routing.module';
import { ShowcaseComponent } from './showcase.component';

@NgModule({
  declarations: [ShowcaseComponent],
  imports: [ButtonShowcaseModule, CommonModule, IconShowcaseModule, ShowcaseRoutingModule],
  exports: [ShowcaseComponent],
})
export class ShowcaseModule {}
