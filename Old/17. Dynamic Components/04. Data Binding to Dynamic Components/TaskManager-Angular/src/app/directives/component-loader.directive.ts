import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appComponentLoader]'
})
export class ComponentLoaderDirective
{
  constructor(public viewContainerRef: ViewContainerRef)
  {
  }
}

