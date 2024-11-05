import { TDSIconColorsType } from './types/tds-icon-colors.type';
import { TDSIconLibrariesType } from './types/tds-icon-library.type';
import { TDSIconSizesType } from './types/tds-icon-sizes.type';
import * as i0 from "@angular/core";
export declare class TDSIconComponent {
    color: string | TDSIconColorsType;
    class: string;
    iconLibrary: string | TDSIconLibrariesType;
    iconName: string;
    iconSize: string | TDSIconSizesType;
    get customClass(): string;
    get size(): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<TDSIconComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TDSIconComponent, "tds-icon", never, { "color": { "alias": "color"; "required": false; }; "class": { "alias": "class"; "required": false; }; "iconLibrary": { "alias": "iconLibrary"; "required": false; }; "iconName": { "alias": "iconName"; "required": false; }; "iconSize": { "alias": "iconSize"; "required": false; }; }, {}, never, never, false, never>;
}
