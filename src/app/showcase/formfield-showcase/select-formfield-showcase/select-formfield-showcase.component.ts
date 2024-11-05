import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { TDSFormfieldSelectOptions } from 'src/app/components/formfields/formfield-select/models/tds-formfield-select-option.model';

@Component({
  selector: 'app-select-formfield-showcase',
  templateUrl: './select-formfield-showcase.component.html',
  styleUrl: './select-formfield-showcase.component.scss',
})
export class SelectFormfieldShowcaseComponent {
  public foodOptions: TDSFormfieldSelectOptions[] = [
    { label: 'Pizza', value: 'pizza' },
    { label: 'Hamburger', value: 'hamburguer' },
    { label: 'Salad', value: 'salad' },
    { label: 'Sushi', value: 'sushi' },
  ];
  public showcaseForm!: FormGroup;

  constructor() {
    this.showcaseForm = this.createForm();
  }

  public get food(): string {
    return this.foodControl.value;
  }

  public get foodControl(): FormControl {
    return this.showcaseForm.get('food') as FormControl;
  }

  public onSubmit(): void {
    console.log(this.showcaseForm.value);
  }

  private createForm(): FormGroup {
    return new FormGroup({
      food: new FormControl<string | undefined>(undefined),
    });
  }
}
