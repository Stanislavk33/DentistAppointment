import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from "@angular/router";
import {CommonUtil} from "../util/common.util";

@Injectable()
export class RoleGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot,
              state: RouterStateSnapshot): boolean {
    let userRole = CommonUtil.getSessionUserRole();
    let roles = route.data["roles"] as Array<string>;
    return (roles == null || roles.indexOf(userRole) != -1);
  }
}
