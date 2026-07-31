import { AfterContentChecked, AfterContentInit, Component, Input } from '@angular/core';

@Component({
  selector: 'app-dashboard-card',
  imports: [],
  templateUrl: './dashboard-card.html',
  styleUrl: './dashboard-card.css',
})
export class DashboardCard implements AfterContentInit, AfterContentChecked
{
  @Input() title: string = '';

  ngAfterContentInit(): void
  {
    console.log('After content init fired for the dashboard card');
  }

  ngAfterContentChecked(): void
  {
    console.log('Dashboard component - After content checked fired');  
  }
}
