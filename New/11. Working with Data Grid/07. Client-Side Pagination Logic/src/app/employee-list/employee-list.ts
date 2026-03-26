import { Component, inject, OnInit } from '@angular/core';
import { DecimalPipe, DatePipe } from '@angular/common';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

import { EmployeeService } from '../services/employee-service';
import { Employee } from '../models/employee.model';

@Component({
  selector: 'app-employee-list',
  imports: [DecimalPipe, DatePipe],
  templateUrl: './employee-list.html',
  styleUrl: './employee-list.css',
})
export class EmployeeList implements OnInit
{
  private employeeService: EmployeeService = inject(EmployeeService);
  private searchSubject: Subject<string> = new Subject<string>();

  employees: Employee[] = [];
  totalCount: number = 0;
  isLoading: boolean = true;

  //Dropdown options
  departments: string[] = [];
  statuses: string[] = [];
  locations: string[] = [];


  ngOnInit(): void 
  {
    //Setup search subscription
    this.searchSubject.pipe(
      debounceTime(300),
      distinctUntilChanged()
    ).subscribe((term) => {
      //console.log('Search:', term);
      this.employeeService.setSearchTerm(term);
      this.refreshEmployees();
    });

    this.isLoading = true;
    this.employeeService.getEmployees().subscribe({
      next: (data: Employee[]) => {
        this.employeeService.setEmployees(data);

        //Populate dropdown options
        this.departments = this.employeeService.getDepartments();
        this.statuses = this.employeeService.getStatuses();
        this.locations = this.employeeService.getLocations();

        this.refreshEmployees();
        this.totalCount = data.length;
        this.isLoading = false;
      },
      error: (error) => {
        console.error(`Error fetching employees: `, error);
        this.isLoading = false;
      }
    });
  }

  private refreshEmployees(): void
  {
    this.employees = this.employeeService.getFilteredAndSortedEmployees();
  }

  //Pagination getters
  get currentPage(): number
  {
    return this.employeeService.getCurrentPage();
  }

  get totalPages(): number
  {
    return this.employeeService.getTotalPages();
  }

  get pageSize(): number
  {
    return this.employeeService.getPageSize();
  }
  
  get filteredCount(): number
  {
    return this.employeeService.getFilteredCount();
  }


  //Pagination methods
  onPageChange(page: number): void
  {
    this.employeeService.setPage(page);
    this.refreshEmployees();
  }

  onNextPage(): void
  {
    this.employeeService.nextPage();
    this.refreshEmployees();
  }

  onPreviousPage(): void
  {
    this.employeeService.previousPage();
    this.refreshEmployees();
  }

  get rangeStart(): number
  {
    if (this.filteredCount === 0)
    {
      return 0;
    }
    return (this.currentPage - 1) * this.pageSize + 1;
  }

  get rangeEnd(): number
  {
    const end = this.currentPage * this.pageSize;
    return end > this.filteredCount ? this.filteredCount : end;
  }


  get sortColumn(): string
  {
    return this.employeeService.getSortColumn();
  }

  get sortDirection(): 'asc' | 'desc'
  {
    return this.employeeService.getSortDirection();
  }

  onSearch(term: string): void
  {
    this.searchSubject.next(term);
  }

  onSort(column: string): void
  {
    this.employeeService.setSort(column);
    this.refreshEmployees();
  }

  //Dropdown handlers
  onDepartmentFilter(department: string): void
  {
    this.employeeService.setDepartmentFilter(department);
    this.refreshEmployees();
  }

  onStatusFilter(status: string): void
  {
    this.employeeService.setStatusFilter(status);
    this.refreshEmployees();
  }

  onLocationFilter(location: string): void
  {
    this.employeeService.setLocationFilter(location);
    this.refreshEmployees();
  }
}
