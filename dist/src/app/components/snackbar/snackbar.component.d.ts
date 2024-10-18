import { ElementRef, OnInit } from '@angular/core';
import { SnackbarData } from './models/snackbar-data.model';
import { SnackbarService } from './services/snackbar.service';
import * as i0 from "@angular/core";
export declare class SnackbarComponent implements OnInit {
    private eleRef;
    private snackbarService;
    snackbarData: SnackbarData;
    constructor(eleRef: ElementRef, snackbarService: SnackbarService);
    ngOnInit(): void;
    private configureHorizontalPosition;
    private configureTypeClass;
    private configureVerticalPosition;
    private open;
    private resetSnackbar;
    static ɵfac: i0.ɵɵFactoryDeclaration<SnackbarComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SnackbarComponent, "app-snackbar", never, {}, {}, never, never, false, never>;
}
