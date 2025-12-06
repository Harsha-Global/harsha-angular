import { Directive, ViewContainerRef, TemplateRef, Input } from '@angular/core';

@Directive({
  selector: '[appRepeater]'
})
export class RepeaterDirective {
  @Input("appRepeater") n: number = 0;

  constructor(private viewContainerRef: ViewContainerRef, private templateRef: TemplateRef<any>) {
    this.viewContainerRef.clear();
  }

  ngOnInit() {
    for (let i = 0; i < this.n; i++) {
      this.viewContainerRef.createEmbeddedView(this.templateRef, { $implicit: i });
    }
  }
}
