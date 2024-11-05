import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import { TDSFormfieldLabelPositionType } from '../types/tds-formfield-label-position.type';

@Component({
  selector: 'tds-formfield-password',
  templateUrl: './tds-formfield-password.component.html',
  styleUrl: './tds-formfield-password.component.scss',
})
export class TDSFormfieldPasswordComponent implements OnInit {
  @Input() class: string = '';
  @Input() controlName!: FormControl;
  @Input() label!: string;
  @Input() labelPosition: TDSFormfieldLabelPositionType = 'before';
  @Input() placeholder: string = '';
  @Input() hint!: string;

  public displayPassword = false;

  ngOnInit(): void {
    if (!this.controlName) {
      console.warn('FormfieldTextComponent: controlName is required');
    }

    if (!this.label) {
      console.warn('FormfieldTextComponent: label is required');
    }
  }

  public get iconName(): string {
    return this.displayPassword ? 'fas fa-eye' : 'fas fa-eye-slash';
  }

  public get labelFor(): string {
    return `${this.label}_input`;
  }

  public get labelPositionClass(): string {
    return this.labelPosition === 'before'
      ? 'd-flex flex-row align-items-center justify-content-between'
      : 'd-flex flex-column';
  }

  public togglePasswordVisibility(): void {
    this.displayPassword = !this.displayPassword;
  }
}
