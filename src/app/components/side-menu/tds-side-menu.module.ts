import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { TDSButtonModule } from '../button/tds-button.module';
import { TDSSideMenuComponent } from './tds-side-menu.component';

@NgModule({
  declarations: [TDSSideMenuComponent],
  imports: [CommonModule, TDSButtonModule, RouterModule],
  exports: [TDSSideMenuComponent],
})
export class SideMenuModule {}
