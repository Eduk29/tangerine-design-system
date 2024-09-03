import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { IconShowcaseComponent } from './icon-showcase.component';
import { IconModule } from 'src/app/components/icon/icon.module';

@NgModule({
  declarations: [IconShowcaseComponent],
  imports: [CommonModule, IconModule],
  exports: [IconShowcaseComponent],
})
export class IconShowcaseModule {}
