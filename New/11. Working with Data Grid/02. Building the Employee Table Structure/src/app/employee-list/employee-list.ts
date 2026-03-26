import { Component, inject } from '@angular/core';
import { EmployeeService } from '../services/employee-service';
import { Employee } from '../models/employee.model';

@Component({
  selector: 'app-employee-list',
  imports: [],
  templateUrl: './employee-list.html',
  styleUrl: './employee-list.css',
})
export class EmployeeList
{
  private employeeService: EmployeeService = inject(EmployeeService);
  employees: Employee[] = [];
}
