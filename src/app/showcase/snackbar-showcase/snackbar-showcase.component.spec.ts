import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SnackbarShowcaseComponent } from './snackbar-showcase.component';

describe('SnackbarShowcaseComponent', () => {
  let component: SnackbarShowcaseComponent;
  let fixture: ComponentFixture<SnackbarShowcaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SnackbarShowcaseComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SnackbarShowcaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
