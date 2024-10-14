import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import { FormfieldLabelPositioType } from '../types/formfield-label-position.type';
import { SelectOption } from './models/select-option.model';

@Component({
  selector: 'app-formfield-select',
  templateUrl: './formfield-select.component.html',
  styleUrl: './formfield-select.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormfieldSelectComponent implements OnInit, AfterViewInit {
  @Input() customClass: string = '';
  @Input() controlName!: FormControl<unknown>;
  @Input() hint!: string;
  @Input() label!: string;
  @Input() labelPosition: FormfieldLabelPositioType = 'before';
  @Input() optionList!: SelectOption[];
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
    return this.labelPosition === 'before' ? 'd-flex flex-row' : 'd-flex flex-column';
  }
}
