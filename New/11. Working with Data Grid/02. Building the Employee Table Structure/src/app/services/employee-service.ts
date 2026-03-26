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

  getEmployees(): Observable<Employee[]>
  {
    return this.http.get<Employee[]>(this.apiUrl);
  }
}
