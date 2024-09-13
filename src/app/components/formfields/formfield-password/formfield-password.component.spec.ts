import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormfieldPasswordComponent } from './formfield-password.component';

describe('FormfieldPasswordComponent', () => {
  let component: FormfieldPasswordComponent;
  let fixture: ComponentFixture<FormfieldPasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormfieldPasswordComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FormfieldPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
