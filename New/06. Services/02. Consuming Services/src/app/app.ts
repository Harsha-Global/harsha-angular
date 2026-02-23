import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LogDemo } from './log-demo/log-demo';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, LogDemo],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App
{
}
