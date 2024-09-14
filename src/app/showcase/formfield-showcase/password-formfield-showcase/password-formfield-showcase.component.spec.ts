import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordFormfieldShowcaseComponent } from './password-formfield-showcase.component';

describe('PasswordFormfieldShowcaseComponent', () => {
  let component: PasswordFormfieldShowcaseComponent;
  let fixture: ComponentFixture<PasswordFormfieldShowcaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PasswordFormfieldShowcaseComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PasswordFormfieldShowcaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
