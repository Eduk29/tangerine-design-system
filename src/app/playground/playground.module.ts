import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ButtonModule, CardModule, FormfieldPasswordModule, FormfieldTextModule } from 'public_api';

import { FormfieldPlaygroundComponent } from './formfield-playground/formfield-playground.component';
import { PlaygroundRoutingModule } from './playground-routing.module';

@NgModule({
  declarations: [FormfieldPlaygroundComponent],
  imports: [
    ButtonModule,
    CardModule,
    CommonModule,
    FormfieldTextModule,
    FormfieldPasswordModule,
    ReactiveFormsModule,
    PlaygroundRoutingModule,
  ],
})
export class PlaygroundModule {}
