import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecurityShieldComponent } from './security-shield.component';

describe('SecurityShieldComponent', () => {
  let component: SecurityShieldComponent;
  let fixture: ComponentFixture<SecurityShieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecurityShieldComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecurityShieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
