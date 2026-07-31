import { AfterViewInit, Component, inject, OnInit, ViewChild } from '@angular/core';
import { DatePipe } from '@angular/common';
import { MatSortModule, MatSort } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { ReactiveFormsModule, FormControl } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { SelectionModel } from '@angular/cdk/collections';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';

import { ApplicationService, JobApplication } from '../services/application-service';
import { ApplicationDetailsDialog } from '../application-details-dialog/application-details-dialog';
import { ConfirmDialog } from '../confirm-dialog/confirm-dialog';
import { ApplicationSummary } from '../application-summary/application-summary';
import { DashboardCard } from '../dashboard-card/dashboard-card';

@Component({
  selector: 'app-applications',
  imports: [MatTableModule, DatePipe, MatSortModule,
    MatPaginatorModule, ReactiveFormsModule,
    MatFormFieldModule, MatInputModule, MatIconModule,
    MatSelectModule,
    MatCheckboxModule, MatButtonModule,
    MatDialogModule, MatSnackBarModule,
    ApplicationSummary, DashboardCard
  ],
  templateUrl: './applications.html',
  styleUrl: './applications.css',
})
export class Applications implements OnInit, AfterViewInit
{
  private applicationService: ApplicationService = inject(ApplicationService);
  private dialog: MatDialog = inject(MatDialog);
  private snackbar: MatSnackBar = inject(MatSnackBar);

  displayedColumns: string[] = [
    'select',
    'id',
    'firstName',
    'lastName',
    'email',
    'position',
    'status',
    'appliedDate',
    'actions'
  ];

  dataSource: MatTableDataSource<JobApplication> = new MatTableDataSource<JobApplication>(
    []
  );

  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  searchControl: FormControl<string | null> = new FormControl<string>('');
  
  statusFilter: FormControl<string | null> = new FormControl<string>('');
  statusOptions: string[] = ['Pending', 'Reviewed', 'Shortlisted', 'Rejected'];

  selection: SelectionModel<JobApplication> = new SelectionModel<JobApplication>(true, []);

  totalCount: number = 0;
  filteredCount: number = 0;


  constructor()
  {
    console.log('Constructor called - data length: ', this.dataSource.data.length);
  }

  ngOnInit(): void
  {
    this.dataSource.data = this.applicationService.getApplications();
    this.totalCount = this.dataSource.data.length;
    this.filteredCount = this.dataSource.data.length;

    console.log('ngOnInit called - data length: ', this.dataSource.data.length);
  }

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

    this.filteredCount = this.dataSource.filteredData.length;
  }

  isAllSelected(): boolean
  {
    const selectedCount: number = this.selection.selected.length;
    const totalCount: number = this.dataSource.data.length;
    return selectedCount > 0 && selectedCount === totalCount;
  }

  toggleAllRows(checked: boolean): void
  {
    if (!checked)
    {
      this.selection.clear();
    }
    else
    {
      this.selection.select(...this.dataSource.data);
    }
  }

  shortlistSelected(): void
  {
    this.selection.selected.forEach((application: JobApplication) => {
      application.status = 'Shortlisted';
    });
    this.selection.clear();
    //TO DO: Invoke a service to update backend
  }

  viewApplication(application: JobApplication): void
  {
    this.dialog.open(
      ApplicationDetailsDialog,
      {
        data: application,
        width: '500px'
      }
    );
  }

  markReviewed(application: JobApplication): void
  {
    application.status = 'Reviewed';
    this.snackbar.open(
      'Application marked as Reviewed',
      'Close',
      { duration: 2000 }
    );
  }

  deleteApplication(application: JobApplication): void
  {
    const dialogRef: any = this.dialog.open(ConfirmDialog, {
      data: {
        title: 'Delete Application',
        message: `Are you sure you want to delete the application from ${application.firstName} ${application.lastName}?`
      }
    });

    dialogRef.afterClosed().subscribe(
      {next: (confirmed: boolean) => {
        if (confirmed)
        {
          this.dataSource.data = this.dataSource.data.filter((item: JobApplication) => item.id !== application.id
          );

          this.selection.clear();

          this.snackbar.open(
            'Application deleted', 'Close', { duration: 2000 }
          );

          //TO DO: Invoke backend to delete row
        }
      }}
    );
  }
}
