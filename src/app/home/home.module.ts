import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { TDSButtonModule } from '../components/button/tds-button.module';
import { TDSIconModule } from '../components/icon/tds-icon.module';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [HomeComponent],
  imports: [TDSButtonModule, CommonModule, HomeRoutingModule, TDSIconModule],
  exports: [HomeComponent],
})
export class HomeModule {}
