import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { IconModule } from '../icon/icon.module';
import { ButtonComponent } from './button.component';
import { BasicButtonDirective } from './directives/basic-button.directive';
import { FabButtonDirective } from './directives/fab-button.directive';
import { FlatButtonDirective } from './directives/flat-button.directive';
import { OutlineButtonDirective } from './directives/outline-button.directive';

@NgModule({
  declarations: [
    BasicButtonDirective,
    ButtonComponent,
    FabButtonDirective,
    FlatButtonDirective,
    OutlineButtonDirective,
  ],
  imports: [CommonModule, IconModule],
  exports: [ButtonComponent, BasicButtonDirective, FabButtonDirective, FlatButtonDirective, OutlineButtonDirective],
})
export class ButtonModule {}
