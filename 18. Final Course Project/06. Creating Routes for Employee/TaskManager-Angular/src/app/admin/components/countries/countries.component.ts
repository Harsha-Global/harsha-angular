import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Country } from '../../../models/country';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CountriesService } from '../../../services/countries.service';
import { FilterPipe } from '../../../pipes/filter.pipe';
import * as $ from "jquery";

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.scss']
})
export class CountriesComponent implements OnInit
{
  //Objects for Holding Model Data
  countries: Country[] = [];
  showLoading: boolean = false;

  //Objects for Delete
  deleteCountry: Country = new Country();
  editIndex: number = null;
  deleteIndex: number = null;

  //Properties for Searching
  searchBy: string = "countryName";
  searchText: string = "";

  //Properties for Paging
  currentPageIndex: number = 0;
  pages: any[] = [];
  pageSize: number = 7;

  //Reactive Forms
  newForm: FormGroup;
  editForm: FormGroup;

  //Autofocus TextBoxes
  @ViewChild("defaultTextBox_New") defaultTextBox_New: ElementRef;
  @ViewChild("defaultTextBox_Edit") defaultTextBox_Edit: ElementRef;

  //Sorting
  sortBy: string = "countryName";
  sortOrder: string = "ASC"; //ASC | DESC

  //Constructor
  constructor(private countriesService: CountriesService, private formBuilder: FormBuilder)
  {
  }

  ngOnInit()
  {
    //Get data from database
    this.countriesService.getCountries().subscribe(
      (response: Country[]) =>
      {
        this.countries = response;
        this.showLoading = false;
        this.calculateNoOfPages();
      }
    );

    //Create newForm
    this.newForm = this.formBuilder.group({
      countryID: this.formBuilder.control(null),
      countryName: this.formBuilder.control(null, [Validators.required])
    });

    //Create editForm
    this.editForm = this.formBuilder.group({
      countryID: this.formBuilder.control(null),
      countryName: this.formBuilder.control(null, [Validators.required])
    });
  }

  calculateNoOfPages()
  {
    //Get no. of Pages
    let filterPipe = new FilterPipe();
    var noOfPages = Math.ceil(filterPipe.transform(this.countries, this.searchBy, this.searchText).length / this.pageSize);
    this.pages = [];

    //Generate pages
    for (let i = 0; i < noOfPages; i++)
    {
      this.pages.push({ pageIndex: i });
    }

    this.currentPageIndex = 0;
  }

  onPageIndexClicked(ind)
  {
    //Set currentPageIndex
    if (ind >= 0 && ind < this.pages.length)
    {
      this.currentPageIndex = ind;
    }
  }

  onNewClick(event)
  {
    //reset the newForm
    this.newForm.reset({ countryID: 0 });
    setTimeout(() =>
    {
      //Focus the ClientLocation textbox in newForm
      this.defaultTextBox_New.nativeElement.focus();
    }, 100);
  }

  onSaveClick()
  {
    if (this.newForm.valid)
    {
      //Invoke the REST-API call
      this.countriesService.insertCountry(this.newForm.value).subscribe((response) =>
      {
        //Add Response to Grid
        var p: Country = new Country();
        p.countryID = response.countryID;
        p.countryName = response.countryName;
        this.countries.push(p);

        //Reset the newForm
        this.newForm.reset();
        $("#newCountryFormCancel").trigger("click");
        this.calculateNoOfPages();

      }, (error) =>
        {
          console.log(error);
        });
    }
  }

  onEditClick(event, country: Country)
  {
    //Reset the editForm
    this.editForm.reset();

    setTimeout(() =>
    {
      //Set data into editForm
      this.editForm.patchValue(country);
      this.editIndex = this.countries.indexOf(country);

      //Focus the ClientLocation textbox in editForm
      this.defaultTextBox_Edit.nativeElement.focus();
    }, 100);
  }

  onUpdateClick()
  {
    if (this.editForm.valid)
    {
      //Invoke the REST-API call
      this.countriesService.updateCountry(this.editForm.value).subscribe((response: Country) =>
      {
        //Update the response in Grid
        this.countries[this.editIndex] = response;

        //Reset the editForm
        this.editForm.reset();
        $("#editCountryFormCancel").trigger("click");
      },
        (error) =>
        {
          console.log(error);
        });
    }
  }

  onDeleteClick(event, country: Country)
  {
    //Set data into deleteCountry
    this.deleteCountry.countryID = country.countryID;
    this.deleteCountry.countryName = country.countryName;
    this.deleteIndex = this.countries.indexOf(country);
  }

  onDeleteConfirmClick()
  {
    //Invoke the REST-API call
    this.countriesService.deleteCountry(this.deleteCountry.countryID).subscribe(
      (response) =>
      {
        //Delete object in Grid
        this.countries.splice(this.deleteIndex, 1);

        //Clear deleteCountry
        this.deleteCountry.countryID = null;
        this.deleteCountry.countryName = null;

        this.calculateNoOfPages();
      },
      (error) =>
      {
        console.log(error);
      });
  }

  onSearchTextChange(event)
  {
    //Recall the calculateNoOfPages
    this.calculateNoOfPages();
  }
}
