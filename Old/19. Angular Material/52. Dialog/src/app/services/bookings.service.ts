import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { Booking } from "../models/booking";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class BookingsService
{
  constructor(private httpClient: HttpClient) { }

  getBookings(): Observable<Booking[]>
  {
    return this.httpClient.get<Booking[]>(`http://localhost:7000/bookings?_sort=checkIn@_order=desc`).pipe(map(
      (bookings: any) =>
      {
        bookings.forEach((booking: any) =>
        {
          booking.checkIn = new Date(booking.checkIn);
          booking.checkOut = new Date(booking.checkOut);
          booking.dateOfBirth = new Date(booking.dateOfBirth);
        });

        return bookings;
      }
    ));
  }

  postBooking(booking: Booking): Observable<Booking>
  {
    return this.httpClient.post<Booking>(`http://localhost:7000/bookings`, booking);
  }
}
