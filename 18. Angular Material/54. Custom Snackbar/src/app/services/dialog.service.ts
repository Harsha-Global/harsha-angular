import { Injectable } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef } from "@angular/material/dialog";
import { ChangeDatesComponent } from "../components/change-dates/change-dates.component";
import { Booking } from '../models/booking';

@Injectable({
  providedIn: 'root'
})
export class DialogService
{
  constructor(private matDialog: MatDialog) { }

  openDateChangerDialog(booking: Booking): MatDialogRef<ChangeDatesComponent>
  {
    let dialogConfig = new MatDialogConfig();
    dialogConfig.panelClass = "dialog-box";
    dialogConfig.autoFocus = true;
    dialogConfig.width = "800px";
    dialogConfig.data = booking;

    let dialogRef: MatDialogRef<ChangeDatesComponent> = this.matDialog.open(ChangeDatesComponent, dialogConfig);
    //console.log(dialogRef);

    return dialogRef;
  }
}
