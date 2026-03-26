import { Component, OnInit, Input, EventEmitter, Output, ContentChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { ClientLocationsService } from 'src/app/client-locations.service';
import { Project } from 'src/app/project';
import { ProjectsService } from 'src/app/projects.service';
import { CheckBoxPrinterComponent } from '../check-box-printer/check-box-printer.component';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit
{
  @Input("currentProject") project: Project | any;
  @Input("recordIndex") i: number = 0;

  @Output() editClick = new EventEmitter();
  @Output() deleteClick = new EventEmitter();

  MySubscription: Subscription | any;
  hideDetails: boolean = false;

  constructor(public projectsService: ProjectsService)
  {
  }

  ngOnInit()
  {
    this.MySubscription = this.projectsService.MySubject.subscribe((hide) => {
      this.hideDetails = hide;
    });
  }

  onEditClick(event: any, i: number)
  {
    this.editClick.emit({ event, i});
  }

  onDeleteClick(event: any, i: number)
  {
    this.deleteClick.emit({ event, i});
  }

  ngOnDestroy()
  {
    this.MySubscription.unsubscribe();
  }

  @ContentChild("selectionBox") selectionBox: CheckBoxPrinterComponent | any = null;

  isAllCheckedChange(b: boolean)
  {
    if (b)
    {
      this.selectionBox.check();
    }
    else
    {
      this.selectionBox.unCheck();
    }
  }
}

