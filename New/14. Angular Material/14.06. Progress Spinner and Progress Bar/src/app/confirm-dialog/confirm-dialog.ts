import { Component, inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-confirm-dialog',
  imports: [MatDialogModule, MatButtonModule],
  templateUrl: './confirm-dialog.html',
  styleUrl: './confirm-dialog.css',
})
export class ConfirmDialog
{
  private dialogRef: any = inject(MatDialogRef<ConfirmDialog>);
  data: any = inject(MAT_DIALOG_DATA);

  onCancel(): void
  {
    this.dialogRef.close(false);
  }

  onDelete(): void
  {
    this.dialogRef.close(true);
  }
}
