import { Component, inject } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { ApplicationService, JobApplication } from '../services/application-service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-applications',
  imports: [MatTableModule, DatePipe],
  templateUrl: './applications.html',
  styleUrl: './applications.css',
})
export class Applications
{
  private applicationService: ApplicationService = inject(ApplicationService);

  displayedColumns: string[] = [
    'id',
    'firstName',
    'lastName',
    'email',
    'position',
    'status',
    'appliedDate'
  ];

  dataSource: MatTableDataSource<JobApplication> = new MatTableDataSource<JobApplication>(
    this.applicationService.getApplications()
  );
}
