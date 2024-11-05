import { ElementRef } from '@angular/core';

import { TDSFlatButtonDirective } from './tds-flat-button.directive';

describe('Directive: FlatButton', () => {
  it('should create an instance', () => {
    const element = new ElementRef(document.createElement('button'));
    const directive = new TDSFlatButtonDirective(element);
    expect(directive).toBeTruthy();
  });
});
