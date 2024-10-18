import { ActivatedRoute, Router } from '@angular/router';
import { SideMenuButton } from './models/side-menu-button.model';
import * as i0 from "@angular/core";
export declare class SideMenuComponent {
    private activatedRoute;
    private router;
    showcaseSideMenuButtonsList: SideMenuButton[];
    constructor(activatedRoute: ActivatedRoute, router: Router);
    get customClass(): string;
    getIconName(buttonData: SideMenuButton): string;
    redirectTo(buttonData: SideMenuButton): void;
    resetDisplaySubMenuState(): void;
    toggleSubMenu(buttonData: SideMenuButton): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SideMenuComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SideMenuComponent, "app-side-menu", never, {}, {}, never, never, false, never>;
}
