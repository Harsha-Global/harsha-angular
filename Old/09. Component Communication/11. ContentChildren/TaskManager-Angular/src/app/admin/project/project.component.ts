import { Component, OnInit, Input, EventEmitter, Output, ContentChild, ContentChildren, QueryList } from '@angular/core';
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

  @ContentChildren("selectionBox") selectionBoxes: QueryList<CheckBoxPrinterComponent> | any = null;

  isAllCheckedChange(b: boolean)
  {
    let selectionBox = this.selectionBoxes.toArray();
    if (b)
    {
      for (let i = 0; i < selectionBox.length; i++)
      {
        selectionBox[i].check();
      }
    }
    else
    {
      for (let i = 0; i < selectionBox.length; i++)
      {
        selectionBox[i].unCheck();
      }
    }
  }
}

