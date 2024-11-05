import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { TDSButtonModule } from './../../components/button/tds-button.module';
import { TDSIconModule } from './../../components/icon/tds-icon.module';
import { ButtonShowcaseComponent } from './button-showcase.component';

@NgModule({
  declarations: [ButtonShowcaseComponent],
  imports: [TDSButtonModule, CommonModule, TDSIconModule],
  exports: [ButtonShowcaseComponent],
})
export class ButtonShowcaseModule {}
