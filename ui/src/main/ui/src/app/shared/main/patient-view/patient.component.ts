import {Component, OnInit} from '@angular/core';
import {CommonUtil} from "../../util/common.util";
import {Router} from "@angular/router";

@Component({
              moduleId: module.id,
              selector: 'patient-component',
              templateUrl: 'patient.component.html',
              styleUrls: ["patient.component.css"],
              providers: []
           })
export class PatientComponent implements OnInit {
  public userEmail;
   constructor(private router: Router) {
   }

   editProfile(){
     this.router.navigate(['/patient/profile']);
   }
   ngOnInit() {
     this.userEmail = CommonUtil.getSessionUserEmail();
   }
}
