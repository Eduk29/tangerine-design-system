import { Directive, ElementRef, AfterViewChecked } from '@angular/core';

@Directive({
  selector: '[TDSOutlineButton]',
})
export class TDSOutlineButtonDirective implements AfterViewChecked {
  constructor(private eleRef: ElementRef) {}

  ngAfterViewChecked(): void {
    if (this.eleRef.nativeElement.children[0].tagName === 'BUTTON') {
      this.eleRef.nativeElement.children[0].classList.add('outline-button');
    } else {
      console.warn('TDSOutlineButton directive can only be used with button elements');
    }
  }
}
