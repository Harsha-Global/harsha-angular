import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Task } from '../task-manager/task-manager';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class TasksApiService
{
  private http: HttpClient = inject(HttpClient);
  private apiUrl: string = environment.apiUrl;

  getTasks(): Observable<Task[]>
  {
    return this.http.get<Task[]>(`${this.apiUrl}/tasks`);
  }

  createTask(task: Task): Observable<Task>
  {
    return this.http.post<Task>(`${this.apiUrl}/tasks`, task);
  }

  deleteTask(id: number): Observable<any>
  {
    return this.http.delete<any>(`${this.apiUrl}/tasks/${id}`);
  }

  updateTask(id: number, task: Task): Observable<Task>
  {
    return this.http.put<Task>(`${this.apiUrl}/tasks/${id}`, task);
  }

  getTaskById(id: number): Observable<Task>
  {
    return this.http.get<Task>(`${this.apiUrl}/tasks/${id}`);
  }
}
