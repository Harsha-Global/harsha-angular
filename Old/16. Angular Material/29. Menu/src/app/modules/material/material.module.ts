import { NgModule } from '@angular/core';
import { MatButtonModule } from "@angular/material/button";
import { MatInputModule } from "@angular/material/input";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatIconModule } from "@angular/material/icon"
import { MatMenuModule } from "@angular/material/menu";

let components = [
  MatButtonModule, MatInputModule, MatToolbarModule, MatIconModule, MatMenuModule
];

@NgModule({
  imports: [components],
  exports: [components]
})
export class MaterialModule { }
