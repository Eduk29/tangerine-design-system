import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { FormfieldTextModule } from './../../../components/formfields/formfield-text/formfield-text.module';
import { TextFormfieldShowcaseComponent } from './text-formfield-showcase.component';

@NgModule({
  declarations: [TextFormfieldShowcaseComponent],
  imports: [CommonModule, FormfieldTextModule, ReactiveFormsModule],
  exports: [TextFormfieldShowcaseComponent],
})
export class TextFormfieldShowcaseModule {}
