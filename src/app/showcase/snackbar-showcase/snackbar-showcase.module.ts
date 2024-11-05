import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SnackbarShowcaseComponent } from './snackbar-showcase.component';
import { TDSSnackbarModule } from '../../components/snackbar/tds-snackbar.module';
import { TDSButtonModule } from '../../components/button/tds-button.module';

@NgModule({
  declarations: [SnackbarShowcaseComponent],
  imports: [CommonModule, TDSSnackbarModule, TDSButtonModule],
  exports: [SnackbarShowcaseComponent],
})
export class SnackbarShowcaseModule {}
