import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { TDSFormfieldEmailComponent } from './tds-formfield-email.component';

@NgModule({
  declarations: [TDSFormfieldEmailComponent],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [TDSFormfieldEmailComponent],
})
export class TDSFormfieldEmailModule {}
