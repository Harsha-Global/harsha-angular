import { Component, inject, OnInit } from '@angular/core';
import { DecimalPipe, DatePipe } from '@angular/common';

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
  employees: Employee[] = [];
  isLoading: boolean = true;

  ngOnInit(): void 
  {
    this.isLoading = true;
    this.employeeService.getEmployees().subscribe({
      next: (data: Employee[]) => {
        this.employees = data;
        this.isLoading = false;
      },
      error: (error) => {
        console.error(`Error fetching employees: `, error);
        this.isLoading = false;
      }
    });
  }
}
