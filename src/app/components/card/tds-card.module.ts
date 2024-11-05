import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TDSCardComponent } from './tds-card.component';

@NgModule({
  declarations: [TDSCardComponent],
  imports: [CommonModule],
  exports: [TDSCardComponent],
})
export class TDSCardModule {}
