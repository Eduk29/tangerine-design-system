import { Component } from '@angular/core';

import { SnackbarData } from './../../components/snackbar/models/snackbar-data.model';
import { SnackbarService } from './../../components/snackbar/services/snackbar.service';
import { ErrorSnackbarTemplate } from './../../components/snackbar/templates/error-snackbar.template';
import { InfoSnackbarTemplate } from './../../components/snackbar/templates/info-snackbar.template';
import { SuccessSnackbarTemplate } from './../../components/snackbar/templates/success-snackbar.template';
import { WarningSnackbarTemplate } from './../../components/snackbar/templates/warning-snackbar.template';

@Component({
  selector: 'app-snackbar-showcase',
  templateUrl: './snackbar-showcase.component.html',
  styleUrl: './snackbar-showcase.component.scss',
})
export class SnackbarShowcaseComponent {
  constructor(private snackbarService: SnackbarService) {}

  public openErrorSnackbar(): void {
    const snackbarData: SnackbarData = { ...ErrorSnackbarTemplate, message: 'This is an error message' };
    this.snackbarService.snackbar$.next(snackbarData);
  }

  public openInfoSnackbar(): void {
    const snackbarData: SnackbarData = { ...InfoSnackbarTemplate, message: 'This is an info message' };
    this.snackbarService.snackbar$.next(snackbarData);
  }

  public openSuccessSnackbar(): void {
    const snackbarData: SnackbarData = { ...SuccessSnackbarTemplate, message: 'This is an success message' };
    this.snackbarService.snackbar$.next(snackbarData);
  }

  public openWarningSnackbar(): void {
    const snackbarData: SnackbarData = { ...WarningSnackbarTemplate, message: 'This is an warning message' };
    this.snackbarService.snackbar$.next(snackbarData);
  }
}
