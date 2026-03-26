import { Component, inject, OnInit } from '@angular/core';
import { DecimalPipe, DatePipe, CurrencyPipe } from '@angular/common';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { FormsModule } from '@angular/forms';

import { EmployeeService } from '../services/employee-service';
import { Employee } from '../models/employee.model';

@Component({
  selector: 'app-employee-list',
  imports: [DecimalPipe, DatePipe, CurrencyPipe, FormsModule],
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

  //View or Delete
  selectedEmployee: Employee | null = null;

  //Editing
  editingEmployeeId: number | null = null;
  editFormData: Partial<Employee> = {};

  //Add Employee
  showAddForm: boolean = false;
  newEmployeeData: Partial<Employee> = {};

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

  /* Pagination */
  get pageNumbers(): number[]
  {
    return [...Array(this.totalPages).keys()].map(i => i + 1);
  }

  /* View or Delete */
  onViewEmployee(employee: Employee): void
  {
    this.selectedEmployee = employee;
  }

  onCloseDetail(): void
  {
    this.selectedEmployee = null;
  }

  onDeleteEmployee(employee: Employee): void
  {
    const confirmed: boolean = confirm(`Are you sure you want to delete ${employee.firstName} ${employee.lastName}?`);

    if (confirmed)
    {
      this.employeeService.deleteEmployee(employee.id).subscribe(
        {
          next: () => {
            this.refreshEmployees();
          },
          error: (error: any) => {
            console.error('Error deleting employee: ', error);
          }
        }
      );
    }
  }


  //Edit Employee
  onEditEmployee(employee: Employee): void
  {
    this.editingEmployeeId = employee.id;
    this.editFormData = { ...employee };
  }

  onCancelEdit(): void
  {
    this.editingEmployeeId = null;
    this.editFormData = {};
  }

  onSaveEmployee(): void
  {
    if (this.editingEmployeeId == null)
    {
      return;
    }

    this.employeeService.updateEmployee(this.editingEmployeeId, this.editFormData).subscribe({
      next: () => {
        this.editingEmployeeId = null;
        this.editFormData = {};
        this.refreshEmployees();
      },
      error: (error) => {
        console.error('Error deleting employee: ', error);
      }
    });
  }

  //Add Employee
  onToggleAddForm(): void
  {
    if (!this.showAddForm)
    {
      this.newEmployeeData = {};
    }
    this.showAddForm = !this.showAddForm;
  }

  onCancelAdd(): void
  {
    this.showAddForm = false;
    this.newEmployeeData = {};
  }

  onAddEmployee(): void
  {
    if (!this.newEmployeeData.firstName || !this.newEmployeeData.lastName || !this.newEmployeeData.email)
    {
      return;
    }

    this.employeeService.addEmployee(this.newEmployeeData).subscribe({
      next: () => {
        this.showAddForm = false;
        this.newEmployeeData = {};
        this.refreshEmployees();
      },
      error: (error) => {
        console.error('Error adding employee: ', error);
      }
    });
  }

  //Export to CSV
  onExportToCsv(): void
  {
    const employees = this.employeeService.getEmployeesForExport();

    if (employees.length === 0)
    {
      alert('No employees to export');
      return;
    }

    //CSV
    //e.g: value1,value2,value3

    //Define headers
    const headers = ['ID', 'First Name', 'Last Name', 'Email', 'Phone', 'Department', 'Designation', 'Location', 'Salary', 'Join Date', 'Status'];

    //Helper function to escape CSV values
    const escapeCsvValue = (value: any): string => {
      const stringValue = String(value ?? '');
      //Wrap in quotes and escape existing quotes
      return `"${stringValue.replace(/"/g, '""')}"`;
    };

    //Convert employees to CSV rows
    const rows = employees.map(emp => {
      return [
        escapeCsvValue(emp.id),
        escapeCsvValue(emp.firstName),
        escapeCsvValue(emp.lastName),
        escapeCsvValue(emp.email),
        escapeCsvValue(emp.phone),
        escapeCsvValue(emp.department),
        escapeCsvValue(emp.designation),
        escapeCsvValue(emp.location),
        escapeCsvValue(emp.salary),
        escapeCsvValue(emp.joinDate),
        escapeCsvValue(emp.status)
      ].join(', ')
    });

    //Unexpected CSV: value1,"va,lu,e2",value3

    //Combine headers and rows
    const csvContent = headers.join(', ') + '\n' + rows.join('\n');

    //Create blob and trigger download
    const blob = new Blob([csvContent], {
      type: 'text/csv'
    });
    const url = URL.createObjectURL(blob);

    const anchor = document.createElement('a');
    anchor.href = url;
    anchor.download = 'employees.csv';
    anchor.click();

    URL.revokeObjectURL(url);
  }
}
