import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { TDSCardModule } from '../card/tds-card.module';
import { TDSSnackbarComponent } from './tds-snackbar.component';

@NgModule({
  declarations: [TDSSnackbarComponent],
  imports: [CommonModule, TDSCardModule],
  exports: [TDSSnackbarComponent],
})
export class TDSSnackbarModule {}
