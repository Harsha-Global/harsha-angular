import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from "./admin/dashboard/dashboard.component";
import { AboutComponent } from "./admin/about/about.component";
import { ProjectsComponent } from "./admin/projects/projects.component";
import { LoginComponent } from './login/login.component';
import { CanActivateGuardService } from './can-activate-guard.service';
import { SignUpComponent } from './sign-up/sign-up.component';
import { TasksComponent } from './tasks/tasks.component';
import { ProjectDetailsComponent } from './admin/project-details/project-details.component';

const routes: Routes = [
  { path: "", redirectTo: "login", pathMatch: "full" },
  { path: "login", component: LoginComponent },
  { path: "signup", component: SignUpComponent },
  { path: "about", component: AboutComponent },

  {
    path: "employee", canActivate: [CanActivateGuardService], data: { expectedRole: "Employee" }, children: [
      { path: "tasks", component: TasksComponent },
    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
