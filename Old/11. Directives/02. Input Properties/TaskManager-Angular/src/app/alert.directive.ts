import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appAlert]'
})
export class AlertDirective
{
  @Input("error") error: string | null = null;

  constructor(private elementRef: ElementRef)
  {
  }

  ngOnInit()
  {
    this.elementRef.nativeElement.innerHTML = `
      <div class="alert alert-danger fade show" role="alert">
        <span>${this.error}</span>
      </div>
    `;
  }
}

