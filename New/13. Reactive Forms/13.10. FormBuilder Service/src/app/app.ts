import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

import { noSpaces, minUppercase, passwordsMatch } from './validators/validators';
import { usernameAvailable } from './validators/validators';
import { UsernameService } from './username-service';

@Component({
  selector: 'app-root',
  imports: [ReactiveFormsModule, JsonPipe],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App
{
  registrationForm: FormGroup;

  constructor(private usernameService: UsernameService, 
    private fb: FormBuilder,
    private nonfb: NonNullableFormBuilder)
  {
    this.registrationForm = this.fb.group({
      //example: ['', Validators.required],
      username: this.nonfb.control('', { validators:[
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(20),
        Validators.pattern(/^[a-zA-Z0-9]+$/),
        noSpaces
      ],
      asyncValidators: [
        usernameAvailable(this.usernameService)
      ]}),
      email: this.nonfb.control('', { validators: [
        Validators.required,
        Validators.email
      ]}),
      password: this.nonfb.control('', { validators: [
        Validators.required,
        Validators.minLength(6),
        minUppercase(1)
      ]}),
      confirmPassword: this.nonfb.control('', { validators: [
        Validators.required
      ]}),
    }, { validators: [
      passwordsMatch
    ] });
  }

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

  get username(): FormControl
  {
    return this.registrationForm.get('username') as FormControl;
  }

  get email(): FormControl
  {
    return this.registrationForm.get('email') as FormControl;
  }

  get password(): FormControl
  {
    return this.registrationForm.get('password') as FormControl;
  }

  get confirmPassword(): FormControl
  {
    return this.registrationForm.get('confirmPassword') as FormControl;
  }
}
