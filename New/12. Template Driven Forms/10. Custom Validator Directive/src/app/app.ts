import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NoSpacesDirective } from "./directives/no-spaces.directives";

@Component({
  selector: 'app-root',
  imports: [FormsModule, JsonPipe, NoSpacesDirective],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App
{
  username: string = '';
  email: string = '';
  password: string = '';

  street: string = '';
  city: string = '';
  zip: string = '';
}
