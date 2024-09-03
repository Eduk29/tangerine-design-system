import { Component } from '@angular/core';

@Component({
  selector: 'app-button-showcase',
  templateUrl: './button-showcase.component.html',
  styleUrl: './button-showcase.component.scss',
})
export class ButtonShowcaseComponent {
  public test(): void {
    console.log('Hello World');
  }
}
