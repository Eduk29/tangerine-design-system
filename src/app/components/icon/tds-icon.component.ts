import { Component, Input } from '@angular/core';

import { TDSIconColorsType } from './types/tds-icon-colors.type';
import { TDSIconLibrariesType } from './types/tds-icon-library.type';
import { TDSIconSizesType } from './types/tds-icon-sizes.type';

@Component({
  selector: 'tds-icon',
  templateUrl: './tds-icon.component.html',
  styleUrl: './tds-icon.component.scss',
})
export class TDSIconComponent {
  @Input() color: string | TDSIconColorsType = 'default';
  @Input() class!: string;
  @Input() iconLibrary: string | TDSIconLibrariesType = 'material';
  @Input() iconName!: string;
  @Input() iconSize: string | TDSIconSizesType = 'medium';

  public get customClass(): string {
    return this.class ? this.class : '';
  }

  public get size(): string {
    if (this.iconSize) {
      return this.iconSize === 'small' ? 'small-size' : this.iconSize === 'medium' ? 'medium-size' : 'large-size';
    }
    return '';
  }
}
