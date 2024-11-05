import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { TDSFormfieldSelectComponent } from './tds-formfield-select.component';

@NgModule({
  declarations: [TDSFormfieldSelectComponent],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [TDSFormfieldSelectComponent],
})
export class TDSFormfieldSelectModule {}
