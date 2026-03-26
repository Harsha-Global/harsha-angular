import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-masters',
  templateUrl: './masters.component.html',
  styleUrls: ['./masters.component.scss']
})
export class MastersComponent implements OnInit {
  masterMenuItems = [
    { itemName: "Countries", displayName: "Countries" },
    { itemName: "ClientLocations", displayName: "Client Locations" },
    { itemName: "TaskPriorities", displayName: "Task Priorities" },
    { itemName: "TaskStatus", displayName: "Task Status" },
  ];

  activeItem: string = "";

  constructor() { }

  ngOnInit() {
  }

}
