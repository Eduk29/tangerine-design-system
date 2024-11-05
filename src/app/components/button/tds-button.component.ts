import {
  AfterViewChecked,
  ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';

import { TDSButtonColorTypes } from './types/tds-button-color.type';
import { TDSButtonIconColorsType } from './types/tds-button-icon-colors.type';
import { TDSButtonIconLibrariesType } from './types/tds-button-icon-library.type';
import { TDSButtonIconPositionType } from './types/tds-button-icon-position.type';

@Component({
  selector: 'tds-button',
  templateUrl: './tds-button.component.html',
  styleUrl: './tds-button.component.scss',
})
export class TDSButtonComponent implements OnChanges, AfterViewChecked {
  @Input() customClass: string = '';
  @Input() color: string | TDSButtonColorTypes = 'primary';
  @Input() disabled: boolean = false;
  @Input() icon: string = '';
  @Input() iconColor: string | TDSButtonIconColorsType = 'white';
  @Input() iconLibrary: string | TDSButtonIconLibrariesType = 'material';
  @Input() iconPosition: string | TDSButtonIconPositionType = 'before';
  @Input() label!: string;
  @Input() type: 'button' | 'submit' = 'button';

  @Output() clickEvent: EventEmitter<void> = new EventEmitter<void>();

  private _displayButton: boolean = true;

  constructor(
    private eleRef: ElementRef,
    private cdref: ChangeDetectorRef
  ) {}

  ngOnChanges(): void {
    this.validateOutputFunction();
  }

  ngAfterViewChecked() {
    if (this.isFabButton) {
      const buttonElement: HTMLElement[] = Array.from(this.eleRef.nativeElement.children[0].children);
      buttonElement.forEach((element: HTMLElement) => {
        if (element.tagName === 'P') {
          element.classList.add('d-none');
        }
      });
    }
  }

  public get class(): string {
    return `${this.color} ${this.customClass}`;
  }

  public get displayButton(): boolean {
    return this._displayButton;
  }

  public get isFabButton(): boolean {
    return this.eleRef.nativeElement.children[0].classList.contains('fab-button');
  }

  public dispatchClickEvent(): void {
    this.clickEvent.emit();
  }

  private validateBackgroundColors(changes: SimpleChanges): void {
    if (
      changes['color'] &&
      (changes['color'].currentValue === 'neutral-white' || changes['color'].currentValue === 'neutral-black')
    ) {
      console.error('Button background color should be different from white or black');
      this._displayButton;
    }
  }

  private validateOutputFunction(): void {
    const clickIsObserved = this.clickEvent.observed;

    if (!clickIsObserved) {
      console.error('Output function is required for button');
      this._displayButton = false;
    }
  }
}
