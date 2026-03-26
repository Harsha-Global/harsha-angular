import { Injectable, inject } from '@angular/core';
import { TasksService } from './tasks-service';

@Injectable({
  providedIn: 'root',
})
export class StatisticsService
{
  private tasksService: TasksService = inject(TasksService);

  getCompletedTasksCount(): number
  {
    return this.tasksService.getTasks().filter(task => task.status === 'completed').length;
  }

  getPendingTasksCount(): number
  {
    return this.tasksService.getTasks().filter(task => task.status === 'pending').length;
  }

  getOverdueTasksCount(): number
  {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return this.tasksService.getTasks().filter(task => new Date(task.dueDate) < today && task.status != 'completed').length;
  }

  getCompletionRate(): number
  {
    const tasks = this.tasksService.getTasks();
    if (tasks.length == 0) return 0;

    const completed = this.getCompletedTasksCount();
    const total = tasks.length;
    return Math.round((completed / total) * 100);
  }

  getProductivityLevel(): string
  {
    const rate = this.getCompletionRate();
    if (rate >= 80) return 'excellent';
    if (rate >= 60) return 'good';
    if (rate >= 40) return 'needs-improvement';
    return 'poor';
  }
}
