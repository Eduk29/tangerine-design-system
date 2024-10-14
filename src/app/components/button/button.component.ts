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

import { ButtonColorTypes } from './types/button-color.type';
import { ButtonIconColorsType } from './types/button-icon-colors.type';
import { ButtonIconPositionType } from './types/button-icon-position.type';
import { ButtonIconLibrariesType } from './types/button-icon-library.type';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
})
export class ButtonComponent implements OnChanges, AfterViewChecked {
  @Input() customClass: string = '';
  @Input() color: string | ButtonColorTypes = 'primary';
  @Input() disabled!: boolean;
  @Input() icon: string = '';
  @Input() iconColor: string | ButtonIconColorsType = 'white';
  @Input() iconLibrary: string | ButtonIconLibrariesType = 'material';
  @Input() iconPosition: string | ButtonIconPositionType = 'before';
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

  // private validateIconForFabButton(changes: SimpleChanges): void {
  //   if (changes['type'].currentValue === 'fab' && !changes['icon']) {
  //     console.error('Icon is required for FAB button');
  //     this._displayButton = false;
  //   }
  // }

  private validateOutputFunction(): void {
    const clickIsObserved = this.clickEvent.observed;

    if (!clickIsObserved) {
      console.error('Output function is required for button');
      this._displayButton = false;
    }
  }
}
