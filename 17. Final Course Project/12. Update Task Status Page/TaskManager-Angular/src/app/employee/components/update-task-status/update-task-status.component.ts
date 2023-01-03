import { Component, OnInit } from '@angular/core';
import { Task } from '../../../models/task';
import { TaskStatusDetail } from '../../../models/TaskStatusDetail';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TaskStatus } from '../../../models/task-status';
import { Observable } from 'rxjs';
import { TasksService } from '../../../services/tasks.service';
import { Router, ActivatedRoute } from '@angular/router';
import { TaskStatusesService } from '../../../services/task-statuses.service';

@Component({
  selector: 'app-update-task-status',
  templateUrl: './update-task-status.component.html',
  styleUrls: ['./update-task-status.component.scss']
})
export class UpdateTaskStatusComponent implements OnInit {
  //Properties to represent taskstatusdetails
  taskID: number;
  currentTask: Task = new Task();
  currentTaskStatusDetail: TaskStatusDetail = new TaskStatusDetail();
  editTaskStatusForm: FormGroup;
  taskStatuses: Observable<TaskStatus[]>;

  constructor(private tasksService: TasksService, private router: Router, private taskStatuesService: TaskStatusesService, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    //Receive taskid parameter
    this.activatedRoute.params.subscribe((params) => {
      this.taskID = params["taskid"];
    });

    //Create reactive form
    this.editTaskStatusForm = new FormGroup({
      thisStatusDetailID: new FormControl(0),
      taskID: new FormControl(null),
      taskStatusID: new FormControl(null, [Validators.required]),
      description: new FormControl(null)
    });

    //get taskstatuses from db for dropdownlist
    this.taskStatuses = this.taskStatuesService.getTaskStatuses();

    //get task by taskid
    this.tasksService.getTaskByTaskID(this.taskID).subscribe((task: Task) => {
      this.currentTask = task;

      //Load task details into Reactive form
      this.currentTaskStatusDetail.taskID = this.taskID;
      this.currentTaskStatusDetail.description = null;
      this.currentTaskStatusDetail.taskStatusID = task.currentTaskStatusID;
      this.currentTaskStatusDetail.taskStatusDetailID = 0;
      console.log(this.currentTaskStatusDetail);
      this.editTaskStatusForm.patchValue(this.currentTaskStatusDetail);
    });
  }

  onUpdateTaskStatusClick(event) {
    this.editTaskStatusForm["submitted"] = true;

    if (this.editTaskStatusForm.valid) {
      //send REST-API call to server
      this.tasksService.updateTaskStatus(this.editTaskStatusForm.value).subscribe((response) => {
        this.router.navigate(["/employee", "tasks"]);
      }, (error) => {
        console.log(error);
      });
    }
    else {
      console.log(this.editTaskStatusForm.errors);
    }
  }
}
