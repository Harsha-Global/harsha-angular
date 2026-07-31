import { Routes } from '@angular/router';
import { JobApplicationComponent } from './job-application-component/job-application-component';
import { Applications } from './applications/applications';

export const routes: Routes = [
 { path: 'apply', component: JobApplicationComponent },
 { path: 'admin/applications', component: Applications },
 { path: '', redirectTo: 'apply', pathMatch: 'full'}
];
