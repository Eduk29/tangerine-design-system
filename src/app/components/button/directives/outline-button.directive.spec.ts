/* tslint:disable:no-unused-variable */
import { ElementRef } from '@angular/core';

import { OutlineButtonDirective } from './outline-button.directive';

describe('Directive: OutlineButton', () => {
  it('should create an instance', () => {
    const element = new ElementRef(document.createElement('button'));
    const directive = new OutlineButtonDirective(element);
    expect(directive).toBeTruthy();
  });
});
