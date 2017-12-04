import {Component, OnInit} from '@angular/core';
import {RegisterModel} from "./model/register.model";
import {CommonService} from "../../../services/common.service";
import {CommonUtil} from "../../../util/common.util";
import {Constants} from "../../../models/constants";
import {Router} from "@angular/router";

@Component({
              selector: 'register-component',
              templateUrl: 'register.component.html',
              styleUrls: ["register.component.scss"],
              providers: []
           })
export class RegisterComponent implements OnInit {

   private model: RegisterModel = new RegisterModel();
   private Constants = Constants;
   private userRole;

   constructor(private commonService: CommonService, private router: Router) {
   }

   ngOnInit() {
   }

   onSubmit() {
      this.commonService.register(this.model)
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
