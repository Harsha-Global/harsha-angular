import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingComponent } from './components/booking/booking.component';
import { BookingsListComponent } from './components/bookings-list/bookings-list.component';

const routes: Routes = [
  { path: "booking", component: BookingComponent },
  { path: "bookings-list", component: BookingsListComponent },
  { path: "", redirectTo: "/bookings-list", pathMatch: "full" },
  { path: "**", redirectTo: "/bookings-list", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
