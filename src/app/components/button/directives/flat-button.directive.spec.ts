import { ElementRef } from '@angular/core';

import { FlatButtonDirective } from './flat-button.directive';

describe('Directive: FlatButton', () => {
  it('should create an instance', () => {
    const element = new ElementRef(document.createElement('button'));
    const directive = new FlatButtonDirective(element);
    expect(directive).toBeTruthy();
  });
});
