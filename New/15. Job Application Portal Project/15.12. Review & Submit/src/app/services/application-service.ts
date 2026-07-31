import { Injectable } from '@angular/core';

export interface JobApplication
{
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  position: string;
  status: string;
  appliedDate: Date;
}


@Injectable({
  providedIn: 'root',
})
export class ApplicationService 
{
  private applications: JobApplication[] = [
    {
      id: 1,
      firstName: 'Rahul',
      lastName: 'Sharma',
      email: 'rahul.sharma@email.com',
      position: 'Frontend Developer',
      status: 'Pending',
      appliedDate: new Date('2026-04-15')
    },
    {
      id: 2,
      firstName: 'Priya',
      lastName: 'Patel',
      email: 'priya.patel@email.com',
      position: 'Backend Developer',
      status: 'Reviewed',
      appliedDate: new Date('2026-04-18')
    },
    {
      id: 3,
      firstName: 'Amit',
      lastName: 'Kumar',
      email: 'amit.kumar@email.com',
      position: 'Full Stack Developer',
      status: 'Shortlisted',
      appliedDate: new Date('2026-04-19')
    }
  ];

  getApplications(): JobApplication[]
  {
    return this.applications;
  }

  addApplication(application: Omit<JobApplication, 'id' | 'appliedDate'>): void
  {
    const newApplication: JobApplication = {
      ...application,
      id: this.applications.length + 1,
      appliedDate: new Date()
    };

    this.applications.push(newApplication);
  }
}
