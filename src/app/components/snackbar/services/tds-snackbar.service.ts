import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { TDSSnackbarData } from '../models/tds-snackbar-data.model';

@Injectable({
  providedIn: 'root',
})
export class TDSSnackbarService {
  public snackbar$: BehaviorSubject<TDSSnackbarData> = new BehaviorSubject<TDSSnackbarData>({});

  constructor() {}

  public openSnackbar(snackbarData: TDSSnackbarData): void {
    if (this.snackbarDataHasMessage(snackbarData)) {
      this.configureDefaultValues(snackbarData);
      this.snackbar$.next(snackbarData);
    }
  }

  private configureDefaultValues(snackbarData: TDSSnackbarData): void {
    snackbarData.horizontalPosition = snackbarData.horizontalPosition || 'center';
    snackbarData.verticalPosition = snackbarData.verticalPosition || 'top';
    snackbarData.durationInSeconds = snackbarData.durationInSeconds || 5;
    snackbarData.type = snackbarData.type || 'info';
  }

  private snackbarDataHasMessage(snackbarData: TDSSnackbarData): boolean {
    return !!snackbarData.message && snackbarData.message !== '';
  }
}
