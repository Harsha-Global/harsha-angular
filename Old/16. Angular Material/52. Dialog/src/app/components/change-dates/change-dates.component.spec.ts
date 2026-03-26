import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeDatesComponent } from './change-dates.component';

describe('ChangeDatesComponent', () => {
  let component: ChangeDatesComponent;
  let fixture: ComponentFixture<ChangeDatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangeDatesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeDatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
