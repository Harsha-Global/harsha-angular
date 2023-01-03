import { NgModule } from '@angular/core';
import { MatButtonModule } from "@angular/material/button";
import { MatInputModule } from "@angular/material/input";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatIconModule } from "@angular/material/icon"
import { MatMenuModule } from "@angular/material/menu";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatBadgeModule } from "@angular/material/badge";
import { MatDividerModule } from "@angular/material/divider";
import { MatTooltipModule } from "@angular/material/tooltip";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatListModule } from "@angular/material/list";
import { MatRippleModule } from "@angular/material/core";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatProgressBarModule } from "@angular/material/progress-bar";
import { MatStepperModule } from "@angular/material/stepper";
import { MatAutocompleteModule } from "@angular/material/autocomplete";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatNativeDateModule } from "@angular/material/core";
import { MatCardModule } from "@angular/material/card";
import { MatButtonToggleModule } from "@angular/material/button-toggle";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatChipsModule } from "@angular/material/chips";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { MatRadioModule } from "@angular/material/radio";
import { MatSelectModule } from "@angular/material/select";
import { MatTabsModule } from "@angular/material/tabs";

import { MatTableModule } from "@angular/material/table";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatSortModule } from "@angular/material/sort";
import { MatBottomSheetModule } from "@angular/material/bottom-sheet";
import { MatDialogModule } from "@angular/material/dialog";
import { MatSnackBarModule } from "@angular/material/snack-bar";

let materialModules = [
  MatButtonModule, MatInputModule, MatToolbarModule, MatIconModule, MatMenuModule, MatExpansionModule, MatBadgeModule, MatDividerModule, MatTooltipModule, MatSidenavModule, MatListModule, MatRippleModule, MatGridListModule, MatProgressBarModule, MatStepperModule, MatAutocompleteModule, MatDatepickerModule, MatNativeDateModule, MatCardModule, MatButtonToggleModule, MatCheckboxModule, MatChipsModule, MatSlideToggleModule, MatRadioModule, MatSelectModule, MatTabsModule, MatTableModule, MatPaginatorModule, MatProgressSpinnerModule, MatSortModule, MatBottomSheetModule, MatDialogModule, MatSnackBarModule
];

@NgModule({
  imports: [materialModules],
  exports: [materialModules]
})
export class MaterialModule { }
