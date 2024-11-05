import { EventEmitter } from '@angular/core';
import { TDSNavbarColorsType } from './types/tds-navbar-colors.type';
import * as i0 from "@angular/core";
export declare class TDSNavbarComponent {
    color: string | TDSNavbarColorsType;
    title: string;
    showMenu: boolean;
    openMenuEvent: EventEmitter<void>;
    constructor();
    dispatchOpenMenu(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<TDSNavbarComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TDSNavbarComponent, "tds-navbar", never, { "color": { "alias": "color"; "required": false; }; "title": { "alias": "title"; "required": false; }; "showMenu": { "alias": "showMenu"; "required": false; }; }, { "openMenuEvent": "openMenuEvent"; }, never, ["[navbar-content]"], false, never>;
}
