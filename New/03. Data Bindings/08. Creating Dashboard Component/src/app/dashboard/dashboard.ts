import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  imports: [],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {
  //Properties for metrics
  salesValue: number = 75000;
  targetValue: number = 100000;

  //Properties for styling demonstrations
  performance: string = 'average'; //options: poor, average, excellent
  isActive: boolean = true;
  statusColor: string = 'green';

  //Employee data for list demonstrations
  employees: { id: number, name: string, role: string, salary: number}[] = 
  [
    { id: 1, name: 'John Smith', role: 'Manager', salary: 85000 },
    { id: 2, name: 'Sarah Johnson', role: 'Developer', salary: 75000 },
    { id: 3, name: 'Mike Davis', role: 'Designer', salary: 65000 }
  ];
}
