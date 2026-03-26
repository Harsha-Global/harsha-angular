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

  allEmployees: Employee[] = [];
  employees: Employee[] = [];
  isLoading: boolean = true;
  searchTerm: string = '';

  ngOnInit(): void 
  {
    //Setup search subscription
    this.searchSubject.pipe(
      debounceTime(300),
      distinctUntilChanged()
    ).subscribe((term) => {
      //console.log('Search:', term);
      this.searchTerm = term;
      this.filterEmployees();
    });

    this.isLoading = true;
    this.employeeService.getEmployees().subscribe({
      next: (data: Employee[]) => {
        this.employees = data;
        this.allEmployees = data;
        this.isLoading = false;
      },
      error: (error) => {
        console.error(`Error fetching employees: `, error);
        this.isLoading = false;
      }
    });
  }

  onSearch(term: string): void
  {
    this.searchSubject.next(term);
  }

  filterEmployees(): void
  {
    if (!this.searchTerm.trim())
    {
      this.employees = this.allEmployees;
      return;
    }

    const term = this.searchTerm.toLowerCase().trim();

    this.employees = this.allEmployees.filter((employee: Employee) => {
      return (
        employee.firstName.toLowerCase().includes(term) ||
        employee.lastName.toLowerCase().includes(term) ||
        employee.email.toLowerCase().includes(term) ||
        employee.department.toLowerCase().includes(term)
      );
    });
  }
}
