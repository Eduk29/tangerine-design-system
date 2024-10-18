import { Directive } from '@angular/core';
import * as i0 from "@angular/core";
export class FabButtonDirective {
    eleRef;
    constructor(eleRef) {
        this.eleRef = eleRef;
    }
    ngAfterViewChecked() {
        if (this.eleRef.nativeElement.children[0].tagName === 'BUTTON') {
            this.eleRef.nativeElement.children[0].classList.add('fab-button');
        }
        else {
            console.warn('fabButton directive can only be used with button elements');
        }
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: FabButtonDirective, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Directive });
    static ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "17.3.12", type: FabButtonDirective, selector: "[fabButton]", ngImport: i0 });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: FabButtonDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[fabButton]',
                }]
        }], ctorParameters: () => [{ type: i0.ElementRef }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFiLWJ1dHRvbi5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvYXBwL2NvbXBvbmVudHMvYnV0dG9uL2RpcmVjdGl2ZXMvZmFiLWJ1dHRvbi5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBZ0MsTUFBTSxlQUFlLENBQUM7O0FBS3hFLE1BQU0sT0FBTyxrQkFBa0I7SUFDVDtJQUFwQixZQUFvQixNQUFrQjtRQUFsQixXQUFNLEdBQU4sTUFBTSxDQUFZO0lBQUcsQ0FBQztJQUUxQyxrQkFBa0I7UUFDaEIsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxLQUFLLFFBQVEsRUFBRSxDQUFDO1lBQy9ELElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQ3BFLENBQUM7YUFBTSxDQUFDO1lBQ04sT0FBTyxDQUFDLElBQUksQ0FBQywyREFBMkQsQ0FBQyxDQUFDO1FBQzVFLENBQUM7SUFDSCxDQUFDO3dHQVRVLGtCQUFrQjs0RkFBbEIsa0JBQWtCOzs0RkFBbEIsa0JBQWtCO2tCQUg5QixTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxhQUFhO2lCQUN4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgQWZ0ZXJWaWV3Q2hlY2tlZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6ICdbZmFiQnV0dG9uXScsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBGYWJCdXR0b25EaXJlY3RpdmUgaW1wbGVtZW50cyBBZnRlclZpZXdDaGVja2VkIHtcclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsZVJlZjogRWxlbWVudFJlZikge31cclxuXHJcbiAgbmdBZnRlclZpZXdDaGVja2VkKCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuZWxlUmVmLm5hdGl2ZUVsZW1lbnQuY2hpbGRyZW5bMF0udGFnTmFtZSA9PT0gJ0JVVFRPTicpIHtcclxuICAgICAgdGhpcy5lbGVSZWYubmF0aXZlRWxlbWVudC5jaGlsZHJlblswXS5jbGFzc0xpc3QuYWRkKCdmYWItYnV0dG9uJyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zb2xlLndhcm4oJ2ZhYkJ1dHRvbiBkaXJlY3RpdmUgY2FuIG9ubHkgYmUgdXNlZCB3aXRoIGJ1dHRvbiBlbGVtZW50cycpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=