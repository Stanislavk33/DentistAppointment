import {Component, OnInit} from '@angular/core';
import {CommonUtil} from "../../../util/common.util";
import {Router} from "@angular/router";

@Component({
              moduleId: module.id,
              selector: 'patient-profile-component',
              templateUrl: 'patient.profile.component.html',
              styleUrls: ["patient.profile.component.css"],
              providers: []
           })
export class PatientProfileComponent implements OnInit {
  public userEmail;
   constructor(private router: Router) {
   }

   loadAppointments() {
     this.router.navigate(['/patient/profile/appointments']);
   }
   editProfile() {
     this.router.navigate(['/patient/profile/edit']);
   }
   ambulatoryList() {
     this.router.navigate(['/patient/profile/ambulatory']);
   }
   ngOnInit() {
     this.userEmail = CommonUtil.getSessionUserEmail();
   }
}
