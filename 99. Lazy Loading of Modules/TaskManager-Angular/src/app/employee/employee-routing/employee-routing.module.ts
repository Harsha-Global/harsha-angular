import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CanActivateGuardService } from 'src/app/guards/can-activate-guard.service';
import { TasksComponent } from '../components/tasks/tasks.component';

const routes: Routes = [
  {
    path: "employee", canActivate: [CanActivateGuardService], data: { expectedRole: "Employee" }, children: [
      { path: "tasks", component: TasksComponent, data: { linkIndex: 1 } },
    ]
  },

];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }

