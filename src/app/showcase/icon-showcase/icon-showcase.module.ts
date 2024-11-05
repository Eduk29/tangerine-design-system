import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { IconShowcaseComponent } from './icon-showcase.component';
import { TDSIconModule } from 'src/app/components/icon/tds-icon.module';

@NgModule({
  declarations: [IconShowcaseComponent],
  imports: [CommonModule, TDSIconModule],
  exports: [IconShowcaseComponent],
})
export class IconShowcaseModule {}
