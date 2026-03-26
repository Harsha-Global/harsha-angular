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
}
