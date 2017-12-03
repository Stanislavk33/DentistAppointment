import {Component, OnInit} from '@angular/core';
import {RegisterModel} from "./model/register.model";
import {Constants} from "../models/constants";
import {CommonService} from "../services/common.service";
import {CommonUtil} from "../util/common.util";

@Component({
              selector: 'register-component',
              templateUrl: 'register.component.html',
              styleUrls: ["register.component.scss"],
              providers: []
           })
export class RegisterComponent implements OnInit {

   private model: RegisterModel = new RegisterModel();
   private Constants = Constants;

   constructor(private commonService: CommonService) {
   }

   ngOnInit() {
   }

   onSubmit() {
      this.commonService.register(this.model)
          .subscribe(result => {
                        console.log(result);
                        CommonUtil.putSessionUser(result.user);
                     },
                     error => console.error(error));
   }
}
