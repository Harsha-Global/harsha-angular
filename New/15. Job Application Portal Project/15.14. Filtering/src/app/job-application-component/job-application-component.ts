import { Component, inject, OnInit } from '@angular/core';
import { MatStepper, MatStepperModule } from '@angular/material/stepper';
import { AbstractControl, FormBuilder, FormGroup, ReactiveFormsModule, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { map, Observable, startWith } from 'rxjs';
import { AsyncPipe, DatePipe } from '@angular/common';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';

import { ApplicationService } from '../services/application-service';

@Component({
  selector: 'app-job-application-component',
  imports: [MatStepperModule, ReactiveFormsModule, MatButtonModule,
    MatFormFieldModule, MatInputModule, MatIconModule, MatSelectModule,
    MatAutocompleteModule, AsyncPipe, MatDatepickerModule,
    MatCheckboxModule, MatRadioModule, MatSlideToggleModule,
    MatCardModule, MatDividerModule,
    DatePipe, MatSnackBarModule
  ],
  templateUrl: './job-application-component.html',
  styleUrl: './job-application-component.css',
})
export class JobApplicationComponent implements OnInit
{
  private applicationService: ApplicationService = inject(ApplicationService);
  private snackbar: MatSnackBar = inject(MatSnackBar);

  
  private fb: FormBuilder = inject(FormBuilder);
  cities: string[] = [
    'Bangalore',
    'Hyderabad',
    'Mumbai',
    'Delhi',
    'Chennai',
    'Pune',
    'Kolkata',
    'Ahmedabad',
    'Jaipur',
    'Lucknow',
    'New York',
    'San Francisco',
    'London',
    'Singapore',
    'Dubai',
    'Toronto'
  ];

  personalInfoForm: FormGroup = this.fb.group({
    firstName: ['', [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(50)
      ]
    ],
    lastName: ['', [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(50)
      ]],
    email: ['', 
      [
        Validators.required,
        Validators.email
      ]
    ],
    phone: ['', [
        Validators.required,
        Validators.pattern(/^\d{10}$/)
      ]
    ]
  });

  professionalDetailsForm: FormGroup = this.fb.group({
    currentRole: ['', Validators.required],
    experience: ['', Validators.required],
    skills: [[], Validators.required]
  });

  jobPreferencesForm: FormGroup = this.fb.group({
    preferredLocation: ['', [
      Validators.required,
      JobApplicationComponent.cityInList(this.cities)
    ]],
    availableStartDate: [null, Validators.required],
    interviewAvailability: this.fb.group({
      start: [null, Validators.required],
      end: [null, Validators.required]
    }),
    employmentTypes: [[], [Validators.required, JobApplicationComponent.minOneSelected]],
    relocation: ['', Validators.required],
    emailNotifications: [false]
  });

  reviewForm: FormGroup = this.fb.group({
    confirm: [false, Validators.requiredTrue]
  });

  today: Date = new Date();
  employmentTypes: string[] = ['Full-time', 'Part-time', 'Contract', 'Internship'];
  relocationOptions: any = [
    { value: 'anywhere', label: 'Yes, anywhere in the world' },
    { value: 'india', label: 'Yes, within India only'},
    { value: 'no', label: 'No, prefer my current location'}
  ];

  private static minOneSelected(control: AbstractControl): ValidationErrors | null
  {
    const value = control.value;
    return Array.isArray(value) && value.length > 0 ? null : { minOneSelected: true };
  }

  private static cityInList(cities: string[]): ValidatorFn
  {
    return (control: AbstractControl): ValidationErrors | null => {
      if (!control.value)
      {
        return null;
      }

      return cities.includes(control.value)? null : { cityNotInList: true };
    };
  }

  markStepAsTouched(formGroup: FormGroup): void
  {
    Object.values(formGroup.controls).forEach(
      (control: AbstractControl) => {
        control.markAsTouched();

        if (control instanceof FormGroup)
        {
          this.markStepAsTouched(control);
        }
      }
    );
  }

  onEmploymentTypeChange(type: string, checked: boolean): void
  {
    const control: AbstractControl = this.jobPreferencesForm.get('employmentTypes')!;
    const current: string[] = control.value || [];

    if (checked)
    {
      control.setValue([...current, type]);
    }
    else
    {
      control.setValue(current.filter(t => t != type));
    }
  }

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

  filteredCities!: Observable<string[]>;

  ngOnInit(): void
  {
    this.filteredCities = this.jobPreferencesForm.get('preferredLocation')!
    .valueChanges.pipe(
      startWith(''),
      map(value => this.filterCities(value || ''))
    );
  }

  private filterCities(value: string): string[]
  {
    const filterValue = value.toLowerCase();
    return this.cities.filter(city => 
      city.toLowerCase().includes(filterValue)
    );
  }

  getRelocationLabel(value: string): string
  {
    const option = this.relocationOptions.find(
      (opt: { value: string; label: string}) => opt.value === value
    );

    return option?.label ?? '';
  }

  onSubmit(stepper: MatStepper): void
  {
    const application = {
      ...this.personalInfoForm.value,
      ...this.professionalDetailsForm.value,
      ...this.jobPreferencesForm.value,
      ...this.reviewForm.value
    };
    console.log('Application submitted', application);

    this.applicationService.addApplication(application);

    this.snackbar.open(
      'Application submitted successfully!',
      'Close',
      { duration: 3000 }
    );

    this.personalInfoForm.reset();
    this.professionalDetailsForm.reset();
    this.jobPreferencesForm.reset();
    this.reviewForm.reset();

    stepper.reset();
  }
}
