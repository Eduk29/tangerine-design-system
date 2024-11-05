import { OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { TDSFormfieldLabelPositionType } from '../types/tds-formfield-label-position.type';
import * as i0 from "@angular/core";
export declare class TDSFormfieldTextComponent implements OnInit {
    customClass: string;
    controlName: FormControl<unknown>;
    label: string;
    labelPosition: TDSFormfieldLabelPositionType;
    placeholder: string;
    hint: string;
    ngOnInit(): void;
    get labelFor(): string;
    get labelPositionClass(): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<TDSFormfieldTextComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TDSFormfieldTextComponent, "tds-formfield-text", never, { "customClass": { "alias": "customClass"; "required": false; }; "controlName": { "alias": "controlName"; "required": false; }; "label": { "alias": "label"; "required": false; }; "labelPosition": { "alias": "labelPosition"; "required": false; }; "placeholder": { "alias": "placeholder"; "required": false; }; "hint": { "alias": "hint"; "required": false; }; }, {}, never, never, false, never>;
}
