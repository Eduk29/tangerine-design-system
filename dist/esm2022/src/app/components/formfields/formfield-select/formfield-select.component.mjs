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
        return this.labelPosition === 'before'
            ? 'd-flex flex-row align-items-baseline justify-content-between'
            : 'd-flex flex-column';
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: FormfieldSelectComponent, deps: [{ token: i0.ChangeDetectorRef }], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "17.3.12", type: FormfieldSelectComponent, selector: "app-formfield-select", inputs: { customClass: "customClass", controlName: "controlName", hint: "hint", label: "label", labelPosition: "labelPosition", optionList: "optionList", placeholder: "placeholder" }, ngImport: i0, template: "<div [id]=\"label.toLocaleLowerCase()\" [ngClass]=\"labelPositionClass + ' ' + customClass\">\r\n  <label [for]=\"labelFor\" class=\"theme-body w-auto me-2\">{{ label }}</label>\r\n  <div class=\"d-flex flex-column w-auto\">\r\n    <select [name]=\"labelFor\" [id]=\"labelFor\" [formControl]=\"controlName\" class=\"w-auto\">\r\n      @if (placeholder) {\r\n        <option value=\"null\" [disabled]=\"true\" [selected]=\"true\">{{ placeholder }}</option>\r\n      }\r\n      @for (option of optionList; track option.value) {\r\n        <option [value]=\"option.value\">{{ option.label }}</option>\r\n      }\r\n    </select>\r\n    <p class=\"theme-caption p-0\">{{ hint }}</p>\r\n  </div>\r\n</div>\r\n", styles: [""], dependencies: [{ kind: "directive", type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i2.NgSelectOption, selector: "option", inputs: ["ngValue", "value"] }, { kind: "directive", type: i2.ɵNgSelectMultipleOption, selector: "option", inputs: ["ngValue", "value"] }, { kind: "directive", type: i2.SelectControlValueAccessor, selector: "select:not([multiple])[formControlName],select:not([multiple])[formControl],select:not([multiple])[ngModel]", inputs: ["compareWith"] }, { kind: "directive", type: i2.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i2.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: FormfieldSelectComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-formfield-select', changeDetection: ChangeDetectionStrategy.OnPush, template: "<div [id]=\"label.toLocaleLowerCase()\" [ngClass]=\"labelPositionClass + ' ' + customClass\">\r\n  <label [for]=\"labelFor\" class=\"theme-body w-auto me-2\">{{ label }}</label>\r\n  <div class=\"d-flex flex-column w-auto\">\r\n    <select [name]=\"labelFor\" [id]=\"labelFor\" [formControl]=\"controlName\" class=\"w-auto\">\r\n      @if (placeholder) {\r\n        <option value=\"null\" [disabled]=\"true\" [selected]=\"true\">{{ placeholder }}</option>\r\n      }\r\n      @for (option of optionList; track option.value) {\r\n        <option [value]=\"option.value\">{{ option.label }}</option>\r\n      }\r\n    </select>\r\n    <p class=\"theme-caption p-0\">{{ hint }}</p>\r\n  </div>\r\n</div>\r\n" }]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybWZpZWxkLXNlbGVjdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvYXBwL2NvbXBvbmVudHMvZm9ybWZpZWxkcy9mb3JtZmllbGQtc2VsZWN0L2Zvcm1maWVsZC1zZWxlY3QuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2FwcC9jb21wb25lbnRzL2Zvcm1maWVsZHMvZm9ybWZpZWxkLXNlbGVjdC9mb3JtZmllbGQtc2VsZWN0LmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBaUIsdUJBQXVCLEVBQXFCLFNBQVMsRUFBRSxLQUFLLEVBQVUsTUFBTSxlQUFlLENBQUM7Ozs7QUFZcEgsTUFBTSxPQUFPLHdCQUF3QjtJQVNmO0lBUlgsV0FBVyxHQUFXLEVBQUUsQ0FBQztJQUN6QixXQUFXLENBQXdCO0lBQ25DLElBQUksQ0FBVTtJQUNkLEtBQUssQ0FBVTtJQUNmLGFBQWEsR0FBK0IsUUFBUSxDQUFDO0lBQ3JELFVBQVUsQ0FBa0I7SUFDNUIsV0FBVyxHQUFXLEVBQUUsQ0FBQztJQUVsQyxZQUFvQixFQUFxQjtRQUFyQixPQUFFLEdBQUYsRUFBRSxDQUFtQjtJQUFHLENBQUM7SUFFN0MsUUFBUTtRQUNOLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7WUFDdEIsT0FBTyxDQUFDLElBQUksQ0FBQyxtREFBbUQsQ0FBQyxDQUFDO1FBQ3BFLENBQUM7UUFFRCxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO1lBQ2hCLE9BQU8sQ0FBQyxJQUFJLENBQUMsNkNBQTZDLENBQUMsQ0FBQztRQUM5RCxDQUFDO0lBQ0gsQ0FBQztJQUVELGVBQWU7UUFDYixJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQzFCLENBQUM7SUFFRCxJQUFXLFFBQVE7UUFDakIsT0FBTyxHQUFHLElBQUksQ0FBQyxLQUFLLFFBQVEsQ0FBQztJQUMvQixDQUFDO0lBRUQsSUFBVyxrQkFBa0I7UUFDM0IsT0FBTyxJQUFJLENBQUMsYUFBYSxLQUFLLFFBQVE7WUFDcEMsQ0FBQyxDQUFDLDhEQUE4RDtZQUNoRSxDQUFDLENBQUMsb0JBQW9CLENBQUM7SUFDM0IsQ0FBQzt3R0FqQ1Usd0JBQXdCOzRGQUF4Qix3QkFBd0Isb1BDWnJDLGtzQkFjQTs7NEZERmEsd0JBQXdCO2tCQU5wQyxTQUFTOytCQUNFLHNCQUFzQixtQkFHZix1QkFBdUIsQ0FBQyxNQUFNO3NGQUd0QyxXQUFXO3NCQUFuQixLQUFLO2dCQUNHLFdBQVc7c0JBQW5CLEtBQUs7Z0JBQ0csSUFBSTtzQkFBWixLQUFLO2dCQUNHLEtBQUs7c0JBQWIsS0FBSztnQkFDRyxhQUFhO3NCQUFyQixLQUFLO2dCQUNHLFVBQVU7c0JBQWxCLEtBQUs7Z0JBQ0csV0FBVztzQkFBbkIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFmdGVyVmlld0luaXQsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDaGFuZ2VEZXRlY3RvclJlZiwgQ29tcG9uZW50LCBJbnB1dCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEZvcm1Db250cm9sIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5cclxuaW1wb3J0IHsgRm9ybWZpZWxkTGFiZWxQb3NpdGlvblR5cGUgfSBmcm9tICcuLi90eXBlcy9mb3JtZmllbGQtbGFiZWwtcG9zaXRpb24udHlwZSc7XHJcbmltcG9ydCB7IFNlbGVjdE9wdGlvbiB9IGZyb20gJy4vbW9kZWxzL3NlbGVjdC1vcHRpb24ubW9kZWwnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhcHAtZm9ybWZpZWxkLXNlbGVjdCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2Zvcm1maWVsZC1zZWxlY3QuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsOiAnLi9mb3JtZmllbGQtc2VsZWN0LmNvbXBvbmVudC5zY3NzJyxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxufSlcclxuZXhwb3J0IGNsYXNzIEZvcm1maWVsZFNlbGVjdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCB7XHJcbiAgQElucHV0KCkgY3VzdG9tQ2xhc3M6IHN0cmluZyA9ICcnO1xyXG4gIEBJbnB1dCgpIGNvbnRyb2xOYW1lITogRm9ybUNvbnRyb2w8dW5rbm93bj47XHJcbiAgQElucHV0KCkgaGludCE6IHN0cmluZztcclxuICBASW5wdXQoKSBsYWJlbCE6IHN0cmluZztcclxuICBASW5wdXQoKSBsYWJlbFBvc2l0aW9uOiBGb3JtZmllbGRMYWJlbFBvc2l0aW9uVHlwZSA9ICdiZWZvcmUnO1xyXG4gIEBJbnB1dCgpIG9wdGlvbkxpc3QhOiBTZWxlY3RPcHRpb25bXTtcclxuICBASW5wdXQoKSBwbGFjZWhvbGRlcjogc3RyaW5nID0gJyc7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgY2Q6IENoYW5nZURldGVjdG9yUmVmKSB7fVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIGlmICghdGhpcy5jb250cm9sTmFtZSkge1xyXG4gICAgICBjb25zb2xlLndhcm4oJ0Zvcm1maWVsZFNlbGVjdENvbXBvbmVudDogY29udHJvbE5hbWUgaXMgcmVxdWlyZWQnKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoIXRoaXMubGFiZWwpIHtcclxuICAgICAgY29uc29sZS53YXJuKCdGb3JtZmllbGRTZWxlY3RDb21wb25lbnQ6IGxhYmVsIGlzIHJlcXVpcmVkJyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLmNkLmRldGVjdENoYW5nZXMoKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXQgbGFiZWxGb3IoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiBgJHt0aGlzLmxhYmVsfV9pbnB1dGA7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0IGxhYmVsUG9zaXRpb25DbGFzcygpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHRoaXMubGFiZWxQb3NpdGlvbiA9PT0gJ2JlZm9yZSdcclxuICAgICAgPyAnZC1mbGV4IGZsZXgtcm93IGFsaWduLWl0ZW1zLWJhc2VsaW5lIGp1c3RpZnktY29udGVudC1iZXR3ZWVuJ1xyXG4gICAgICA6ICdkLWZsZXggZmxleC1jb2x1bW4nO1xyXG4gIH1cclxufVxyXG4iLCI8ZGl2IFtpZF09XCJsYWJlbC50b0xvY2FsZUxvd2VyQ2FzZSgpXCIgW25nQ2xhc3NdPVwibGFiZWxQb3NpdGlvbkNsYXNzICsgJyAnICsgY3VzdG9tQ2xhc3NcIj5cclxuICA8bGFiZWwgW2Zvcl09XCJsYWJlbEZvclwiIGNsYXNzPVwidGhlbWUtYm9keSB3LWF1dG8gbWUtMlwiPnt7IGxhYmVsIH19PC9sYWJlbD5cclxuICA8ZGl2IGNsYXNzPVwiZC1mbGV4IGZsZXgtY29sdW1uIHctYXV0b1wiPlxyXG4gICAgPHNlbGVjdCBbbmFtZV09XCJsYWJlbEZvclwiIFtpZF09XCJsYWJlbEZvclwiIFtmb3JtQ29udHJvbF09XCJjb250cm9sTmFtZVwiIGNsYXNzPVwidy1hdXRvXCI+XHJcbiAgICAgIEBpZiAocGxhY2Vob2xkZXIpIHtcclxuICAgICAgICA8b3B0aW9uIHZhbHVlPVwibnVsbFwiIFtkaXNhYmxlZF09XCJ0cnVlXCIgW3NlbGVjdGVkXT1cInRydWVcIj57eyBwbGFjZWhvbGRlciB9fTwvb3B0aW9uPlxyXG4gICAgICB9XHJcbiAgICAgIEBmb3IgKG9wdGlvbiBvZiBvcHRpb25MaXN0OyB0cmFjayBvcHRpb24udmFsdWUpIHtcclxuICAgICAgICA8b3B0aW9uIFt2YWx1ZV09XCJvcHRpb24udmFsdWVcIj57eyBvcHRpb24ubGFiZWwgfX08L29wdGlvbj5cclxuICAgICAgfVxyXG4gICAgPC9zZWxlY3Q+XHJcbiAgICA8cCBjbGFzcz1cInRoZW1lLWNhcHRpb24gcC0wXCI+e3sgaGludCB9fTwvcD5cclxuICA8L2Rpdj5cclxuPC9kaXY+XHJcbiJdfQ==