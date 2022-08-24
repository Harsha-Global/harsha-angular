import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Project } from 'src/app/models/project';
import { TaskPriority } from 'src/app/models/task-priority';
import { TasksService } from 'src/app/services/tasks.service';
import { ProjectsService } from 'src/app/services/projects.service';
import { Router } from '@angular/router';
import { TaskPrioritiesService } from 'src/app/services/task-priorities.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.scss']
})
export class CreateTaskComponent implements OnInit
{
  newTaskForm: FormGroup;
  projects: Observable<Project[]>;
  employees: Observable<any>;
  taskPriorities: Observable<TaskPriority[]>;
  
  constructor(private tasksService: TasksService, private router: Router, private projectsService: ProjectsService, private taskPrioritiesService: TaskPrioritiesService, private loginService: LoginService)
  {
  }

  ngOnInit()
  {
    this.newTaskForm = new FormGroup({
      taskID: new FormControl(0),
      taskName: new FormControl(null, [ Validators.required ]),
      description: new FormControl(null, []),
      projectID: new FormControl(null, [ Validators.required ]),
      assignedTo: new FormControl(null, [ Validators.required ]),
      taskPriorityID: new FormControl(2, [ Validators.required ])
    });

    this.projects = this.projectsService.getAllProjects();
    this.employees = this.loginService.getAllEmployes();
    this.taskPriorities = this.taskPrioritiesService.getTaskPriorities();
  }

  onCreateTaskClick(event)
  {
    this.newTaskForm["submitted"] = true;

    if (this.newTaskForm.valid)
    {
      this.tasksService.insertTask(this.newTaskForm.value).subscribe(() => {
        this.router.navigate( [ "/employee", "tasks" ]);
      }, (error) => {
        console.log(error);
      });
    }
    else
    {
      console.log(this.newTaskForm.errors);
    }
  }
}
