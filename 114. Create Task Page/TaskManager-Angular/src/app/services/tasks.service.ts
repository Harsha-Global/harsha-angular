import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Task } from '../models/task';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TasksService
{
  constructor(private httpClient: HttpClient)
  {
  }

  insertTask(newTask: Task): Observable<Task>
  {
    var user = JSON.parse(sessionStorage.currentUser);
    newTask.createdBy = user.id; //add this statement to store the current user's id in the 'tasks' table
    return this.httpClient.post<Task>("http://localhost:9090/api/createtask", newTask, { responseType: "json" });
  }
}

