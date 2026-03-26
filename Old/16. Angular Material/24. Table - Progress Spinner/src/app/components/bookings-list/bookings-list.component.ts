import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from "@angular/material/table";
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
  bookings: MatTableDataSource<Booking> = null;
  columnsToDisplay: string[] = ['customerName', 'location', 'date', 'actions'];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  rows: Booking[] = [];
  isLoadingCompleted: boolean = false;
  bookingLoadingStatus: string = "Loading...";
  isError: boolean = false;

  constructor(private bookingsService: BookingsService) { }

  ngOnInit(): void
  {
    this.bookingsService.getBookings().subscribe(
      (response: Booking[]) =>
      {
        //create data source based on the response (Booking[])
        this.bookings = new MatTableDataSource<Booking>(response);

        //paginator
        this.bookings.paginator = this.paginator;

        //sort
        this.bookings.sort = this.sort;

        //rows
        this.rows = response;

        //isLoadingCompleted is true
        this.isLoadingCompleted = true;
      },
      (error) =>
      {
        console.log(error);
        this.bookingLoadingStatus = "Error fetching the data";
        this.isError = true;
      }
    );
  }
}
