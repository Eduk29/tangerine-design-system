import { Directive } from '@angular/core';
import * as i0 from "@angular/core";
export class TDSFlatButtonDirective {
    eleRef;
    constructor(eleRef) {
        this.eleRef = eleRef;
    }
    ngAfterViewChecked() {
        if (this.eleRef.nativeElement.children[0].tagName === 'BUTTON') {
            this.eleRef.nativeElement.children[0].classList.add('flat-button');
        }
        else {
            console.warn('TDSFlatButton directive can only be used with button elements');
        }
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: TDSFlatButtonDirective, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Directive });
    static ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "17.3.12", type: TDSFlatButtonDirective, selector: "[TDSFlatButton]", ngImport: i0 });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: TDSFlatButtonDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[TDSFlatButton]',
                }]
        }], ctorParameters: () => [{ type: i0.ElementRef }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGRzLWZsYXQtYnV0dG9uLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hcHAvY29tcG9uZW50cy9idXR0b24vZGlyZWN0aXZlcy90ZHMtZmxhdC1idXR0b24uZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBb0IsU0FBUyxFQUFjLE1BQU0sZUFBZSxDQUFDOztBQUt4RSxNQUFNLE9BQU8sc0JBQXNCO0lBQ2I7SUFBcEIsWUFBb0IsTUFBa0I7UUFBbEIsV0FBTSxHQUFOLE1BQU0sQ0FBWTtJQUFHLENBQUM7SUFFMUMsa0JBQWtCO1FBQ2hCLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sS0FBSyxRQUFRLEVBQUUsQ0FBQztZQUMvRCxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUNyRSxDQUFDO2FBQU0sQ0FBQztZQUNOLE9BQU8sQ0FBQyxJQUFJLENBQUMsK0RBQStELENBQUMsQ0FBQztRQUNoRixDQUFDO0lBQ0gsQ0FBQzt3R0FUVSxzQkFBc0I7NEZBQXRCLHNCQUFzQjs7NEZBQXRCLHNCQUFzQjtrQkFIbEMsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsaUJBQWlCO2lCQUM1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFmdGVyVmlld0NoZWNrZWQsIERpcmVjdGl2ZSwgRWxlbWVudFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6ICdbVERTRmxhdEJ1dHRvbl0nLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgVERTRmxhdEJ1dHRvbkRpcmVjdGl2ZSBpbXBsZW1lbnRzIEFmdGVyVmlld0NoZWNrZWQge1xyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWxlUmVmOiBFbGVtZW50UmVmKSB7fVxyXG5cclxuICBuZ0FmdGVyVmlld0NoZWNrZWQoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5lbGVSZWYubmF0aXZlRWxlbWVudC5jaGlsZHJlblswXS50YWdOYW1lID09PSAnQlVUVE9OJykge1xyXG4gICAgICB0aGlzLmVsZVJlZi5uYXRpdmVFbGVtZW50LmNoaWxkcmVuWzBdLmNsYXNzTGlzdC5hZGQoJ2ZsYXQtYnV0dG9uJyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zb2xlLndhcm4oJ1REU0ZsYXRCdXR0b24gZGlyZWN0aXZlIGNhbiBvbmx5IGJlIHVzZWQgd2l0aCBidXR0b24gZWxlbWVudHMnKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19