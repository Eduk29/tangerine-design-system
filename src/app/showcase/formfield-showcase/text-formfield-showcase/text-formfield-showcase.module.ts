import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { TDSFormfieldTextModule } from '../../../components/formfields/formfield-text/tds-formfield-text.module';
import { TextFormfieldShowcaseComponent } from './text-formfield-showcase.component';

@NgModule({
  declarations: [TextFormfieldShowcaseComponent],
  imports: [CommonModule, TDSFormfieldTextModule, ReactiveFormsModule],
  exports: [TextFormfieldShowcaseComponent],
})
export class TextFormfieldShowcaseModule {}
