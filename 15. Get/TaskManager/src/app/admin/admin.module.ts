import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from "./dashboard/dashboard.component";
import { MyProfileComponent } from "./my-profile/my-profile.component";
import { AboutComponent } from "./about/about.component";
import { DashboardService } from "../dashboard.service";
 import { ProjectsComponent } from "./projects/projects.component";

@NgModule({
  declarations: [
    DashboardComponent,
    MyProfileComponent,
    AboutComponent,
    ProjectsComponent
  ],
  imports: [ CommonModule ],
  exports: [ DashboardComponent, MyProfileComponent, AboutComponent, ProjectsComponent ],
  providers: [ DashboardService ]
})
export class AdminModule
{
}
