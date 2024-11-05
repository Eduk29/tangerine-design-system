/* tslint:disable:no-unused-variable */
import { ElementRef } from '@angular/core';

import { TDSFabButtonDirective } from './tds-fab-button.directive';

describe('Directive: FabButton', () => {
  it('should create an instance', () => {
    const element = new ElementRef(document.createElement('button'));
    const directive = new TDSFabButtonDirective(element);
    expect(directive).toBeTruthy();
  });
});
