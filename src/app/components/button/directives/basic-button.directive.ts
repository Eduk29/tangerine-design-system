import { AfterViewChecked, Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[basicButton]',
})
export class BasicButtonDirective implements AfterViewChecked {
  constructor(private eleRef: ElementRef) {}

  ngAfterViewChecked(): void {
    if (this.eleRef.nativeElement.children[0].tagName === 'BUTTON') {
      this.eleRef.nativeElement.children[0].classList.add('basic-button');
    } else {
      console.warn('basicButton directive can only be used with button elements');
    }
  }
}
