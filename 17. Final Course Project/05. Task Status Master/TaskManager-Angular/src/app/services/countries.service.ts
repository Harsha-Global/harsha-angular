import { Injectable } from '@angular/core';
import { Country } from './../models/country';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountriesService
{
  constructor(private httpClient: HttpClient)
  {
  }

  getCountries(): Observable<Country[]>
  {
    return this.httpClient.get<Country[]>("http://localhost:9090/api/countries", { responseType: "json" });
  }

  getCountryByCountryID(CountryID: number): Observable<Country>
  {
    return this.httpClient.get<Country>("http://localhost:9090/api/countries/searchbycountryid/" + CountryID, { responseType: "json" });
  }

  insertCountry(newCountry: Country): Observable<Country>
  {
    return this.httpClient.post<Country>("http://localhost:9090/api/countries", newCountry, { responseType: "json" });
  }

  updateCountry(existingCountry: Country): Observable<Country>
  {
    return this.httpClient.put<Country>("http://localhost:9090/api/countries", existingCountry, { responseType: "json" });
  }

  deleteCountry(CountryID: number): Observable<string>
  {
    return this.httpClient.delete<string>("http://localhost:9090/api/countries?CountryID=" + CountryID);
  }
}
