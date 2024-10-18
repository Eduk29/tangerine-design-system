import { BehaviorSubject } from 'rxjs';
import { SnackbarData } from '../models/snackbar-data.model';
import * as i0 from "@angular/core";
export declare class SnackbarService {
    snackbar$: BehaviorSubject<SnackbarData>;
    constructor();
    openSnackbar(snackbarData: SnackbarData): void;
    private configureDefaultValues;
    private snackbarDataHasMessage;
    static ɵfac: i0.ɵɵFactoryDeclaration<SnackbarService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<SnackbarService>;
}
