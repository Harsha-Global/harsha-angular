import { Injectable } from '@angular/core';
import { ValidatorFn, AbstractControl, ValidationErrors, FormGroup, FormControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class CustomValidatorsService
{
  constructor() { }

  public minimumAgeValidator(minAge: number): ValidatorFn
  {
    return (control: AbstractControl): ValidationErrors | null =>
    {
      if (!control.value)
        return null; //return, if the date of birth is null

      var today = new Date();
      var dateOfBirth = new Date(control.value);
      var diffMilliSeconds = Math.abs(today.getTime() - dateOfBirth.getTime());
      var diffYears = (diffMilliSeconds / (1000 * 60 * 60 * 24)) / 365.25;

      if (diffYears >= minAge)
        return null; //valid
      else
        return { minAge: { valid: false } }; //invalid
    };
  }
}


