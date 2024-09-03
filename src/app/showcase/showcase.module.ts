import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ButtonShowcaseModule } from './button-showcase/button-showcase.module';
import { IconShowcaseComponent } from './icon-showcase/icon-showcase.component';
import { ShowcaseRoutingModule } from './showcase-routing.module';
import { ShowcaseComponent } from './showcase.component';

@NgModule({
  declarations: [ShowcaseComponent, IconShowcaseComponent],
  imports: [ButtonShowcaseModule, CommonModule, ShowcaseRoutingModule],
  exports: [ShowcaseComponent],
})
export class ShowcaseModule {}
