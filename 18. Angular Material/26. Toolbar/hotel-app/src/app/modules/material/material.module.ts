import { NgModule } from '@angular/core';
import { MatButtonModule } from "@angular/material/button";
import { MatInputModule } from "@angular/material/input";
import { MatToolbarModule } from "@angular/material/toolbar";

let components = [
  MatButtonModule, MatInputModule, MatToolbarModule
];

@NgModule({
  imports: [components],
  exports: [components]
})
export class MaterialModule { }
