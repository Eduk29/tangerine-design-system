import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IconModule } from '../icon/icon.module';
import { ButtonComponent } from './button.component';
import { BasicButtonDirective } from './directives/basic-button.directive';
import { FabButtonDirective } from './directives/fab-button.directive';
import { FlatButtonDirective } from './directives/flat-button.directive';
import { OutlineButtonDirective } from './directives/outline-button.directive';
import * as i0 from "@angular/core";
export class ButtonModule {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: ButtonModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "17.3.12", ngImport: i0, type: ButtonModule, declarations: [BasicButtonDirective,
            ButtonComponent,
            FabButtonDirective,
            FlatButtonDirective,
            OutlineButtonDirective], imports: [CommonModule, IconModule], exports: [ButtonComponent, BasicButtonDirective, FabButtonDirective, FlatButtonDirective, OutlineButtonDirective] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: ButtonModule, imports: [CommonModule, IconModule] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: ButtonModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        BasicButtonDirective,
                        ButtonComponent,
                        FabButtonDirective,
                        FlatButtonDirective,
                        OutlineButtonDirective,
                    ],
                    imports: [CommonModule, IconModule],
                    exports: [ButtonComponent, BasicButtonDirective, FabButtonDirective, FlatButtonDirective, OutlineButtonDirective],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9uLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hcHAvY29tcG9uZW50cy9idXR0b24vYnV0dG9uLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV6QyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDakQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3JELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQzNFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQ3pFLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLHVDQUF1QyxDQUFDOztBQWEvRSxNQUFNLE9BQU8sWUFBWTt3R0FBWixZQUFZO3lHQUFaLFlBQVksaUJBVHJCLG9CQUFvQjtZQUNwQixlQUFlO1lBQ2Ysa0JBQWtCO1lBQ2xCLG1CQUFtQjtZQUNuQixzQkFBc0IsYUFFZCxZQUFZLEVBQUUsVUFBVSxhQUN4QixlQUFlLEVBQUUsb0JBQW9CLEVBQUUsa0JBQWtCLEVBQUUsbUJBQW1CLEVBQUUsc0JBQXNCO3lHQUVyRyxZQUFZLFlBSGIsWUFBWSxFQUFFLFVBQVU7OzRGQUd2QixZQUFZO2tCQVh4QixRQUFRO21CQUFDO29CQUNSLFlBQVksRUFBRTt3QkFDWixvQkFBb0I7d0JBQ3BCLGVBQWU7d0JBQ2Ysa0JBQWtCO3dCQUNsQixtQkFBbUI7d0JBQ25CLHNCQUFzQjtxQkFDdkI7b0JBQ0QsT0FBTyxFQUFFLENBQUMsWUFBWSxFQUFFLFVBQVUsQ0FBQztvQkFDbkMsT0FBTyxFQUFFLENBQUMsZUFBZSxFQUFFLG9CQUFvQixFQUFFLGtCQUFrQixFQUFFLG1CQUFtQixFQUFFLHNCQUFzQixDQUFDO2lCQUNsSCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBJY29uTW9kdWxlIH0gZnJvbSAnLi4vaWNvbi9pY29uLm1vZHVsZSc7XHJcbmltcG9ydCB7IEJ1dHRvbkNvbXBvbmVudCB9IGZyb20gJy4vYnV0dG9uLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEJhc2ljQnV0dG9uRGlyZWN0aXZlIH0gZnJvbSAnLi9kaXJlY3RpdmVzL2Jhc2ljLWJ1dHRvbi5kaXJlY3RpdmUnO1xyXG5pbXBvcnQgeyBGYWJCdXR0b25EaXJlY3RpdmUgfSBmcm9tICcuL2RpcmVjdGl2ZXMvZmFiLWJ1dHRvbi5kaXJlY3RpdmUnO1xyXG5pbXBvcnQgeyBGbGF0QnV0dG9uRGlyZWN0aXZlIH0gZnJvbSAnLi9kaXJlY3RpdmVzL2ZsYXQtYnV0dG9uLmRpcmVjdGl2ZSc7XHJcbmltcG9ydCB7IE91dGxpbmVCdXR0b25EaXJlY3RpdmUgfSBmcm9tICcuL2RpcmVjdGl2ZXMvb3V0bGluZS1idXR0b24uZGlyZWN0aXZlJztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICBCYXNpY0J1dHRvbkRpcmVjdGl2ZSxcclxuICAgIEJ1dHRvbkNvbXBvbmVudCxcclxuICAgIEZhYkJ1dHRvbkRpcmVjdGl2ZSxcclxuICAgIEZsYXRCdXR0b25EaXJlY3RpdmUsXHJcbiAgICBPdXRsaW5lQnV0dG9uRGlyZWN0aXZlLFxyXG4gIF0sXHJcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgSWNvbk1vZHVsZV0sXHJcbiAgZXhwb3J0czogW0J1dHRvbkNvbXBvbmVudCwgQmFzaWNCdXR0b25EaXJlY3RpdmUsIEZhYkJ1dHRvbkRpcmVjdGl2ZSwgRmxhdEJ1dHRvbkRpcmVjdGl2ZSwgT3V0bGluZUJ1dHRvbkRpcmVjdGl2ZV0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBCdXR0b25Nb2R1bGUge31cclxuIl19