import { Component } from '@angular/core';
import { CounterService } from '../services/counter';

@Component({
  selector: 'app-counter-controls',
  imports: [],
  templateUrl: './counter-controls.html',
  styleUrl: './counter-controls.css',
})
export class CounterControls
{
  constructor(private counterService: CounterService)
  {
  }

  onIncrement(): void
  {
    this.counterService.increment();
  }

  onDecrement(): void
  {
    this.counterService.decrement();
  }

  onReset(): void
  {
    this.counterService.reset();
  }
}
