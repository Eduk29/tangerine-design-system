import { Directive, ElementRef, AfterViewChecked } from '@angular/core';

@Directive({
  selector: '[outlineButton]',
})
export class OutlineButtonDirective implements AfterViewChecked {
  constructor(private eleRef: ElementRef) {}

  ngAfterViewChecked(): void {
    if (this.eleRef.nativeElement.children[0].tagName === 'BUTTON') {
      this.eleRef.nativeElement.children[0].classList.add('outline-button');
    } else {
      console.warn('basicButton directive can only be used with button elements');
    }
  }
}
