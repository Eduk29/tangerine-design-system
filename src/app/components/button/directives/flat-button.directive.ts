import { AfterViewChecked, Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[flatButton]',
})
export class FlatButtonDirective implements AfterViewChecked {
  constructor(private eleRef: ElementRef) {}

  ngAfterViewChecked(): void {
    if (this.eleRef.nativeElement.children[0].tagName === 'BUTTON') {
      this.eleRef.nativeElement.children[0].classList.add('flat-button');
    } else {
      console.warn('basicButton directive can only be used with button elements');
    }
  }
}
