import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FormfieldLabelPositioType } from '../types/formfield-label-position.type';

@Component({
  selector: 'app-formfield-text',
  templateUrl: './formfield-text.component.html',
  styleUrl: './formfield-text.component.scss',
})
export class FormfieldTextComponent implements OnInit {
  @Input() class: string = '';
  @Input() controlName!: FormControl<unknown>;
  @Input() label!: string;
  @Input() labelPosition: FormfieldLabelPositioType = 'before';
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
    return this.labelPosition === 'before' ? 'd-flex flex-row' : 'd-flex flex-column';
  }
}
