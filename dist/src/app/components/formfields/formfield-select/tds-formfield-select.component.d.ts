import { AfterViewInit, ChangeDetectorRef, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { TDSFormfieldLabelPositionType } from '../types/tds-formfield-label-position.type';
import { TDSFormfieldSelectOptions } from './models/tds-formfield-select-option.model';
import * as i0 from "@angular/core";
export declare class TDSFormfieldSelectComponent implements OnInit, AfterViewInit {
    private cd;
    customClass: string;
    controlName: FormControl<unknown>;
    hint: string;
    label: string;
    labelPosition: TDSFormfieldLabelPositionType;
    optionList: TDSFormfieldSelectOptions[];
    placeholder: string;
    constructor(cd: ChangeDetectorRef);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    get labelFor(): string;
    get labelPositionClass(): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<TDSFormfieldSelectComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TDSFormfieldSelectComponent, "tds-formfield-select", never, { "customClass": { "alias": "customClass"; "required": false; }; "controlName": { "alias": "controlName"; "required": false; }; "hint": { "alias": "hint"; "required": false; }; "label": { "alias": "label"; "required": false; }; "labelPosition": { "alias": "labelPosition"; "required": false; }; "optionList": { "alias": "optionList"; "required": false; }; "placeholder": { "alias": "placeholder"; "required": false; }; }, {}, never, never, false, never>;
}
