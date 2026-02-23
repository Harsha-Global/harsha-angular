import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SipCalculator } from './sip-calculator';

describe('SipCalculator', () => {
  let component: SipCalculator;
  let fixture: ComponentFixture<SipCalculator>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SipCalculator]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SipCalculator);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
