import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CounterSection } from './counter-section/counter-section';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CounterSection],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App
{
}
