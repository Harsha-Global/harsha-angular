import { Injectable } from '@angular/core';
import { Country } from './country';

@Injectable({
  providedIn: 'root'
})
export class CountriesService
{
  constructor()
  {
  }

  getCountries(): Country[]
  {
    return [
      new Country(1, "India"),
      new Country(2, "UK"),
      new Country(3, "USA"),
      new Country(4, "Japan")
    ];
  }
}
