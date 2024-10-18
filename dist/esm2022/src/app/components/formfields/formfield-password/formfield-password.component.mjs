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
        return this.labelPosition === 'before' ? 'd-flex flex-row align-items-center' : 'd-flex flex-column';
    }
    togglePasswordVisibility() {
        this.displayPassword = !this.displayPassword;
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: FormfieldPasswordComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "17.3.12", type: FormfieldPasswordComponent, selector: "app-formfield-password", inputs: { class: "class", controlName: "controlName", label: "label", labelPosition: "labelPosition", placeholder: "placeholder", hint: "hint" }, ngImport: i0, template: "@if (controlName && label) {\r\n  <div id=\"password\" [ngClass]=\"labelPositionClass + ' ' + class\">\r\n    <label [for]=\"labelFor\">{{ label }}:</label>\r\n    <div class=\"d-flex flex-row\">\r\n      @if (displayPassword) {\r\n        <input [name]=\"labelFor\" type=\"text\" [placeholder]=\"placeholder\" [formControl]=\"controlName\" />\r\n      } @else {\r\n        <input [name]=\"labelFor\" type=\"password\" [placeholder]=\"placeholder\" [formControl]=\"controlName\" />\r\n      }\r\n      @if (displayPassword) {\r\n        <button type=\"button\" class=\"input-icon-button\" (click)=\"togglePasswordVisibility()\">\r\n          <i class=\"fas fa-eye\" id=\"show_eye\"></i>\r\n        </button>\r\n      } @else {\r\n        <button type=\"button\" class=\"input-icon-button\" (click)=\"togglePasswordVisibility()\">\r\n          <i class=\"fas fa-eye-slash\" id=\"show_eye\"></i>\r\n        </button>\r\n      }\r\n    </div>\r\n  </div>\r\n}\r\n", styles: [".input-icon-button{margin-left:-2rem;background-color:transparent;border:none;color:#bdbdbd}.input-width{min-width:250px}\n"], dependencies: [{ kind: "directive", type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i2.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i2.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i2.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: FormfieldPasswordComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-formfield-password', template: "@if (controlName && label) {\r\n  <div id=\"password\" [ngClass]=\"labelPositionClass + ' ' + class\">\r\n    <label [for]=\"labelFor\">{{ label }}:</label>\r\n    <div class=\"d-flex flex-row\">\r\n      @if (displayPassword) {\r\n        <input [name]=\"labelFor\" type=\"text\" [placeholder]=\"placeholder\" [formControl]=\"controlName\" />\r\n      } @else {\r\n        <input [name]=\"labelFor\" type=\"password\" [placeholder]=\"placeholder\" [formControl]=\"controlName\" />\r\n      }\r\n      @if (displayPassword) {\r\n        <button type=\"button\" class=\"input-icon-button\" (click)=\"togglePasswordVisibility()\">\r\n          <i class=\"fas fa-eye\" id=\"show_eye\"></i>\r\n        </button>\r\n      } @else {\r\n        <button type=\"button\" class=\"input-icon-button\" (click)=\"togglePasswordVisibility()\">\r\n          <i class=\"fas fa-eye-slash\" id=\"show_eye\"></i>\r\n        </button>\r\n      }\r\n    </div>\r\n  </div>\r\n}\r\n", styles: [".input-icon-button{margin-left:-2rem;background-color:transparent;border:none;color:#bdbdbd}.input-width{min-width:250px}\n"] }]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybWZpZWxkLXBhc3N3b3JkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hcHAvY29tcG9uZW50cy9mb3JtZmllbGRzL2Zvcm1maWVsZC1wYXNzd29yZC9mb3JtZmllbGQtcGFzc3dvcmQuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2FwcC9jb21wb25lbnRzL2Zvcm1maWVsZHMvZm9ybWZpZWxkLXBhc3N3b3JkL2Zvcm1maWVsZC1wYXNzd29yZC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBVSxNQUFNLGVBQWUsQ0FBQzs7OztBQVN6RCxNQUFNLE9BQU8sMEJBQTBCO0lBQzVCLEtBQUssR0FBVyxFQUFFLENBQUM7SUFDbkIsV0FBVyxDQUFlO0lBQzFCLEtBQUssQ0FBVTtJQUNmLGFBQWEsR0FBOEIsUUFBUSxDQUFDO0lBQ3BELFdBQVcsR0FBVyxFQUFFLENBQUM7SUFDekIsSUFBSSxDQUFVO0lBRWhCLGVBQWUsR0FBRyxLQUFLLENBQUM7SUFFL0IsUUFBUTtRQUNOLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7WUFDdEIsT0FBTyxDQUFDLElBQUksQ0FBQyxpREFBaUQsQ0FBQyxDQUFDO1FBQ2xFLENBQUM7UUFFRCxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO1lBQ2hCLE9BQU8sQ0FBQyxJQUFJLENBQUMsMkNBQTJDLENBQUMsQ0FBQztRQUM1RCxDQUFDO0lBQ0gsQ0FBQztJQUVELElBQVcsUUFBUTtRQUNqQixPQUFPLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsa0JBQWtCLENBQUM7SUFDbEUsQ0FBQztJQUVELElBQVcsUUFBUTtRQUNqQixPQUFPLEdBQUcsSUFBSSxDQUFDLEtBQUssUUFBUSxDQUFDO0lBQy9CLENBQUM7SUFFRCxJQUFXLGtCQUFrQjtRQUMzQixPQUFPLElBQUksQ0FBQyxhQUFhLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQyxvQ0FBb0MsQ0FBQyxDQUFDLENBQUMsb0JBQW9CLENBQUM7SUFDdkcsQ0FBQztJQUVNLHdCQUF3QjtRQUM3QixJQUFJLENBQUMsZUFBZSxHQUFHLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQztJQUMvQyxDQUFDO3dHQWxDVSwwQkFBMEI7NEZBQTFCLDBCQUEwQixnTkNUdkMsazhCQXFCQTs7NEZEWmEsMEJBQTBCO2tCQUx0QyxTQUFTOytCQUNFLHdCQUF3Qjs4QkFLekIsS0FBSztzQkFBYixLQUFLO2dCQUNHLFdBQVc7c0JBQW5CLEtBQUs7Z0JBQ0csS0FBSztzQkFBYixLQUFLO2dCQUNHLGFBQWE7c0JBQXJCLEtBQUs7Z0JBQ0csV0FBVztzQkFBbkIsS0FBSztnQkFDRyxJQUFJO3NCQUFaLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRm9ybUNvbnRyb2wgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IEZvcm1maWVsZExhYmVsUG9zaXRpb1R5cGUgfSBmcm9tICcuLi90eXBlcy9mb3JtZmllbGQtbGFiZWwtcG9zaXRpb24udHlwZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FwcC1mb3JtZmllbGQtcGFzc3dvcmQnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9mb3JtZmllbGQtcGFzc3dvcmQuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsOiAnLi9mb3JtZmllbGQtcGFzc3dvcmQuY29tcG9uZW50LnNjc3MnLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgRm9ybWZpZWxkUGFzc3dvcmRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIEBJbnB1dCgpIGNsYXNzOiBzdHJpbmcgPSAnJztcclxuICBASW5wdXQoKSBjb250cm9sTmFtZSE6IEZvcm1Db250cm9sO1xyXG4gIEBJbnB1dCgpIGxhYmVsITogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIGxhYmVsUG9zaXRpb246IEZvcm1maWVsZExhYmVsUG9zaXRpb1R5cGUgPSAnYmVmb3JlJztcclxuICBASW5wdXQoKSBwbGFjZWhvbGRlcjogc3RyaW5nID0gJyc7XHJcbiAgQElucHV0KCkgaGludCE6IHN0cmluZztcclxuXHJcbiAgcHVibGljIGRpc3BsYXlQYXNzd29yZCA9IGZhbHNlO1xyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIGlmICghdGhpcy5jb250cm9sTmFtZSkge1xyXG4gICAgICBjb25zb2xlLndhcm4oJ0Zvcm1maWVsZFRleHRDb21wb25lbnQ6IGNvbnRyb2xOYW1lIGlzIHJlcXVpcmVkJyk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCF0aGlzLmxhYmVsKSB7XHJcbiAgICAgIGNvbnNvbGUud2FybignRm9ybWZpZWxkVGV4dENvbXBvbmVudDogbGFiZWwgaXMgcmVxdWlyZWQnKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXQgaWNvbk5hbWUoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiB0aGlzLmRpc3BsYXlQYXNzd29yZCA/ICdmYXMgZmEtZXllJyA6ICdmYXMgZmEtZXllLXNsYXNoJztcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXQgbGFiZWxGb3IoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiBgJHt0aGlzLmxhYmVsfV9pbnB1dGA7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0IGxhYmVsUG9zaXRpb25DbGFzcygpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHRoaXMubGFiZWxQb3NpdGlvbiA9PT0gJ2JlZm9yZScgPyAnZC1mbGV4IGZsZXgtcm93IGFsaWduLWl0ZW1zLWNlbnRlcicgOiAnZC1mbGV4IGZsZXgtY29sdW1uJztcclxuICB9XHJcblxyXG4gIHB1YmxpYyB0b2dnbGVQYXNzd29yZFZpc2liaWxpdHkoKTogdm9pZCB7XHJcbiAgICB0aGlzLmRpc3BsYXlQYXNzd29yZCA9ICF0aGlzLmRpc3BsYXlQYXNzd29yZDtcclxuICB9XHJcbn1cclxuIiwiQGlmIChjb250cm9sTmFtZSAmJiBsYWJlbCkge1xyXG4gIDxkaXYgaWQ9XCJwYXNzd29yZFwiIFtuZ0NsYXNzXT1cImxhYmVsUG9zaXRpb25DbGFzcyArICcgJyArIGNsYXNzXCI+XHJcbiAgICA8bGFiZWwgW2Zvcl09XCJsYWJlbEZvclwiPnt7IGxhYmVsIH19OjwvbGFiZWw+XHJcbiAgICA8ZGl2IGNsYXNzPVwiZC1mbGV4IGZsZXgtcm93XCI+XHJcbiAgICAgIEBpZiAoZGlzcGxheVBhc3N3b3JkKSB7XHJcbiAgICAgICAgPGlucHV0IFtuYW1lXT1cImxhYmVsRm9yXCIgdHlwZT1cInRleHRcIiBbcGxhY2Vob2xkZXJdPVwicGxhY2Vob2xkZXJcIiBbZm9ybUNvbnRyb2xdPVwiY29udHJvbE5hbWVcIiAvPlxyXG4gICAgICB9IEBlbHNlIHtcclxuICAgICAgICA8aW5wdXQgW25hbWVdPVwibGFiZWxGb3JcIiB0eXBlPVwicGFzc3dvcmRcIiBbcGxhY2Vob2xkZXJdPVwicGxhY2Vob2xkZXJcIiBbZm9ybUNvbnRyb2xdPVwiY29udHJvbE5hbWVcIiAvPlxyXG4gICAgICB9XHJcbiAgICAgIEBpZiAoZGlzcGxheVBhc3N3b3JkKSB7XHJcbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJpbnB1dC1pY29uLWJ1dHRvblwiIChjbGljayk9XCJ0b2dnbGVQYXNzd29yZFZpc2liaWxpdHkoKVwiPlxyXG4gICAgICAgICAgPGkgY2xhc3M9XCJmYXMgZmEtZXllXCIgaWQ9XCJzaG93X2V5ZVwiPjwvaT5cclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgfSBAZWxzZSB7XHJcbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJpbnB1dC1pY29uLWJ1dHRvblwiIChjbGljayk9XCJ0b2dnbGVQYXNzd29yZFZpc2liaWxpdHkoKVwiPlxyXG4gICAgICAgICAgPGkgY2xhc3M9XCJmYXMgZmEtZXllLXNsYXNoXCIgaWQ9XCJzaG93X2V5ZVwiPjwvaT5cclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgfVxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbn1cclxuIl19