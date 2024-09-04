import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ButtonModule } from '../button/button.module';
import { IconModule } from '../icon/icon.module';
import { NavbarComponent } from './navbar.component';

@NgModule({
  declarations: [NavbarComponent],
  imports: [ButtonModule, CommonModule, IconModule],
  exports: [NavbarComponent],
})
export class NavbarModule {}
