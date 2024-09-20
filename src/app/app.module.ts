import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideMenuModule } from './components/side-menu/side-menu.module';
import { HomeModule } from './home/home.module';
import { ShowcaseModule } from './showcase/showcase.module';
import { NotFoundPageModule } from './shared/pages/not-found-page/not-found-page.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    AppRoutingModule,
    BrowserModule,
    CommonModule,
    HomeModule,
    NotFoundPageModule,
    ShowcaseModule,
    SideMenuModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
