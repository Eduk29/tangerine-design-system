import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-password-formfield-showcase',
  templateUrl: './password-formfield-showcase.component.html',
  styleUrl: './password-formfield-showcase.component.scss',
})
export class PasswordFormfieldShowcaseComponent {
  public showcaseForm!: FormGroup;

  constructor() {
    this.showcaseForm = this.createForm();
  }

  public get password(): string {
    return this.passwordControl.value;
  }

  public get passwordControl(): FormControl {
    return this.showcaseForm.get('password') as FormControl;
  }

  public onSubmit(): void {
    console.log(this.showcaseForm.value);
  }

  private createForm(): FormGroup {
    return new FormGroup({
      password: new FormControl<string | undefined>(undefined),
    });
  }
}
