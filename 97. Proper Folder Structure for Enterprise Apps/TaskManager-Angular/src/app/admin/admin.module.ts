import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";
import { CheckBoxPrinterComponent } from './components/check-box-printer/check-box-printer.component';
import { FilterPipe } from '../pipes/filter.pipe';
import { AdminRoutingModule } from './admin-routing/admin-routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MyProfileComponent } from './components/my-profile/my-profile.component';
import { AboutComponent } from './components/about/about.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ProjectComponent } from './components/project/project.component';
import { ProjectDetailsComponent } from './components/project-details/project-details.component';
import { TeamSizeValidatorDirective } from '../directives/team-size-validator.directive';
import { ClientLocationStatusValidatorDirective } from '../directives/client-location-status-validator.directive';
import { ProjectIDUniqueValidatorDirective } from '../directives/project-idunique-validator.directive';
import { NumberToWordsPipe } from '../pipes/number-to-words.pipe';
import { PagingPipe } from '../pipes/paging.pipe';
import { DashboardService } from '../services/dashboard.service';

@NgModule({
  declarations: [
    DashboardComponent,
    MyProfileComponent,
    AboutComponent,
    ProjectsComponent,
    TeamSizeValidatorDirective,
    ClientLocationStatusValidatorDirective,
    ProjectIDUniqueValidatorDirective,
    ProjectComponent,
    CheckBoxPrinterComponent,
    NumberToWordsPipe,
    FilterPipe,
    PagingPipe,
    ProjectDetailsComponent
  ],
  imports: [CommonModule, FormsModule, AdminRoutingModule],
  exports: [DashboardComponent, MyProfileComponent, AboutComponent, ProjectsComponent, TeamSizeValidatorDirective, ClientLocationStatusValidatorDirective, ProjectIDUniqueValidatorDirective, ProjectDetailsComponent],
  providers: [DashboardService]
})
export class AdminModule {
}
