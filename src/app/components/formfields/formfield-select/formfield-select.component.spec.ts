import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormfieldSelectComponent } from './formfield-select.component';

describe('FormfieldSelectComponent', () => {
  let component: FormfieldSelectComponent;
  let fixture: ComponentFixture<FormfieldSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormfieldSelectComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FormfieldSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
