import { AfterViewInit, Component, inject, ViewChild } from '@angular/core';
import { DatePipe } from '@angular/common';
import { MatSortModule, MatSort } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { ReactiveFormsModule, FormControl } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';

import { ApplicationService, JobApplication } from '../services/application-service';

@Component({
  selector: 'app-applications',
  imports: [MatTableModule, DatePipe, MatSortModule,
    MatPaginatorModule, ReactiveFormsModule,
    MatFormFieldModule, MatInputModule, MatIconModule,
    MatSelectModule
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

  searchControl: FormControl<string | null> = new FormControl<string>('');
  
  statusFilter: FormControl<string | null> = new FormControl<string>('');
  statusOptions: string[] = ['Pending', 'Reviewed', 'Shortlisted', 'Rejected'];


  ngAfterViewInit(): void
  {
    this.setupFilterPredicate();

    this.searchControl.valueChanges.subscribe(() => {
      this.applyFilter();
    });

    this.statusFilter.valueChanges.subscribe(() => {
      this.applyFilter();
    });

    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  setupFilterPredicate(): void
  {
    this.dataSource.filterPredicate = (data: JobApplication, filter: string): boolean => {
      const [searchText, statusFilter] = filter.split('|');

      const combined: string = Object.values(data).join(' ').toLowerCase();
      const matchesSearch: boolean = combined.includes(searchText);

      const matchesStatus: boolean = !statusFilter || data.status === statusFilter;

      return matchesSearch && matchesStatus;
    };
  }

  applyFilter(): void
  {
    const searchText: string = (this.searchControl.value ?? '').trim().toLowerCase();
    const statusValue: string = this.statusFilter.value ?? '';
    this.dataSource.filter = `${searchText}|${statusValue}`;
  }
}
