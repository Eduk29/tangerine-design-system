import { ElementRef } from '@angular/core';

import { BasicButtonDirective } from './basic-button.directive';

describe('Directive: BasicButton', () => {
  it('should create an instance', () => {
    const element = new ElementRef(document.createElement('button'));
    const directive = new BasicButtonDirective(element);
    expect(directive).toBeTruthy();
  });
});
