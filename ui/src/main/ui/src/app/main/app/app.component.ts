import {Component, OnInit} from '@angular/core';
import {CommonUtil} from "../../util/common.util";
import {Router} from "@angular/router";

@Component({
              moduleId: module.id,
              selector: 'app-component',
              templateUrl: 'app.component.html',
              styleUrls: ["app.component.css"],
              providers: []
           })
export class AppComponent implements OnInit {
   constructor(private router: Router) {
   }

   ngOnInit() {
     let userRole = CommonUtil.getSessionUserRole();
     if(userRole){
       this.router.navigate(['/' + userRole.toLowerCase()]);
     }
   }
}
