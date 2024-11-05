import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { TDSFormfieldLabelPositionType } from '../types/tds-formfield-label-position.type';

@Component({
  selector: 'tds-formfield-text',
  templateUrl: './tds-formfield-text.component.html',
  styleUrl: './tds-formfield-text.component.scss',
})
export class TDSFormfieldTextComponent implements OnInit {
  @Input() customClass: string = '';
  @Input() controlName!: FormControl<unknown>;
  @Input() label!: string;
  @Input() labelPosition: TDSFormfieldLabelPositionType = 'before';
  @Input() placeholder: string = '';
  @Input() hint!: string;

  ngOnInit(): void {
    if (!this.controlName) {
      console.warn('FormfieldTextComponent: controlName is required');
    }

    if (!this.label) {
      console.warn('FormfieldTextComponent: label is required');
    }
  }

  public get labelFor(): string {
    return `${this.label}_input`;
  }

  public get labelPositionClass(): string {
    return this.labelPosition === 'before'
      ? 'd-flex flex-row align-items-baseline justify-content-between'
      : 'd-flex flex-column';
  }
}
