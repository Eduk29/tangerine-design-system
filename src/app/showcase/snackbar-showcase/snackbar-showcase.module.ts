import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SnackbarShowcaseComponent } from './snackbar-showcase.component';
import { SnackbarModule } from '../../components/snackbar/snackbar.module';
import { ButtonModule } from '../../components/button/button.module';

@NgModule({
  declarations: [SnackbarShowcaseComponent],
  imports: [CommonModule, SnackbarModule, ButtonModule],
  exports: [SnackbarShowcaseComponent],
})
export class SnackbarShowcaseModule {}
