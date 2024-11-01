import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { FormfieldEmailModule } from './../../../components/formfields/formfield-email/formfield-email.module';
import { EmailFormfieldShowcaseComponent } from './email-formfield-showcase.component';

@NgModule({
  declarations: [EmailFormfieldShowcaseComponent],
  imports: [CommonModule, FormfieldEmailModule, ReactiveFormsModule],
  exports: [EmailFormfieldShowcaseComponent],
})
export class EmailFormfieldShowcaseModule {}
