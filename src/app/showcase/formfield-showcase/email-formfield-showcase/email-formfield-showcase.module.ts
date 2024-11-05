import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { TDSFormfieldEmailModule } from '../../../components/formfields/formfield-email/tds-formfield-email.module';
import { EmailFormfieldShowcaseComponent } from './email-formfield-showcase.component';

@NgModule({
  declarations: [EmailFormfieldShowcaseComponent],
  imports: [CommonModule, TDSFormfieldEmailModule, ReactiveFormsModule],
  exports: [EmailFormfieldShowcaseComponent],
})
export class EmailFormfieldShowcaseModule {}
