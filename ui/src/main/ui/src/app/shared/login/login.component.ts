import {Component, OnInit} from '@angular/core';
import {LoginModel} from "./model/login.model";
import {CommonService} from "../services/common.service";
import {CommonUtil} from "../util/common.util";

@Component({
              selector: 'login-component',
              templateUrl: 'login.component.html',
              styleUrls: ["login.component.css"],
              providers: []
           })
export class LoginComponent implements OnInit {

   private model: LoginModel = new LoginModel();

   constructor(private commonService: CommonService) {
   }

   ngOnInit() {
   }

   onSubmit() {
      this.commonService.logIn(this.model)
          .subscribe(result => {
                        console.log(result);
                        CommonUtil.putSessionUser(result.user);
                     },
                     error => console.error(error));
   }
}
