import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconShowcaseComponent } from './icon-showcase.component';

describe('IconShowcaseComponent', () => {
  let component: IconShowcaseComponent;
  let fixture: ComponentFixture<IconShowcaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IconShowcaseComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(IconShowcaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
