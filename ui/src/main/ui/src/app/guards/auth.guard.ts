import {Injectable} from "@angular/core";
import {CanActivate, Router} from "@angular/router";
import {CommonUtil} from "../util/common.util";

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {
  }
  canActivate() {
    let userRole = CommonUtil.getSessionUserRole();
    if (userRole) {
      this.router.navigate(['/' + userRole.toLowerCase()]);
      return true;
    }
    else {
      this.router.navigate(['/login']);
    }
    return false;
  }
}
