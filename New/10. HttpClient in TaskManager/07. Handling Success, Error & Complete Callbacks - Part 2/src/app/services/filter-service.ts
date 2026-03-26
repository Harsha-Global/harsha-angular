import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FilterService
{
  private filterStatus: string = 'all';
  private filterCategory: string = 'all';
  private filterPriority: string = 'all';
  private showCompleted: boolean = true;

  getStatusFilter(): string
  {
    return this.filterStatus;
  }
  
  setStatusFilter(status: string): void
  {
    this.filterStatus = status;
  }

  getCategoryFilter(): string
  {
    return this.filterCategory;
  }

  setCategoryFilter(category: string): void
  {
    this.filterCategory = category;
  }

  getPriorityFilter(): string
  {
    return this.filterPriority;
  }

  setPriorityFilter(priority: string): void
  {
    this.filterPriority = priority;
  }

  getShowCompleted(): boolean
  {
    return this.showCompleted;
  }

  setShowCompleted(value: boolean): void
  {
    this.showCompleted = value;
  }

  resetFilters(): void
  {
    this.filterStatus = 'all';
    this.filterCategory = 'all';
    this.filterPriority = 'all';
    this.showCompleted = true;
  }
}
