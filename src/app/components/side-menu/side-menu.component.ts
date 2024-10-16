import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { showcaseSideMenuConfig } from '../../shared/configs/showcase-side-menu.config';
import { SideMenuButton } from './models/side-menu-button.model';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrl: './side-menu.component.scss',
})
export class SideMenuComponent {
  public showcaseSideMenuButtonsList: SideMenuButton[] = showcaseSideMenuConfig;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  public get customClass(): string {
    return 'w-100';
  }

  public getIconName(buttonData: SideMenuButton): string {
    return buttonData.displaySubMenu ? 'expand_less' : 'expand_more';
  }

  public redirectTo(buttonData: SideMenuButton): void {
    this.router.navigate([buttonData.link]);
  }

  public resetDisplaySubMenuState(): void {
    this.showcaseSideMenuButtonsList.forEach(button => {
      button.displaySubMenu = false;
    });
  }

  public toggleSubMenu(buttonData: SideMenuButton): void {
    buttonData.displaySubMenu = !buttonData.displaySubMenu;
  }
}
