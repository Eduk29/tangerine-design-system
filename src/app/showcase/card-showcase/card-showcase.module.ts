import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ButtonModule } from 'src/app/components/button/button.module';
import { CardModule } from 'src/app/components/card/card.module';

import { CardShowcaseComponent } from './card-showcase.component';

@NgModule({
  declarations: [CardShowcaseComponent],
  imports: [ButtonModule, CardModule, CommonModule],
  exports: [CardShowcaseComponent],
})
export class CardShowcaseModule {}
