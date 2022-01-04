import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TaskPriority } from '../models/task-priority';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TaskPrioritiesService {
  private urlPrefix: string = 'http://localhost:9090';

  constructor(private httpClient: HttpClient) {
  }

  getTaskPriorities(): Observable<TaskPriority[]> {
    return this.httpClient.get<TaskPriority[]>(this.urlPrefix + "/api/taskpriorities", { responseType: "json" });
  }

  getTaskPrioritytByTaskPriorityID(TaskPriorityID: number): Observable<TaskPriority> {
    return this.httpClient.get<TaskPriority>(this.urlPrefix + "/api/taskpriorities/searchbytaskpriorityid/" + TaskPriorityID, { responseType: "json" });
  }

  insertTaskPriority(newTaskPriority: TaskPriority): Observable<TaskPriority> {
    return this.httpClient.post<TaskPriority>(this.urlPrefix + "/api/taskpriorities", newTaskPriority, { responseType: "json" });
  }

  updateTaskPriority(existingTaskPriority: TaskPriority): Observable<TaskPriority> {
    return this.httpClient.put<TaskPriority>(this.urlPrefix + "/api/taskpriorities", existingTaskPriority, { responseType: "json" });
  }

  deleteTaskPriority(TaskPriorityID: number): Observable<string> {
    return this.httpClient.delete<string>(this.urlPrefix + "/api/taskpriorities?TaskPriorityID=" + TaskPriorityID);
  }
}
