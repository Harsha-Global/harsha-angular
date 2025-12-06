import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckBoxPrinterComponent } from './check-box-printer.component';

describe('CheckBoxPrinterComponent', () => {
  let component: CheckBoxPrinterComponent;
  let fixture: ComponentFixture<CheckBoxPrinterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckBoxPrinterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckBoxPrinterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
