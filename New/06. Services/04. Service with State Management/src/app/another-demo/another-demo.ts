import { Component } from '@angular/core';
import { LoggerService } from '../services/logger';

@Component({
  selector: 'app-another-demo',
  imports: [],
  templateUrl: './another-demo.html',
  styleUrl: './another-demo.css',
})
export class AnotherDemo
{
  constructor(private loggerService: LoggerService)
  {
  }

  getServiceInstanceId(): number
  {
    return this.loggerService.getInstanceId();
  }
}
