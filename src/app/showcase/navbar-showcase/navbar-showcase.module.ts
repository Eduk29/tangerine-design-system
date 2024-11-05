import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { NavbarShowcaseComponent } from './navbar-showcase.component';
import { TDSNavbarModule } from 'src/app/components/navbar/tds-navbar.module';

@NgModule({
  declarations: [NavbarShowcaseComponent],
  imports: [CommonModule, TDSNavbarModule],
  exports: [NavbarShowcaseComponent],
})
export class NavbarShowcaseModule {}
