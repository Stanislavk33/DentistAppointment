import {Component, OnInit} from '@angular/core';
import {CommonUtil} from "../../../util/common.util";

@Component({
              moduleId: module.id,
              selector: 'edit-component',
              templateUrl: 'patients.component.html',
              styleUrls: ["patients.component.css"],
              providers: []
           })
export class PatientsComponent implements OnInit {
   public userEmail;
   constructor() {
   }

   ngOnInit() {
     this.userEmail = CommonUtil.getSessionUserEmail();
   }
}
