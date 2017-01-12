import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[highlight]'
})
export class HighlightDirective {

  constructor(el: ElementRef) {
    // renderer.setElementStyle(el.nativeElement, 'backgroundColor', 'AliceBlue');
    el.nativeElement.style.backgroundColor = 'AliceBlue';
  }

}
