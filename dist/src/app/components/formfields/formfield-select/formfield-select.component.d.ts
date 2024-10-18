import { AfterViewInit, ChangeDetectorRef, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FormfieldLabelPositioType } from '../types/formfield-label-position.type';
import { SelectOption } from './models/select-option.model';
import * as i0 from "@angular/core";
export declare class FormfieldSelectComponent implements OnInit, AfterViewInit {
    private cd;
    customClass: string;
    controlName: FormControl<unknown>;
    hint: string;
    label: string;
    labelPosition: FormfieldLabelPositioType;
    optionList: SelectOption[];
    placeholder: string;
    constructor(cd: ChangeDetectorRef);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    get labelFor(): string;
    get labelPositionClass(): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<FormfieldSelectComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<FormfieldSelectComponent, "app-formfield-select", never, { "customClass": { "alias": "customClass"; "required": false; }; "controlName": { "alias": "controlName"; "required": false; }; "hint": { "alias": "hint"; "required": false; }; "label": { "alias": "label"; "required": false; }; "labelPosition": { "alias": "labelPosition"; "required": false; }; "optionList": { "alias": "optionList"; "required": false; }; "placeholder": { "alias": "placeholder"; "required": false; }; }, {}, never, never, false, never>;
}
