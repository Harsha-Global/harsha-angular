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
      firstName: 'James',
      lastName: 'Anderson',
      email: 'james.anderson@email.com',
      position: 'Frontend Developer',
      status: 'Pending',
      appliedDate: new Date('2026-03-08')
    },
    {
      id: 2,
      firstName: 'Emily',
      lastName: 'Brooks',
      email: 'emily.brooks@email.com',
      position: 'Backend Developer',
      status: 'Reviewed',
      appliedDate: new Date('2026-03-12')
    },
    {
      id: 3,
      firstName: 'Michael',
      lastName: 'Carter',
      email: 'michael.carter@email.com',
      position: 'Full Stack Developer',
      status: 'Shortlisted',
      appliedDate: new Date('2026-03-17')
    },
    {
      id: 4,
      firstName: 'Olivia',
      lastName: 'Davis',
      email: 'olivia.davis@email.com',
      position: 'DevOps Engineer',
      status: 'Pending',
      appliedDate: new Date('2026-03-21')
    },
    {
      id: 5,
      firstName: 'William',
      lastName: 'Edwards',
      email: 'william.edwards@email.com',
      position: 'Mobile Developer',
      status: 'Reviewed',
      appliedDate: new Date('2026-03-25')
    },
    {
      id: 6,
      firstName: 'Sophia',
      lastName: 'Foster',
      email: 'sophia.foster@email.com',
      position: 'Frontend Developer',
      status: 'Rejected',
      appliedDate: new Date('2026-03-29')
    },
    {
      id: 7,
      firstName: 'Benjamin',
      lastName: 'Gibson',
      email: 'benjamin.gibson@email.com',
      position: 'Backend Developer',
      status: 'Shortlisted',
      appliedDate: new Date('2026-04-02')
    },
    {
      id: 8,
      firstName: 'Charlotte',
      lastName: 'Hayes',
      email: 'charlotte.hayes@email.com',
      position: 'QA Engineer',
      status: 'Pending',
      appliedDate: new Date('2026-04-05')
    },
    {
      id: 9,
      firstName: 'Daniel',
      lastName: 'Irwin',
      email: 'daniel.irwin@email.com',
      position: 'Full Stack Developer',
      status: 'Reviewed',
      appliedDate: new Date('2026-04-08')
    },
    {
      id: 10,
      firstName: 'Ava',
      lastName: 'Jenkins',
      email: 'ava.jenkins@email.com',
      position: 'UI/UX Designer',
      status: 'Shortlisted',
      appliedDate: new Date('2026-04-11')
    },
    {
      id: 11,
      firstName: 'Henry',
      lastName: 'Kennedy',
      email: 'henry.kennedy@email.com',
      position: 'DevOps Engineer',
      status: 'Pending',
      appliedDate: new Date('2026-04-14')
    },
    {
      id: 12,
      firstName: 'Mia',
      lastName: 'Lawson',
      email: 'mia.lawson@email.com',
      position: 'Frontend Developer',
      status: 'Reviewed',
      appliedDate: new Date('2026-04-17')
    },
    {
      id: 13,
      firstName: 'Alexander',
      lastName: 'Morgan',
      email: 'alexander.morgan@email.com',
      position: 'Backend Developer',
      status: 'Rejected',
      appliedDate: new Date('2026-04-20')
    },
    {
      id: 14,
      firstName: 'Isabella',
      lastName: 'Nelson',
      email: 'isabella.nelson@email.com',
      position: 'Mobile Developer',
      status: 'Pending',
      appliedDate: new Date('2026-04-23')
    },
    {
      id: 15,
      firstName: 'Ethan',
      lastName: 'Owens',
      email: 'ethan.owens@email.com',
      position: 'QA Engineer',
      status: 'Shortlisted',
      appliedDate: new Date('2026-04-26')
    },
    {
      id: 16,
      firstName: 'Grace',
      lastName: 'Palmer',
      email: 'grace.palmer@email.com',
      position: 'UI/UX Designer',
      status: 'Reviewed',
      appliedDate: new Date('2026-04-28')
    },
    {
      id: 17,
      firstName: 'Lucas',
      lastName: 'Quinn',
      email: 'lucas.quinn@email.com',
      position: 'Full Stack Developer',
      status: 'Pending',
      appliedDate: new Date('2026-04-30')
    },
    {
      id: 18,
      firstName: 'Harper',
      lastName: 'Reynolds',
      email: 'harper.reynolds@email.com',
      position: 'Frontend Developer',
      status: 'Shortlisted',
      appliedDate: new Date('2026-05-01')
    },
    {
      id: 19,
      firstName: 'Mason',
      lastName: 'Sullivan',
      email: 'mason.sullivan@email.com',
      position: 'Backend Developer',
      status: 'Reviewed',
      appliedDate: new Date('2026-05-02')
    },
    {
      id: 20,
      firstName: 'Amelia',
      lastName: 'Turner',
      email: 'amelia.turner@email.com',
      position: 'DevOps Engineer',
      status: 'Pending',
      appliedDate: new Date('2026-05-03')
    },
    {
      id: 21,
      firstName: 'Logan',
      lastName: 'Underwood',
      email: 'logan.underwood@email.com',
      position: 'Mobile Developer',
      status: 'Rejected',
      appliedDate: new Date('2026-05-04')
    },
    {
      id: 22,
      firstName: 'Lily',
      lastName: 'Vaughn',
      email: 'lily.vaughn@email.com',
      position: 'QA Engineer',
      status: 'Reviewed',
      appliedDate: new Date('2026-05-05')
    },
    {
      id: 23,
      firstName: 'Jackson',
      lastName: 'Walker',
      email: 'jackson.walker@email.com',
      position: 'Frontend Developer',
      status: 'Shortlisted',
      appliedDate: new Date('2026-05-06')
    },
    {
      id: 24,
      firstName: 'Zoey',
      lastName: 'Young',
      email: 'zoey.young@email.com',
      position: 'UI/UX Designer',
      status: 'Pending',
      appliedDate: new Date('2026-05-07')
    },
    {
      id: 25,
      firstName: 'Aiden',
      lastName: 'Bennett',
      email: 'aiden.bennett@email.com',
      position: 'Full Stack Developer',
      status: 'Reviewed',
      appliedDate: new Date('2026-05-08')
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
      appliedDate: new Date(),
      position: 'Employee',
      status: 'Pending'
    };

    this.applications.push(newApplication);
  }
}
