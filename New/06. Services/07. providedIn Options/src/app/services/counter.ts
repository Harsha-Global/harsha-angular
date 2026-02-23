import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CounterService
{
  private count: number = 0;

  getCount(): number
  {
    return this.count;
  }
  
  increment(): void
  {
    this.count++;
  }

  decrement(): void
  {
    this.count--;
  }

  reset(): void
  {
    this.count = 0;
  }
}
