import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import { TDSFormfieldLabelPositionType } from '../types/tds-formfield-label-position.type';
import { TDSFormfieldSelectOptions } from './models/tds-formfield-select-option.model';

@Component({
  selector: 'tds-formfield-select',
  templateUrl: './tds-formfield-select.component.html',
  styleUrl: './tds-formfield-select.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TDSFormfieldSelectComponent implements OnInit, AfterViewInit {
  @Input() customClass: string = '';
  @Input() controlName!: FormControl<unknown>;
  @Input() hint!: string;
  @Input() label!: string;
  @Input() labelPosition: TDSFormfieldLabelPositionType = 'before';
  @Input() optionList!: TDSFormfieldSelectOptions[];
  @Input() placeholder: string = '';

  constructor(private cd: ChangeDetectorRef) {}

  ngOnInit(): void {
    if (!this.controlName) {
      console.warn('FormfieldSelectComponent: controlName is required');
    }

    if (!this.label) {
      console.warn('FormfieldSelectComponent: label is required');
    }
  }

  ngAfterViewInit(): void {
    this.cd.detectChanges();
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
