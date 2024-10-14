import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectFormfieldShowcaseComponent } from './select-formfield-showcase.component';

describe('SelectFormfieldShowcaseComponent', () => {
  let component: SelectFormfieldShowcaseComponent;
  let fixture: ComponentFixture<SelectFormfieldShowcaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SelectFormfieldShowcaseComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SelectFormfieldShowcaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
