import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterStatus } from './counter-status';

describe('CounterStatus', () => {
  let component: CounterStatus;
  let fixture: ComponentFixture<CounterStatus>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CounterStatus]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CounterStatus);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
