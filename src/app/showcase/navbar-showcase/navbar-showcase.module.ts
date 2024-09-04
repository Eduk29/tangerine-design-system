import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { NavbarShowcaseComponent } from './navbar-showcase.component';
import { NavbarModule } from 'src/app/components/navbar/navbar.module';

@NgModule({
  declarations: [NavbarShowcaseComponent],
  imports: [CommonModule, NavbarModule],
  exports: [NavbarShowcaseComponent],
})
export class NavbarShowcaseModule {}
