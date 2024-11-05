import { TestBed } from '@angular/core/testing';

import { TDSSnackbarService } from './tds-snackbar.service';

describe('TDSSnackbarService', () => {
  let service: TDSSnackbarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TDSSnackbarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
