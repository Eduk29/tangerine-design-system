import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { showcaseSideMenuConfig } from '../../shared/configs/showcase-side-menu.config';
import { TDSSideMenuButton } from './models/tds-side-menu-button.model';

@Component({
  selector: 'tds-side-menu',
  templateUrl: './tds-side-menu.component.html',
  styleUrl: './tds-side-menu.component.scss',
})
export class TDSSideMenuComponent {
  public showcaseSideMenuButtonsList: TDSSideMenuButton[] = showcaseSideMenuConfig;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  public get customClass(): string {
    return 'w-100';
  }

  public getIconName(buttonData: TDSSideMenuButton): string {
    return buttonData.displaySubMenu ? 'expand_less' : 'expand_more';
  }

  public redirectTo(buttonData: TDSSideMenuButton): void {
    this.router.navigate([buttonData.link]);
  }

  public resetDisplaySubMenuState(): void {
    this.showcaseSideMenuButtonsList.forEach(button => {
      button.displaySubMenu = false;
    });
  }

  public toggleSubMenu(buttonData: TDSSideMenuButton): void {
    buttonData.displaySubMenu = !buttonData.displaySubMenu;
  }
}
