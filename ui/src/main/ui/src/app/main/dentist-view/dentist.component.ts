import {Component, OnInit} from '@angular/core';
import {CommonUtil} from "../../util/common.util";
import {Router} from "@angular/router";

@Component({
              moduleId: module.id,
              selector: 'dentist-component',
              templateUrl: 'dentist.component.html',
              styleUrls: ["dentist.component.css"],
              providers: []
           })
export class DentistComponent implements OnInit {
  public userEmail: string = '';
   constructor(private router: Router) {
   }
   logout() {
     CommonUtil.removeUser();
     this.router.navigate(['']);
   }

<<<<<<< HEAD

=======
   openSchedule() {

   }
>>>>>>> kali-brach-new

   openProfile() {

   }

<<<<<<< HEAD

=======
   viewPatients() {

   }
>>>>>>> kali-brach-new

   ngOnInit() {
     this.userEmail = CommonUtil.getSessionUserEmail();
   }
}
