import { Component, inject } from '@angular/core';
import { MatDialogModule, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { DatePipe } from '@angular/common';

import { JobApplication } from '../services/application-service';


@Component({
  selector: 'app-application-details-dialog',
  imports: [MatDialogModule, MatButtonModule, DatePipe],
  templateUrl: './application-details-dialog.html',
  styleUrl: './application-details-dialog.css',
})
export class ApplicationDetailsDialog
{
  application: JobApplication = inject<JobApplication>(MAT_DIALOG_DATA);
}
