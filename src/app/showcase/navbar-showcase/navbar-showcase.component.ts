import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar-showcase',
  templateUrl: './navbar-showcase.component.html',
  styleUrl: './navbar-showcase.component.scss',
})
export class NavbarShowcaseComponent {
  public openMenu(): void {
    console.log('Open Menu!!');
  }
}
