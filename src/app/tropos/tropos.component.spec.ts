import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TroposComponent } from './tropos.component';

describe('TroposComponent', () => {
  let component: TroposComponent;
  let fixture: ComponentFixture<TroposComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TroposComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TroposComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
