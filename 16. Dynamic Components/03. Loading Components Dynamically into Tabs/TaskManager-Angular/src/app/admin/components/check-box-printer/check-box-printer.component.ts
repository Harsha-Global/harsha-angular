import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-check-box-printer',
  templateUrl: './check-box-printer.component.html',
  styleUrls: ['./check-box-printer.component.scss']
})
export class CheckBoxPrinterComponent implements OnInit {
  isChecked: boolean = false;

  constructor() { }

  ngOnInit()
  {
  }

  check()
  {
    this.isChecked = true;
  }

  unCheck()
  {
    this.isChecked = false;
  }
}
