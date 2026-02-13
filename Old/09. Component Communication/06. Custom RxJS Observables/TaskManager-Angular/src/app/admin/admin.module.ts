import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from "./dashboard/dashboard.component";
import { MyProfileComponent } from "./my-profile/my-profile.component";
import { AboutComponent } from "./about/about.component";
import { DashboardService } from "../dashboard.service";
import { ProjectsComponent } from "./projects/projects.component";
import { FormsModule } from "@angular/forms";
import { TeamSizeValidatorDirective } from '../team-size-validator.directive';
import { ClientLocationStatusValidatorDirective } from '../client-location-status-validator.directive';
import { ProjectIDUniqueValidatorDirective } from '../project-idunique-validator.directive';
import { ProjectComponent } from './project/project.component';

@NgModule({
  declarations: [
    DashboardComponent,
    MyProfileComponent,
    AboutComponent,
    ProjectsComponent,
    TeamSizeValidatorDirective,
    ClientLocationStatusValidatorDirective,
    ProjectIDUniqueValidatorDirective,
    ProjectComponent
  ],
  imports: [ CommonModule, FormsModule ],
  exports: [ DashboardComponent, MyProfileComponent, AboutComponent, ProjectsComponent, TeamSizeValidatorDirective, ClientLocationStatusValidatorDirective, ProjectIDUniqueValidatorDirective ],
  providers: [ DashboardService ]
})
export class AdminModule
{
}
