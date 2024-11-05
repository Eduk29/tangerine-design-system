import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import * as i0 from "@angular/core";
export class TDSSnackbarService {
    snackbar$ = new BehaviorSubject({});
    constructor() { }
    openSnackbar(snackbarData) {
        if (this.snackbarDataHasMessage(snackbarData)) {
            this.configureDefaultValues(snackbarData);
            this.snackbar$.next(snackbarData);
        }
    }
    configureDefaultValues(snackbarData) {
        snackbarData.horizontalPosition = snackbarData.horizontalPosition || 'center';
        snackbarData.verticalPosition = snackbarData.verticalPosition || 'top';
        snackbarData.durationInSeconds = snackbarData.durationInSeconds || 5;
        snackbarData.type = snackbarData.type || 'info';
    }
    snackbarDataHasMessage(snackbarData) {
        return !!snackbarData.message && snackbarData.message !== '';
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: TDSSnackbarService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: TDSSnackbarService, providedIn: 'root' });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: TDSSnackbarService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: () => [] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGRzLXNuYWNrYmFyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvYXBwL2NvbXBvbmVudHMvc25hY2tiYXIvc2VydmljZXMvdGRzLXNuYWNrYmFyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sTUFBTSxDQUFDOztBQU92QyxNQUFNLE9BQU8sa0JBQWtCO0lBQ3RCLFNBQVMsR0FBcUMsSUFBSSxlQUFlLENBQWtCLEVBQUUsQ0FBQyxDQUFDO0lBRTlGLGdCQUFlLENBQUM7SUFFVCxZQUFZLENBQUMsWUFBNkI7UUFDL0MsSUFBSSxJQUFJLENBQUMsc0JBQXNCLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQztZQUM5QyxJQUFJLENBQUMsc0JBQXNCLENBQUMsWUFBWSxDQUFDLENBQUM7WUFDMUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDcEMsQ0FBQztJQUNILENBQUM7SUFFTyxzQkFBc0IsQ0FBQyxZQUE2QjtRQUMxRCxZQUFZLENBQUMsa0JBQWtCLEdBQUcsWUFBWSxDQUFDLGtCQUFrQixJQUFJLFFBQVEsQ0FBQztRQUM5RSxZQUFZLENBQUMsZ0JBQWdCLEdBQUcsWUFBWSxDQUFDLGdCQUFnQixJQUFJLEtBQUssQ0FBQztRQUN2RSxZQUFZLENBQUMsaUJBQWlCLEdBQUcsWUFBWSxDQUFDLGlCQUFpQixJQUFJLENBQUMsQ0FBQztRQUNyRSxZQUFZLENBQUMsSUFBSSxHQUFHLFlBQVksQ0FBQyxJQUFJLElBQUksTUFBTSxDQUFDO0lBQ2xELENBQUM7SUFFTyxzQkFBc0IsQ0FBQyxZQUE2QjtRQUMxRCxPQUFPLENBQUMsQ0FBQyxZQUFZLENBQUMsT0FBTyxJQUFJLFlBQVksQ0FBQyxPQUFPLEtBQUssRUFBRSxDQUFDO0lBQy9ELENBQUM7d0dBckJVLGtCQUFrQjs0R0FBbEIsa0JBQWtCLGNBRmpCLE1BQU07OzRGQUVQLGtCQUFrQjtrQkFIOUIsVUFBVTttQkFBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5cclxuaW1wb3J0IHsgVERTU25hY2tiYXJEYXRhIH0gZnJvbSAnLi4vbW9kZWxzL3Rkcy1zbmFja2Jhci1kYXRhLm1vZGVsJztcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiAncm9vdCcsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBURFNTbmFja2JhclNlcnZpY2Uge1xyXG4gIHB1YmxpYyBzbmFja2JhciQ6IEJlaGF2aW9yU3ViamVjdDxURFNTbmFja2JhckRhdGE+ID0gbmV3IEJlaGF2aW9yU3ViamVjdDxURFNTbmFja2JhckRhdGE+KHt9KTtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7fVxyXG5cclxuICBwdWJsaWMgb3BlblNuYWNrYmFyKHNuYWNrYmFyRGF0YTogVERTU25hY2tiYXJEYXRhKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5zbmFja2JhckRhdGFIYXNNZXNzYWdlKHNuYWNrYmFyRGF0YSkpIHtcclxuICAgICAgdGhpcy5jb25maWd1cmVEZWZhdWx0VmFsdWVzKHNuYWNrYmFyRGF0YSk7XHJcbiAgICAgIHRoaXMuc25hY2tiYXIkLm5leHQoc25hY2tiYXJEYXRhKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgY29uZmlndXJlRGVmYXVsdFZhbHVlcyhzbmFja2JhckRhdGE6IFREU1NuYWNrYmFyRGF0YSk6IHZvaWQge1xyXG4gICAgc25hY2tiYXJEYXRhLmhvcml6b250YWxQb3NpdGlvbiA9IHNuYWNrYmFyRGF0YS5ob3Jpem9udGFsUG9zaXRpb24gfHwgJ2NlbnRlcic7XHJcbiAgICBzbmFja2JhckRhdGEudmVydGljYWxQb3NpdGlvbiA9IHNuYWNrYmFyRGF0YS52ZXJ0aWNhbFBvc2l0aW9uIHx8ICd0b3AnO1xyXG4gICAgc25hY2tiYXJEYXRhLmR1cmF0aW9uSW5TZWNvbmRzID0gc25hY2tiYXJEYXRhLmR1cmF0aW9uSW5TZWNvbmRzIHx8IDU7XHJcbiAgICBzbmFja2JhckRhdGEudHlwZSA9IHNuYWNrYmFyRGF0YS50eXBlIHx8ICdpbmZvJztcclxuICB9XHJcblxyXG4gIHByaXZhdGUgc25hY2tiYXJEYXRhSGFzTWVzc2FnZShzbmFja2JhckRhdGE6IFREU1NuYWNrYmFyRGF0YSk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuICEhc25hY2tiYXJEYXRhLm1lc3NhZ2UgJiYgc25hY2tiYXJEYXRhLm1lc3NhZ2UgIT09ICcnO1xyXG4gIH1cclxufVxyXG4iXX0=