import { Injectable } from '@angular/core';
import { Task } from "../task-manager/task-manager";

@Injectable({
  providedIn: 'root',
})
export class TasksService
{
  tasks: Task[] = [
    {
      id: 1,
      title: 'Complete Angular Assignment',
      description: 'Finish the task manager application with all requirements',
      category: 'education',
      priority: 'high',
      dueDate: new Date('2024-12-15'),
      status: 'in-progress',
      createdAt: new Date('2024-12-01')
    },
    {
      id: 2,
      title: 'Buy Groceries',
      description: 'Milk, Bread, Eggs, Vegetables',
      category: 'shopping',
      priority: 'medium',
      dueDate: new Date('2024-12-10'),
      status: 'pending',
      createdAt: new Date('2024-12-05')
    },
    {
      id: 3,
      title: 'Team Meeting',
      description: 'Discuss Q1 project roadmap',
      category: 'work',
      priority: 'high',
      dueDate: new Date('2024-12-08'),
      status: 'completed',
      createdAt: new Date('2024-12-08')
    }
  ];

  getTasks(): Task[]
  {
    return this.tasks;
  }

  addTask(task: Task): void
  {
    this.tasks.push(task);
  }

  deleteTask(id: number): void
  {
    const index = this.tasks.findIndex(t => t.id === id);
    if (index !== -1)
    {
      this.tasks.splice(index, 1);
    }
  }

  toggleTaskComplete(id: number): void
  {
    const task = this.tasks.find(t => t.id === id);
    if (task)
    {
      if (task.status === 'completed')
      {
        task.status = 'pending';
        delete task.completedAt;
      }
      else
      {
        task.status = 'completed';
        task.completedAt = new Date();
      }
    }
  }
}
