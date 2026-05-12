import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobApplicationComponent } from './job-application-component';

describe('JobApplicationComponent', () => {
  let component: JobApplicationComponent;
  let fixture: ComponentFixture<JobApplicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JobApplicationComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(JobApplicationComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
