import { Component } from '@angular/core';

import { TDSSnackbarData } from '../../components/snackbar/models/tds-snackbar-data.model';
import { TDSSnackbarService } from '../../components/snackbar/services/tds-snackbar.service';
import { TDSErrorSnackbarTemplate } from '../../components/snackbar/templates/tds-error-snackbar.template';
import { TDSInfoSnackbarTemplate } from '../../components/snackbar/templates/tds-info-snackbar.template';
import { TDSSuccessSnackbarTemplate } from '../../components/snackbar/templates/tds-success-snackbar.template';
import { TDSWarningSnackbarTemplate } from '../../components/snackbar/templates/tds-warning-snackbar.template';

@Component({
  selector: 'app-snackbar-showcase',
  templateUrl: './snackbar-showcase.component.html',
  styleUrl: './snackbar-showcase.component.scss',
})
export class SnackbarShowcaseComponent {
  constructor(private snackbarService: TDSSnackbarService) {}

  public openErrorSnackbar(): void {
    const snackbarData: TDSSnackbarData = { ...TDSErrorSnackbarTemplate, message: 'This is an error message' };
    this.snackbarService.snackbar$.next(snackbarData);
  }

  public openInfoSnackbar(): void {
    const snackbarData: TDSSnackbarData = { ...TDSInfoSnackbarTemplate, message: 'This is an info message' };
    this.snackbarService.snackbar$.next(snackbarData);
  }

  public openSuccessSnackbar(): void {
    const snackbarData: TDSSnackbarData = { ...TDSSuccessSnackbarTemplate, message: 'This is an success message' };
    this.snackbarService.snackbar$.next(snackbarData);
  }

  public openWarningSnackbar(): void {
    const snackbarData: TDSSnackbarData = { ...TDSWarningSnackbarTemplate, message: 'This is an warning message' };
    this.snackbarService.snackbar$.next(snackbarData);
  }
}
