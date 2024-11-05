import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TDSIconModule } from '../icon/tds-icon.module';
import { TDSBasicButtonDirective } from './directives/tds-basic-button.directive';
import { TDSFabButtonDirective } from './directives/tds-fab-button.directive';
import { TDSFlatButtonDirective } from './directives/tds-flat-button.directive';
import { TDSOutlineButtonDirective } from './directives/tds-outline-button.directive';
import { TDSButtonComponent } from './tds-button.component';
import * as i0 from "@angular/core";
export class TDSButtonModule {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: TDSButtonModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "17.3.12", ngImport: i0, type: TDSButtonModule, declarations: [TDSBasicButtonDirective,
            TDSButtonComponent,
            TDSFabButtonDirective,
            TDSFlatButtonDirective,
            TDSOutlineButtonDirective], imports: [CommonModule, TDSIconModule], exports: [TDSButtonComponent,
            TDSBasicButtonDirective,
            TDSFabButtonDirective,
            TDSFlatButtonDirective,
            TDSOutlineButtonDirective] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: TDSButtonModule, imports: [CommonModule, TDSIconModule] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: TDSButtonModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        TDSBasicButtonDirective,
                        TDSButtonComponent,
                        TDSFabButtonDirective,
                        TDSFlatButtonDirective,
                        TDSOutlineButtonDirective,
                    ],
                    imports: [CommonModule, TDSIconModule],
                    exports: [
                        TDSButtonComponent,
                        TDSBasicButtonDirective,
                        TDSFabButtonDirective,
                        TDSFlatButtonDirective,
                        TDSOutlineButtonDirective,
                    ],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGRzLWJ1dHRvbi5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvYXBwL2NvbXBvbmVudHMvYnV0dG9uL3Rkcy1idXR0b24ubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXpDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUN4RCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQUNsRixPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUM5RSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUNoRixPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUN0RixPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQzs7QUFtQjVELE1BQU0sT0FBTyxlQUFlO3dHQUFmLGVBQWU7eUdBQWYsZUFBZSxpQkFmeEIsdUJBQXVCO1lBQ3ZCLGtCQUFrQjtZQUNsQixxQkFBcUI7WUFDckIsc0JBQXNCO1lBQ3RCLHlCQUF5QixhQUVqQixZQUFZLEVBQUUsYUFBYSxhQUVuQyxrQkFBa0I7WUFDbEIsdUJBQXVCO1lBQ3ZCLHFCQUFxQjtZQUNyQixzQkFBc0I7WUFDdEIseUJBQXlCO3lHQUdoQixlQUFlLFlBVGhCLFlBQVksRUFBRSxhQUFhOzs0RkFTMUIsZUFBZTtrQkFqQjNCLFFBQVE7bUJBQUM7b0JBQ1IsWUFBWSxFQUFFO3dCQUNaLHVCQUF1Qjt3QkFDdkIsa0JBQWtCO3dCQUNsQixxQkFBcUI7d0JBQ3JCLHNCQUFzQjt3QkFDdEIseUJBQXlCO3FCQUMxQjtvQkFDRCxPQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUUsYUFBYSxDQUFDO29CQUN0QyxPQUFPLEVBQUU7d0JBQ1Asa0JBQWtCO3dCQUNsQix1QkFBdUI7d0JBQ3ZCLHFCQUFxQjt3QkFDckIsc0JBQXNCO3dCQUN0Qix5QkFBeUI7cUJBQzFCO2lCQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IFREU0ljb25Nb2R1bGUgfSBmcm9tICcuLi9pY29uL3Rkcy1pY29uLm1vZHVsZSc7XHJcbmltcG9ydCB7IFREU0Jhc2ljQnV0dG9uRGlyZWN0aXZlIH0gZnJvbSAnLi9kaXJlY3RpdmVzL3Rkcy1iYXNpYy1idXR0b24uZGlyZWN0aXZlJztcclxuaW1wb3J0IHsgVERTRmFiQnV0dG9uRGlyZWN0aXZlIH0gZnJvbSAnLi9kaXJlY3RpdmVzL3Rkcy1mYWItYnV0dG9uLmRpcmVjdGl2ZSc7XHJcbmltcG9ydCB7IFREU0ZsYXRCdXR0b25EaXJlY3RpdmUgfSBmcm9tICcuL2RpcmVjdGl2ZXMvdGRzLWZsYXQtYnV0dG9uLmRpcmVjdGl2ZSc7XHJcbmltcG9ydCB7IFREU091dGxpbmVCdXR0b25EaXJlY3RpdmUgfSBmcm9tICcuL2RpcmVjdGl2ZXMvdGRzLW91dGxpbmUtYnV0dG9uLmRpcmVjdGl2ZSc7XHJcbmltcG9ydCB7IFREU0J1dHRvbkNvbXBvbmVudCB9IGZyb20gJy4vdGRzLWJ1dHRvbi5jb21wb25lbnQnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBkZWNsYXJhdGlvbnM6IFtcclxuICAgIFREU0Jhc2ljQnV0dG9uRGlyZWN0aXZlLFxyXG4gICAgVERTQnV0dG9uQ29tcG9uZW50LFxyXG4gICAgVERTRmFiQnV0dG9uRGlyZWN0aXZlLFxyXG4gICAgVERTRmxhdEJ1dHRvbkRpcmVjdGl2ZSxcclxuICAgIFREU091dGxpbmVCdXR0b25EaXJlY3RpdmUsXHJcbiAgXSxcclxuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBURFNJY29uTW9kdWxlXSxcclxuICBleHBvcnRzOiBbXHJcbiAgICBURFNCdXR0b25Db21wb25lbnQsXHJcbiAgICBURFNCYXNpY0J1dHRvbkRpcmVjdGl2ZSxcclxuICAgIFREU0ZhYkJ1dHRvbkRpcmVjdGl2ZSxcclxuICAgIFREU0ZsYXRCdXR0b25EaXJlY3RpdmUsXHJcbiAgICBURFNPdXRsaW5lQnV0dG9uRGlyZWN0aXZlLFxyXG4gIF0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBURFNCdXR0b25Nb2R1bGUge31cclxuIl19