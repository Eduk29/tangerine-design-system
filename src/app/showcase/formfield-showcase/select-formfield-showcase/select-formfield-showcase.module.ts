import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { FormfieldSelectModule } from './../../../components/formfields/formfield-select/formfield-select.module';
import { SelectFormfieldShowcaseComponent } from './select-formfield-showcase.component';

@NgModule({
  declarations: [SelectFormfieldShowcaseComponent],
  imports: [CommonModule, FormfieldSelectModule, ReactiveFormsModule],
  exports: [SelectFormfieldShowcaseComponent],
})
export class SelectFormfieldShowcaseModule {}
