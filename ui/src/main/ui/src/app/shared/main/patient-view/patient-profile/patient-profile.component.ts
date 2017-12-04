import {Component, OnInit} from '@angular/core';
import {CommonUtil} from "../../../util/common.util";

@Component({
              moduleId: module.id,
              selector: 'patient-profile-component',
              templateUrl: 'patient-profile.component.html',
              styleUrls: ["patient-profile.component.css"],
              providers: []
           })
export class PatientProfileComponent implements OnInit {
  public userEmail;
   constructor() {
   }

   ngOnInit() {
     this.userEmail = CommonUtil.getSessionUserEmail();
   }
}
