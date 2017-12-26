import {Component, OnInit} from '@angular/core';
import {CommonUtil} from "../../../util/common.util";

@Component({
              moduleId: module.id,
              selector: 'edit-component',
              templateUrl: 'appointments.component.html',
              styleUrls: ["appointments.component.css"],
              providers: []
           })
export class DentistAppointmentsComponent implements OnInit {
   public userEmail;
   constructor() {
   }

   ngOnInit() {
     this.userEmail = CommonUtil.getSessionUserEmail();
   }
}
