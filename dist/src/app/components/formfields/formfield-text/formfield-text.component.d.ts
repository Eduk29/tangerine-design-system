import { OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FormfieldLabelPositioType } from '../types/formfield-label-position.type';
import * as i0 from "@angular/core";
export declare class FormfieldTextComponent implements OnInit {
    class: string;
    controlName: FormControl<unknown>;
    label: string;
    labelPosition: FormfieldLabelPositioType;
    placeholder: string;
    hint: string;
    ngOnInit(): void;
    get labelFor(): string;
    get labelPositionClass(): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<FormfieldTextComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<FormfieldTextComponent, "app-formfield-text", never, { "class": { "alias": "class"; "required": false; }; "controlName": { "alias": "controlName"; "required": false; }; "label": { "alias": "label"; "required": false; }; "labelPosition": { "alias": "labelPosition"; "required": false; }; "placeholder": { "alias": "placeholder"; "required": false; }; "hint": { "alias": "hint"; "required": false; }; }, {}, never, never, false, never>;
}
