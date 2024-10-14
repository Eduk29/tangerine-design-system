import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { FormfieldSelectComponent } from './formfield-select.component';

@NgModule({
  declarations: [FormfieldSelectComponent],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [FormfieldSelectComponent],
})
export class FormfieldSelectModule {}
