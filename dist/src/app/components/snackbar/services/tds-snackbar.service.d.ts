import { BehaviorSubject } from 'rxjs';
import { TDSSnackbarData } from '../models/tds-snackbar-data.model';
import * as i0 from "@angular/core";
export declare class TDSSnackbarService {
    snackbar$: BehaviorSubject<TDSSnackbarData>;
    constructor();
    openSnackbar(snackbarData: TDSSnackbarData): void;
    private configureDefaultValues;
    private snackbarDataHasMessage;
    static ɵfac: i0.ɵɵFactoryDeclaration<TDSSnackbarService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<TDSSnackbarService>;
}
