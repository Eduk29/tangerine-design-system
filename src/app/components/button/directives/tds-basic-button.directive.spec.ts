import { ElementRef } from '@angular/core';

import { TDSBasicButtonDirective } from './tds-basic-button.directive';

describe('Directive: BasicButton', () => {
  it('should create an instance', () => {
    const element = new ElementRef(document.createElement('button'));
    const directive = new TDSBasicButtonDirective(element);
    expect(directive).toBeTruthy();
  });
});
