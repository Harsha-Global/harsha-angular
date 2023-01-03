import { Injectable } from '@angular/core';
import { MatSnackBar } from "@angular/material/snack-bar";

@Injectable({
  providedIn: 'root'
})
export class NotificationService
{
  constructor(private matSnackbar: MatSnackBar) { }

  showNotification(message: string, buttonText: string)
  {
    //snackbar / notification
    this.matSnackbar.open(message, buttonText, {
      duration: 5000,
      horizontalPosition: "right",
      verticalPosition: "bottom",
      panelClass: "blue-back"
    });
  }
}
