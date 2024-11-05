import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { TDSFormfieldPasswordModule } from '../../../components/formfields/formfield-password/tds-formfield-password.module';
import { PasswordFormfieldShowcaseComponent } from './password-formfield-showcase.component';

@NgModule({
  declarations: [PasswordFormfieldShowcaseComponent],
  imports: [CommonModule, TDSFormfieldPasswordModule, ReactiveFormsModule],
  exports: [PasswordFormfieldShowcaseComponent],
})
export class PasswordFormfieldShowcaseModule {}
