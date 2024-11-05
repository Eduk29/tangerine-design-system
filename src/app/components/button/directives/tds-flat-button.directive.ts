import { AfterViewChecked, Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[TDSFlatButton]',
})
export class TDSFlatButtonDirective implements AfterViewChecked {
  constructor(private eleRef: ElementRef) {}

  ngAfterViewChecked(): void {
    if (this.eleRef.nativeElement.children[0].tagName === 'BUTTON') {
      this.eleRef.nativeElement.children[0].classList.add('flat-button');
    } else {
      console.warn('TDSFlatButton directive can only be used with button elements');
    }
  }
}
