import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationDetailsDialog } from './application-details-dialog';

describe('ApplicationDetailsDialog', () => {
  let component: ApplicationDetailsDialog;
  let fixture: ComponentFixture<ApplicationDetailsDialog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApplicationDetailsDialog],
    }).compileComponents();

    fixture = TestBed.createComponent(ApplicationDetailsDialog);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
