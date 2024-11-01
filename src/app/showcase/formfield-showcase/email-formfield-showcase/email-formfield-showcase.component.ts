import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-email-formfield-showcase',
  templateUrl: './email-formfield-showcase.component.html',
  styleUrl: './email-formfield-showcase.component.scss',
})
export class EmailFormfieldShowcaseComponent {
  public showcaseForm!: FormGroup;

  constructor() {
    this.showcaseForm = this.createForm();
  }

  public get email(): string {
    return this.emailControl.value;
  }

  public get emailControl(): FormControl {
    return this.showcaseForm.get('email') as FormControl;
  }

  public get email2(): string {
    return this.email2Control.value;
  }

  public get email2Control(): FormControl {
    return this.showcaseForm.get('email2') as FormControl;
  }

  public onSubmit(): void {
    console.log(this.showcaseForm.value);
  }

  private createForm(): FormGroup {
    return new FormGroup({
      email: new FormControl<string | undefined>(undefined, [Validators.email]),
      email2: new FormControl<string | undefined>(undefined, [Validators.email]),
    });
  }
}
