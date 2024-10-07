import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CardModule } from '../card/card.module';
import { SnackbarComponent } from './snackbar.component';

@NgModule({
  declarations: [SnackbarComponent],
  imports: [CommonModule, CardModule],
  exports: [SnackbarComponent],
})
export class SnackbarModule {}
