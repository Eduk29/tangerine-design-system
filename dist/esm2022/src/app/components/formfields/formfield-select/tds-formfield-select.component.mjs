import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/forms";
export class TDSFormfieldSelectComponent {
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
        return this.labelPosition === 'before'
            ? 'd-flex flex-row align-items-baseline justify-content-between'
            : 'd-flex flex-column';
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: TDSFormfieldSelectComponent, deps: [{ token: i0.ChangeDetectorRef }], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "17.3.12", type: TDSFormfieldSelectComponent, selector: "tds-formfield-select", inputs: { customClass: "customClass", controlName: "controlName", hint: "hint", label: "label", labelPosition: "labelPosition", optionList: "optionList", placeholder: "placeholder" }, ngImport: i0, template: "<div [id]=\"label.toLocaleLowerCase()\" [ngClass]=\"labelPositionClass + ' ' + customClass\">\r\n  <label [for]=\"labelFor\" class=\"theme-body w-auto me-2\">{{ label }}</label>\r\n  <div class=\"d-flex flex-column w-auto\">\r\n    <select [name]=\"labelFor\" [id]=\"labelFor\" [formControl]=\"controlName\" class=\"w-auto\">\r\n      @if (placeholder) {\r\n        <option value=\"null\" [disabled]=\"true\" [selected]=\"true\">{{ placeholder }}</option>\r\n      }\r\n      @for (option of optionList; track option.value) {\r\n        <option [value]=\"option.value\">{{ option.label }}</option>\r\n      }\r\n    </select>\r\n    <p class=\"theme-caption p-0\">{{ hint }}</p>\r\n  </div>\r\n</div>\r\n", styles: [""], dependencies: [{ kind: "directive", type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i2.NgSelectOption, selector: "option", inputs: ["ngValue", "value"] }, { kind: "directive", type: i2.ɵNgSelectMultipleOption, selector: "option", inputs: ["ngValue", "value"] }, { kind: "directive", type: i2.SelectControlValueAccessor, selector: "select:not([multiple])[formControlName],select:not([multiple])[formControl],select:not([multiple])[ngModel]", inputs: ["compareWith"] }, { kind: "directive", type: i2.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i2.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: TDSFormfieldSelectComponent, decorators: [{
            type: Component,
            args: [{ selector: 'tds-formfield-select', changeDetection: ChangeDetectionStrategy.OnPush, template: "<div [id]=\"label.toLocaleLowerCase()\" [ngClass]=\"labelPositionClass + ' ' + customClass\">\r\n  <label [for]=\"labelFor\" class=\"theme-body w-auto me-2\">{{ label }}</label>\r\n  <div class=\"d-flex flex-column w-auto\">\r\n    <select [name]=\"labelFor\" [id]=\"labelFor\" [formControl]=\"controlName\" class=\"w-auto\">\r\n      @if (placeholder) {\r\n        <option value=\"null\" [disabled]=\"true\" [selected]=\"true\">{{ placeholder }}</option>\r\n      }\r\n      @for (option of optionList; track option.value) {\r\n        <option [value]=\"option.value\">{{ option.label }}</option>\r\n      }\r\n    </select>\r\n    <p class=\"theme-caption p-0\">{{ hint }}</p>\r\n  </div>\r\n</div>\r\n" }]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGRzLWZvcm1maWVsZC1zZWxlY3QuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2FwcC9jb21wb25lbnRzL2Zvcm1maWVsZHMvZm9ybWZpZWxkLXNlbGVjdC90ZHMtZm9ybWZpZWxkLXNlbGVjdC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvYXBwL2NvbXBvbmVudHMvZm9ybWZpZWxkcy9mb3JtZmllbGQtc2VsZWN0L3Rkcy1mb3JtZmllbGQtc2VsZWN0LmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBaUIsdUJBQXVCLEVBQXFCLFNBQVMsRUFBRSxLQUFLLEVBQVUsTUFBTSxlQUFlLENBQUM7Ozs7QUFZcEgsTUFBTSxPQUFPLDJCQUEyQjtJQVNsQjtJQVJYLFdBQVcsR0FBVyxFQUFFLENBQUM7SUFDekIsV0FBVyxDQUF3QjtJQUNuQyxJQUFJLENBQVU7SUFDZCxLQUFLLENBQVU7SUFDZixhQUFhLEdBQWtDLFFBQVEsQ0FBQztJQUN4RCxVQUFVLENBQStCO0lBQ3pDLFdBQVcsR0FBVyxFQUFFLENBQUM7SUFFbEMsWUFBb0IsRUFBcUI7UUFBckIsT0FBRSxHQUFGLEVBQUUsQ0FBbUI7SUFBRyxDQUFDO0lBRTdDLFFBQVE7UUFDTixJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1lBQ3RCLE9BQU8sQ0FBQyxJQUFJLENBQUMsbURBQW1ELENBQUMsQ0FBQztRQUNwRSxDQUFDO1FBRUQsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUNoQixPQUFPLENBQUMsSUFBSSxDQUFDLDZDQUE2QyxDQUFDLENBQUM7UUFDOUQsQ0FBQztJQUNILENBQUM7SUFFRCxlQUFlO1FBQ2IsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUMxQixDQUFDO0lBRUQsSUFBVyxRQUFRO1FBQ2pCLE9BQU8sR0FBRyxJQUFJLENBQUMsS0FBSyxRQUFRLENBQUM7SUFDL0IsQ0FBQztJQUVELElBQVcsa0JBQWtCO1FBQzNCLE9BQU8sSUFBSSxDQUFDLGFBQWEsS0FBSyxRQUFRO1lBQ3BDLENBQUMsQ0FBQyw4REFBOEQ7WUFDaEUsQ0FBQyxDQUFDLG9CQUFvQixDQUFDO0lBQzNCLENBQUM7d0dBakNVLDJCQUEyQjs0RkFBM0IsMkJBQTJCLG9QQ1p4Qyxrc0JBY0E7OzRGREZhLDJCQUEyQjtrQkFOdkMsU0FBUzsrQkFDRSxzQkFBc0IsbUJBR2YsdUJBQXVCLENBQUMsTUFBTTtzRkFHdEMsV0FBVztzQkFBbkIsS0FBSztnQkFDRyxXQUFXO3NCQUFuQixLQUFLO2dCQUNHLElBQUk7c0JBQVosS0FBSztnQkFDRyxLQUFLO3NCQUFiLEtBQUs7Z0JBQ0csYUFBYTtzQkFBckIsS0FBSztnQkFDRyxVQUFVO3NCQUFsQixLQUFLO2dCQUNHLFdBQVc7c0JBQW5CLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBZnRlclZpZXdJbml0LCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ2hhbmdlRGV0ZWN0b3JSZWYsIENvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBGb3JtQ29udHJvbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuXHJcbmltcG9ydCB7IFREU0Zvcm1maWVsZExhYmVsUG9zaXRpb25UeXBlIH0gZnJvbSAnLi4vdHlwZXMvdGRzLWZvcm1maWVsZC1sYWJlbC1wb3NpdGlvbi50eXBlJztcclxuaW1wb3J0IHsgVERTRm9ybWZpZWxkU2VsZWN0T3B0aW9ucyB9IGZyb20gJy4vbW9kZWxzL3Rkcy1mb3JtZmllbGQtc2VsZWN0LW9wdGlvbi5tb2RlbCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ3Rkcy1mb3JtZmllbGQtc2VsZWN0JyxcclxuICB0ZW1wbGF0ZVVybDogJy4vdGRzLWZvcm1maWVsZC1zZWxlY3QuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsOiAnLi90ZHMtZm9ybWZpZWxkLXNlbGVjdC5jb21wb25lbnQuc2NzcycsXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBURFNGb3JtZmllbGRTZWxlY3RDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQge1xyXG4gIEBJbnB1dCgpIGN1c3RvbUNsYXNzOiBzdHJpbmcgPSAnJztcclxuICBASW5wdXQoKSBjb250cm9sTmFtZSE6IEZvcm1Db250cm9sPHVua25vd24+O1xyXG4gIEBJbnB1dCgpIGhpbnQhOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgbGFiZWwhOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgbGFiZWxQb3NpdGlvbjogVERTRm9ybWZpZWxkTGFiZWxQb3NpdGlvblR5cGUgPSAnYmVmb3JlJztcclxuICBASW5wdXQoKSBvcHRpb25MaXN0ITogVERTRm9ybWZpZWxkU2VsZWN0T3B0aW9uc1tdO1xyXG4gIEBJbnB1dCgpIHBsYWNlaG9sZGVyOiBzdHJpbmcgPSAnJztcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjZDogQ2hhbmdlRGV0ZWN0b3JSZWYpIHt9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgaWYgKCF0aGlzLmNvbnRyb2xOYW1lKSB7XHJcbiAgICAgIGNvbnNvbGUud2FybignRm9ybWZpZWxkU2VsZWN0Q29tcG9uZW50OiBjb250cm9sTmFtZSBpcyByZXF1aXJlZCcpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICghdGhpcy5sYWJlbCkge1xyXG4gICAgICBjb25zb2xlLndhcm4oJ0Zvcm1maWVsZFNlbGVjdENvbXBvbmVudDogbGFiZWwgaXMgcmVxdWlyZWQnKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMuY2QuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldCBsYWJlbEZvcigpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIGAke3RoaXMubGFiZWx9X2lucHV0YDtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXQgbGFiZWxQb3NpdGlvbkNsYXNzKCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gdGhpcy5sYWJlbFBvc2l0aW9uID09PSAnYmVmb3JlJ1xyXG4gICAgICA/ICdkLWZsZXggZmxleC1yb3cgYWxpZ24taXRlbXMtYmFzZWxpbmUganVzdGlmeS1jb250ZW50LWJldHdlZW4nXHJcbiAgICAgIDogJ2QtZmxleCBmbGV4LWNvbHVtbic7XHJcbiAgfVxyXG59XHJcbiIsIjxkaXYgW2lkXT1cImxhYmVsLnRvTG9jYWxlTG93ZXJDYXNlKClcIiBbbmdDbGFzc109XCJsYWJlbFBvc2l0aW9uQ2xhc3MgKyAnICcgKyBjdXN0b21DbGFzc1wiPlxyXG4gIDxsYWJlbCBbZm9yXT1cImxhYmVsRm9yXCIgY2xhc3M9XCJ0aGVtZS1ib2R5IHctYXV0byBtZS0yXCI+e3sgbGFiZWwgfX08L2xhYmVsPlxyXG4gIDxkaXYgY2xhc3M9XCJkLWZsZXggZmxleC1jb2x1bW4gdy1hdXRvXCI+XHJcbiAgICA8c2VsZWN0IFtuYW1lXT1cImxhYmVsRm9yXCIgW2lkXT1cImxhYmVsRm9yXCIgW2Zvcm1Db250cm9sXT1cImNvbnRyb2xOYW1lXCIgY2xhc3M9XCJ3LWF1dG9cIj5cclxuICAgICAgQGlmIChwbGFjZWhvbGRlcikge1xyXG4gICAgICAgIDxvcHRpb24gdmFsdWU9XCJudWxsXCIgW2Rpc2FibGVkXT1cInRydWVcIiBbc2VsZWN0ZWRdPVwidHJ1ZVwiPnt7IHBsYWNlaG9sZGVyIH19PC9vcHRpb24+XHJcbiAgICAgIH1cclxuICAgICAgQGZvciAob3B0aW9uIG9mIG9wdGlvbkxpc3Q7IHRyYWNrIG9wdGlvbi52YWx1ZSkge1xyXG4gICAgICAgIDxvcHRpb24gW3ZhbHVlXT1cIm9wdGlvbi52YWx1ZVwiPnt7IG9wdGlvbi5sYWJlbCB9fTwvb3B0aW9uPlxyXG4gICAgICB9XHJcbiAgICA8L3NlbGVjdD5cclxuICAgIDxwIGNsYXNzPVwidGhlbWUtY2FwdGlvbiBwLTBcIj57eyBoaW50IH19PC9wPlxyXG4gIDwvZGl2PlxyXG48L2Rpdj5cclxuIl19