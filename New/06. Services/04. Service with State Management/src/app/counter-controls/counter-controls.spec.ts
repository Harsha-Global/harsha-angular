import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterControls } from './counter-controls';

describe('CounterControls', () => {
  let component: CounterControls;
  let fixture: ComponentFixture<CounterControls>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CounterControls]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CounterControls);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
