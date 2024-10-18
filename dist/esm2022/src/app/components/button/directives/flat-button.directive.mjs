import { Directive } from '@angular/core';
import * as i0 from "@angular/core";
export class FlatButtonDirective {
    eleRef;
    constructor(eleRef) {
        this.eleRef = eleRef;
    }
    ngAfterViewChecked() {
        if (this.eleRef.nativeElement.children[0].tagName === 'BUTTON') {
            this.eleRef.nativeElement.children[0].classList.add('flat-button');
        }
        else {
            console.warn('basicButton directive can only be used with button elements');
        }
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: FlatButtonDirective, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Directive });
    static ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "17.3.12", type: FlatButtonDirective, selector: "[flatButton]", ngImport: i0 });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: FlatButtonDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[flatButton]',
                }]
        }], ctorParameters: () => [{ type: i0.ElementRef }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmxhdC1idXR0b24uZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2FwcC9jb21wb25lbnRzL2J1dHRvbi9kaXJlY3RpdmVzL2ZsYXQtYnV0dG9uLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQW9CLFNBQVMsRUFBYyxNQUFNLGVBQWUsQ0FBQzs7QUFLeEUsTUFBTSxPQUFPLG1CQUFtQjtJQUNWO0lBQXBCLFlBQW9CLE1BQWtCO1FBQWxCLFdBQU0sR0FBTixNQUFNLENBQVk7SUFBRyxDQUFDO0lBRTFDLGtCQUFrQjtRQUNoQixJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLEtBQUssUUFBUSxFQUFFLENBQUM7WUFDL0QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDckUsQ0FBQzthQUFNLENBQUM7WUFDTixPQUFPLENBQUMsSUFBSSxDQUFDLDZEQUE2RCxDQUFDLENBQUM7UUFDOUUsQ0FBQztJQUNILENBQUM7d0dBVFUsbUJBQW1COzRGQUFuQixtQkFBbUI7OzRGQUFuQixtQkFBbUI7a0JBSC9CLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLGNBQWM7aUJBQ3pCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWZ0ZXJWaWV3Q2hlY2tlZCwgRGlyZWN0aXZlLCBFbGVtZW50UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICBzZWxlY3RvcjogJ1tmbGF0QnV0dG9uXScsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBGbGF0QnV0dG9uRGlyZWN0aXZlIGltcGxlbWVudHMgQWZ0ZXJWaWV3Q2hlY2tlZCB7XHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbGVSZWY6IEVsZW1lbnRSZWYpIHt9XHJcblxyXG4gIG5nQWZ0ZXJWaWV3Q2hlY2tlZCgpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmVsZVJlZi5uYXRpdmVFbGVtZW50LmNoaWxkcmVuWzBdLnRhZ05hbWUgPT09ICdCVVRUT04nKSB7XHJcbiAgICAgIHRoaXMuZWxlUmVmLm5hdGl2ZUVsZW1lbnQuY2hpbGRyZW5bMF0uY2xhc3NMaXN0LmFkZCgnZmxhdC1idXR0b24nKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnNvbGUud2FybignYmFzaWNCdXR0b24gZGlyZWN0aXZlIGNhbiBvbmx5IGJlIHVzZWQgd2l0aCBidXR0b24gZWxlbWVudHMnKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19