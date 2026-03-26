import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appAlert]'
})
export class AlertDirective
{
  constructor(private elementRef: ElementRef)
  {
  }

  ngOnInit()
  {
    this.elementRef.nativeElement.innerHTML = `
      <div class="alert alert-danger fade show" role="alert">
        <span>Welcome</span>
      </div>
    `;
  }
}

