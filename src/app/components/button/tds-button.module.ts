import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { TDSIconModule } from '../icon/tds-icon.module';
import { TDSBasicButtonDirective } from './directives/tds-basic-button.directive';
import { TDSFabButtonDirective } from './directives/tds-fab-button.directive';
import { TDSFlatButtonDirective } from './directives/tds-flat-button.directive';
import { TDSOutlineButtonDirective } from './directives/tds-outline-button.directive';
import { TDSButtonComponent } from './tds-button.component';

@NgModule({
  declarations: [
    TDSBasicButtonDirective,
    TDSButtonComponent,
    TDSFabButtonDirective,
    TDSFlatButtonDirective,
    TDSOutlineButtonDirective,
  ],
  imports: [CommonModule, TDSIconModule],
  exports: [
    TDSButtonComponent,
    TDSBasicButtonDirective,
    TDSFabButtonDirective,
    TDSFlatButtonDirective,
    TDSOutlineButtonDirective,
  ],
})
export class TDSButtonModule {}
