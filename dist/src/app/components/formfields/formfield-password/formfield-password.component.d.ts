import { OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FormfieldLabelPositioType } from '../types/formfield-label-position.type';
import * as i0 from "@angular/core";
export declare class FormfieldPasswordComponent implements OnInit {
    class: string;
    controlName: FormControl;
    label: string;
    labelPosition: FormfieldLabelPositioType;
    placeholder: string;
    hint: string;
    displayPassword: boolean;
    ngOnInit(): void;
    get iconName(): string;
    get labelFor(): string;
    get labelPositionClass(): string;
    togglePasswordVisibility(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<FormfieldPasswordComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<FormfieldPasswordComponent, "app-formfield-password", never, { "class": { "alias": "class"; "required": false; }; "controlName": { "alias": "controlName"; "required": false; }; "label": { "alias": "label"; "required": false; }; "labelPosition": { "alias": "labelPosition"; "required": false; }; "placeholder": { "alias": "placeholder"; "required": false; }; "hint": { "alias": "hint"; "required": false; }; }, {}, never, never, false, never>;
}
