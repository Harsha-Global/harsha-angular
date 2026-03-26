import { Component, OnInit, Input, EventEmitter, Output, ContentChild, ContentChildren, QueryList, SimpleChanges, OnChanges, DoCheck, AfterContentChecked, AfterContentInit, AfterViewInit, AfterViewChecked, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Project } from 'src/app/models/project';
import { ProjectsService } from 'src/app/services/projects.service';
import { CheckBoxPrinterComponent } from '../check-box-printer/check-box-printer.component';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  @Input("currentProject") project: Project | any;
  @Input("recordIndex") i: number = 0;

  @Output() editClick = new EventEmitter();
  @Output() deleteClick = new EventEmitter();

  MySubscription: Subscription | any;

  hideDetails: boolean = false;

  constructor(public projectsService: ProjectsService) {
  }

  ngOnChanges(simpleChanges: SimpleChanges) {
    //console.info("--------------ngOnChanges called");

    for (let propName in simpleChanges) {
      let chng = simpleChanges[propName];
      let cur = JSON.stringify(chng.currentValue);
      let prev = JSON.stringify(chng.previousValue);
      //console.log(`${propName}: currentValue = ${cur}, previousValue = ${prev}`);
    }

    if (simpleChanges["project"]) {
      //this.project.teamSize += 1;
    }
  }

  ngOnInit() {
    //console.info("--------------ngOnInit called");
    this.MySubscription = this.projectsService.MySubject.subscribe((hide) => {
      this.hideDetails = hide;
    });
  }

  ngDoCheck() {
    //console.info("--------------ngDoCheck called");
  }

  ngAfterContentInit() {
    //console.info("--------------ngAfterContentInit called");
    //console.log(this.selectionBoxes.toArray());
  }

  ngAfterContentChecked() {
    //console.info("--------------ngAfterContentChecked called");
  }

  ngAfterViewInit() {
    //console.info("--------------ngAfterViewInit called");
    //console.log(this.tbl);
  }

  @ViewChild("tbl") tbl: ElementRef | any = null;

  ngAfterViewChecked() {
    //console.info("--------------ngAfterViewChecked called");
  }

  onEditClick(event: any, i: number) {
    this.editClick.emit({ event, i });
  }

  onDeleteClick(event: any, i: number) {
    this.deleteClick.emit({ event, i });
  }

  ngOnDestroy() {
    //console.info("--------------ngOnDestroy called");
    this.MySubscription.unsubscribe();
  }

  @ContentChildren("selectionBox") selectionBoxes: QueryList<CheckBoxPrinterComponent> | any = null;

  isAllCheckedChange(b: boolean) {
    let selectionBox = this.selectionBoxes.toArray();
    if (b) {
      for (let i = 0; i < selectionBox.length; i++) {
        selectionBox[i].check();
      }
    }
    else {
      for (let i = 0; i < selectionBox.length; i++) {
        selectionBox[i].unCheck();
      }
    }
  }
}

