import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailFormfieldShowcaseComponent } from './email-formfield-showcase.component';

describe('EmailFormfieldShowcaseComponent', () => {
  let component: EmailFormfieldShowcaseComponent;
  let fixture: ComponentFixture<EmailFormfieldShowcaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EmailFormfieldShowcaseComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(EmailFormfieldShowcaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
