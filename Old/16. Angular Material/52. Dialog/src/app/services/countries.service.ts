import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Country } from "../models/country";

@Injectable({
  providedIn: 'root'
})
export class CountriesService
{
  constructor(private httpClient: HttpClient) { }

  getCountries(): Observable<Country[]>
  {
    return this.httpClient.get<Country[]>(`http://localhost:7000/countries`);
  }
}
