import { ElementRef, OnInit } from '@angular/core';
import { TDSSnackbarData } from './models/tds-snackbar-data.model';
import { TDSSnackbarService } from './services/tds-snackbar.service';
import * as i0 from "@angular/core";
export declare class TDSSnackbarComponent implements OnInit {
    private eleRef;
    private snackbarService;
    snackbarData: TDSSnackbarData;
    constructor(eleRef: ElementRef, snackbarService: TDSSnackbarService);
    ngOnInit(): void;
    private configureHorizontalPosition;
    private configureTypeClass;
    private configureVerticalPosition;
    private open;
    private resetSnackbar;
    static ɵfac: i0.ɵɵFactoryDeclaration<TDSSnackbarComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TDSSnackbarComponent, "tds-snackbar", never, {}, {}, never, never, false, never>;
}
