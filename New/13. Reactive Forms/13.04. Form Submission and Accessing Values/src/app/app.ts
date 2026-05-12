import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [ReactiveFormsModule, JsonPipe],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App
{
  registrationForm = new FormGroup({
    username: new FormControl('', {nonNullable: true}),
    email: new FormControl('', {nonNullable: true}),
    password: new FormControl('', {nonNullable: true})
  });

  onSubmit(): void
  {
    if (this.registrationForm.invalid)
    {
      return;
    }
    
    console.log(this.registrationForm.value);
    console.log(this.registrationForm.getRawValue());
    console.log(this.registrationForm.get('username'));
  }
}
