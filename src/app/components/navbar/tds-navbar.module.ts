import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { TDSButtonModule } from '../button/tds-button.module';
import { TDSIconModule } from '../icon/tds-icon.module';
import { TDSNavbarComponent } from './tds-navbar.component';

@NgModule({
  declarations: [TDSNavbarComponent],
  imports: [TDSButtonModule, CommonModule, TDSIconModule],
  exports: [TDSNavbarComponent],
})
export class TDSNavbarModule {}
