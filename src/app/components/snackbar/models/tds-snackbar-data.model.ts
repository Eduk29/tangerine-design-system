import { TDSSnackbarColorType } from '../types/tds-snackbar-color.type';
import { TDSSnackbarHorizontalPositionType } from '../types/tds-snackbar-horizontal-position.type';
import { TDSSnackbarIconPositionType } from '../types/tds-snackbar-icon-position.type';
import { TDSSnackbarVerticalPositionType } from '../types/tds-snackbar-vertical-position.type';

export interface TDSSnackbarData {
  customClass?: string;
  durationInSeconds?: number;
  horizontalPosition?: TDSSnackbarHorizontalPositionType | string;
  iconName?: string;
  iconPosition?: TDSSnackbarIconPositionType | string;
  message?: string;
  type?: TDSSnackbarColorType | string;
  verticalPosition?: TDSSnackbarVerticalPositionType | string;
}
