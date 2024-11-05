import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { TDSFormfieldTextComponent } from './tds-formfield-text.component';

@NgModule({
  declarations: [TDSFormfieldTextComponent],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [TDSFormfieldTextComponent],
})
export class TDSFormfieldTextModule {}
