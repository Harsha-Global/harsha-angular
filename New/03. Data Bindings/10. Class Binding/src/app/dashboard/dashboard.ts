import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {
  //Properties for metrics
  salesValue: number = 70000;
  targetValue: number = 100000;

  //Properties for styling demonstrations
  performance: string = 'average'; //options: poor, average, excellent
  isActive: boolean = false;
  statusColor: string = 'green';
  fontSize: number = 24;

  //Employee data for list demonstrations
  employees: { id: number, name: string, role: string, salary: number}[] = 
  [
    { id: 1, name: 'John Smith', role: 'Manager', salary: 85000 },
    { id: 2, name: 'Sarah Johnson', role: 'Developer', salary: 75000 },
    { id: 3, name: 'Mike Davis', role: 'Designer', salary: 65000 }
  ];

  getPerformanceColor(): string
  {
    const percentage = (this.salesValue / this.targetValue) * 100;
    if (percentage < 50)
      return 'red';
    else if (percentage < 80)
      return 'orange';
    else
      return 'green';
  }

  getPerformanceClass(): string
  {
    const percentage = (this.salesValue / this.targetValue) * 100;
    if (percentage < 50)
      return 'danger';
    else if (percentage < 80)
      return 'warning';
    else
      return 'success';
  }
}
