import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarShowcaseComponent } from './navbar-showcase.component';

describe('NavbarShowcaseComponent', () => {
  let component: NavbarShowcaseComponent;
  let fixture: ComponentFixture<NavbarShowcaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NavbarShowcaseComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NavbarShowcaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
