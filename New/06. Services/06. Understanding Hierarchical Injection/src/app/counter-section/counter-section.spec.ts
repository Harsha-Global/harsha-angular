import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterSection } from './counter-section';

describe('CounterSection', () => {
  let component: CounterSection;
  let fixture: ComponentFixture<CounterSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CounterSection]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CounterSection);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
