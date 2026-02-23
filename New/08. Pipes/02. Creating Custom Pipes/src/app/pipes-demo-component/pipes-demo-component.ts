import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TruncatePipe } from '../truncate-pipe';
@Component({
  selector: 'app-pipes-demo-component',
  imports: [CommonModule, TruncatePipe],
  templateUrl: './pipes-demo-component.html',
  styleUrl: './pipes-demo-component.css',
})
export class PipesDemoComponent
{
  sampleDate: Date = new Date('2030-12-31T17:30:00+05:30');
  message: string = 'angular pipes are POWERFUL features';
  price: number = 1234.567;
  completionRate: number = 0.856;
  user: any = { name: 'John Doe', age: 30 };
  description: string = 'Angular is a powerful framework for building modern web applications with TypeScript and component-based architecture that enables developers to create scalable and maintainable code';
}
