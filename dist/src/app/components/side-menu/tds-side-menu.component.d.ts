import { ActivatedRoute, Router } from '@angular/router';
import { TDSSideMenuButton } from './models/tds-side-menu-button.model';
import * as i0 from "@angular/core";
export declare class TDSSideMenuComponent {
    private activatedRoute;
    private router;
    showcaseSideMenuButtonsList: TDSSideMenuButton[];
    constructor(activatedRoute: ActivatedRoute, router: Router);
    get customClass(): string;
    getIconName(buttonData: TDSSideMenuButton): string;
    redirectTo(buttonData: TDSSideMenuButton): void;
    resetDisplaySubMenuState(): void;
    toggleSubMenu(buttonData: TDSSideMenuButton): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<TDSSideMenuComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TDSSideMenuComponent, "tds-side-menu", never, {}, {}, never, never, false, never>;
}
