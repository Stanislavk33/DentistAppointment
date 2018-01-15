import {Component, OnInit} from '@angular/core';
import {LoginModel} from "./model/login.model";
import {Router} from "@angular/router";
import {CommonService} from "../../../services/common.service";
import {CommonUtil} from "../../../util/common.util";
import {Constants} from "../../../models/constants";

@Component({
              selector: 'login-component',
              templateUrl: 'login.component.html',
              styleUrls: ["login.component.css"],
              providers: []
           })
export class LoginComponent implements OnInit {
   private error: string;
   private model: LoginModel = new LoginModel();
   private userRole;

   constructor(private commonService: CommonService, private router: Router) {
   }

   ngOnInit() {
   }

   onSubmit() {
      this.error = null;
      this.commonService.logIn(this.model)
          .subscribe(result => {
                if (result.user == null) {
                  this.error = result.message;
                } else {
                  CommonUtil.putSessionUser(result.user);
                  this.userRole = CommonUtil.getSessionUserRole();
                  switch(this.userRole){
                    case Constants.ROLE_ADMIN: this.router.navigate(['/admin']); break;
                    case Constants.ROLE_DENTIST: this.router.navigate(['/dentist']); break;
                    case Constants.ROLE_PATIENT: this.router.navigate(['/patient']);
                  }
                }
             },
             error => console.error(error));
   }
}
