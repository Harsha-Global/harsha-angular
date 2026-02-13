import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { TaskPriority } from '../../../models/task-priority';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TaskPrioritiesService } from '../../../services/task-priorities.service';
import { FilterPipe } from '../../../pipes/filter.pipe';
import * as $ from "jquery";

@Component({
  selector: 'app-task-priorities',
  templateUrl: './task-priorities.component.html',
  styleUrls: ['./task-priorities.component.scss']
})
export class TaskPrioritiesComponent implements OnInit {
  //Objects for Holding Model Data
  taskPriorities: TaskPriority[] = [];
  showLoading: boolean = true;

  //Objects for Delete
  deleteTaskPriority: TaskPriority = new TaskPriority();
  editIndex: number | any = null;
  deleteIndex: number | any = null;

  //Properties for Searching
  searchBy: string = "taskPriorityName";
  searchText: string = "";

  //Properties for Paging
  currentPageIndex: number = 0;
  pages: any[] = [];
  pageSize: number = 7;

  //Properties for Sorting
  sortBy: string = "taskPriorityName";
  sortOrder: string = "ASC";

  //Reactive Forms
  newForm: FormGroup | any = null;
  editForm: FormGroup | any = null;

  //Autofocus TextBoxes
  @ViewChild("defaultTextBox_New") defaultTextBox_New: ElementRef | any = null;
  @ViewChild("defaultTextBox_Edit") defaultTextBox_Edit: ElementRef | any = null;

  //Constructor
  constructor(private taskPrioritiesService: TaskPrioritiesService, private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    //Get data from database
    this.taskPrioritiesService.getTaskPriorities().subscribe(
      (response: TaskPriority[]) => {
        this.taskPriorities = response;
        this.showLoading = false;
        this.calculateNoOfPages();
      }
    );

    //Create newForm
    this.newForm = this.formBuilder.group({
      taskPriorityID: this.formBuilder.control(null),
      taskPriorityName: this.formBuilder.control(null, [Validators.required])
    });

    //Create editForm
    this.editForm = this.formBuilder.group({
      taskPriorityID: this.formBuilder.control(null),
      taskPriorityName: this.formBuilder.control(null, [Validators.required])
    });
  }

  calculateNoOfPages() {
    //Get no. of Pages
    let filterPipe = new FilterPipe();
    var noOfPages = Math.ceil(filterPipe.transform(this.taskPriorities, this.searchBy, this.searchText).length / this.pageSize);
    this.pages = [];

    //Generate pages
    for (let i = 0; i < noOfPages; i++) {
      this.pages.push({ pageIndex: i });
    }

    this.currentPageIndex = 0;
  }

  onPageIndexClicked(ind: number) {
    //Set currentPageIndex
    if (ind >= 0 && ind < this.pages.length) {
      this.currentPageIndex = ind;
    }
  }

  onNewClick(event: any) {
    //reset the newForm
    this.newForm.reset({ taskPriorityID: 0 });
    setTimeout(() => {
      //Focus the TaskPriority textbox in newForm
      this.defaultTextBox_New.nativeElement.focus();
    }, 100);
  }

  onSaveClick() {
    if (this.newForm.valid) {
      //Invoke the REST-API call
      this.taskPrioritiesService.insertTaskPriority(this.newForm.value).subscribe((response) => {
        //Add Response to Grid
        var p: TaskPriority = new TaskPriority();
        p.taskPriorityID = response.taskPriorityID;
        p.taskPriorityName = response.taskPriorityName;
        this.taskPriorities.push(p);

        //Reset the newForm
        this.newForm.reset();
        $("#newTaskPriorityFormCancel").trigger("click");
        this.calculateNoOfPages();

        this.calculateNoOfPages();
      }, (error) => {
        console.log(error);
      });
    }
  }

  onEditClick(event: any, taskPriority: TaskPriority) {
    //Reset the editForm
    this.editForm.reset();
    setTimeout(() => {
      //Set data into editForm
      this.editForm.patchValue(taskPriority);
      this.editIndex = this.taskPriorities.indexOf(taskPriority);

      //Focus the TaskPriority textbox in editForm
      this.defaultTextBox_Edit.nativeElement.focus();
    }, 100);
  }

  onUpdateClick() {
    if (this.editForm.valid) {
      //Invoke the REST-API call
      this.taskPrioritiesService.updateTaskPriority(this.editForm.value).subscribe((response: TaskPriority) => {
        //Update the response in Grid
        this.taskPriorities[this.editIndex] = response;

        //Reset the editForm
        this.editForm.reset();
        $("#editTaskPriorityFormCancel").trigger("click");
      },
        (error) => {
          console.log(error);
        });
    }
  }

  onDeleteClick(event: any, taskPriority: TaskPriority) {
    //Set data into deleteTaskPriority
    this.deleteTaskPriority.taskPriorityID = taskPriority.taskPriorityID;
    this.deleteTaskPriority.taskPriorityName = taskPriority.taskPriorityName;
    this.deleteIndex = this.taskPriorities.indexOf(taskPriority);
  }

  onDeleteConfirmClick() {
    //Invoke the REST-API call
    this.taskPrioritiesService.deleteTaskPriority(this.deleteTaskPriority.taskPriorityID).subscribe(
      (response) => {
        //Delete object in Grid
        this.taskPriorities.splice(this.deleteIndex, 1);

        //Clear deleteCountry
        this.deleteTaskPriority.taskPriorityID = null;
        this.deleteTaskPriority.taskPriorityName = null;

        //Recall the calculateNoOfPages
        this.calculateNoOfPages();
      },
      (error) => {
        console.log(error);
      });
  }

  onSearchTextChange(event: any) {
    this.calculateNoOfPages();
  }
}
