import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from '../models/employee.model';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService
{
  private http: HttpClient = inject(HttpClient);
  private apiUrl: string = `${environment.apiUrl}/employees`;

  private allEmployees: Employee[] = [];
  private searchTerm: string = '';
  private sortColumn: string = '';
  private sortDirection: 'asc' | 'desc' = 'asc';

  //Filter properties
  private filterDepartment: string = '';
  private filterStatus: string = '';
  private filterLocation: string = '';

  //Pagination properties
  private currentPage: number = 1;
  private pageSize: number = 10;
  private filteredCount: number = 0;


  getEmployees(): Observable<Employee[]>
  {
    return this.http.get<Employee[]>(this.apiUrl);
  }

  setEmployees(employees: Employee[]): void
  {
    this.allEmployees = employees;
  }

  getSortColumn(): string
  {
    return this.sortColumn;
  }

  getSortDirection(): 'asc' | 'desc'
  {
    return this.sortDirection;
  }

  getFilteredAndSortedEmployees(): Employee[]
  {
    let result = [...this.allEmployees];

    //Apply search filter
    if (this.searchTerm.trim())
    {
      const term = this.searchTerm.toLowerCase().trim();

      result = result.filter((employee: Employee) => {
      return (
        employee.firstName.toLowerCase().includes(term) ||
        employee.lastName.toLowerCase().includes(term) ||
        employee.email.toLowerCase().includes(term) ||
        employee.department.toLowerCase().includes(term) ||
        employee.location.toLowerCase().includes(term)
      );
      });
    }

    //Apply department filter
    if (this.filterDepartment)
    {
      result = result.filter(emp => emp.department === this.filterDepartment);
    }

    //Apply status filter
    if (this.filterStatus)
    {
      result = result.filter(emp => emp.status === this.filterStatus);
    }

    //Apply location filter
    if (this.filterLocation)
    {
      result = result.filter(emp => emp.location === this.filterLocation);
    }

    //Apply sort
    result = this.applySort(result);

    //Store filtered count before pagination
    this.filteredCount = result.length;

    //Apply pagination
    const startIndex = (this.currentPage - 1) * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    result = result.slice(startIndex, endIndex);

    return result;
  }

  setSearchTerm(term: string): void
  {
    this.searchTerm = term;
    this.currentPage = 1;
  }

  setSort(column: string): void
  {
    if (this.sortColumn === column)
    {
      this.sortDirection = this.sortDirection === 'asc'? 'desc' : 'asc';
    }
    else
    {
      this.sortColumn = column;
      this.sortDirection = 'asc';
    }
  }

  private applySort(employees: Employee[]): Employee[]
  {
    if (!this.sortColumn)
    {
      return employees;
    }

    return employees.sort((a: Employee, b: Employee) => {
      const valueA = a[this.sortColumn as keyof Employee];
      const valueB = b[this.sortColumn as keyof Employee];

      let comparison = 0;

      if (typeof valueA === 'string' && typeof valueB === 'string')
      {
        comparison = valueA.toLowerCase().localeCompare(valueB.toLowerCase());
      }
      else if (typeof valueA === 'number' && typeof valueB === 'number')
      {
        comparison = valueA - valueB;
      }

      return this.sortDirection === 'desc'? comparison * -1 : comparison;
    });
  }

  //Get unique values for dropdowns
  getDepartments(): string[]
  {
    const departments: string[] = this.allEmployees.map(emp => emp.department);
    return [...new Set(departments)].sort();
  }

  getStatuses(): string[]
  {
    const statuses: string[] = this.allEmployees.map(emp => emp.status);
    return [...new Set(statuses)].sort();
  }

  getLocations(): string[]
  {
    const locations: string[] = this.allEmployees.map(emp => emp.location);
    return [...new Set(locations)].sort();
  }

  //Filter setters
  setDepartmentFilter(department: string): void
  {
    this.filterDepartment = department;
    this.currentPage = 1;
  }

  setStatusFilter(status: string): void
  {
    this.filterStatus = status;
    this.currentPage = 1;
  }

  setLocationFilter(location: string): void
  {
    this.filterLocation = location;
    this.currentPage = 1;
  }

  //Pagination getters
  getCurrentPage(): number
  {
    return this.currentPage;
  }

  getPageSize(): number
  {
    return this.pageSize;
  }

  getTotalPages(): number
  {
    return Math.ceil(this.filteredCount / this.pageSize);
  }

  getFilteredCount(): number
  {
    return this.filteredCount;
  }


  //Pagination setters
  setPage(page: number): void
  {
    if (page < 1)
    {
      return;
    }

    if (page > this.getTotalPages())
    {
      return;
    }

    this.currentPage = page;
  }

  nextPage(): void
  {
    if (this.currentPage < this.getTotalPages())
    {
      this.currentPage++;
    }
  }

  previousPage(): void
  {
    if (this.currentPage > 1)
    {
      this.currentPage--;
    }
  }
  
  deleteEmployee(id: number): void
  {
    this.allEmployees = this.allEmployees.filter(emp => emp.id != id);

    //Handle edge case: current page might now be empty
    const newTotalPages = Math.ceil(this.allEmployees.length / this.pageSize);
    if (this.currentPage > newTotalPages)
    {
      this.currentPage = newTotalPages;
    }
    else if (newTotalPages == 0)
    {
      this.currentPage = 1;
    }
  }

  updateEmployee(id: number, updatedData: Partial<Employee>): void
  {
    const index = this.allEmployees.findIndex(emp => emp.id === id);

    if (index === -1)
    {
      return;
    }

    this.allEmployees[index] = {...this.allEmployees[index], ...updatedData};
  }
}
