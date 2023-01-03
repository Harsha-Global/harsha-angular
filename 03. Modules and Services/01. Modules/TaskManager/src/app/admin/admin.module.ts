import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [DashboardComponent, MyProfileComponent, AboutComponent],
  imports: [CommonModule],
  exports: [DashboardComponent, MyProfileComponent, AboutComponent],
  providers: [],
})
export class AdminModule { }
