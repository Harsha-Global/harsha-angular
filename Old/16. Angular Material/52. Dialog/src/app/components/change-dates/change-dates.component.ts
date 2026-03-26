import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from "@angular/forms";

@Component({
  selector: 'app-change-dates',
  templateUrl: './change-dates.component.html',
  styleUrls: ['./change-dates.component.css']
})
export class ChangeDatesComponent implements OnInit
{
  formGroup: FormGroup;

  constructor()
  {
    this.formGroup = new FormGroup({
      checkIn: new FormControl(null),
      checkOut: new FormControl(null)
    });
  }

  ngOnInit(): void
  {
  }

}
