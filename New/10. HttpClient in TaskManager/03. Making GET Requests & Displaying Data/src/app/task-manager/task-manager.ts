import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TasksService } from '../services/tasks-service';
import { FilterService } from '../services/filter-service';
import { StatisticsService } from '../services/statistics-service';
import { PriorityLabelPipe } from '../pipes/priority-label-pipe';
import { StatusLabelPipe } from '../pipes/status-label-pipe';
import { TasksApiService } from '../services/tasks-api-service';

export interface Task
{
  id: number;
  title: string;
  description: string;
  category: string;
  priority: string;
  dueDate: Date;
  status: string;
  createdAt: Date;
  completedAt?: Date;
}


@Component({
  selector: 'app-task-manager',
  imports: [CommonModule, FormsModule, PriorityLabelPipe, StatusLabelPipe],
  templateUrl: './task-manager.html',
  styleUrl: './task-manager.css',
})
export class TaskManager implements OnInit
{
  //Service
  private tasksService : TasksService = inject(TasksService);
  private filterService: FilterService = inject(FilterService);
  private statisticsService: StatisticsService = inject(StatisticsService);
  private tasksApiService: TasksApiService = inject(TasksApiService);


  //Dropdown Options
  categories: string[] = ['work', 'personal', 'shopping', 'health', 'finance', 'education', 'other'];
  priorities: string[] = ['low', 'medium', 'high', 'urgent'];
  statuses: string[] = ['pending', 'in-progress', 'completed', 'cancelled'];

  //Form data
  newTask: {
    title: string,
    description: string,
    category: string,
    priority: string,
    dueDate: string | Date,
    status: string
  } = {
    title: '',
    description: '',
    category: '',
    priority: 'medium',
    dueDate: '',
    status: 'pending'
  };

  
  //ngOnInit
  ngOnInit(): void
  {
    this.tasksApiService.getTasks()
    .subscribe((response: Task[]) => {
      //console.log(response);
      this.tasksService.setTasks(response);
    });
  }

  //Getter and setter properties for filters
  get filterStatus(): string
  {
    return this.filterService.getStatusFilter(); 
  }

  set filterStatus(value: string)
  {
    this.filterService.setStatusFilter(value);
  }

  get filterCategory(): string
  {
    return this.filterService.getCategoryFilter();
  }

  set filterCategory(value: string)
  {
    this.filterService.setCategoryFilter(value);
  }

  get filterPriority(): string
  {
    return this.filterService.getPriorityFilter();
  }

  set filterPriority(value: string)
  {
    this.filterService.setPriorityFilter(value);
  }

  get showCompleted(): boolean
  {
    return this.filterService.getShowCompleted();
  }

  set showCompleted(value: boolean)
  {
    this.filterService.setShowCompleted(value);
  }


  //Methods
  getTasks(): Task[]
  {
    return this.tasksService.getTasks();
  }

  getCompletedTasksCount(): number
  {
    return this.statisticsService.getCompletedTasksCount();
  }

  getPendingTasksCount(): number
  {
    return this.statisticsService.getPendingTasksCount();
  }

  getOverdueTasksCount(): number
  {
    return this.statisticsService.getOverdueTasksCount();
  }

  getCompletionRate(): number
  {
    return this.statisticsService.getCompletionRate();
  }

  getProductivityLevel(): string
  {
    return this.statisticsService.getProductivityLevel();
  }

  onFieldFocus(field: string): void
  {
    //Could add validation feedback here
  }

  onFieldBlur(field: string): void
  {
    //Could add validation feedback here
  }

  addTask(): void
  {
    if (!this.newTask.title || !this.newTask.category || !this.newTask.dueDate)
    {
      return;
    }

    const task: Task = {
      id: Date.now(),
      title: this.newTask.title,
      description: this.newTask.description,
      category: this.newTask.category,
      priority: this.newTask.priority,
      dueDate: new Date(this.newTask.dueDate),
      status: this.newTask.status,
      createdAt: new Date()
    };

    this.tasksService.addTask(task);
    this.clearForm();
  }

  clearForm(): void
  {
    this.newTask = {
      title: '',
      description: '',
      category: '',
      priority: 'medium',
      dueDate: '',
      status: 'pending'
    };
  }

  getFilteredTasks(): Task[]
  {
    let filtered = [...this.getTasks()];

    if (this.filterStatus !== 'all')
    {
      filtered = filtered.filter(task => task.status === this.filterStatus);
    }

    if (this.filterCategory !== 'all')
    {
      filtered = filtered.filter(task => task.category === this.filterCategory);
    }

    if (this.filterPriority !== 'all')
    {
      filtered = filtered.filter(task => task.priority === this.filterPriority);
    }

    if (!this.showCompleted)
    {
      filtered = filtered.filter(task => task.status !== 'completed');
    }

    return filtered;
  }

  toggleTaskComplete(id: number): void
  {
    this.tasksService.toggleTaskComplete(id);
  }

  isOverdue(task: Task): boolean
  {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return new Date(task.dueDate) < today && task.status != 'completed';
  }

  deleteTask(id: number): void
  {
    this.tasksService.deleteTask(id);
  }
}
