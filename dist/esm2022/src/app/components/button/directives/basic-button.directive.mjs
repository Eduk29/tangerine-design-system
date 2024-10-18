import { Directive } from '@angular/core';
import * as i0 from "@angular/core";
export class BasicButtonDirective {
    eleRef;
    constructor(eleRef) {
        this.eleRef = eleRef;
    }
    ngAfterViewChecked() {
        if (this.eleRef.nativeElement.children[0].tagName === 'BUTTON') {
            this.eleRef.nativeElement.children[0].classList.add('basic-button');
        }
        else {
            console.warn('basicButton directive can only be used with button elements');
        }
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: BasicButtonDirective, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Directive });
    static ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "17.3.12", type: BasicButtonDirective, selector: "[basicButton]", ngImport: i0 });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: BasicButtonDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[basicButton]',
                }]
        }], ctorParameters: () => [{ type: i0.ElementRef }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzaWMtYnV0dG9uLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hcHAvY29tcG9uZW50cy9idXR0b24vZGlyZWN0aXZlcy9iYXNpYy1idXR0b24uZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBb0IsU0FBUyxFQUFjLE1BQU0sZUFBZSxDQUFDOztBQUt4RSxNQUFNLE9BQU8sb0JBQW9CO0lBQ1g7SUFBcEIsWUFBb0IsTUFBa0I7UUFBbEIsV0FBTSxHQUFOLE1BQU0sQ0FBWTtJQUFHLENBQUM7SUFFMUMsa0JBQWtCO1FBQ2hCLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sS0FBSyxRQUFRLEVBQUUsQ0FBQztZQUMvRCxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUN0RSxDQUFDO2FBQU0sQ0FBQztZQUNOLE9BQU8sQ0FBQyxJQUFJLENBQUMsNkRBQTZELENBQUMsQ0FBQztRQUM5RSxDQUFDO0lBQ0gsQ0FBQzt3R0FUVSxvQkFBb0I7NEZBQXBCLG9CQUFvQjs7NEZBQXBCLG9CQUFvQjtrQkFIaEMsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsZUFBZTtpQkFDMUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBZnRlclZpZXdDaGVja2VkLCBEaXJlY3RpdmUsIEVsZW1lbnRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gIHNlbGVjdG9yOiAnW2Jhc2ljQnV0dG9uXScsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBCYXNpY0J1dHRvbkRpcmVjdGl2ZSBpbXBsZW1lbnRzIEFmdGVyVmlld0NoZWNrZWQge1xyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWxlUmVmOiBFbGVtZW50UmVmKSB7fVxyXG5cclxuICBuZ0FmdGVyVmlld0NoZWNrZWQoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5lbGVSZWYubmF0aXZlRWxlbWVudC5jaGlsZHJlblswXS50YWdOYW1lID09PSAnQlVUVE9OJykge1xyXG4gICAgICB0aGlzLmVsZVJlZi5uYXRpdmVFbGVtZW50LmNoaWxkcmVuWzBdLmNsYXNzTGlzdC5hZGQoJ2Jhc2ljLWJ1dHRvbicpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc29sZS53YXJuKCdiYXNpY0J1dHRvbiBkaXJlY3RpdmUgY2FuIG9ubHkgYmUgdXNlZCB3aXRoIGJ1dHRvbiBlbGVtZW50cycpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=