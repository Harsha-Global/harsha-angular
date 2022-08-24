import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TaskStatus } from '../models/task-status';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TaskStatusesService {
  constructor(private httpClient: HttpClient) {
  }

  getTaskStatuses(): Observable<TaskStatus[]> {
    return this.httpClient.get<TaskStatus[]>("http://localhost:9090/api/taskstatuses", { responseType: "json" });
  }

  getTaskStatusByTaskStatusID(TaskStatusID: number): Observable<TaskStatus> {
    return this.httpClient.get<TaskStatus>("http://localhost:9090/api/taskstatuses/searchbytaskstatusid/" + TaskStatusID, { responseType: "json" });
  }

  insertTaskStatus(newTaskStatus: TaskStatus): Observable<TaskStatus> {
    return this.httpClient.post<TaskStatus>("http://localhost:9090/api/taskstatuses", newTaskStatus, { responseType: "json" });
  }

  updateTaskStatus(existingTaskStatus: TaskStatus): Observable<TaskStatus> {
    return this.httpClient.put<TaskStatus>("http://localhost:9090/api/taskstatuses", existingTaskStatus, { responseType: "json" });
  }

  deleteTaskStatus(TaskStatusID: number): Observable<string> {
    return this.httpClient.delete<string>("http://localhost:9090/api/taskstatuses?TaskStatusID=" + TaskStatusID);
  }
}
