import { Directive } from '@angular/core';
import * as i0 from "@angular/core";
export class OutlineButtonDirective {
    eleRef;
    constructor(eleRef) {
        this.eleRef = eleRef;
    }
    ngAfterViewChecked() {
        if (this.eleRef.nativeElement.children[0].tagName === 'BUTTON') {
            this.eleRef.nativeElement.children[0].classList.add('outline-button');
        }
        else {
            console.warn('basicButton directive can only be used with button elements');
        }
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: OutlineButtonDirective, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Directive });
    static ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "17.3.12", type: OutlineButtonDirective, selector: "[outlineButton]", ngImport: i0 });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: OutlineButtonDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[outlineButton]',
                }]
        }], ctorParameters: () => [{ type: i0.ElementRef }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3V0bGluZS1idXR0b24uZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2FwcC9jb21wb25lbnRzL2J1dHRvbi9kaXJlY3RpdmVzL291dGxpbmUtYnV0dG9uLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFnQyxNQUFNLGVBQWUsQ0FBQzs7QUFLeEUsTUFBTSxPQUFPLHNCQUFzQjtJQUNiO0lBQXBCLFlBQW9CLE1BQWtCO1FBQWxCLFdBQU0sR0FBTixNQUFNLENBQVk7SUFBRyxDQUFDO0lBRTFDLGtCQUFrQjtRQUNoQixJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLEtBQUssUUFBUSxFQUFFLENBQUM7WUFDL0QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztRQUN4RSxDQUFDO2FBQU0sQ0FBQztZQUNOLE9BQU8sQ0FBQyxJQUFJLENBQUMsNkRBQTZELENBQUMsQ0FBQztRQUM5RSxDQUFDO0lBQ0gsQ0FBQzt3R0FUVSxzQkFBc0I7NEZBQXRCLHNCQUFzQjs7NEZBQXRCLHNCQUFzQjtrQkFIbEMsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsaUJBQWlCO2lCQUM1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgQWZ0ZXJWaWV3Q2hlY2tlZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6ICdbb3V0bGluZUJ1dHRvbl0nLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgT3V0bGluZUJ1dHRvbkRpcmVjdGl2ZSBpbXBsZW1lbnRzIEFmdGVyVmlld0NoZWNrZWQge1xyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWxlUmVmOiBFbGVtZW50UmVmKSB7fVxyXG5cclxuICBuZ0FmdGVyVmlld0NoZWNrZWQoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5lbGVSZWYubmF0aXZlRWxlbWVudC5jaGlsZHJlblswXS50YWdOYW1lID09PSAnQlVUVE9OJykge1xyXG4gICAgICB0aGlzLmVsZVJlZi5uYXRpdmVFbGVtZW50LmNoaWxkcmVuWzBdLmNsYXNzTGlzdC5hZGQoJ291dGxpbmUtYnV0dG9uJyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zb2xlLndhcm4oJ2Jhc2ljQnV0dG9uIGRpcmVjdGl2ZSBjYW4gb25seSBiZSB1c2VkIHdpdGggYnV0dG9uIGVsZW1lbnRzJyk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==