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

   private model: LoginModel = new LoginModel();
   private userRole;

   constructor(private commonService: CommonService, private router: Router) {
   }

   ngOnInit() {
   }

   onSubmit() {
      this.commonService.logIn(this.model)
          .subscribe(result => {
                        console.log(result);
                        CommonUtil.putSessionUser(result.user);
                        this.userRole = CommonUtil.getSessionUserRole();
                        if(this.userRole == Constants.ROLE_ADMIN){
                          this.router.navigate(['/admin']);
                        }else if(this.userRole == Constants.ROLE_DENTIST){
                          this.router.navigate(['/dentist']);
                        }else if(this.userRole == Constants.ROLE_PATIENT){
                          this.router.navigate(['/patient']);
                        }
                     },
                     error => console.error(error));


   }
}
