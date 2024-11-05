import { Directive } from '@angular/core';
import * as i0 from "@angular/core";
export class TDSFabButtonDirective {
    eleRef;
    constructor(eleRef) {
        this.eleRef = eleRef;
    }
    ngAfterViewChecked() {
        if (this.eleRef.nativeElement.children[0].tagName === 'BUTTON') {
            this.eleRef.nativeElement.children[0].classList.add('fab-button');
        }
        else {
            console.warn('TDSFabButton directive can only be used with button elements');
        }
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: TDSFabButtonDirective, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Directive });
    static ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "17.3.12", type: TDSFabButtonDirective, selector: "[TDSFabButton]", ngImport: i0 });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: TDSFabButtonDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[TDSFabButton]',
                }]
        }], ctorParameters: () => [{ type: i0.ElementRef }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGRzLWZhYi1idXR0b24uZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2FwcC9jb21wb25lbnRzL2J1dHRvbi9kaXJlY3RpdmVzL3Rkcy1mYWItYnV0dG9uLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFnQyxNQUFNLGVBQWUsQ0FBQzs7QUFLeEUsTUFBTSxPQUFPLHFCQUFxQjtJQUNaO0lBQXBCLFlBQW9CLE1BQWtCO1FBQWxCLFdBQU0sR0FBTixNQUFNLENBQVk7SUFBRyxDQUFDO0lBRTFDLGtCQUFrQjtRQUNoQixJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLEtBQUssUUFBUSxFQUFFLENBQUM7WUFDL0QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDcEUsQ0FBQzthQUFNLENBQUM7WUFDTixPQUFPLENBQUMsSUFBSSxDQUFDLDhEQUE4RCxDQUFDLENBQUM7UUFDL0UsQ0FBQztJQUNILENBQUM7d0dBVFUscUJBQXFCOzRGQUFyQixxQkFBcUI7OzRGQUFyQixxQkFBcUI7a0JBSGpDLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLGdCQUFnQjtpQkFDM0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIEFmdGVyVmlld0NoZWNrZWQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gIHNlbGVjdG9yOiAnW1REU0ZhYkJ1dHRvbl0nLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgVERTRmFiQnV0dG9uRGlyZWN0aXZlIGltcGxlbWVudHMgQWZ0ZXJWaWV3Q2hlY2tlZCB7XHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbGVSZWY6IEVsZW1lbnRSZWYpIHt9XHJcblxyXG4gIG5nQWZ0ZXJWaWV3Q2hlY2tlZCgpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmVsZVJlZi5uYXRpdmVFbGVtZW50LmNoaWxkcmVuWzBdLnRhZ05hbWUgPT09ICdCVVRUT04nKSB7XHJcbiAgICAgIHRoaXMuZWxlUmVmLm5hdGl2ZUVsZW1lbnQuY2hpbGRyZW5bMF0uY2xhc3NMaXN0LmFkZCgnZmFiLWJ1dHRvbicpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc29sZS53YXJuKCdURFNGYWJCdXR0b24gZGlyZWN0aXZlIGNhbiBvbmx5IGJlIHVzZWQgd2l0aCBidXR0b24gZWxlbWVudHMnKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19