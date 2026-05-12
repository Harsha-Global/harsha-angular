import { Component, inject } from '@angular/core';
import { MatStepperModule } from '@angular/material/stepper';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-job-application-component',
  imports: [MatStepperModule, ReactiveFormsModule, MatButtonModule,
    MatFormFieldModule, MatInputModule, MatIconModule, MatSelectModule
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
    currentRole: ['', Validators.required],
    experience: ['', Validators.required],
    skills: [[], Validators.required]
  });

  jobPreferencesForm: FormGroup = this.fb.group({
    position: ['', Validators.required]
  });

  reviewForm: FormGroup = this.fb.group({
    confirm: [false, Validators.requiredTrue]
  });

  clearField(controlName: string): void
  {
    this.personalInfoForm.get(controlName)?.reset();
  }

  roles: string[] = [
    'Frontend Developer',
    'Backend Developer',
    'Full Stack Developer',
    'DevOps Engineer',
    'Mobile Developer',
    'QA Engineer',
    'UI/UX Designer'
  ];

  experienceLevels: string[] = [
    'Less than 1 year',
    '1 to 3 years',
    '3 to 5 years',
    '5 to 10 years',
    'More than 10 years'
  ];

  skillsGroups: any = [
    {
      category: 'Frontend',
      skills: ['JavaScript', 'TypeScript', 'Angular', 'React', 'Vue', 'HTML', 'CSS']
    },
    {
      category: 'Backend',
      skills: ['Node.js', 'Java', 'Python', '.NET', 'Go', 'PHP']
    },
    {
      category: 'Database',
      skills: ['MySQL', 'PostgreSQL', 'MongoDB', 'Redis', 'SQL Server']
    }
  ];
}
