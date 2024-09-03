/* tslint:disable:no-unused-variable */
import { ElementRef } from '@angular/core';

import { FabButtonDirective } from './fab-button.directive';

describe('Directive: FabButton', () => {
  it('should create an instance', () => {
    const element = new ElementRef(document.createElement('button'));
    const directive = new FabButtonDirective(element);
    expect(directive).toBeTruthy();
  });
});
