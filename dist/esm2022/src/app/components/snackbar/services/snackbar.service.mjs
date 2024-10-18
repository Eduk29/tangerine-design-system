import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import * as i0 from "@angular/core";
export class SnackbarService {
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
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: SnackbarService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: SnackbarService, providedIn: 'root' });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: SnackbarService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: () => [] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic25hY2tiYXIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hcHAvY29tcG9uZW50cy9zbmFja2Jhci9zZXJ2aWNlcy9zbmFja2Jhci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLE1BQU0sQ0FBQzs7QUFPdkMsTUFBTSxPQUFPLGVBQWU7SUFDbkIsU0FBUyxHQUFrQyxJQUFJLGVBQWUsQ0FBZSxFQUFFLENBQUMsQ0FBQztJQUV4RixnQkFBZSxDQUFDO0lBRVQsWUFBWSxDQUFDLFlBQTBCO1FBQzVDLElBQUksSUFBSSxDQUFDLHNCQUFzQixDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUM7WUFDOUMsSUFBSSxDQUFDLHNCQUFzQixDQUFDLFlBQVksQ0FBQyxDQUFDO1lBQzFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQ3BDLENBQUM7SUFDSCxDQUFDO0lBRU8sc0JBQXNCLENBQUMsWUFBMEI7UUFDdkQsWUFBWSxDQUFDLGtCQUFrQixHQUFHLFlBQVksQ0FBQyxrQkFBa0IsSUFBSSxRQUFRLENBQUM7UUFDOUUsWUFBWSxDQUFDLGdCQUFnQixHQUFHLFlBQVksQ0FBQyxnQkFBZ0IsSUFBSSxLQUFLLENBQUM7UUFDdkUsWUFBWSxDQUFDLGlCQUFpQixHQUFHLFlBQVksQ0FBQyxpQkFBaUIsSUFBSSxDQUFDLENBQUM7UUFDckUsWUFBWSxDQUFDLElBQUksR0FBRyxZQUFZLENBQUMsSUFBSSxJQUFJLE1BQU0sQ0FBQztJQUNsRCxDQUFDO0lBRU8sc0JBQXNCLENBQUMsWUFBMEI7UUFDdkQsT0FBTyxDQUFDLENBQUMsWUFBWSxDQUFDLE9BQU8sSUFBSSxZQUFZLENBQUMsT0FBTyxLQUFLLEVBQUUsQ0FBQztJQUMvRCxDQUFDO3dHQXJCVSxlQUFlOzRHQUFmLGVBQWUsY0FGZCxNQUFNOzs0RkFFUCxlQUFlO2tCQUgzQixVQUFVO21CQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcblxyXG5pbXBvcnQgeyBTbmFja2JhckRhdGEgfSBmcm9tICcuLi9tb2RlbHMvc25hY2tiYXItZGF0YS5tb2RlbCc7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgU25hY2tiYXJTZXJ2aWNlIHtcclxuICBwdWJsaWMgc25hY2tiYXIkOiBCZWhhdmlvclN1YmplY3Q8U25hY2tiYXJEYXRhPiA9IG5ldyBCZWhhdmlvclN1YmplY3Q8U25hY2tiYXJEYXRhPih7fSk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge31cclxuXHJcbiAgcHVibGljIG9wZW5TbmFja2JhcihzbmFja2JhckRhdGE6IFNuYWNrYmFyRGF0YSk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuc25hY2tiYXJEYXRhSGFzTWVzc2FnZShzbmFja2JhckRhdGEpKSB7XHJcbiAgICAgIHRoaXMuY29uZmlndXJlRGVmYXVsdFZhbHVlcyhzbmFja2JhckRhdGEpO1xyXG4gICAgICB0aGlzLnNuYWNrYmFyJC5uZXh0KHNuYWNrYmFyRGF0YSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNvbmZpZ3VyZURlZmF1bHRWYWx1ZXMoc25hY2tiYXJEYXRhOiBTbmFja2JhckRhdGEpOiB2b2lkIHtcclxuICAgIHNuYWNrYmFyRGF0YS5ob3Jpem9udGFsUG9zaXRpb24gPSBzbmFja2JhckRhdGEuaG9yaXpvbnRhbFBvc2l0aW9uIHx8ICdjZW50ZXInO1xyXG4gICAgc25hY2tiYXJEYXRhLnZlcnRpY2FsUG9zaXRpb24gPSBzbmFja2JhckRhdGEudmVydGljYWxQb3NpdGlvbiB8fCAndG9wJztcclxuICAgIHNuYWNrYmFyRGF0YS5kdXJhdGlvbkluU2Vjb25kcyA9IHNuYWNrYmFyRGF0YS5kdXJhdGlvbkluU2Vjb25kcyB8fCA1O1xyXG4gICAgc25hY2tiYXJEYXRhLnR5cGUgPSBzbmFja2JhckRhdGEudHlwZSB8fCAnaW5mbyc7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHNuYWNrYmFyRGF0YUhhc01lc3NhZ2Uoc25hY2tiYXJEYXRhOiBTbmFja2JhckRhdGEpOiBib29sZWFuIHtcclxuICAgIHJldHVybiAhIXNuYWNrYmFyRGF0YS5tZXNzYWdlICYmIHNuYWNrYmFyRGF0YS5tZXNzYWdlICE9PSAnJztcclxuICB9XHJcbn1cclxuIl19