import { Directive } from '@angular/core';
import * as i0 from "@angular/core";
export class TDSBasicButtonDirective {
    eleRef;
    constructor(eleRef) {
        this.eleRef = eleRef;
    }
    ngAfterViewChecked() {
        if (this.eleRef.nativeElement.children[0].tagName === 'BUTTON') {
            this.eleRef.nativeElement.children[0].classList.add('basic-button');
        }
        else {
            console.warn('TDSBasicButton directive can only be used with button elements');
        }
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: TDSBasicButtonDirective, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Directive });
    static ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "17.3.12", type: TDSBasicButtonDirective, selector: "[TDSBasicButton]", ngImport: i0 });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: TDSBasicButtonDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[TDSBasicButton]',
                }]
        }], ctorParameters: () => [{ type: i0.ElementRef }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGRzLWJhc2ljLWJ1dHRvbi5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvYXBwL2NvbXBvbmVudHMvYnV0dG9uL2RpcmVjdGl2ZXMvdGRzLWJhc2ljLWJ1dHRvbi5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFvQixTQUFTLEVBQWMsTUFBTSxlQUFlLENBQUM7O0FBS3hFLE1BQU0sT0FBTyx1QkFBdUI7SUFDZDtJQUFwQixZQUFvQixNQUFrQjtRQUFsQixXQUFNLEdBQU4sTUFBTSxDQUFZO0lBQUcsQ0FBQztJQUUxQyxrQkFBa0I7UUFDaEIsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxLQUFLLFFBQVEsRUFBRSxDQUFDO1lBQy9ELElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBQ3RFLENBQUM7YUFBTSxDQUFDO1lBQ04sT0FBTyxDQUFDLElBQUksQ0FBQyxnRUFBZ0UsQ0FBQyxDQUFDO1FBQ2pGLENBQUM7SUFDSCxDQUFDO3dHQVRVLHVCQUF1Qjs0RkFBdkIsdUJBQXVCOzs0RkFBdkIsdUJBQXVCO2tCQUhuQyxTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxrQkFBa0I7aUJBQzdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWZ0ZXJWaWV3Q2hlY2tlZCwgRGlyZWN0aXZlLCBFbGVtZW50UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICBzZWxlY3RvcjogJ1tURFNCYXNpY0J1dHRvbl0nLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgVERTQmFzaWNCdXR0b25EaXJlY3RpdmUgaW1wbGVtZW50cyBBZnRlclZpZXdDaGVja2VkIHtcclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsZVJlZjogRWxlbWVudFJlZikge31cclxuXHJcbiAgbmdBZnRlclZpZXdDaGVja2VkKCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuZWxlUmVmLm5hdGl2ZUVsZW1lbnQuY2hpbGRyZW5bMF0udGFnTmFtZSA9PT0gJ0JVVFRPTicpIHtcclxuICAgICAgdGhpcy5lbGVSZWYubmF0aXZlRWxlbWVudC5jaGlsZHJlblswXS5jbGFzc0xpc3QuYWRkKCdiYXNpYy1idXR0b24nKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnNvbGUud2FybignVERTQmFzaWNCdXR0b24gZGlyZWN0aXZlIGNhbiBvbmx5IGJlIHVzZWQgd2l0aCBidXR0b24gZWxlbWVudHMnKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19