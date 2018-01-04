import {Component, OnInit} from '@angular/core';
import {RegisterModel} from "./model/register.model";
import {CommonService} from "../../../services/common.service";
import {CommonUtil} from "../../../util/common.util";
import {Constants} from "../../../models/constants";
import {Router} from "@angular/router";

@Component({
              selector: 'register-component',
              templateUrl: 'register.component.html',
              styleUrls: ["register.component.css"],
              providers: []
           })
export class RegisterComponent implements OnInit {

   private model: RegisterModel = new RegisterModel();
   private Constants = Constants;
   private userRole;
   private failMessage: string;

   constructor(private commonService: CommonService, private router: Router) {
   }

   ngOnInit() {
   }

   private closeAlert(): void {
      this.failMessage = null;
   }

   onSubmit() {
      this.commonService.register(this.model)
          .subscribe(result => {
                        if (result.result == Constants.RESULT_SUCCESSFUL) {
                           CommonUtil.putSessionUser(result.user);
                           this.userRole = CommonUtil.getSessionUserRole();
                           if(this.userRole == Constants.ROLE_ADMIN) {
                              this.router.navigate(['/admin']);
                           } else if (this.userRole == Constants.ROLE_DENTIST) {
                              this.router.navigate(['/dentist']);
                           } else if (this.userRole == Constants.ROLE_PATIENT) {
                              this.router.navigate(['/patient']);
                           }
                        } else {
                           this.failMessage = result.message;
                        }
                     },
                     error => console.error(error));
   }
}
