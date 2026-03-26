import { NgModule } from '@angular/core';
import { MatButtonModule } from "@angular/material/button";

const MaterialComponents = [
  MatButtonModule
];

@NgModule({
  imports: [MaterialComponents],
  exports: [MaterialComponents]
})
export class MaterialModule { }
