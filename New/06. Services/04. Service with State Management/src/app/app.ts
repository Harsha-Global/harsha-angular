import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LogDemo } from './log-demo/log-demo';
import { AnotherDemo } from './another-demo/another-demo';
import { CounterDisplay } from './counter-display/counter-display';
import { CounterControls } from './counter-controls/counter-controls';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, LogDemo, AnotherDemo, CounterDisplay, CounterControls],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App
{
}
