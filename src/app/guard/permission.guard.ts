import { CanActivate } from "@angular/router";

export class PermissionGuard implements CanActivate {
    canActivate() {
        var hasPermission: boolean = Math.random() < 0.5;
        if(!hasPermission) {
            console.log("你没有权限访问该页面");        }
        return hasPermission;
    }
}