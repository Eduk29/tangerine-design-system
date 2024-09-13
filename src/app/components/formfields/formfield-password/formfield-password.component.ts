import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FormfieldLabelPositioType } from '../types/formfield-label-position.type';

@Component({
  selector: 'app-formfield-password',
  templateUrl: './formfield-password.component.html',
  styleUrl: './formfield-password.component.scss',
})
export class FormfieldPasswordComponent implements OnInit {
  @Input() class: string = '';
  @Input() controlName!: FormControl;
  @Input() label!: string;
  @Input() labelPosition: FormfieldLabelPositioType = 'before';
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
    return this.labelPosition === 'before' ? 'd-flex flex-row align-items-center' : 'd-flex flex-column';
  }

  public togglePasswordVisibility(): void {
    this.displayPassword = !this.displayPassword;
  }
}
