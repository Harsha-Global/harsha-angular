import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PipesDemoComponent } from './pipes-demo-component/pipes-demo-component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, PipesDemoComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App
{
}
