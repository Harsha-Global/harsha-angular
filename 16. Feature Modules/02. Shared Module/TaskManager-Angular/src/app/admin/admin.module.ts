import { NgModule } from '@angular/core';
import { CheckBoxPrinterComponent } from './components/check-box-printer/check-box-printer.component';
import { AdminRoutingModule } from './admin-routing/admin-routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MyProfileComponent } from './components/my-profile/my-profile.component';
import { AboutComponent } from './components/about/about.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ProjectComponent } from './components/project/project.component';
import { ProjectDetailsComponent } from './components/project-details/project-details.component';
import { DashboardService } from '../services/dashboard.service';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    DashboardComponent,
    MyProfileComponent,
    AboutComponent,
    ProjectsComponent,
    ProjectComponent,
    CheckBoxPrinterComponent,
    ProjectDetailsComponent
  ],
  imports: [SharedModule, AdminRoutingModule],
  exports: [DashboardComponent, MyProfileComponent, AboutComponent, ProjectsComponent, ProjectDetailsComponent],
  providers: [DashboardService]
})
export class AdminModule {
}
