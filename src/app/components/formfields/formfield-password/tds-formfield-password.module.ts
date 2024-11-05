import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { TDSFormfieldPasswordComponent } from './tds-formfield-password.component';

@NgModule({
  declarations: [TDSFormfieldPasswordComponent],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [TDSFormfieldPasswordComponent],
})
export class TDSFormfieldPasswordModule {}
