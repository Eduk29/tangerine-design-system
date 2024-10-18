import { IconColorsType } from './types/icon-colors.type';
import { IconSizesType } from './types/icon-sizes.type';
import { IconLibrariesType } from './types/icon-library.type';
import * as i0 from "@angular/core";
export declare class IconComponent {
    color: string | IconColorsType;
    class: string;
    iconLibrary: string | IconLibrariesType;
    iconName: string;
    iconSize: string | IconSizesType;
    get customClass(): string;
    get size(): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<IconComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<IconComponent, "app-icon", never, { "color": { "alias": "color"; "required": false; }; "class": { "alias": "class"; "required": false; }; "iconLibrary": { "alias": "iconLibrary"; "required": false; }; "iconName": { "alias": "iconName"; "required": false; }; "iconSize": { "alias": "iconSize"; "required": false; }; }, {}, never, never, false, never>;
}
