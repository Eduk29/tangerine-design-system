import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/forms";
export class FormfieldTextComponent {
    class = '';
    controlName;
    label;
    labelPosition = 'before';
    placeholder = '';
    hint;
    ngOnInit() {
        if (!this.controlName) {
            console.warn('FormfieldTextComponent: controlName is required');
        }
        if (!this.label) {
            console.warn('FormfieldTextComponent: label is required');
        }
    }
    get labelFor() {
        return `${this.label}_input`;
    }
    get labelPositionClass() {
        return this.labelPosition === 'before' ? 'd-flex flex-row justify-content-between' : 'd-flex flex-column';
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: FormfieldTextComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "17.3.12", type: FormfieldTextComponent, selector: "app-formfield-text", inputs: { class: "class", controlName: "controlName", label: "label", labelPosition: "labelPosition", placeholder: "placeholder", hint: "hint" }, ngImport: i0, template: "@if (controlName && label) {\r\n  <div [id]=\"label.toLowerCase()\" [ngClass]=\"labelPositionClass + ' ' + class\">\r\n    <label [for]=\"labelFor\" class=\"theme-caption w-15\">{{ label }}:</label>\r\n    <div class=\"d-flex flex-column w-70\">\r\n      <input [name]=\"labelFor\" [placeholder]=\"placeholder\" type=\"text\" [formControl]=\"controlName\" />\r\n      <p class=\"p-0 theme-caption\">{{ hint }}</p>\r\n    </div>\r\n  </div>\r\n}\r\n", styles: [".input-width{min-width:250px}\n"], dependencies: [{ kind: "directive", type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i2.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i2.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i2.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: FormfieldTextComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-formfield-text', template: "@if (controlName && label) {\r\n  <div [id]=\"label.toLowerCase()\" [ngClass]=\"labelPositionClass + ' ' + class\">\r\n    <label [for]=\"labelFor\" class=\"theme-caption w-15\">{{ label }}:</label>\r\n    <div class=\"d-flex flex-column w-70\">\r\n      <input [name]=\"labelFor\" [placeholder]=\"placeholder\" type=\"text\" [formControl]=\"controlName\" />\r\n      <p class=\"p-0 theme-caption\">{{ hint }}</p>\r\n    </div>\r\n  </div>\r\n}\r\n", styles: [".input-width{min-width:250px}\n"] }]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybWZpZWxkLXRleHQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2FwcC9jb21wb25lbnRzL2Zvcm1maWVsZHMvZm9ybWZpZWxkLXRleHQvZm9ybWZpZWxkLXRleHQuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2FwcC9jb21wb25lbnRzL2Zvcm1maWVsZHMvZm9ybWZpZWxkLXRleHQvZm9ybWZpZWxkLXRleHQuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQVUsTUFBTSxlQUFlLENBQUM7Ozs7QUFTekQsTUFBTSxPQUFPLHNCQUFzQjtJQUN4QixLQUFLLEdBQVcsRUFBRSxDQUFDO0lBQ25CLFdBQVcsQ0FBd0I7SUFDbkMsS0FBSyxDQUFVO0lBQ2YsYUFBYSxHQUE4QixRQUFRLENBQUM7SUFDcEQsV0FBVyxHQUFXLEVBQUUsQ0FBQztJQUN6QixJQUFJLENBQVU7SUFFdkIsUUFBUTtRQUNOLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7WUFDdEIsT0FBTyxDQUFDLElBQUksQ0FBQyxpREFBaUQsQ0FBQyxDQUFDO1FBQ2xFLENBQUM7UUFFRCxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO1lBQ2hCLE9BQU8sQ0FBQyxJQUFJLENBQUMsMkNBQTJDLENBQUMsQ0FBQztRQUM1RCxDQUFDO0lBQ0gsQ0FBQztJQUVELElBQVcsUUFBUTtRQUNqQixPQUFPLEdBQUcsSUFBSSxDQUFDLEtBQUssUUFBUSxDQUFDO0lBQy9CLENBQUM7SUFFRCxJQUFXLGtCQUFrQjtRQUMzQixPQUFPLElBQUksQ0FBQyxhQUFhLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQyx5Q0FBeUMsQ0FBQyxDQUFDLENBQUMsb0JBQW9CLENBQUM7SUFDNUcsQ0FBQzt3R0F4QlUsc0JBQXNCOzRGQUF0QixzQkFBc0IsNE1DVG5DLGtjQVNBOzs0RkRBYSxzQkFBc0I7a0JBTGxDLFNBQVM7K0JBQ0Usb0JBQW9COzhCQUtyQixLQUFLO3NCQUFiLEtBQUs7Z0JBQ0csV0FBVztzQkFBbkIsS0FBSztnQkFDRyxLQUFLO3NCQUFiLEtBQUs7Z0JBQ0csYUFBYTtzQkFBckIsS0FBSztnQkFDRyxXQUFXO3NCQUFuQixLQUFLO2dCQUNHLElBQUk7c0JBQVosS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBGb3JtQ29udHJvbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgRm9ybWZpZWxkTGFiZWxQb3NpdGlvVHlwZSB9IGZyb20gJy4uL3R5cGVzL2Zvcm1maWVsZC1sYWJlbC1wb3NpdGlvbi50eXBlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYXBwLWZvcm1maWVsZC10ZXh0JyxcclxuICB0ZW1wbGF0ZVVybDogJy4vZm9ybWZpZWxkLXRleHQuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsOiAnLi9mb3JtZmllbGQtdGV4dC5jb21wb25lbnQuc2NzcycsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBGb3JtZmllbGRUZXh0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBASW5wdXQoKSBjbGFzczogc3RyaW5nID0gJyc7XHJcbiAgQElucHV0KCkgY29udHJvbE5hbWUhOiBGb3JtQ29udHJvbDx1bmtub3duPjtcclxuICBASW5wdXQoKSBsYWJlbCE6IHN0cmluZztcclxuICBASW5wdXQoKSBsYWJlbFBvc2l0aW9uOiBGb3JtZmllbGRMYWJlbFBvc2l0aW9UeXBlID0gJ2JlZm9yZSc7XHJcbiAgQElucHV0KCkgcGxhY2Vob2xkZXI6IHN0cmluZyA9ICcnO1xyXG4gIEBJbnB1dCgpIGhpbnQhOiBzdHJpbmc7XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgaWYgKCF0aGlzLmNvbnRyb2xOYW1lKSB7XHJcbiAgICAgIGNvbnNvbGUud2FybignRm9ybWZpZWxkVGV4dENvbXBvbmVudDogY29udHJvbE5hbWUgaXMgcmVxdWlyZWQnKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoIXRoaXMubGFiZWwpIHtcclxuICAgICAgY29uc29sZS53YXJuKCdGb3JtZmllbGRUZXh0Q29tcG9uZW50OiBsYWJlbCBpcyByZXF1aXJlZCcpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldCBsYWJlbEZvcigpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIGAke3RoaXMubGFiZWx9X2lucHV0YDtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXQgbGFiZWxQb3NpdGlvbkNsYXNzKCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gdGhpcy5sYWJlbFBvc2l0aW9uID09PSAnYmVmb3JlJyA/ICdkLWZsZXggZmxleC1yb3cganVzdGlmeS1jb250ZW50LWJldHdlZW4nIDogJ2QtZmxleCBmbGV4LWNvbHVtbic7XHJcbiAgfVxyXG59XHJcbiIsIkBpZiAoY29udHJvbE5hbWUgJiYgbGFiZWwpIHtcclxuICA8ZGl2IFtpZF09XCJsYWJlbC50b0xvd2VyQ2FzZSgpXCIgW25nQ2xhc3NdPVwibGFiZWxQb3NpdGlvbkNsYXNzICsgJyAnICsgY2xhc3NcIj5cclxuICAgIDxsYWJlbCBbZm9yXT1cImxhYmVsRm9yXCIgY2xhc3M9XCJ0aGVtZS1jYXB0aW9uIHctMTVcIj57eyBsYWJlbCB9fTo8L2xhYmVsPlxyXG4gICAgPGRpdiBjbGFzcz1cImQtZmxleCBmbGV4LWNvbHVtbiB3LTcwXCI+XHJcbiAgICAgIDxpbnB1dCBbbmFtZV09XCJsYWJlbEZvclwiIFtwbGFjZWhvbGRlcl09XCJwbGFjZWhvbGRlclwiIHR5cGU9XCJ0ZXh0XCIgW2Zvcm1Db250cm9sXT1cImNvbnRyb2xOYW1lXCIgLz5cclxuICAgICAgPHAgY2xhc3M9XCJwLTAgdGhlbWUtY2FwdGlvblwiPnt7IGhpbnQgfX08L3A+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxufVxyXG4iXX0=