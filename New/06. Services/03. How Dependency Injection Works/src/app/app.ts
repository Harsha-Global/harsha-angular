import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LogDemo } from './log-demo/log-demo';
import { AnotherDemo } from './another-demo/another-demo';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, LogDemo, AnotherDemo],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App
{
}
