import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDividerModule } from '@angular/material/divider';
import { MatDialogModule, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar, MatSnackBarModule, MatSnackBarRef, TextOnlySnackBar } from '@angular/material/snack-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatProgressBarModule } from '@angular/material/progress-bar';

import { ConfirmDialog } from './confirm-dialog/confirm-dialog';

@Component({
  selector: 'app-root',
  imports: [MatButtonModule, MatIconModule, MatCardModule, MatToolbarModule, MatSidenavModule, MatDividerModule, MatDialogModule, MatSnackBarModule, MatProgressSpinnerModule, MatProgressBarModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App
{
  private dialog: MatDialog = inject(MatDialog);
  private snackBar: MatSnackBar = inject(MatSnackBar);

  openConfirmDialog()
  {
    const dialogRef: MatDialogRef<ConfirmDialog, any> = this.dialog.open(ConfirmDialog, {
      width: '400px',
      data: {
        taskName: 'Complete Angular Course'
      }
    });

    dialogRef.afterClosed().subscribe({
      next: (result: any) => {
        if (result)
        {
          //console.log('User confirmed deletion');
          const snackBarRef: MatSnackBarRef<TextOnlySnackBar> = this.snackBar.open(
            'Task deleted successfully.',
            'Undo',
            {
              duration: 3000,
              horizontalPosition: 'end',
              verticalPosition: 'top',
              panelClass: ['success-snackbar']
            }
          );

          snackBarRef.onAction().subscribe({
            next: () => {
              console.log('Undo clicked - restoring the task');
            }
          });

        }
      }
    });
  }
}
