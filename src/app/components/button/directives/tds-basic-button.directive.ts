import { AfterViewChecked, Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[TDSBasicButton]',
})
export class TDSBasicButtonDirective implements AfterViewChecked {
  constructor(private eleRef: ElementRef) {}

  ngAfterViewChecked(): void {
    if (this.eleRef.nativeElement.children[0].tagName === 'BUTTON') {
      this.eleRef.nativeElement.children[0].classList.add('basic-button');
    } else {
      console.warn('TDSBasicButton directive can only be used with button elements');
    }
  }
}
