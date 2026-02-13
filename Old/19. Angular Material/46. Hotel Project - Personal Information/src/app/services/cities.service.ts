import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { City } from "../models/City";

@Injectable({
  providedIn: 'root'
})
export class CitiesService
{
  constructor(private httpClient: HttpClient) { }

  getCities(searchText: string): Observable<City[]>
  {
    return this.httpClient.get<City[]>(`http://localhost:7000/cities?cityName_like=^${searchText}`);
  }
}
