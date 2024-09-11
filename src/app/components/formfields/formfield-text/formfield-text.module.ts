import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { FormfieldTextComponent } from './formfield-text.component';

@NgModule({
  declarations: [FormfieldTextComponent],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [FormfieldTextComponent],
})
export class FormfieldTextModule {}
