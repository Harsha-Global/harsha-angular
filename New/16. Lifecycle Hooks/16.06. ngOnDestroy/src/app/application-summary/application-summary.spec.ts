import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationSummary } from './application-summary';

describe('ApplicationSummary', () => {
  let component: ApplicationSummary;
  let fixture: ComponentFixture<ApplicationSummary>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApplicationSummary],
    }).compileComponents();

    fixture = TestBed.createComponent(ApplicationSummary);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
