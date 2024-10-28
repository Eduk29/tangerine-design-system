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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybWZpZWxkLXNlbGVjdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvYXBwL2NvbXBvbmVudHMvZm9ybWZpZWxkcy9mb3JtZmllbGQtc2VsZWN0L2Zvcm1maWVsZC1zZWxlY3QuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2FwcC9jb21wb25lbnRzL2Zvcm1maWVsZHMvZm9ybWZpZWxkLXNlbGVjdC9mb3JtZmllbGQtc2VsZWN0LmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBaUIsdUJBQXVCLEVBQXFCLFNBQVMsRUFBRSxLQUFLLEVBQVUsTUFBTSxlQUFlLENBQUM7Ozs7QUFZcEgsTUFBTSxPQUFPLHdCQUF3QjtJQVNmO0lBUlgsV0FBVyxHQUFXLEVBQUUsQ0FBQztJQUN6QixXQUFXLENBQXdCO0lBQ25DLElBQUksQ0FBVTtJQUNkLEtBQUssQ0FBVTtJQUNmLGFBQWEsR0FBOEIsUUFBUSxDQUFDO0lBQ3BELFVBQVUsQ0FBa0I7SUFDNUIsV0FBVyxHQUFXLEVBQUUsQ0FBQztJQUVsQyxZQUFvQixFQUFxQjtRQUFyQixPQUFFLEdBQUYsRUFBRSxDQUFtQjtJQUFHLENBQUM7SUFFN0MsUUFBUTtRQUNOLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7WUFDdEIsT0FBTyxDQUFDLElBQUksQ0FBQyxtREFBbUQsQ0FBQyxDQUFDO1FBQ3BFLENBQUM7UUFFRCxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO1lBQ2hCLE9BQU8sQ0FBQyxJQUFJLENBQUMsNkNBQTZDLENBQUMsQ0FBQztRQUM5RCxDQUFDO0lBQ0gsQ0FBQztJQUVELGVBQWU7UUFDYixJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQzFCLENBQUM7SUFFRCxJQUFXLFFBQVE7UUFDakIsT0FBTyxHQUFHLElBQUksQ0FBQyxLQUFLLFFBQVEsQ0FBQztJQUMvQixDQUFDO0lBRUQsSUFBVyxrQkFBa0I7UUFDM0IsT0FBTyxJQUFJLENBQUMsYUFBYSxLQUFLLFFBQVE7WUFDcEMsQ0FBQyxDQUFDLDhEQUE4RDtZQUNoRSxDQUFDLENBQUMsb0JBQW9CLENBQUM7SUFDM0IsQ0FBQzt3R0FqQ1Usd0JBQXdCOzRGQUF4Qix3QkFBd0Isb1BDWnJDLGtzQkFjQTs7NEZERmEsd0JBQXdCO2tCQU5wQyxTQUFTOytCQUNFLHNCQUFzQixtQkFHZix1QkFBdUIsQ0FBQyxNQUFNO3NGQUd0QyxXQUFXO3NCQUFuQixLQUFLO2dCQUNHLFdBQVc7c0JBQW5CLEtBQUs7Z0JBQ0csSUFBSTtzQkFBWixLQUFLO2dCQUNHLEtBQUs7c0JBQWIsS0FBSztnQkFDRyxhQUFhO3NCQUFyQixLQUFLO2dCQUNHLFVBQVU7c0JBQWxCLEtBQUs7Z0JBQ0csV0FBVztzQkFBbkIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFmdGVyVmlld0luaXQsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDaGFuZ2VEZXRlY3RvclJlZiwgQ29tcG9uZW50LCBJbnB1dCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEZvcm1Db250cm9sIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5cclxuaW1wb3J0IHsgRm9ybWZpZWxkTGFiZWxQb3NpdGlvVHlwZSB9IGZyb20gJy4uL3R5cGVzL2Zvcm1maWVsZC1sYWJlbC1wb3NpdGlvbi50eXBlJztcclxuaW1wb3J0IHsgU2VsZWN0T3B0aW9uIH0gZnJvbSAnLi9tb2RlbHMvc2VsZWN0LW9wdGlvbi5tb2RlbCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FwcC1mb3JtZmllbGQtc2VsZWN0JyxcclxuICB0ZW1wbGF0ZVVybDogJy4vZm9ybWZpZWxkLXNlbGVjdC5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmw6ICcuL2Zvcm1maWVsZC1zZWxlY3QuY29tcG9uZW50LnNjc3MnLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgRm9ybWZpZWxkU2VsZWN0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdJbml0IHtcclxuICBASW5wdXQoKSBjdXN0b21DbGFzczogc3RyaW5nID0gJyc7XHJcbiAgQElucHV0KCkgY29udHJvbE5hbWUhOiBGb3JtQ29udHJvbDx1bmtub3duPjtcclxuICBASW5wdXQoKSBoaW50ITogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIGxhYmVsITogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIGxhYmVsUG9zaXRpb246IEZvcm1maWVsZExhYmVsUG9zaXRpb1R5cGUgPSAnYmVmb3JlJztcclxuICBASW5wdXQoKSBvcHRpb25MaXN0ITogU2VsZWN0T3B0aW9uW107XHJcbiAgQElucHV0KCkgcGxhY2Vob2xkZXI6IHN0cmluZyA9ICcnO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNkOiBDaGFuZ2VEZXRlY3RvclJlZikge31cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICBpZiAoIXRoaXMuY29udHJvbE5hbWUpIHtcclxuICAgICAgY29uc29sZS53YXJuKCdGb3JtZmllbGRTZWxlY3RDb21wb25lbnQ6IGNvbnRyb2xOYW1lIGlzIHJlcXVpcmVkJyk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCF0aGlzLmxhYmVsKSB7XHJcbiAgICAgIGNvbnNvbGUud2FybignRm9ybWZpZWxkU2VsZWN0Q29tcG9uZW50OiBsYWJlbCBpcyByZXF1aXJlZCcpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5jZC5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0IGxhYmVsRm9yKCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gYCR7dGhpcy5sYWJlbH1faW5wdXRgO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldCBsYWJlbFBvc2l0aW9uQ2xhc3MoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiB0aGlzLmxhYmVsUG9zaXRpb24gPT09ICdiZWZvcmUnXHJcbiAgICAgID8gJ2QtZmxleCBmbGV4LXJvdyBhbGlnbi1pdGVtcy1iYXNlbGluZSBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbidcclxuICAgICAgOiAnZC1mbGV4IGZsZXgtY29sdW1uJztcclxuICB9XHJcbn1cclxuIiwiPGRpdiBbaWRdPVwibGFiZWwudG9Mb2NhbGVMb3dlckNhc2UoKVwiIFtuZ0NsYXNzXT1cImxhYmVsUG9zaXRpb25DbGFzcyArICcgJyArIGN1c3RvbUNsYXNzXCI+XHJcbiAgPGxhYmVsIFtmb3JdPVwibGFiZWxGb3JcIiBjbGFzcz1cInRoZW1lLWJvZHkgdy1hdXRvIG1lLTJcIj57eyBsYWJlbCB9fTwvbGFiZWw+XHJcbiAgPGRpdiBjbGFzcz1cImQtZmxleCBmbGV4LWNvbHVtbiB3LWF1dG9cIj5cclxuICAgIDxzZWxlY3QgW25hbWVdPVwibGFiZWxGb3JcIiBbaWRdPVwibGFiZWxGb3JcIiBbZm9ybUNvbnRyb2xdPVwiY29udHJvbE5hbWVcIiBjbGFzcz1cInctYXV0b1wiPlxyXG4gICAgICBAaWYgKHBsYWNlaG9sZGVyKSB7XHJcbiAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIm51bGxcIiBbZGlzYWJsZWRdPVwidHJ1ZVwiIFtzZWxlY3RlZF09XCJ0cnVlXCI+e3sgcGxhY2Vob2xkZXIgfX08L29wdGlvbj5cclxuICAgICAgfVxyXG4gICAgICBAZm9yIChvcHRpb24gb2Ygb3B0aW9uTGlzdDsgdHJhY2sgb3B0aW9uLnZhbHVlKSB7XHJcbiAgICAgICAgPG9wdGlvbiBbdmFsdWVdPVwib3B0aW9uLnZhbHVlXCI+e3sgb3B0aW9uLmxhYmVsIH19PC9vcHRpb24+XHJcbiAgICAgIH1cclxuICAgIDwvc2VsZWN0PlxyXG4gICAgPHAgY2xhc3M9XCJ0aGVtZS1jYXB0aW9uIHAtMFwiPnt7IGhpbnQgfX08L3A+XHJcbiAgPC9kaXY+XHJcbjwvZGl2PlxyXG4iXX0=