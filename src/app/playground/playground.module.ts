import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { TDSButtonModule, TDSCardModule, TDSFormfieldPasswordModule, TDSFormfieldTextModule } from 'public_api';

import { FormfieldPlaygroundComponent } from './formfield-playground/formfield-playground.component';
import { PlaygroundRoutingModule } from './playground-routing.module';

@NgModule({
  declarations: [FormfieldPlaygroundComponent],
  imports: [
    TDSButtonModule,
    TDSCardModule,
    CommonModule,
    TDSFormfieldTextModule,
    TDSFormfieldPasswordModule,
    ReactiveFormsModule,
    PlaygroundRoutingModule,
  ],
})
export class PlaygroundModule {}
