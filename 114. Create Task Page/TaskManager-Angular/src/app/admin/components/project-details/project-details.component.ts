import { Component, OnInit } from '@angular/core';
import { Project } from '../../../models/project';
import { ActivatedRoute } from '@angular/router';
import { ProjectsService } from '../../../services/projects.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.scss']
})
export class ProjectDetailsComponent implements OnInit
{
  project: Project;
  routeParmsSubscription: Subscription;
  
  constructor(private activatedRoute: ActivatedRoute, private projectsService: ProjectsService)
  {
    this.project = new Project();
  }

  ngOnInit()
  {
    this.routeParmsSubscription = this.activatedRoute.params.subscribe((params) => {
      let pid = params["projectid"];
      
      this.projectsService.getProjectByProjectID(pid).subscribe((proj: Project) => {
        this.project = proj;
      });

    });
  }

  ngOnDestroy()
  {
    this.routeParmsSubscription.unsubscribe();
  }
}
