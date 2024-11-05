import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SnackbarShowcaseComponent } from './snackbar-showcase.component';
import { SnackbarModule } from '../../components/snackbar/tds-snackbar.module';
import { TDSButtonModule } from '../../components/button/tds-button.module';

@NgModule({
  declarations: [SnackbarShowcaseComponent],
  imports: [CommonModule, SnackbarModule, TDSButtonModule],
  exports: [SnackbarShowcaseComponent],
})
export class SnackbarShowcaseModule {}
