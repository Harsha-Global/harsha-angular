import { NgModule } from '@angular/core';
import { MatButtonModule } from "@angular/material/button";
import { MatInputModule } from "@angular/material/input";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatIconModule } from "@angular/material/icon"

let components = [
  MatButtonModule, MatInputModule, MatToolbarModule, MatIconModule
];

@NgModule({
  imports: [components],
  exports: [components]
})
export class MaterialModule { }
