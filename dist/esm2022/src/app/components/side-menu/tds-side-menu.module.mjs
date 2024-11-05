import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TDSButtonModule } from '../button/tds-button.module';
import { TDSSideMenuComponent } from './tds-side-menu.component';
import * as i0 from "@angular/core";
export class SideMenuModule {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: SideMenuModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "17.3.12", ngImport: i0, type: SideMenuModule, declarations: [TDSSideMenuComponent], imports: [CommonModule, TDSButtonModule, RouterModule], exports: [TDSSideMenuComponent] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: SideMenuModule, imports: [CommonModule, TDSButtonModule, RouterModule] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: SideMenuModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [TDSSideMenuComponent],
                    imports: [CommonModule, TDSButtonModule, RouterModule],
                    exports: [TDSSideMenuComponent],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGRzLXNpZGUtbWVudS5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvYXBwL2NvbXBvbmVudHMvc2lkZS1tZW51L3Rkcy1zaWRlLW1lbnUubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUvQyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDOUQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7O0FBT2pFLE1BQU0sT0FBTyxjQUFjO3dHQUFkLGNBQWM7eUdBQWQsY0FBYyxpQkFKVixvQkFBb0IsYUFDekIsWUFBWSxFQUFFLGVBQWUsRUFBRSxZQUFZLGFBQzNDLG9CQUFvQjt5R0FFbkIsY0FBYyxZQUhmLFlBQVksRUFBRSxlQUFlLEVBQUUsWUFBWTs7NEZBRzFDLGNBQWM7a0JBTDFCLFFBQVE7bUJBQUM7b0JBQ1IsWUFBWSxFQUFFLENBQUMsb0JBQW9CLENBQUM7b0JBQ3BDLE9BQU8sRUFBRSxDQUFDLFlBQVksRUFBRSxlQUFlLEVBQUUsWUFBWSxDQUFDO29CQUN0RCxPQUFPLEVBQUUsQ0FBQyxvQkFBb0IsQ0FBQztpQkFDaEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5cclxuaW1wb3J0IHsgVERTQnV0dG9uTW9kdWxlIH0gZnJvbSAnLi4vYnV0dG9uL3Rkcy1idXR0b24ubW9kdWxlJztcclxuaW1wb3J0IHsgVERTU2lkZU1lbnVDb21wb25lbnQgfSBmcm9tICcuL3Rkcy1zaWRlLW1lbnUuY29tcG9uZW50JztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgZGVjbGFyYXRpb25zOiBbVERTU2lkZU1lbnVDb21wb25lbnRdLFxyXG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIFREU0J1dHRvbk1vZHVsZSwgUm91dGVyTW9kdWxlXSxcclxuICBleHBvcnRzOiBbVERTU2lkZU1lbnVDb21wb25lbnRdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgU2lkZU1lbnVNb2R1bGUge31cclxuIl19