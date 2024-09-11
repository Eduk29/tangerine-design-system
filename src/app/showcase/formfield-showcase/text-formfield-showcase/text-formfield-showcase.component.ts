import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-text-formfield-showcase',
  templateUrl: './text-formfield-showcase.component.html',
  styleUrl: './text-formfield-showcase.component.scss',
})
export class TextFormfieldShowcaseComponent {
  public showcaseForm!: FormGroup;

  constructor() {
    this.showcaseForm = this.createForm();
  }

  public get username(): string {
    return this.usernameControl.value;
  }

  public get usernameControl(): FormControl {
    return this.showcaseForm.get('username') as FormControl;
  }

  public onSubmit(): void {
    console.log(this.showcaseForm.value);
  }

  private createForm(): FormGroup {
    return new FormGroup({
      username: new FormControl<string | undefined>(undefined),
    });
  }
}
