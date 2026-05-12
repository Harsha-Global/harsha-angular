import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [ReactiveFormsModule, JsonPipe],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App
{
  registrationForm = new FormGroup({
    username: new FormControl('', {nonNullable: true, validators:[
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(20)
    ]}),
    email: new FormControl('', {nonNullable: true, validators: [
      Validators.required,
      Validators.email
    ]}),
    password: new FormControl('', {nonNullable: true, validators: [
      Validators.required,
      Validators.minLength(6)
    ]})
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
