import {Component, OnInit} from '@angular/core';
import {CommonUtil} from "../../../../util/common.util";

@Component({
              moduleId: module.id,
              selector: 'appointments-component',
              templateUrl: 'appointments.component.html',
              styleUrls: ["appointments.component.css"],
              providers: []
           })
export class AppointmentsComponent implements OnInit {
  public userEmail;
   constructor() {
   }

   ngOnInit() {
     this.userEmail = CommonUtil.getSessionUserEmail();
   }
}
