import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { FormfieldPasswordModule } from './../../../components/formfields/formfield-password/formfield-password.module';
import { PasswordFormfieldShowcaseComponent } from './password-formfield-showcase.component';

@NgModule({
  declarations: [PasswordFormfieldShowcaseComponent],
  imports: [CommonModule, FormfieldPasswordModule, ReactiveFormsModule],
  exports: [PasswordFormfieldShowcaseComponent],
})
export class PasswordFormfieldShowcaseModule {}
