import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from "@angular/forms";
import { debounceTime, tap, switchMap, startWith, map } from "rxjs/operators";

import { City } from "../../models/City";
import { CitiesService } from "../../services/cities.service";
import { Hotel } from "../../models/Hotel";
import { HotelsService } from 'src/app/services/hotels.service';
import { RoomType } from "../../models/room-type";
import { RoomTypesService } from "../../services/room-types.service";

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit
{
  //properties
  formGroup: FormGroup;
  cities: City[] = [];
  hotels: Hotel[] = [];
  roomTypes: RoomType[] = [];
  isCitiesLoading: boolean = false;

  minAdults: number = 1;
  maxAdults: number = 2;
  minChildren: number = 0;
  maxChildren: number = 2;

  //checkbox group
  allDineIn: any[] = [
    { id: 1, dineInName: "Breakfast" },
    { id: 2, dineInName: "Lunch" },
    { id: 3, dineInName: "Dinner" }
  ];

  constructor(private citiesService: CitiesService, private hotelsService: HotelsService, private roomTypesService: RoomTypesService)
  {
    //formgroup
    this.formGroup = new FormGroup({
      searchHotel: new FormGroup({
        city: new FormControl(null, [Validators.required]),
        checkIn: new FormControl(null, [Validators.required]),
        checkOut: new FormControl(null, [Validators.required]),
        adults: new FormControl(1, [Validators.min(1)]),
        children: new FormControl(0, [Validators.min(0)]),
      }),

      chooseHotel: new FormGroup({
        hotel: new FormControl(null, [Validators.required])
      }),

      chooseRoom: new FormGroup({
        roomType: new FormControl("Standard Single Room"),
        allDineIn: new FormControl(false),
        dineIn: new FormArray([]),
        foods: new FormControl(null)
      })
    });

    //add dine in options
    this.allDineIn.forEach(() =>
    {
      this.dineInFormArray.push(new FormControl(false));
    });
  }

  //Executes on first render
  ngOnInit(): void
  {
    //cities (autocomplete)
    this.getFormControl("searchHotel.city").valueChanges
      .pipe(
        //debounce: wait for at least 500 milliseconds, after typing in the textbox
        debounceTime(500),

        //tap: do something before making request
        tap(() =>
        {
          this.cities = [];
          this.isCitiesLoading = true;
        }),

        //switchMap: to make http request
        switchMap(value => this.citiesService.getCities(value))
      )
      .subscribe(
        (response: City[]) =>
        {
          this.cities = response;
          this.isCitiesLoading = false;
        },

        (error) =>
        {
          console.log(error);
          this.isCitiesLoading = false;
        }
      );


    //hotels
    this.hotelsService.getHotels().subscribe(
      (response: Hotel[]) =>
      {
        this.hotels = response;
      },
      (error) =>
      {
        console.log(error);
      }
    );

    //room types
    this.roomTypesService.getRoomTypes().subscribe(
      (response: RoomType[]) =>
      {
        this.roomTypes = response;
      },
      (error) =>
      {
        console.log(error);
      }
    );
  }

  get dineInFormArray(): FormArray | null
  {
    return this.formGroup.get("chooseRoom.dineIn") as FormArray;
  }

  //increase adults
  increaseAdults()
  {
    if (this.formGroup.value.searchHotel.adults < this.maxAdults)
    {
      this.getFormControl("searchHotel").patchValue({
        adults: this.formGroup.value.searchHotel.adults + 1
      });
    }
  }

  //decrease adults
  decreaseAdults()
  {
    if (this.formGroup.value.searchHotel.adults > this.minAdults)
    {
      this.getFormControl("searchHotel").patchValue({
        adults: this.formGroup.value.searchHotel.adults - 1
      });
    }
  }

  //increase children
  increaseChildren()
  {
    if (this.formGroup.value.searchHotel.children < this.maxChildren)
    {
      this.getFormControl("searchHotel").patchValue({
        children: this.formGroup.value.searchHotel.children + 1
      });
    }
  }

  //decrease children
  decreaseChildren()
  {
    if (this.formGroup.value.searchHotel.children > this.minChildren)
    {
      this.getFormControl("searchHotel").patchValue({
        children: this.formGroup.value.searchHotel.children - 1
      });
    }
  }

  chooseHotel(hotel)
  {
    this.getFormControl("chooseHotel").patchValue({
      hotel: hotel.hotelName
    });
  }

  //returns the form control object based on the form control name
  getFormControl(controlName: string): FormControl
  {
    return this.formGroup.get(controlName) as FormControl;
  }

  //returns the error message based on the given control name and errorType
  getErrorMessage(controlName: string, errorType: string): string
  {
    let errorMessage: string = "";
    switch (controlName)
    {
      case "city":
        {
          if (errorType == "required") errorMessage = "You must choose a <strong>City</strong>";
        }

      case "checkIn":
        {
          if (errorType == "required") errorMessage = "You must enter a <strong>Check-In Date</strong>";
        }

      case "checkOut":
        {
          if (errorType == "required") errorMessage = "You must enter a <strong>Check-Out Date</strong>";
        }
    }

    return errorMessage;
  }

}
