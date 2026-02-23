import { Component } from '@angular/core';
import { CounterService } from '../services/counter';

@Component({
  selector: 'app-counter-display',
  imports: [],
  templateUrl: './counter-display.html',
  styleUrl: './counter-display.css',
})
export class CounterDisplay
{
  constructor(private counterService: CounterService)
  {
  }

  getCurrentCount(): number
  {
    return this.counterService.getCount();
  }
}
