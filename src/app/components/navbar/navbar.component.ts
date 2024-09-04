import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NavbarColorsType } from './types/navbar-colors.type';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  @Input() color: string | NavbarColorsType = 'primary';
  @Input() title: string = '';
  @Input() showMenu: boolean = false;

  @Output() openMenuEvent = new EventEmitter<void>();

  constructor() {}

  public dispatchOpenMenu(): void {
    this.openMenuEvent.emit();
  }
}
