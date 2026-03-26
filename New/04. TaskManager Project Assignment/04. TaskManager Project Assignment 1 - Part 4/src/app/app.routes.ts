import { Routes } from '@angular/router';
import { TaskManager } from './task-manager/task-manager';

export const routes: Routes = [
 { path: 'dashboard', component: TaskManager },
 { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
 { path: '**', redirectTo: '/dashboard'}
];
