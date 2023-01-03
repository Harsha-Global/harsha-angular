import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { ClientLocation } from '../../../models/client-location';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ClientLocationsService } from '../../../services/client-locations.service';
import { FilterPipe } from '../../../pipes/filter.pipe';
import * as $ from "jquery";

@Component({
  selector: 'app-client-locations',
  templateUrl: './client-locations.component.html',
  styleUrls: ['./client-locations.component.scss']
})
export class ClientLocationsComponent implements OnInit {
  //Objects for Holding Model Data
  clientLocations: ClientLocation[] = [];
  showLoading: boolean = true;

  //Objects for Delete
  deleteClientLocation: ClientLocation = new ClientLocation();
  editIndex: number | any = null;
  deleteIndex: number | any = null;

  //Properties for Searching
  searchBy: string = "clientLocationName";
  searchText: string = "";

  //Properties for Paging
  currentPageIndex: number = 0;
  pages: any[] = [];
  pageSize: number = 7;

  //Properties for Sorting
  sortBy: string = "clientLocationName";
  sortOrder: string = "ASC";

  //Reactive Forms
  newForm: FormGroup | any = null;
  editForm: FormGroup | any = null;

  //Autofocus TextBoxes
  @ViewChild("defaultTextBox_New") defaultTextBox_New: ElementRef | any = null;
  @ViewChild("defaultTextBox_Edit") defaultTextBox_Edit: ElementRef | any = null;

  //Constructor
  constructor(private clientLocationsService: ClientLocationsService, private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    //Get data from database
    this.clientLocationsService.getClientLocations().subscribe(
      (response: ClientLocation[]) => {
        this.clientLocations = response;
        this.showLoading = false;
        this.calculateNoOfPages();
      }
    );

    //Create newForm
    this.newForm = this.formBuilder.group({
      clientLocationID: this.formBuilder.control(null),
      clientLocationName: this.formBuilder.control(null, [Validators.required])
    });

    //Create editForm
    this.editForm = this.formBuilder.group({
      clientLocationID: this.formBuilder.control(null),
      clientLocationName: this.formBuilder.control(null, [Validators.required])
    });
  }

  calculateNoOfPages() {
    //Get no. of Pages
    let filterPipe = new FilterPipe();
    var noOfPages = Math.ceil(filterPipe.transform(this.clientLocations, this.searchBy, this.searchText).length / this.pageSize);
    this.pages = [];

    //Generate pages
    for (let i = 0; i < noOfPages; i++) {
      this.pages.push({ pageIndex: i });
    }

    this.currentPageIndex = 0;
  }

  onPageIndexClicked(ind: number) {
    //Set currentPageIndex
    if (ind >= 0 && ind < this.pages.length) {
      this.currentPageIndex = ind;
    }
  }

  onNewClick(event: any) {
    //reset the newForm
    this.newForm.reset({ clientLocationID: 0 });
    setTimeout(() => {
      //Focus the ClientLocation textbox in newForm
      this.defaultTextBox_New.nativeElement.focus();
    }, 100);
  }

  onSaveClick() {
    if (this.newForm.valid) {
      //Invoke the REST-API call
      this.clientLocationsService.insertClientLocation(this.newForm.value).subscribe((response) => {
        //Add Response to Grid
        var p: ClientLocation = new ClientLocation();
        p.clientLocationID = response.clientLocationID;
        p.clientLocationName = response.clientLocationName;
        this.clientLocations.push(p);

        //Reset the newForm
        this.newForm.reset();
        $("#newClientLocationFormCancel").trigger("click");
        this.calculateNoOfPages();

        this.calculateNoOfPages();
      }, (error) => {
        console.log(error);
      });
    }
  }

  onEditClick(event: any, clientLocation: ClientLocation) {
    //Reset the editForm
    this.editForm.reset();
    setTimeout(() => {
      //Set data into editForm
      this.editForm.patchValue(clientLocation);
      this.editIndex = this.clientLocations.indexOf(clientLocation);

      //Focus the ClientLocation textbox in editForm
      this.defaultTextBox_Edit.nativeElement.focus();
    }, 100);
  }

  onUpdateClick() {
    if (this.editForm.valid) {
      //Invoke the REST-API call
      this.clientLocationsService.updateClientLocation(this.editForm.value).subscribe((response: ClientLocation) => {
        //Update the response in Grid
        this.clientLocations[this.editIndex] = response;

        //Reset the editForm
        this.editForm.reset();
        $("#editClientLocationFormCancel").trigger("click");
      },
        (error) => {
          console.log(error);
        });
    }
  }

  onDeleteClick(event: any, clientLocation: ClientLocation) {
    //Set data into deleteClientLocation
    this.deleteClientLocation.clientLocationID = clientLocation.clientLocationID;
    this.deleteClientLocation.clientLocationName = clientLocation.clientLocationName;
    this.deleteIndex = this.clientLocations.indexOf(clientLocation);
  }

  onDeleteConfirmClick() {
    //Invoke the REST-API call
    this.clientLocationsService.deleteClientLocation(this.deleteClientLocation.clientLocationID).subscribe(
      (response) => {
        //Delete object in Grid
        this.clientLocations.splice(this.deleteIndex, 1);

        //Clear deleteCountry
        this.deleteClientLocation.clientLocationID = null;
        this.deleteClientLocation.clientLocationName = null;

        //Recall the calculateNoOfPages
        this.calculateNoOfPages();
      },
      (error) => {
        console.log(error);
      });
  }

  onSearchTextChange(event: any) {
    this.calculateNoOfPages();
  }
}
