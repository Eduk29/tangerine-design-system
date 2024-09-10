import { Component } from '@angular/core';

@Component({
  selector: 'app-card-showcase',
  templateUrl: './card-showcase.component.html',
  styleUrl: './card-showcase.component.scss',
})
export class CardShowcaseComponent {
  public dispatchAction(): void {
    console.log('Card button clicked');
  }
}
