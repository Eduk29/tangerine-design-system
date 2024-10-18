import { EventEmitter } from '@angular/core';
import { NavbarColorsType } from './types/navbar-colors.type';
import * as i0 from "@angular/core";
export declare class NavbarComponent {
    color: string | NavbarColorsType;
    title: string;
    showMenu: boolean;
    openMenuEvent: EventEmitter<void>;
    constructor();
    dispatchOpenMenu(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<NavbarComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NavbarComponent, "app-navbar", never, { "color": { "alias": "color"; "required": false; }; "title": { "alias": "title"; "required": false; }; "showMenu": { "alias": "showMenu"; "required": false; }; }, { "openMenuEvent": "openMenuEvent"; }, never, never, false, never>;
}
