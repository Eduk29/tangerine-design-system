import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormfieldPlaygroundComponent } from './formfield-playground.component';

describe('FormfieldPlaygroundComponent', () => {
  let component: FormfieldPlaygroundComponent;
  let fixture: ComponentFixture<FormfieldPlaygroundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormfieldPlaygroundComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FormfieldPlaygroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
