import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TDSNavbarColorsType } from './types/tds-navbar-colors.type';

@Component({
  selector: 'tds-navbar',
  templateUrl: './tds-navbar.component.html',
  styleUrl: './tds-navbar.component.scss',
})
export class TDSNavbarComponent {
  @Input() color: string | TDSNavbarColorsType = 'primary';
  @Input() title: string = '';
  @Input() showMenu: boolean = false;

  @Output() openMenuEvent = new EventEmitter<void>();

  constructor() {}

  public dispatchOpenMenu(): void {
    this.openMenuEvent.emit();
  }
}
