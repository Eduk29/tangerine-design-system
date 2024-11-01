import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { FormfieldEmailComponent } from './formfield-email.component';

@NgModule({
  declarations: [FormfieldEmailComponent],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [FormfieldEmailComponent],
})
export class FormfieldEmailModule {}
