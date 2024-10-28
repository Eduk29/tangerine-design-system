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
        return this.labelPosition === 'before'
            ? 'd-flex flex-row align-items-baseline justify-content-between'
            : 'd-flex flex-column';
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: FormfieldTextComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "17.3.12", type: FormfieldTextComponent, selector: "app-formfield-text", inputs: { class: "class", controlName: "controlName", label: "label", labelPosition: "labelPosition", placeholder: "placeholder", hint: "hint" }, ngImport: i0, template: "@if (controlName && label) {\r\n  <div [id]=\"label.toLowerCase()\" [ngClass]=\"labelPositionClass + ' ' + class\">\r\n    <label [for]=\"labelFor\" class=\"theme-caption w-auto\">{{ label }}:</label>\r\n    <div class=\"d-flex flex-column w-auto\">\r\n      <input [name]=\"labelFor\" [placeholder]=\"placeholder\" type=\"text\" [formControl]=\"controlName\" />\r\n      <p class=\"p-0 theme-caption\">{{ hint }}</p>\r\n    </div>\r\n  </div>\r\n}\r\n", styles: [".input-width{min-width:250px}\n"], dependencies: [{ kind: "directive", type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i2.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i2.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i2.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: FormfieldTextComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-formfield-text', template: "@if (controlName && label) {\r\n  <div [id]=\"label.toLowerCase()\" [ngClass]=\"labelPositionClass + ' ' + class\">\r\n    <label [for]=\"labelFor\" class=\"theme-caption w-auto\">{{ label }}:</label>\r\n    <div class=\"d-flex flex-column w-auto\">\r\n      <input [name]=\"labelFor\" [placeholder]=\"placeholder\" type=\"text\" [formControl]=\"controlName\" />\r\n      <p class=\"p-0 theme-caption\">{{ hint }}</p>\r\n    </div>\r\n  </div>\r\n}\r\n", styles: [".input-width{min-width:250px}\n"] }]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybWZpZWxkLXRleHQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2FwcC9jb21wb25lbnRzL2Zvcm1maWVsZHMvZm9ybWZpZWxkLXRleHQvZm9ybWZpZWxkLXRleHQuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2FwcC9jb21wb25lbnRzL2Zvcm1maWVsZHMvZm9ybWZpZWxkLXRleHQvZm9ybWZpZWxkLXRleHQuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQVUsTUFBTSxlQUFlLENBQUM7Ozs7QUFTekQsTUFBTSxPQUFPLHNCQUFzQjtJQUN4QixLQUFLLEdBQVcsRUFBRSxDQUFDO0lBQ25CLFdBQVcsQ0FBd0I7SUFDbkMsS0FBSyxDQUFVO0lBQ2YsYUFBYSxHQUE4QixRQUFRLENBQUM7SUFDcEQsV0FBVyxHQUFXLEVBQUUsQ0FBQztJQUN6QixJQUFJLENBQVU7SUFFdkIsUUFBUTtRQUNOLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7WUFDdEIsT0FBTyxDQUFDLElBQUksQ0FBQyxpREFBaUQsQ0FBQyxDQUFDO1FBQ2xFLENBQUM7UUFFRCxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO1lBQ2hCLE9BQU8sQ0FBQyxJQUFJLENBQUMsMkNBQTJDLENBQUMsQ0FBQztRQUM1RCxDQUFDO0lBQ0gsQ0FBQztJQUVELElBQVcsUUFBUTtRQUNqQixPQUFPLEdBQUcsSUFBSSxDQUFDLEtBQUssUUFBUSxDQUFDO0lBQy9CLENBQUM7SUFFRCxJQUFXLGtCQUFrQjtRQUMzQixPQUFPLElBQUksQ0FBQyxhQUFhLEtBQUssUUFBUTtZQUNwQyxDQUFDLENBQUMsOERBQThEO1lBQ2hFLENBQUMsQ0FBQyxvQkFBb0IsQ0FBQztJQUMzQixDQUFDO3dHQTFCVSxzQkFBc0I7NEZBQXRCLHNCQUFzQiw0TUNUbkMsc2NBU0E7OzRGREFhLHNCQUFzQjtrQkFMbEMsU0FBUzsrQkFDRSxvQkFBb0I7OEJBS3JCLEtBQUs7c0JBQWIsS0FBSztnQkFDRyxXQUFXO3NCQUFuQixLQUFLO2dCQUNHLEtBQUs7c0JBQWIsS0FBSztnQkFDRyxhQUFhO3NCQUFyQixLQUFLO2dCQUNHLFdBQVc7c0JBQW5CLEtBQUs7Z0JBQ0csSUFBSTtzQkFBWixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEZvcm1Db250cm9sIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBGb3JtZmllbGRMYWJlbFBvc2l0aW9UeXBlIH0gZnJvbSAnLi4vdHlwZXMvZm9ybWZpZWxkLWxhYmVsLXBvc2l0aW9uLnR5cGUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhcHAtZm9ybWZpZWxkLXRleHQnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9mb3JtZmllbGQtdGV4dC5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmw6ICcuL2Zvcm1maWVsZC10ZXh0LmNvbXBvbmVudC5zY3NzJyxcclxufSlcclxuZXhwb3J0IGNsYXNzIEZvcm1maWVsZFRleHRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIEBJbnB1dCgpIGNsYXNzOiBzdHJpbmcgPSAnJztcclxuICBASW5wdXQoKSBjb250cm9sTmFtZSE6IEZvcm1Db250cm9sPHVua25vd24+O1xyXG4gIEBJbnB1dCgpIGxhYmVsITogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIGxhYmVsUG9zaXRpb246IEZvcm1maWVsZExhYmVsUG9zaXRpb1R5cGUgPSAnYmVmb3JlJztcclxuICBASW5wdXQoKSBwbGFjZWhvbGRlcjogc3RyaW5nID0gJyc7XHJcbiAgQElucHV0KCkgaGludCE6IHN0cmluZztcclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICBpZiAoIXRoaXMuY29udHJvbE5hbWUpIHtcclxuICAgICAgY29uc29sZS53YXJuKCdGb3JtZmllbGRUZXh0Q29tcG9uZW50OiBjb250cm9sTmFtZSBpcyByZXF1aXJlZCcpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICghdGhpcy5sYWJlbCkge1xyXG4gICAgICBjb25zb2xlLndhcm4oJ0Zvcm1maWVsZFRleHRDb21wb25lbnQ6IGxhYmVsIGlzIHJlcXVpcmVkJyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0IGxhYmVsRm9yKCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gYCR7dGhpcy5sYWJlbH1faW5wdXRgO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldCBsYWJlbFBvc2l0aW9uQ2xhc3MoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiB0aGlzLmxhYmVsUG9zaXRpb24gPT09ICdiZWZvcmUnXHJcbiAgICAgID8gJ2QtZmxleCBmbGV4LXJvdyBhbGlnbi1pdGVtcy1iYXNlbGluZSBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbidcclxuICAgICAgOiAnZC1mbGV4IGZsZXgtY29sdW1uJztcclxuICB9XHJcbn1cclxuIiwiQGlmIChjb250cm9sTmFtZSAmJiBsYWJlbCkge1xyXG4gIDxkaXYgW2lkXT1cImxhYmVsLnRvTG93ZXJDYXNlKClcIiBbbmdDbGFzc109XCJsYWJlbFBvc2l0aW9uQ2xhc3MgKyAnICcgKyBjbGFzc1wiPlxyXG4gICAgPGxhYmVsIFtmb3JdPVwibGFiZWxGb3JcIiBjbGFzcz1cInRoZW1lLWNhcHRpb24gdy1hdXRvXCI+e3sgbGFiZWwgfX06PC9sYWJlbD5cclxuICAgIDxkaXYgY2xhc3M9XCJkLWZsZXggZmxleC1jb2x1bW4gdy1hdXRvXCI+XHJcbiAgICAgIDxpbnB1dCBbbmFtZV09XCJsYWJlbEZvclwiIFtwbGFjZWhvbGRlcl09XCJwbGFjZWhvbGRlclwiIHR5cGU9XCJ0ZXh0XCIgW2Zvcm1Db250cm9sXT1cImNvbnRyb2xOYW1lXCIgLz5cclxuICAgICAgPHAgY2xhc3M9XCJwLTAgdGhlbWUtY2FwdGlvblwiPnt7IGhpbnQgfX08L3A+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxufVxyXG4iXX0=