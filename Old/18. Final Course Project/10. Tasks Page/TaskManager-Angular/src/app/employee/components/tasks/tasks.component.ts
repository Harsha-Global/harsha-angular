import { Component, OnInit } from '@angular/core';
import { TasksService } from '../../../services/tasks.service';
import { LoginService } from '../../../services/login.service';
import { GroupedTask } from '../../../models/grouped-task';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit
{
  taskGroups: GroupedTask[] = [];

  constructor(private tasksService: TasksService, public loginService: LoginService)
  {
  }

  ngOnInit()
  {
    this.tasksService.getTasks().subscribe((response) => {
      this.taskGroups = response;
    });
  }
}
