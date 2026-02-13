import { Component, OnInit } from '@angular/core';
import { MediaChange, MediaObserver } from "@angular/flex-layout";
import { Booking } from "../../models/booking";
import { BookingsService } from "../../services/bookings.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit
{
  //properties
  dashboardGridCols: number = 4;
  cardColspan: number = 2;
  bookings: Booking[] = [];

  constructor(private mediaObserver: MediaObserver, private bookingsService: BookingsService) { }

  ngOnInit(): void
  {
    //responsive dashbaord
    this.mediaObserver.asObservable().subscribe((media: MediaChange[]) =>
    {
      if (media.some(mediaChange => mediaChange.mqAlias == "lt-sm"))
      {
        this.dashboardGridCols = 1;
        this.cardColspan = 1;
      }
      else if (media.some(mediaChange => mediaChange.mqAlias == "lt-md"))
      {
        this.dashboardGridCols = 2;
        this.cardColspan = 2;
      }
      else
      {
        this.dashboardGridCols = 4;
        this.cardColspan = 2;
      }
    });


    //bookings
    this.bookingsService.getBookings().subscribe(
      (response: any) =>
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
