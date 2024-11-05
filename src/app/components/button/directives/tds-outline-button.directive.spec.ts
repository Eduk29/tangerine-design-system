/* tslint:disable:no-unused-variable */
import { ElementRef } from '@angular/core';

import { TDSOutlineButtonDirective } from './tds-outline-button.directive';

describe('Directive: OutlineButton', () => {
  it('should create an instance', () => {
    const element = new ElementRef(document.createElement('button'));
    const directive = new TDSOutlineButtonDirective(element);
    expect(directive).toBeTruthy();
  });
});
