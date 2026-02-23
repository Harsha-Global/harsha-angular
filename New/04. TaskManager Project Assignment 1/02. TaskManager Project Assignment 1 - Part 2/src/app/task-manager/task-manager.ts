import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Task
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
  imports: [CommonModule, FormsModule],
  templateUrl: './task-manager.html',
  styleUrl: './task-manager.css',
})
export class TaskManager
{
  //Core data
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

  //Filter controls
  filterStatus: string = 'all';
  filterCategory: string = 'all';
  filterPriority: string = 'all';
  showCompleted: boolean = true;
}
