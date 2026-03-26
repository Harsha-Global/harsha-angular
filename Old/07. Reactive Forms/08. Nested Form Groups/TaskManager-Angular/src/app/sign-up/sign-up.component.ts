import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { CountriesService } from '../countries.service';
import { Country } from '../country';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit
{
  signUpForm: FormGroup | any = null;
  genders = ["male", "female"];
  countries: Country[] = []

  constructor(private countriesService: CountriesService)
  {
  }

  ngOnInit()
  {
    this.countries = this.countriesService.getCountries();

    this.signUpForm = new FormGroup({
      personName: new FormGroup({
        firstName: new FormControl(null),
        lastName: new FormControl(null),
      }),

      email: new FormControl(null),
      mobile: new FormControl(null),
      dateOfBirth: new FormControl(null),
      gender: new FormControl(null),
      countryID: new FormControl(null),
      receiveNewsLetters: new FormControl(null),
    });

    this.signUpForm.valueChanges.subscribe((value: any) =>
    {
      //console.log(value);
    });
  }

  onSubmitClick()
  {
    //Display current form value
    //console.log(this.signUpForm.value);

    //setValue
    // this.signUpForm.setValue({
    //   firstName: "Adam",
    //   lastName: "Smith",
    //   email: "smith@gmail.com",
    //   mobile: "9876543210",
    //   dateOfBirth: "2020-01-01",
    //   gender: "male",
    //   countryID: 3,
    //   receiveNewsLetters: true
    // });

    //patchValue
    // this.signUpForm.patchValue({
    //   firstName: "Adam",
    //   lastName: "Smith",
    //   email: "smith@gmail.com"
    // });

    //reset
    this.signUpForm.reset();

    //reset with Parameters
    this.signUpForm.reset({
      firstName: "Adam",
      lastName: "Smith",
      email: "smith@gmail.com"
    });
  }
}
