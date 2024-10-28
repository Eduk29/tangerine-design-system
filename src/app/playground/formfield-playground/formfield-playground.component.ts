import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-formfield-playground',
  templateUrl: './formfield-playground.component.html',
  styleUrl: './formfield-playground.component.scss',
})
export class FormfieldPlaygroundComponent {
  @Output() loginEvent: EventEmitter<unknown> = new EventEmitter<unknown>();

  public loginForm!: FormGroup;

  constructor() {
    this.loginForm = this.createForm();
  }

  public get passwordControl(): FormControl {
    return this.loginForm.get('password') as FormControl;
  }

  public get usernameControl(): FormControl {
    return this.loginForm.get('username') as FormControl;
  }

  public clear(): void {
    this.loginForm.reset();
  }

  public login(): void {
    this.loginEvent.emit(this.loginForm.value);
  }

  public onSubmit(): void {
    console.log(this.loginForm.value);
  }

  private createForm(): FormGroup {
    return new FormGroup({
      password: new FormControl<string | undefined>(undefined),
      username: new FormControl<string | undefined>(undefined),
    });
  }
}
