import { AfterViewInit, Component, inject, ViewChild } from '@angular/core';
import { DatePipe } from '@angular/common';
import { MatSortModule, MatSort } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';

import { ApplicationService, JobApplication } from '../services/application-service';

@Component({
  selector: 'app-applications',
  imports: [MatTableModule, DatePipe, MatSortModule,
    MatPaginatorModule
  ],
  templateUrl: './applications.html',
  styleUrl: './applications.css',
})
export class Applications implements AfterViewInit
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

  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit(): void
  {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }
}
