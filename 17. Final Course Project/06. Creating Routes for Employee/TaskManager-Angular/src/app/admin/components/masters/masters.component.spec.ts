import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MastersComponent } from './masters.component';

describe('MastersComponent', () => {
  let component: MastersComponent;
  let fixture: ComponentFixture<MastersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MastersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MastersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
