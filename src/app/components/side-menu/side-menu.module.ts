import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ButtonModule } from '../button/button.module';
import { SideMenuComponent } from './side-menu.component';

@NgModule({
  declarations: [SideMenuComponent],
  imports: [CommonModule, ButtonModule, RouterModule],
  exports: [SideMenuComponent],
})
export class SideMenuModule {}
