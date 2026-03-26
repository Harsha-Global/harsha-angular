import { Component, OnInit } from '@angular/core';

import { Booking } from "../../models/booking";
import { BookingsService } from "../../services/bookings.service";

@Component({
  selector: 'app-bookings-list',
  templateUrl: './bookings-list.component.html',
  styleUrls: ['./bookings-list.component.css']
})
export class BookingsListComponent implements OnInit
{
  //properties
  bookings: Booking[] = [];
  columnsToDisplay: string[] = ['customerName', 'location', 'date', 'actions'];

  constructor(private bookingsService: BookingsService) { }

  ngOnInit(): void
  {
    this.bookingsService.getBookings().subscribe(
      (response: Booking[]) =>
      {
        this.bookings = response;
      },
      (error) =>
      {
        console.log(error);
      }
    );
  }
}
