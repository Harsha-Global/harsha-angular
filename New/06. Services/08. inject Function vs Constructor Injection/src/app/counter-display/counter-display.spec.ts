import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterDisplay } from './counter-display';

describe('CounterDisplay', () => {
  let component: CounterDisplay;
  let fixture: ComponentFixture<CounterDisplay>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CounterDisplay]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CounterDisplay);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
