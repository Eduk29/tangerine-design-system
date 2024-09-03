import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ButtonModule } from '../components/button/button.module';
import { IconModule } from '../components/icon/icon.module';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [HomeComponent],
  imports: [ButtonModule, CommonModule, HomeRoutingModule, IconModule],
  exports: [HomeComponent],
})
export class HomeModule {}
