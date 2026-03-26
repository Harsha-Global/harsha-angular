import { Directive } from "@angular/core";
import { AbstractControl, NG_VALIDATORS, Validator } from "@angular/forms";

@Directive({
 selector: '[appNoSpaces]',
 providers: [
  {
   provide: NG_VALIDATORS,
   useExisting: NoSpacesDirective,
   multi: true
  }
 ]
})
export class NoSpacesDirective implements Validator
{
 validate(control: AbstractControl)
 {
  if (control.value && control.value.includes(' '))
  {
   return { noSpaces: true };
  }

  return null;
 }
}
