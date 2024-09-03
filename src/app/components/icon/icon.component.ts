import { Component, Input } from '@angular/core';

import { IconColorsType } from './types/icon-colors.type';
import { IconSizesType } from './types/icon-sizes.type';
import { IconLibrariesType } from './types/icon-library.type';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrl: './icon.component.scss',
})
export class IconComponent {
  @Input() color: string | IconColorsType = 'default';
  @Input() class!: string;
  @Input() iconLibrary: string | IconLibrariesType = 'material';
  @Input() iconName!: string;
  @Input() iconSize: string | IconSizesType = 'medium';

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
