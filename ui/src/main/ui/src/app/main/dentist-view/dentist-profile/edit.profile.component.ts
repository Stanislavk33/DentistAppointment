import {Component, OnInit} from '@angular/core';
import {CommonUtil} from "../../../util/common.util";

@Component({
              moduleId: module.id,
              selector: 'edit-component',
              templateUrl: 'edit.profile.component.html',
              styleUrls: ["edit.profile.component.css"],
              providers: []
           })
export class EditDentistProfileComponent implements OnInit {
   public userEmail;
   constructor() {
   }

   ngOnInit() {
     this.userEmail = CommonUtil.getSessionUserEmail();
   }
}
