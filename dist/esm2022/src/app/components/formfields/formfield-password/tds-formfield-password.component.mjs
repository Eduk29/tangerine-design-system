import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/forms";
export class TDSFormfieldPasswordComponent {
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
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: TDSFormfieldPasswordComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "17.3.12", type: TDSFormfieldPasswordComponent, selector: "tds-formfield-password", inputs: { class: "class", controlName: "controlName", label: "label", labelPosition: "labelPosition", placeholder: "placeholder", hint: "hint" }, ngImport: i0, template: "@if (controlName && label) {\r\n  <div id=\"password\" [ngClass]=\"labelPositionClass + ' ' + class\">\r\n    <label [for]=\"labelFor\" class=\"theme-caption w-auto\">{{ label }}:</label>\r\n    <div class=\"d-flex flex-row w-auto\">\r\n      @if (displayPassword) {\r\n        <input [name]=\"labelFor\" type=\"text\" [placeholder]=\"placeholder\" [formControl]=\"controlName\" />\r\n      } @else {\r\n        <input [name]=\"labelFor\" type=\"password\" [placeholder]=\"placeholder\" [formControl]=\"controlName\" />\r\n      }\r\n      @if (displayPassword) {\r\n        <button type=\"button\" class=\"input-icon-button\" (click)=\"togglePasswordVisibility()\">\r\n          <i class=\"fas fa-eye\" id=\"show_eye\"></i>\r\n        </button>\r\n      } @else {\r\n        <button type=\"button\" class=\"input-icon-button\" (click)=\"togglePasswordVisibility()\">\r\n          <i class=\"fas fa-eye-slash\" id=\"show_eye\"></i>\r\n        </button>\r\n      }\r\n    </div>\r\n  </div>\r\n}\r\n", styles: [".input-icon-button{margin-left:-2rem;background-color:transparent;border:none;color:#bdbdbd}\n"], dependencies: [{ kind: "directive", type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i2.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i2.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i2.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: TDSFormfieldPasswordComponent, decorators: [{
            type: Component,
            args: [{ selector: 'tds-formfield-password', template: "@if (controlName && label) {\r\n  <div id=\"password\" [ngClass]=\"labelPositionClass + ' ' + class\">\r\n    <label [for]=\"labelFor\" class=\"theme-caption w-auto\">{{ label }}:</label>\r\n    <div class=\"d-flex flex-row w-auto\">\r\n      @if (displayPassword) {\r\n        <input [name]=\"labelFor\" type=\"text\" [placeholder]=\"placeholder\" [formControl]=\"controlName\" />\r\n      } @else {\r\n        <input [name]=\"labelFor\" type=\"password\" [placeholder]=\"placeholder\" [formControl]=\"controlName\" />\r\n      }\r\n      @if (displayPassword) {\r\n        <button type=\"button\" class=\"input-icon-button\" (click)=\"togglePasswordVisibility()\">\r\n          <i class=\"fas fa-eye\" id=\"show_eye\"></i>\r\n        </button>\r\n      } @else {\r\n        <button type=\"button\" class=\"input-icon-button\" (click)=\"togglePasswordVisibility()\">\r\n          <i class=\"fas fa-eye-slash\" id=\"show_eye\"></i>\r\n        </button>\r\n      }\r\n    </div>\r\n  </div>\r\n}\r\n", styles: [".input-icon-button{margin-left:-2rem;background-color:transparent;border:none;color:#bdbdbd}\n"] }]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGRzLWZvcm1maWVsZC1wYXNzd29yZC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvYXBwL2NvbXBvbmVudHMvZm9ybWZpZWxkcy9mb3JtZmllbGQtcGFzc3dvcmQvdGRzLWZvcm1maWVsZC1wYXNzd29yZC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvYXBwL2NvbXBvbmVudHMvZm9ybWZpZWxkcy9mb3JtZmllbGQtcGFzc3dvcmQvdGRzLWZvcm1maWVsZC1wYXNzd29yZC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBVSxNQUFNLGVBQWUsQ0FBQzs7OztBQVV6RCxNQUFNLE9BQU8sNkJBQTZCO0lBQy9CLEtBQUssR0FBVyxFQUFFLENBQUM7SUFDbkIsV0FBVyxDQUFlO0lBQzFCLEtBQUssQ0FBVTtJQUNmLGFBQWEsR0FBa0MsUUFBUSxDQUFDO0lBQ3hELFdBQVcsR0FBVyxFQUFFLENBQUM7SUFDekIsSUFBSSxDQUFVO0lBRWhCLGVBQWUsR0FBRyxLQUFLLENBQUM7SUFFL0IsUUFBUTtRQUNOLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7WUFDdEIsT0FBTyxDQUFDLElBQUksQ0FBQyxpREFBaUQsQ0FBQyxDQUFDO1FBQ2xFLENBQUM7UUFFRCxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO1lBQ2hCLE9BQU8sQ0FBQyxJQUFJLENBQUMsMkNBQTJDLENBQUMsQ0FBQztRQUM1RCxDQUFDO0lBQ0gsQ0FBQztJQUVELElBQVcsUUFBUTtRQUNqQixPQUFPLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsa0JBQWtCLENBQUM7SUFDbEUsQ0FBQztJQUVELElBQVcsUUFBUTtRQUNqQixPQUFPLEdBQUcsSUFBSSxDQUFDLEtBQUssUUFBUSxDQUFDO0lBQy9CLENBQUM7SUFFRCxJQUFXLGtCQUFrQjtRQUMzQixPQUFPLElBQUksQ0FBQyxhQUFhLEtBQUssUUFBUTtZQUNwQyxDQUFDLENBQUMsNERBQTREO1lBQzlELENBQUMsQ0FBQyxvQkFBb0IsQ0FBQztJQUMzQixDQUFDO0lBRU0sd0JBQXdCO1FBQzdCLElBQUksQ0FBQyxlQUFlLEdBQUcsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDO0lBQy9DLENBQUM7d0dBcENVLDZCQUE2Qjs0RkFBN0IsNkJBQTZCLGdOQ1YxQyx3K0JBcUJBOzs0RkRYYSw2QkFBNkI7a0JBTHpDLFNBQVM7K0JBQ0Usd0JBQXdCOzhCQUt6QixLQUFLO3NCQUFiLEtBQUs7Z0JBQ0csV0FBVztzQkFBbkIsS0FBSztnQkFDRyxLQUFLO3NCQUFiLEtBQUs7Z0JBQ0csYUFBYTtzQkFBckIsS0FBSztnQkFDRyxXQUFXO3NCQUFuQixLQUFLO2dCQUNHLElBQUk7c0JBQVosS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBGb3JtQ29udHJvbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuXHJcbmltcG9ydCB7IFREU0Zvcm1maWVsZExhYmVsUG9zaXRpb25UeXBlIH0gZnJvbSAnLi4vdHlwZXMvdGRzLWZvcm1maWVsZC1sYWJlbC1wb3NpdGlvbi50eXBlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAndGRzLWZvcm1maWVsZC1wYXNzd29yZCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3Rkcy1mb3JtZmllbGQtcGFzc3dvcmQuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsOiAnLi90ZHMtZm9ybWZpZWxkLXBhc3N3b3JkLmNvbXBvbmVudC5zY3NzJyxcclxufSlcclxuZXhwb3J0IGNsYXNzIFREU0Zvcm1maWVsZFBhc3N3b3JkQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBASW5wdXQoKSBjbGFzczogc3RyaW5nID0gJyc7XHJcbiAgQElucHV0KCkgY29udHJvbE5hbWUhOiBGb3JtQ29udHJvbDtcclxuICBASW5wdXQoKSBsYWJlbCE6IHN0cmluZztcclxuICBASW5wdXQoKSBsYWJlbFBvc2l0aW9uOiBURFNGb3JtZmllbGRMYWJlbFBvc2l0aW9uVHlwZSA9ICdiZWZvcmUnO1xyXG4gIEBJbnB1dCgpIHBsYWNlaG9sZGVyOiBzdHJpbmcgPSAnJztcclxuICBASW5wdXQoKSBoaW50ITogc3RyaW5nO1xyXG5cclxuICBwdWJsaWMgZGlzcGxheVBhc3N3b3JkID0gZmFsc2U7XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgaWYgKCF0aGlzLmNvbnRyb2xOYW1lKSB7XHJcbiAgICAgIGNvbnNvbGUud2FybignRm9ybWZpZWxkVGV4dENvbXBvbmVudDogY29udHJvbE5hbWUgaXMgcmVxdWlyZWQnKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoIXRoaXMubGFiZWwpIHtcclxuICAgICAgY29uc29sZS53YXJuKCdGb3JtZmllbGRUZXh0Q29tcG9uZW50OiBsYWJlbCBpcyByZXF1aXJlZCcpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldCBpY29uTmFtZSgpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHRoaXMuZGlzcGxheVBhc3N3b3JkID8gJ2ZhcyBmYS1leWUnIDogJ2ZhcyBmYS1leWUtc2xhc2gnO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldCBsYWJlbEZvcigpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIGAke3RoaXMubGFiZWx9X2lucHV0YDtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXQgbGFiZWxQb3NpdGlvbkNsYXNzKCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gdGhpcy5sYWJlbFBvc2l0aW9uID09PSAnYmVmb3JlJ1xyXG4gICAgICA/ICdkLWZsZXggZmxleC1yb3cgYWxpZ24taXRlbXMtY2VudGVyIGp1c3RpZnktY29udGVudC1iZXR3ZWVuJ1xyXG4gICAgICA6ICdkLWZsZXggZmxleC1jb2x1bW4nO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHRvZ2dsZVBhc3N3b3JkVmlzaWJpbGl0eSgpOiB2b2lkIHtcclxuICAgIHRoaXMuZGlzcGxheVBhc3N3b3JkID0gIXRoaXMuZGlzcGxheVBhc3N3b3JkO1xyXG4gIH1cclxufVxyXG4iLCJAaWYgKGNvbnRyb2xOYW1lICYmIGxhYmVsKSB7XHJcbiAgPGRpdiBpZD1cInBhc3N3b3JkXCIgW25nQ2xhc3NdPVwibGFiZWxQb3NpdGlvbkNsYXNzICsgJyAnICsgY2xhc3NcIj5cclxuICAgIDxsYWJlbCBbZm9yXT1cImxhYmVsRm9yXCIgY2xhc3M9XCJ0aGVtZS1jYXB0aW9uIHctYXV0b1wiPnt7IGxhYmVsIH19OjwvbGFiZWw+XHJcbiAgICA8ZGl2IGNsYXNzPVwiZC1mbGV4IGZsZXgtcm93IHctYXV0b1wiPlxyXG4gICAgICBAaWYgKGRpc3BsYXlQYXNzd29yZCkge1xyXG4gICAgICAgIDxpbnB1dCBbbmFtZV09XCJsYWJlbEZvclwiIHR5cGU9XCJ0ZXh0XCIgW3BsYWNlaG9sZGVyXT1cInBsYWNlaG9sZGVyXCIgW2Zvcm1Db250cm9sXT1cImNvbnRyb2xOYW1lXCIgLz5cclxuICAgICAgfSBAZWxzZSB7XHJcbiAgICAgICAgPGlucHV0IFtuYW1lXT1cImxhYmVsRm9yXCIgdHlwZT1cInBhc3N3b3JkXCIgW3BsYWNlaG9sZGVyXT1cInBsYWNlaG9sZGVyXCIgW2Zvcm1Db250cm9sXT1cImNvbnRyb2xOYW1lXCIgLz5cclxuICAgICAgfVxyXG4gICAgICBAaWYgKGRpc3BsYXlQYXNzd29yZCkge1xyXG4gICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiaW5wdXQtaWNvbi1idXR0b25cIiAoY2xpY2spPVwidG9nZ2xlUGFzc3dvcmRWaXNpYmlsaXR5KClcIj5cclxuICAgICAgICAgIDxpIGNsYXNzPVwiZmFzIGZhLWV5ZVwiIGlkPVwic2hvd19leWVcIj48L2k+XHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgIH0gQGVsc2Uge1xyXG4gICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiaW5wdXQtaWNvbi1idXR0b25cIiAoY2xpY2spPVwidG9nZ2xlUGFzc3dvcmRWaXNpYmlsaXR5KClcIj5cclxuICAgICAgICAgIDxpIGNsYXNzPVwiZmFzIGZhLWV5ZS1zbGFzaFwiIGlkPVwic2hvd19leWVcIj48L2k+XHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgIH1cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG59XHJcbiJdfQ==