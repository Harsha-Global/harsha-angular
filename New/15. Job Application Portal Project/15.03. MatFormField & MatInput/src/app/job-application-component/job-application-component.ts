import { Component, inject } from '@angular/core';
import { MatStepperModule } from '@angular/material/stepper';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-job-application-component',
  imports: [MatStepperModule, ReactiveFormsModule, MatButtonModule,
    MatFormFieldModule, MatInputModule
  ],
  templateUrl: './job-application-component.html',
  styleUrl: './job-application-component.css',
})
export class JobApplicationComponent
{
  private fb: FormBuilder = inject(FormBuilder);

  personalInfoForm: FormGroup = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    email: ['', Validators.required],
    phone: ['', Validators.required]
  });

  professionalDetailsForm: FormGroup = this.fb.group({
    currentRole: ['', Validators.required]
  });

  jobPreferencesForm: FormGroup = this.fb.group({
    position: ['', Validators.required]
  });

  reviewForm: FormGroup = this.fb.group({
    confirm: [false, Validators.requiredTrue]
  });
}
