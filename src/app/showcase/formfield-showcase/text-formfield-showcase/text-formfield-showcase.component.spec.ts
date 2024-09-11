import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextFormfieldShowcaseComponent } from './text-formfield-showcase.component';

describe('TextFormfieldShowcaseComponent', () => {
  let component: TextFormfieldShowcaseComponent;
  let fixture: ComponentFixture<TextFormfieldShowcaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TextFormfieldShowcaseComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TextFormfieldShowcaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
