import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from "@angular/material/table";
import { FormGroup, FormControl } from "@angular/forms";

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
  formGroup: FormGroup;

  constructor(private bookingsService: BookingsService)
  {
    this.formGroup = new FormGroup({
      search: new FormControl(null)
    });
  }

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

        //filterPredicate
        this.bookings.filterPredicate = (data, filter) =>
        {
          let data2 = { ...data };
          if (filter)
          {
            filter = filter.toLowerCase();
          }
          if (data2.customerName)
          {
            data2.customerName = data2.customerName.toLowerCase();
          }
          if (data2.location)
          {
            data2.location = data2.location.toLowerCase();
          }
          return data2.customerName.indexOf(filter) != -1 || data2.location.indexOf(filter) != -1;
        };
      },
      (error) =>
      {
        console.log(error);
        this.bookingLoadingStatus = "Error fetching the data";
        this.isError = true;
      }
    );
  }

  filterBookings()
  {
    if (this.formGroup.value.search != null && this.bookings)
    {
      this.bookings.filter = this.formGroup.value.search.trim();
    }
  }

  clearFilter()
  {
    this.formGroup.patchValue({ search: "" });
    this.filterBookings();
  }
}
