import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { FormfieldPasswordComponent } from './formfield-password.component';

@NgModule({
  declarations: [FormfieldPasswordComponent],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [FormfieldPasswordComponent],
})
export class FormfieldPasswordModule {}
