import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LogDemo } from './log-demo/log-demo';
import { AnotherDemo } from './another-demo/another-demo';
import { CounterSection } from './counter-section/counter-section';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, LogDemo, AnotherDemo, CounterSection],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App
{
}
