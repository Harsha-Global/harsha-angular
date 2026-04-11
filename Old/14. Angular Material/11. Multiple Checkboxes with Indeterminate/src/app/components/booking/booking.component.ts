import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormArray } from '@angular/forms';
import { CountriesService } from '../../services/countries.service';
import { CustomErrorStateMatcher } from "../../helpers/customErrorStateMatcher";
import { CitiesService } from '../../services/cities.service';
import { City } from '../../models/City';
import { debounceTime, tap, switchMap } from "rxjs/operators";

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit
{
  //properties
  countries: any;
  formGroup: FormGroup;
  customErrorStateMatcher: CustomErrorStateMatcher = new CustomErrorStateMatcher();
  cities: City[] = [];
  isCitiesLoading: boolean = false;

  //checkbox-group
  hobbies: any[] = [
    { id: 1, hobbyName: "Music" },
    { id: 2, hobbyName: "Food" },
    { id: 3, hobbyName: "Travel" },
    { id: 4, hobbyName: "Pets" },
    { id: 5, hobbyName: "Hiking" },
  ];

  constructor(private countriesService: CountriesService, private citiesService: CitiesService)
  {
    this.formGroup = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      customerName: new FormControl(null, [Validators.required, Validators.maxLength(30), Validators.pattern('^[A-Za-z. ]*$')]),
      country: new FormControl(null, [Validators.required]),
      city: new FormControl(null),
      receiveNewsLetters: new FormControl(null),
      hobbies: new FormArray([]),
      allHobbies: new FormControl(false)
    });

    //add form controls to form array
    this.hobbies.forEach(() =>
    {
      this.hobbiesFormArray.push(new FormControl(false));
    });
  }

  //returns the form array
  get hobbiesFormArray(): FormArray
  {
    return this.formGroup.get("hobbies") as FormArray;
  }

  //executes when the user clicks on "All" checkbox for hobbies
  onAllHobbiesCheckBoxChange()
  {
    this.hobbiesFormArray.controls.forEach((hobby, index) =>
    {
      this.hobbiesFormArray.at(index).patchValue(this.formGroup.value.allHobbies);
    });
  }

  //returns true, if all hobby checkboxes are checked
  allHobbiesSelected()
  {
    return this.hobbiesFormArray.value.every(val => val === true); //[true, true, true, true, true]
  }

  //returns true, if all hobby checkboxes are unchecked
  noHobbiesSelected()
  {
    return this.hobbiesFormArray.value.every(val => val === false); //[false, false, false, false, false]
  }

  //executes when the user checks / unchecks any hobby checkbox
  onHobbyChange(i)
  {
    if (this.allHobbiesSelected())
      this.formGroup.patchValue({ allHobbies: true });
    else
      this.formGroup.patchValue({ allHobbies: false });
  }

  ngOnInit(): void
  {
    //countries
    this.countriesService.getCountries().subscribe(
      (response) =>
      {
        this.countries = response;
      },
      (error) =>
      {
        console.log(error);
      });

    //ngOnInit
    this.getFormControl("city").valueChanges
      .pipe(

        //debounceTime: wait for at least 500 milliseconds, after typing in textbox
        debounceTime(500),

        //tap: do something before making http request
        tap(() =>
        {
          this.cities = [];
          this.isCitiesLoading = true;
        }),

        //switchMap
        switchMap((value) =>
        {
          return this.citiesService.getCities(value);
        })
      )
      .subscribe((response) =>
      {
        this.cities = response;
        this.isCitiesLoading = false;
      });
  }

  //returns the form control instance based on the control name
  getFormControl(controlName: string): FormControl
  {
    return this.formGroup.get(controlName) as FormControl;
  }

  //returns the error message based on the given control and error
  getErrorMessage(controlName: string, errorType: string): string
  {
    //controlName = "customerName"
    //errorType = "required"
    switch (controlName)
    {
      case "customerName":
        {
          if (errorType === "required")
            return "You must specify <strong>Name</strong>";
          else if (errorType === "maxlength")
            return "<strong>Name</strong> can contain up to 30 characters only";
          else if (errorType === "pattern")
            return "<strong>Name</strong> can contain alphabets or dot (.) or space only";
          else
            return "";
        }

      case "email":
        {
          if (errorType === "required")
            return "<strong>Email</strong> can't be blank";
          else if (errorType === "email")
            return "<strong>Email</strong> should be in correct format. Eg: someone@example.com";
          else
            return "";
        }

      case "country":
        {
          if (errorType === "required")
            return "You must choose a <strong>Country</strong>";
          else
            return "";
        }

      default: return "";
    }
  }

}
