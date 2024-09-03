import { Directive, ElementRef, AfterViewChecked } from '@angular/core';

@Directive({
  selector: '[fabButton]',
})
export class FabButtonDirective implements AfterViewChecked {
  constructor(private eleRef: ElementRef) {}

  ngAfterViewChecked(): void {
    if (this.eleRef.nativeElement.children[0].tagName === 'BUTTON') {
      this.eleRef.nativeElement.children[0].classList.add('fab-button');
    } else {
      console.warn('fabButton directive can only be used with button elements');
    }
  }
}
