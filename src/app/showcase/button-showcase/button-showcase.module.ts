import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ButtonModule } from 'src/app/components/button/button.module';
import { IconModule } from 'src/app/components/icon/icon.module';

import { ButtonShowcaseComponent } from './button-showcase.component';

@NgModule({
  declarations: [ButtonShowcaseComponent],
  imports: [ButtonModule, CommonModule, IconModule],
  exports: [ButtonShowcaseComponent],
})
export class ButtonShowcaseModule {}
