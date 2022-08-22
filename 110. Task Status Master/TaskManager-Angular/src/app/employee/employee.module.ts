import { NgModule } from '@angular/core';
import { TasksComponent } from './components/tasks/tasks.component';
import { EmployeeRoutingModule } from './employee-routing/employee-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    TasksComponent
  ],
  imports: [
    SharedModule,
    EmployeeRoutingModule
  ],
  exports:
  [
    TasksComponent
  ]
})
export class EmployeeModule { }
