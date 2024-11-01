import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/forms";
export class FormfieldPasswordComponent {
    class = '';
    controlName;
    label;
    labelPosition = 'before';
    placeholder = '';
    hint;
    displayPassword = false;
    ngOnInit() {
        if (!this.controlName) {
            console.warn('FormfieldTextComponent: controlName is required');
        }
        if (!this.label) {
            console.warn('FormfieldTextComponent: label is required');
        }
    }
    get iconName() {
        return this.displayPassword ? 'fas fa-eye' : 'fas fa-eye-slash';
    }
    get labelFor() {
        return `${this.label}_input`;
    }
    get labelPositionClass() {
        return this.labelPosition === 'before'
            ? 'd-flex flex-row align-items-center justify-content-between'
            : 'd-flex flex-column';
    }
    togglePasswordVisibility() {
        this.displayPassword = !this.displayPassword;
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: FormfieldPasswordComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "17.3.12", type: FormfieldPasswordComponent, selector: "app-formfield-password", inputs: { class: "class", controlName: "controlName", label: "label", labelPosition: "labelPosition", placeholder: "placeholder", hint: "hint" }, ngImport: i0, template: "@if (controlName && label) {\r\n  <div id=\"password\" [ngClass]=\"labelPositionClass + ' ' + class\">\r\n    <label [for]=\"labelFor\" class=\"theme-caption w-auto\">{{ label }}:</label>\r\n    <div class=\"d-flex flex-row w-auto\">\r\n      @if (displayPassword) {\r\n        <input [name]=\"labelFor\" type=\"text\" [placeholder]=\"placeholder\" [formControl]=\"controlName\" />\r\n      } @else {\r\n        <input [name]=\"labelFor\" type=\"password\" [placeholder]=\"placeholder\" [formControl]=\"controlName\" />\r\n      }\r\n      @if (displayPassword) {\r\n        <button type=\"button\" class=\"input-icon-button\" (click)=\"togglePasswordVisibility()\">\r\n          <i class=\"fas fa-eye\" id=\"show_eye\"></i>\r\n        </button>\r\n      } @else {\r\n        <button type=\"button\" class=\"input-icon-button\" (click)=\"togglePasswordVisibility()\">\r\n          <i class=\"fas fa-eye-slash\" id=\"show_eye\"></i>\r\n        </button>\r\n      }\r\n    </div>\r\n  </div>\r\n}\r\n", styles: [".input-icon-button{margin-left:-2rem;background-color:transparent;border:none;color:#bdbdbd}\n"], dependencies: [{ kind: "directive", type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i2.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i2.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i2.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: FormfieldPasswordComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-formfield-password', template: "@if (controlName && label) {\r\n  <div id=\"password\" [ngClass]=\"labelPositionClass + ' ' + class\">\r\n    <label [for]=\"labelFor\" class=\"theme-caption w-auto\">{{ label }}:</label>\r\n    <div class=\"d-flex flex-row w-auto\">\r\n      @if (displayPassword) {\r\n        <input [name]=\"labelFor\" type=\"text\" [placeholder]=\"placeholder\" [formControl]=\"controlName\" />\r\n      } @else {\r\n        <input [name]=\"labelFor\" type=\"password\" [placeholder]=\"placeholder\" [formControl]=\"controlName\" />\r\n      }\r\n      @if (displayPassword) {\r\n        <button type=\"button\" class=\"input-icon-button\" (click)=\"togglePasswordVisibility()\">\r\n          <i class=\"fas fa-eye\" id=\"show_eye\"></i>\r\n        </button>\r\n      } @else {\r\n        <button type=\"button\" class=\"input-icon-button\" (click)=\"togglePasswordVisibility()\">\r\n          <i class=\"fas fa-eye-slash\" id=\"show_eye\"></i>\r\n        </button>\r\n      }\r\n    </div>\r\n  </div>\r\n}\r\n", styles: [".input-icon-button{margin-left:-2rem;background-color:transparent;border:none;color:#bdbdbd}\n"] }]
        }], propDecorators: { class: [{
                type: Input
            }], controlName: [{
                type: Input
            }], label: [{
                type: Input
            }], labelPosition: [{
                type: Input
            }], placeholder: [{
                type: Input
            }], hint: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybWZpZWxkLXBhc3N3b3JkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hcHAvY29tcG9uZW50cy9mb3JtZmllbGRzL2Zvcm1maWVsZC1wYXNzd29yZC9mb3JtZmllbGQtcGFzc3dvcmQuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2FwcC9jb21wb25lbnRzL2Zvcm1maWVsZHMvZm9ybWZpZWxkLXBhc3N3b3JkL2Zvcm1maWVsZC1wYXNzd29yZC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBVSxNQUFNLGVBQWUsQ0FBQzs7OztBQVN6RCxNQUFNLE9BQU8sMEJBQTBCO0lBQzVCLEtBQUssR0FBVyxFQUFFLENBQUM7SUFDbkIsV0FBVyxDQUFlO0lBQzFCLEtBQUssQ0FBVTtJQUNmLGFBQWEsR0FBK0IsUUFBUSxDQUFDO0lBQ3JELFdBQVcsR0FBVyxFQUFFLENBQUM7SUFDekIsSUFBSSxDQUFVO0lBRWhCLGVBQWUsR0FBRyxLQUFLLENBQUM7SUFFL0IsUUFBUTtRQUNOLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7WUFDdEIsT0FBTyxDQUFDLElBQUksQ0FBQyxpREFBaUQsQ0FBQyxDQUFDO1FBQ2xFLENBQUM7UUFFRCxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO1lBQ2hCLE9BQU8sQ0FBQyxJQUFJLENBQUMsMkNBQTJDLENBQUMsQ0FBQztRQUM1RCxDQUFDO0lBQ0gsQ0FBQztJQUVELElBQVcsUUFBUTtRQUNqQixPQUFPLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsa0JBQWtCLENBQUM7SUFDbEUsQ0FBQztJQUVELElBQVcsUUFBUTtRQUNqQixPQUFPLEdBQUcsSUFBSSxDQUFDLEtBQUssUUFBUSxDQUFDO0lBQy9CLENBQUM7SUFFRCxJQUFXLGtCQUFrQjtRQUMzQixPQUFPLElBQUksQ0FBQyxhQUFhLEtBQUssUUFBUTtZQUNwQyxDQUFDLENBQUMsNERBQTREO1lBQzlELENBQUMsQ0FBQyxvQkFBb0IsQ0FBQztJQUMzQixDQUFDO0lBRU0sd0JBQXdCO1FBQzdCLElBQUksQ0FBQyxlQUFlLEdBQUcsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDO0lBQy9DLENBQUM7d0dBcENVLDBCQUEwQjs0RkFBMUIsMEJBQTBCLGdOQ1R2Qyx3K0JBcUJBOzs0RkRaYSwwQkFBMEI7a0JBTHRDLFNBQVM7K0JBQ0Usd0JBQXdCOzhCQUt6QixLQUFLO3NCQUFiLEtBQUs7Z0JBQ0csV0FBVztzQkFBbkIsS0FBSztnQkFDRyxLQUFLO3NCQUFiLEtBQUs7Z0JBQ0csYUFBYTtzQkFBckIsS0FBSztnQkFDRyxXQUFXO3NCQUFuQixLQUFLO2dCQUNHLElBQUk7c0JBQVosS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBGb3JtQ29udHJvbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgRm9ybWZpZWxkTGFiZWxQb3NpdGlvblR5cGUgfSBmcm9tICcuLi90eXBlcy9mb3JtZmllbGQtbGFiZWwtcG9zaXRpb24udHlwZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FwcC1mb3JtZmllbGQtcGFzc3dvcmQnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9mb3JtZmllbGQtcGFzc3dvcmQuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsOiAnLi9mb3JtZmllbGQtcGFzc3dvcmQuY29tcG9uZW50LnNjc3MnLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgRm9ybWZpZWxkUGFzc3dvcmRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIEBJbnB1dCgpIGNsYXNzOiBzdHJpbmcgPSAnJztcclxuICBASW5wdXQoKSBjb250cm9sTmFtZSE6IEZvcm1Db250cm9sO1xyXG4gIEBJbnB1dCgpIGxhYmVsITogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIGxhYmVsUG9zaXRpb246IEZvcm1maWVsZExhYmVsUG9zaXRpb25UeXBlID0gJ2JlZm9yZSc7XHJcbiAgQElucHV0KCkgcGxhY2Vob2xkZXI6IHN0cmluZyA9ICcnO1xyXG4gIEBJbnB1dCgpIGhpbnQhOiBzdHJpbmc7XHJcblxyXG4gIHB1YmxpYyBkaXNwbGF5UGFzc3dvcmQgPSBmYWxzZTtcclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICBpZiAoIXRoaXMuY29udHJvbE5hbWUpIHtcclxuICAgICAgY29uc29sZS53YXJuKCdGb3JtZmllbGRUZXh0Q29tcG9uZW50OiBjb250cm9sTmFtZSBpcyByZXF1aXJlZCcpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICghdGhpcy5sYWJlbCkge1xyXG4gICAgICBjb25zb2xlLndhcm4oJ0Zvcm1maWVsZFRleHRDb21wb25lbnQ6IGxhYmVsIGlzIHJlcXVpcmVkJyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0IGljb25OYW1lKCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gdGhpcy5kaXNwbGF5UGFzc3dvcmQgPyAnZmFzIGZhLWV5ZScgOiAnZmFzIGZhLWV5ZS1zbGFzaCc7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0IGxhYmVsRm9yKCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gYCR7dGhpcy5sYWJlbH1faW5wdXRgO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldCBsYWJlbFBvc2l0aW9uQ2xhc3MoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiB0aGlzLmxhYmVsUG9zaXRpb24gPT09ICdiZWZvcmUnXHJcbiAgICAgID8gJ2QtZmxleCBmbGV4LXJvdyBhbGlnbi1pdGVtcy1jZW50ZXIganVzdGlmeS1jb250ZW50LWJldHdlZW4nXHJcbiAgICAgIDogJ2QtZmxleCBmbGV4LWNvbHVtbic7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgdG9nZ2xlUGFzc3dvcmRWaXNpYmlsaXR5KCk6IHZvaWQge1xyXG4gICAgdGhpcy5kaXNwbGF5UGFzc3dvcmQgPSAhdGhpcy5kaXNwbGF5UGFzc3dvcmQ7XHJcbiAgfVxyXG59XHJcbiIsIkBpZiAoY29udHJvbE5hbWUgJiYgbGFiZWwpIHtcclxuICA8ZGl2IGlkPVwicGFzc3dvcmRcIiBbbmdDbGFzc109XCJsYWJlbFBvc2l0aW9uQ2xhc3MgKyAnICcgKyBjbGFzc1wiPlxyXG4gICAgPGxhYmVsIFtmb3JdPVwibGFiZWxGb3JcIiBjbGFzcz1cInRoZW1lLWNhcHRpb24gdy1hdXRvXCI+e3sgbGFiZWwgfX06PC9sYWJlbD5cclxuICAgIDxkaXYgY2xhc3M9XCJkLWZsZXggZmxleC1yb3cgdy1hdXRvXCI+XHJcbiAgICAgIEBpZiAoZGlzcGxheVBhc3N3b3JkKSB7XHJcbiAgICAgICAgPGlucHV0IFtuYW1lXT1cImxhYmVsRm9yXCIgdHlwZT1cInRleHRcIiBbcGxhY2Vob2xkZXJdPVwicGxhY2Vob2xkZXJcIiBbZm9ybUNvbnRyb2xdPVwiY29udHJvbE5hbWVcIiAvPlxyXG4gICAgICB9IEBlbHNlIHtcclxuICAgICAgICA8aW5wdXQgW25hbWVdPVwibGFiZWxGb3JcIiB0eXBlPVwicGFzc3dvcmRcIiBbcGxhY2Vob2xkZXJdPVwicGxhY2Vob2xkZXJcIiBbZm9ybUNvbnRyb2xdPVwiY29udHJvbE5hbWVcIiAvPlxyXG4gICAgICB9XHJcbiAgICAgIEBpZiAoZGlzcGxheVBhc3N3b3JkKSB7XHJcbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJpbnB1dC1pY29uLWJ1dHRvblwiIChjbGljayk9XCJ0b2dnbGVQYXNzd29yZFZpc2liaWxpdHkoKVwiPlxyXG4gICAgICAgICAgPGkgY2xhc3M9XCJmYXMgZmEtZXllXCIgaWQ9XCJzaG93X2V5ZVwiPjwvaT5cclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgfSBAZWxzZSB7XHJcbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJpbnB1dC1pY29uLWJ1dHRvblwiIChjbGljayk9XCJ0b2dnbGVQYXNzd29yZFZpc2liaWxpdHkoKVwiPlxyXG4gICAgICAgICAgPGkgY2xhc3M9XCJmYXMgZmEtZXllLXNsYXNoXCIgaWQ9XCJzaG93X2V5ZVwiPjwvaT5cclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgfVxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbn1cclxuIl19