import {Component, OnInit} from '@angular/core';
import {Constants} from "../models/constants";
import {CommonUtil} from "../util/common.util";

@Component({
              selector: 'client-component',
              templateUrl: 'client.component.html',
              styleUrls: ["client.component.css"],
              providers: []
           })
export class ClientComponent implements OnInit {

   private userRole: string = "";
   public Constants = Constants;

   constructor() {
   }

   ngOnInit(): void {
      this.userRole = CommonUtil.getSessionUserRole();
      console.log(this.userRole);
   }
}
