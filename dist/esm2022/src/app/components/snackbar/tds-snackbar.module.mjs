import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TDSCardModule } from '../card/tds-card.module';
import { TDSSnackbarComponent } from './tds-snackbar.component';
import * as i0 from "@angular/core";
export class SnackbarModule {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: SnackbarModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "17.3.12", ngImport: i0, type: SnackbarModule, declarations: [TDSSnackbarComponent], imports: [CommonModule, TDSCardModule], exports: [TDSSnackbarComponent] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: SnackbarModule, imports: [CommonModule, TDSCardModule] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: SnackbarModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [TDSSnackbarComponent],
                    imports: [CommonModule, TDSCardModule],
                    exports: [TDSSnackbarComponent],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGRzLXNuYWNrYmFyLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hcHAvY29tcG9uZW50cy9zbmFja2Jhci90ZHMtc25hY2tiYXIubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXpDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUN4RCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQzs7QUFPaEUsTUFBTSxPQUFPLGNBQWM7d0dBQWQsY0FBYzt5R0FBZCxjQUFjLGlCQUpWLG9CQUFvQixhQUN6QixZQUFZLEVBQUUsYUFBYSxhQUMzQixvQkFBb0I7eUdBRW5CLGNBQWMsWUFIZixZQUFZLEVBQUUsYUFBYTs7NEZBRzFCLGNBQWM7a0JBTDFCLFFBQVE7bUJBQUM7b0JBQ1IsWUFBWSxFQUFFLENBQUMsb0JBQW9CLENBQUM7b0JBQ3BDLE9BQU8sRUFBRSxDQUFDLFlBQVksRUFBRSxhQUFhLENBQUM7b0JBQ3RDLE9BQU8sRUFBRSxDQUFDLG9CQUFvQixDQUFDO2lCQUNoQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBURFNDYXJkTW9kdWxlIH0gZnJvbSAnLi4vY2FyZC90ZHMtY2FyZC5tb2R1bGUnO1xyXG5pbXBvcnQgeyBURFNTbmFja2JhckNvbXBvbmVudCB9IGZyb20gJy4vdGRzLXNuYWNrYmFyLmNvbXBvbmVudCc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGRlY2xhcmF0aW9uczogW1REU1NuYWNrYmFyQ29tcG9uZW50XSxcclxuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBURFNDYXJkTW9kdWxlXSxcclxuICBleHBvcnRzOiBbVERTU25hY2tiYXJDb21wb25lbnRdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgU25hY2tiYXJNb2R1bGUge31cclxuIl19