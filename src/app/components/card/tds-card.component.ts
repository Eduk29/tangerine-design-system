import { Component, Input } from '@angular/core';

@Component({
  selector: 'tds-card',
  templateUrl: './tds-card.component.html',
  styleUrl: './tds-card.component.scss',
})
export class TDSCardComponent {
  @Input() class!: string;
}
