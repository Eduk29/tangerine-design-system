import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FormfieldShowcaseRoutingModule } from './formfield-showcase-routing.module';
import { PasswordFormfieldShowcaseModule } from './password-formfield-showcase/password-formfield-showcase.module';
import { TextFormfieldShowcaseModule } from './text-formfield-showcase/text-formfield-showcase.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, FormfieldShowcaseRoutingModule, PasswordFormfieldShowcaseModule, TextFormfieldShowcaseModule],
})
export class FormfieldShowcaseModule {}
