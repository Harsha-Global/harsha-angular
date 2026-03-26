import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CanActivateGuardService } from 'src/app/can-activate-guard.service';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { ProjectsComponent } from '../projects/projects.component';
import { ProjectDetailsComponent } from '../project-details/project-details.component';

const routes: Routes = [

    {
        path: "admin", canActivate: [CanActivateGuardService], data: { expectedRole: "Admin" }, children: [
            { path: "dashboard", component: DashboardComponent, data: { linkIndex: 0 } },
            { path: "projects", component: ProjectsComponent, data: { linkIndex: 2 } },
            { path: "projects/view/:projectid", component: ProjectDetailsComponent, data: { linkIndex: 3 } },
        ]
    },

];
@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
})
export class AdminRoutingModule { }
