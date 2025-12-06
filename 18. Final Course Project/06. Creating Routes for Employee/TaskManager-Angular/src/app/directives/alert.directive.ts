import { Directive, ElementRef, Input, HostListener, HostBinding, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appAlert]'
})
export class AlertDirective
{
  @Input("error") error: string;
  @HostBinding("title") title: string;

  constructor(private elementRef: ElementRef, private renderer2 : Renderer2)
  {
  }

  divElement: any;
  spanElement: any;
  spanText: any;

  ngOnInit()
  {
    /* div */
    this.divElement = this.renderer2.createElement("div"); //<div></div>

    this.renderer2.setAttribute(this.divElement, "role", "alert"); //<div role="alert"> </div>

    this.renderer2.setAttribute(this.divElement, "class", "alert alert-danger fade show");
    //<div role="alert" class="alert alert-danger fade show"> </div>

    this.renderer2.setStyle(this.divElement, "transition", "transform 0.5s");
    //<div role="alert" class="alert alert-danger fade show" style="transition: transform 0.5s"> </div>

    /* span */
    this.spanElement = this.renderer2.createElement("span");
    this.renderer2.setAttribute(this.spanElement, "class", "message");
    //<span class="message"></span>

    /* spanText */
    this.spanText = this.renderer2.createText(this.error);
    this.renderer2.appendChild(this.spanElement, this.spanText);
    //<span class="message">${this.error}</span>

    this.renderer2.appendChild(this.divElement, this.spanElement);
    //<div role="alert" class="alert alert-danger fade show" style="transition: transform 0.5s"> <span class="message">${this.error}</span> </div>

    this.elementRef.nativeElement.appendChild(this.divElement);

    this.title = "Please try again!";
  }

  @HostListener("mouseenter", [ "$event" ])
  onMouseEnter(event)
  {
    //this.elementRef.nativeElement.querySelector(".alert").style.transform = "scale(1.1)";
    this.renderer2.setStyle(this.divElement, "transform", "scale(1.1)");
  }

  @HostListener("mouseleave", [ "$event" ])
  onMouseLeave()
  {
    //this.elementRef.nativeElement.querySelector(".alert").style.transform = "scale(1)";
    this.renderer2.setStyle(this.divElement, "transform", "scale(1)");
  }
}


