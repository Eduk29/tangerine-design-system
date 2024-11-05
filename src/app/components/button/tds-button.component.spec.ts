import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TDSButtonComponent } from './tds-button.component';

describe('TDSButtonComponent', () => {
  let component: TDSButtonComponent;
  let fixture: ComponentFixture<TDSButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TDSButtonComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TDSButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
