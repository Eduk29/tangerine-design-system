import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { TDSFormfieldSelectModule } from '../../../components/formfields/formfield-select/tds-formfield-select.module';
import { SelectFormfieldShowcaseComponent } from './select-formfield-showcase.component';

@NgModule({
  declarations: [SelectFormfieldShowcaseComponent],
  imports: [CommonModule, TDSFormfieldSelectModule, ReactiveFormsModule],
  exports: [SelectFormfieldShowcaseComponent],
})
export class SelectFormfieldShowcaseModule {}
