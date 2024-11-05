import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { TDSButtonModule } from './../../components/button/tds-button.module';
import { TDSCardModule } from './../../components/card/tds-card.module';
import { CardShowcaseComponent } from './card-showcase.component';

@NgModule({
  declarations: [CardShowcaseComponent],
  imports: [TDSButtonModule, TDSCardModule, CommonModule],
  exports: [CardShowcaseComponent],
})
export class CardShowcaseModule {}
