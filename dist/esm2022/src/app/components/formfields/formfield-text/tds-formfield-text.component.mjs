import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/forms";
export class TDSFormfieldTextComponent {
    customClass = '';
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
        return this.labelPosition === 'before'
            ? 'd-flex flex-row align-items-baseline justify-content-between'
            : 'd-flex flex-column';
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: TDSFormfieldTextComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "17.3.12", type: TDSFormfieldTextComponent, selector: "tds-formfield-text", inputs: { customClass: "customClass", controlName: "controlName", label: "label", labelPosition: "labelPosition", placeholder: "placeholder", hint: "hint" }, ngImport: i0, template: "@if (controlName && label) {\r\n  <div [id]=\"label.toLowerCase()\" [ngClass]=\"labelPositionClass + ' ' + customClass\">\r\n    <label [for]=\"labelFor\" class=\"theme-caption w-auto\">{{ label }}:</label>\r\n    <div class=\"d-flex flex-column w-auto\">\r\n      <input [name]=\"labelFor\" [placeholder]=\"placeholder\" type=\"text\" [formControl]=\"controlName\" />\r\n      <p class=\"p-0 theme-caption\">{{ hint }}</p>\r\n    </div>\r\n  </div>\r\n}\r\n", styles: [".input-width{min-width:250px}\n"], dependencies: [{ kind: "directive", type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i2.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i2.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i2.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: TDSFormfieldTextComponent, decorators: [{
            type: Component,
            args: [{ selector: 'tds-formfield-text', template: "@if (controlName && label) {\r\n  <div [id]=\"label.toLowerCase()\" [ngClass]=\"labelPositionClass + ' ' + customClass\">\r\n    <label [for]=\"labelFor\" class=\"theme-caption w-auto\">{{ label }}:</label>\r\n    <div class=\"d-flex flex-column w-auto\">\r\n      <input [name]=\"labelFor\" [placeholder]=\"placeholder\" type=\"text\" [formControl]=\"controlName\" />\r\n      <p class=\"p-0 theme-caption\">{{ hint }}</p>\r\n    </div>\r\n  </div>\r\n}\r\n", styles: [".input-width{min-width:250px}\n"] }]
        }], propDecorators: { customClass: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGRzLWZvcm1maWVsZC10ZXh0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hcHAvY29tcG9uZW50cy9mb3JtZmllbGRzL2Zvcm1maWVsZC10ZXh0L3Rkcy1mb3JtZmllbGQtdGV4dC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvYXBwL2NvbXBvbmVudHMvZm9ybWZpZWxkcy9mb3JtZmllbGQtdGV4dC90ZHMtZm9ybWZpZWxkLXRleHQuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQVUsTUFBTSxlQUFlLENBQUM7Ozs7QUFTekQsTUFBTSxPQUFPLHlCQUF5QjtJQUMzQixXQUFXLEdBQVcsRUFBRSxDQUFDO0lBQ3pCLFdBQVcsQ0FBd0I7SUFDbkMsS0FBSyxDQUFVO0lBQ2YsYUFBYSxHQUFrQyxRQUFRLENBQUM7SUFDeEQsV0FBVyxHQUFXLEVBQUUsQ0FBQztJQUN6QixJQUFJLENBQVU7SUFFdkIsUUFBUTtRQUNOLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7WUFDdEIsT0FBTyxDQUFDLElBQUksQ0FBQyxpREFBaUQsQ0FBQyxDQUFDO1FBQ2xFLENBQUM7UUFFRCxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO1lBQ2hCLE9BQU8sQ0FBQyxJQUFJLENBQUMsMkNBQTJDLENBQUMsQ0FBQztRQUM1RCxDQUFDO0lBQ0gsQ0FBQztJQUVELElBQVcsUUFBUTtRQUNqQixPQUFPLEdBQUcsSUFBSSxDQUFDLEtBQUssUUFBUSxDQUFDO0lBQy9CLENBQUM7SUFFRCxJQUFXLGtCQUFrQjtRQUMzQixPQUFPLElBQUksQ0FBQyxhQUFhLEtBQUssUUFBUTtZQUNwQyxDQUFDLENBQUMsOERBQThEO1lBQ2hFLENBQUMsQ0FBQyxvQkFBb0IsQ0FBQztJQUMzQixDQUFDO3dHQTFCVSx5QkFBeUI7NEZBQXpCLHlCQUF5Qix3TkNUdEMsNGNBU0E7OzRGREFhLHlCQUF5QjtrQkFMckMsU0FBUzsrQkFDRSxvQkFBb0I7OEJBS3JCLFdBQVc7c0JBQW5CLEtBQUs7Z0JBQ0csV0FBVztzQkFBbkIsS0FBSztnQkFDRyxLQUFLO3NCQUFiLEtBQUs7Z0JBQ0csYUFBYTtzQkFBckIsS0FBSztnQkFDRyxXQUFXO3NCQUFuQixLQUFLO2dCQUNHLElBQUk7c0JBQVosS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBGb3JtQ29udHJvbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgVERTRm9ybWZpZWxkTGFiZWxQb3NpdGlvblR5cGUgfSBmcm9tICcuLi90eXBlcy90ZHMtZm9ybWZpZWxkLWxhYmVsLXBvc2l0aW9uLnR5cGUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICd0ZHMtZm9ybWZpZWxkLXRleHQnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi90ZHMtZm9ybWZpZWxkLXRleHQuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsOiAnLi90ZHMtZm9ybWZpZWxkLXRleHQuY29tcG9uZW50LnNjc3MnLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgVERTRm9ybWZpZWxkVGV4dENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgQElucHV0KCkgY3VzdG9tQ2xhc3M6IHN0cmluZyA9ICcnO1xyXG4gIEBJbnB1dCgpIGNvbnRyb2xOYW1lITogRm9ybUNvbnRyb2w8dW5rbm93bj47XHJcbiAgQElucHV0KCkgbGFiZWwhOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgbGFiZWxQb3NpdGlvbjogVERTRm9ybWZpZWxkTGFiZWxQb3NpdGlvblR5cGUgPSAnYmVmb3JlJztcclxuICBASW5wdXQoKSBwbGFjZWhvbGRlcjogc3RyaW5nID0gJyc7XHJcbiAgQElucHV0KCkgaGludCE6IHN0cmluZztcclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICBpZiAoIXRoaXMuY29udHJvbE5hbWUpIHtcclxuICAgICAgY29uc29sZS53YXJuKCdGb3JtZmllbGRUZXh0Q29tcG9uZW50OiBjb250cm9sTmFtZSBpcyByZXF1aXJlZCcpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICghdGhpcy5sYWJlbCkge1xyXG4gICAgICBjb25zb2xlLndhcm4oJ0Zvcm1maWVsZFRleHRDb21wb25lbnQ6IGxhYmVsIGlzIHJlcXVpcmVkJyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0IGxhYmVsRm9yKCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gYCR7dGhpcy5sYWJlbH1faW5wdXRgO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldCBsYWJlbFBvc2l0aW9uQ2xhc3MoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiB0aGlzLmxhYmVsUG9zaXRpb24gPT09ICdiZWZvcmUnXHJcbiAgICAgID8gJ2QtZmxleCBmbGV4LXJvdyBhbGlnbi1pdGVtcy1iYXNlbGluZSBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbidcclxuICAgICAgOiAnZC1mbGV4IGZsZXgtY29sdW1uJztcclxuICB9XHJcbn1cclxuIiwiQGlmIChjb250cm9sTmFtZSAmJiBsYWJlbCkge1xyXG4gIDxkaXYgW2lkXT1cImxhYmVsLnRvTG93ZXJDYXNlKClcIiBbbmdDbGFzc109XCJsYWJlbFBvc2l0aW9uQ2xhc3MgKyAnICcgKyBjdXN0b21DbGFzc1wiPlxyXG4gICAgPGxhYmVsIFtmb3JdPVwibGFiZWxGb3JcIiBjbGFzcz1cInRoZW1lLWNhcHRpb24gdy1hdXRvXCI+e3sgbGFiZWwgfX06PC9sYWJlbD5cclxuICAgIDxkaXYgY2xhc3M9XCJkLWZsZXggZmxleC1jb2x1bW4gdy1hdXRvXCI+XHJcbiAgICAgIDxpbnB1dCBbbmFtZV09XCJsYWJlbEZvclwiIFtwbGFjZWhvbGRlcl09XCJwbGFjZWhvbGRlclwiIHR5cGU9XCJ0ZXh0XCIgW2Zvcm1Db250cm9sXT1cImNvbnRyb2xOYW1lXCIgLz5cclxuICAgICAgPHAgY2xhc3M9XCJwLTAgdGhlbWUtY2FwdGlvblwiPnt7IGhpbnQgfX08L3A+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxufVxyXG4iXX0=