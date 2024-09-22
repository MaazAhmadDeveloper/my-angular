import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appChangeEl]'
})
export class ChangeElDirective {

  constructor(element: ElementRef) {
    element.nativeElement.innerHTML = "sasa";
    element.nativeElement.style.color = "red";
  }

}
