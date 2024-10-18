import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/forms";
export class FormfieldSelectComponent {
    cd;
    customClass = '';
    controlName;
    hint;
    label;
    labelPosition = 'before';
    optionList;
    placeholder = '';
    constructor(cd) {
        this.cd = cd;
    }
    ngOnInit() {
        if (!this.controlName) {
            console.warn('FormfieldSelectComponent: controlName is required');
        }
        if (!this.label) {
            console.warn('FormfieldSelectComponent: label is required');
        }
    }
    ngAfterViewInit() {
        this.cd.detectChanges();
    }
    get labelFor() {
        return `${this.label}_input`;
    }
    get labelPositionClass() {
        return this.labelPosition === 'before' ? 'd-flex flex-row' : 'd-flex flex-column';
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: FormfieldSelectComponent, deps: [{ token: i0.ChangeDetectorRef }], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "17.3.12", type: FormfieldSelectComponent, selector: "app-formfield-select", inputs: { customClass: "customClass", controlName: "controlName", hint: "hint", label: "label", labelPosition: "labelPosition", optionList: "optionList", placeholder: "placeholder" }, ngImport: i0, template: "<div [id]=\"label.toLocaleLowerCase()\" [ngClass]=\"labelPositionClass + ' ' + customClass\">\r\n  <label [for]=\"labelFor\" class=\"theme-body w-30 me-2\">{{ label }}</label>\r\n  <div class=\"d-flex flex-column\">\r\n    <select [name]=\"labelFor\" [id]=\"labelFor\" [formControl]=\"controlName\" class=\"w-100\">\r\n      @if (placeholder) {\r\n        <option value=\"null\" [disabled]=\"true\" [selected]=\"true\">{{ placeholder }}</option>\r\n      }\r\n      @for (option of optionList; track option.value) {\r\n        <option [value]=\"option.value\">{{ option.label }}</option>\r\n      }\r\n    </select>\r\n    <p class=\"theme-caption p-0\">{{ hint }}</p>\r\n  </div>\r\n</div>\r\n", styles: [""], dependencies: [{ kind: "directive", type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i2.NgSelectOption, selector: "option", inputs: ["ngValue", "value"] }, { kind: "directive", type: i2.ɵNgSelectMultipleOption, selector: "option", inputs: ["ngValue", "value"] }, { kind: "directive", type: i2.SelectControlValueAccessor, selector: "select:not([multiple])[formControlName],select:not([multiple])[formControl],select:not([multiple])[ngModel]", inputs: ["compareWith"] }, { kind: "directive", type: i2.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i2.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: FormfieldSelectComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-formfield-select', changeDetection: ChangeDetectionStrategy.OnPush, template: "<div [id]=\"label.toLocaleLowerCase()\" [ngClass]=\"labelPositionClass + ' ' + customClass\">\r\n  <label [for]=\"labelFor\" class=\"theme-body w-30 me-2\">{{ label }}</label>\r\n  <div class=\"d-flex flex-column\">\r\n    <select [name]=\"labelFor\" [id]=\"labelFor\" [formControl]=\"controlName\" class=\"w-100\">\r\n      @if (placeholder) {\r\n        <option value=\"null\" [disabled]=\"true\" [selected]=\"true\">{{ placeholder }}</option>\r\n      }\r\n      @for (option of optionList; track option.value) {\r\n        <option [value]=\"option.value\">{{ option.label }}</option>\r\n      }\r\n    </select>\r\n    <p class=\"theme-caption p-0\">{{ hint }}</p>\r\n  </div>\r\n</div>\r\n" }]
        }], ctorParameters: () => [{ type: i0.ChangeDetectorRef }], propDecorators: { customClass: [{
                type: Input
            }], controlName: [{
                type: Input
            }], hint: [{
                type: Input
            }], label: [{
                type: Input
            }], labelPosition: [{
                type: Input
            }], optionList: [{
                type: Input
            }], placeholder: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybWZpZWxkLXNlbGVjdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvYXBwL2NvbXBvbmVudHMvZm9ybWZpZWxkcy9mb3JtZmllbGQtc2VsZWN0L2Zvcm1maWVsZC1zZWxlY3QuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2FwcC9jb21wb25lbnRzL2Zvcm1maWVsZHMvZm9ybWZpZWxkLXNlbGVjdC9mb3JtZmllbGQtc2VsZWN0LmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBaUIsdUJBQXVCLEVBQXFCLFNBQVMsRUFBRSxLQUFLLEVBQVUsTUFBTSxlQUFlLENBQUM7Ozs7QUFZcEgsTUFBTSxPQUFPLHdCQUF3QjtJQVNmO0lBUlgsV0FBVyxHQUFXLEVBQUUsQ0FBQztJQUN6QixXQUFXLENBQXdCO0lBQ25DLElBQUksQ0FBVTtJQUNkLEtBQUssQ0FBVTtJQUNmLGFBQWEsR0FBOEIsUUFBUSxDQUFDO0lBQ3BELFVBQVUsQ0FBa0I7SUFDNUIsV0FBVyxHQUFXLEVBQUUsQ0FBQztJQUVsQyxZQUFvQixFQUFxQjtRQUFyQixPQUFFLEdBQUYsRUFBRSxDQUFtQjtJQUFHLENBQUM7SUFFN0MsUUFBUTtRQUNOLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7WUFDdEIsT0FBTyxDQUFDLElBQUksQ0FBQyxtREFBbUQsQ0FBQyxDQUFDO1FBQ3BFLENBQUM7UUFFRCxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO1lBQ2hCLE9BQU8sQ0FBQyxJQUFJLENBQUMsNkNBQTZDLENBQUMsQ0FBQztRQUM5RCxDQUFDO0lBQ0gsQ0FBQztJQUVELGVBQWU7UUFDYixJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQzFCLENBQUM7SUFFRCxJQUFXLFFBQVE7UUFDakIsT0FBTyxHQUFHLElBQUksQ0FBQyxLQUFLLFFBQVEsQ0FBQztJQUMvQixDQUFDO0lBRUQsSUFBVyxrQkFBa0I7UUFDM0IsT0FBTyxJQUFJLENBQUMsYUFBYSxLQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDLG9CQUFvQixDQUFDO0lBQ3BGLENBQUM7d0dBL0JVLHdCQUF3Qjs0RkFBeEIsd0JBQXdCLG9QQ1pyQyx3ckJBY0E7OzRGREZhLHdCQUF3QjtrQkFOcEMsU0FBUzsrQkFDRSxzQkFBc0IsbUJBR2YsdUJBQXVCLENBQUMsTUFBTTtzRkFHdEMsV0FBVztzQkFBbkIsS0FBSztnQkFDRyxXQUFXO3NCQUFuQixLQUFLO2dCQUNHLElBQUk7c0JBQVosS0FBSztnQkFDRyxLQUFLO3NCQUFiLEtBQUs7Z0JBQ0csYUFBYTtzQkFBckIsS0FBSztnQkFDRyxVQUFVO3NCQUFsQixLQUFLO2dCQUNHLFdBQVc7c0JBQW5CLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBZnRlclZpZXdJbml0LCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ2hhbmdlRGV0ZWN0b3JSZWYsIENvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBGb3JtQ29udHJvbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuXHJcbmltcG9ydCB7IEZvcm1maWVsZExhYmVsUG9zaXRpb1R5cGUgfSBmcm9tICcuLi90eXBlcy9mb3JtZmllbGQtbGFiZWwtcG9zaXRpb24udHlwZSc7XHJcbmltcG9ydCB7IFNlbGVjdE9wdGlvbiB9IGZyb20gJy4vbW9kZWxzL3NlbGVjdC1vcHRpb24ubW9kZWwnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhcHAtZm9ybWZpZWxkLXNlbGVjdCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2Zvcm1maWVsZC1zZWxlY3QuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsOiAnLi9mb3JtZmllbGQtc2VsZWN0LmNvbXBvbmVudC5zY3NzJyxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxufSlcclxuZXhwb3J0IGNsYXNzIEZvcm1maWVsZFNlbGVjdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCB7XHJcbiAgQElucHV0KCkgY3VzdG9tQ2xhc3M6IHN0cmluZyA9ICcnO1xyXG4gIEBJbnB1dCgpIGNvbnRyb2xOYW1lITogRm9ybUNvbnRyb2w8dW5rbm93bj47XHJcbiAgQElucHV0KCkgaGludCE6IHN0cmluZztcclxuICBASW5wdXQoKSBsYWJlbCE6IHN0cmluZztcclxuICBASW5wdXQoKSBsYWJlbFBvc2l0aW9uOiBGb3JtZmllbGRMYWJlbFBvc2l0aW9UeXBlID0gJ2JlZm9yZSc7XHJcbiAgQElucHV0KCkgb3B0aW9uTGlzdCE6IFNlbGVjdE9wdGlvbltdO1xyXG4gIEBJbnB1dCgpIHBsYWNlaG9sZGVyOiBzdHJpbmcgPSAnJztcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjZDogQ2hhbmdlRGV0ZWN0b3JSZWYpIHt9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgaWYgKCF0aGlzLmNvbnRyb2xOYW1lKSB7XHJcbiAgICAgIGNvbnNvbGUud2FybignRm9ybWZpZWxkU2VsZWN0Q29tcG9uZW50OiBjb250cm9sTmFtZSBpcyByZXF1aXJlZCcpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICghdGhpcy5sYWJlbCkge1xyXG4gICAgICBjb25zb2xlLndhcm4oJ0Zvcm1maWVsZFNlbGVjdENvbXBvbmVudDogbGFiZWwgaXMgcmVxdWlyZWQnKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMuY2QuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldCBsYWJlbEZvcigpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIGAke3RoaXMubGFiZWx9X2lucHV0YDtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXQgbGFiZWxQb3NpdGlvbkNsYXNzKCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gdGhpcy5sYWJlbFBvc2l0aW9uID09PSAnYmVmb3JlJyA/ICdkLWZsZXggZmxleC1yb3cnIDogJ2QtZmxleCBmbGV4LWNvbHVtbic7XHJcbiAgfVxyXG59XHJcbiIsIjxkaXYgW2lkXT1cImxhYmVsLnRvTG9jYWxlTG93ZXJDYXNlKClcIiBbbmdDbGFzc109XCJsYWJlbFBvc2l0aW9uQ2xhc3MgKyAnICcgKyBjdXN0b21DbGFzc1wiPlxyXG4gIDxsYWJlbCBbZm9yXT1cImxhYmVsRm9yXCIgY2xhc3M9XCJ0aGVtZS1ib2R5IHctMzAgbWUtMlwiPnt7IGxhYmVsIH19PC9sYWJlbD5cclxuICA8ZGl2IGNsYXNzPVwiZC1mbGV4IGZsZXgtY29sdW1uXCI+XHJcbiAgICA8c2VsZWN0IFtuYW1lXT1cImxhYmVsRm9yXCIgW2lkXT1cImxhYmVsRm9yXCIgW2Zvcm1Db250cm9sXT1cImNvbnRyb2xOYW1lXCIgY2xhc3M9XCJ3LTEwMFwiPlxyXG4gICAgICBAaWYgKHBsYWNlaG9sZGVyKSB7XHJcbiAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIm51bGxcIiBbZGlzYWJsZWRdPVwidHJ1ZVwiIFtzZWxlY3RlZF09XCJ0cnVlXCI+e3sgcGxhY2Vob2xkZXIgfX08L29wdGlvbj5cclxuICAgICAgfVxyXG4gICAgICBAZm9yIChvcHRpb24gb2Ygb3B0aW9uTGlzdDsgdHJhY2sgb3B0aW9uLnZhbHVlKSB7XHJcbiAgICAgICAgPG9wdGlvbiBbdmFsdWVdPVwib3B0aW9uLnZhbHVlXCI+e3sgb3B0aW9uLmxhYmVsIH19PC9vcHRpb24+XHJcbiAgICAgIH1cclxuICAgIDwvc2VsZWN0PlxyXG4gICAgPHAgY2xhc3M9XCJ0aGVtZS1jYXB0aW9uIHAtMFwiPnt7IGhpbnQgfX08L3A+XHJcbiAgPC9kaXY+XHJcbjwvZGl2PlxyXG4iXX0=