import {Component, OnInit} from '@angular/core';
import {CommonUtil} from "../../../../util/common.util";

@Component({
              moduleId: module.id,
              selector: 'ambulatory-component',
              templateUrl: 'ambulatory.component.html',
              styleUrls: ["ambulatory.component.css"],
              providers: []
           })
export class AmbulatoryComponent implements OnInit {
  public userEmail;
   constructor() {
   }

   ngOnInit() {
     this.userEmail = CommonUtil.getSessionUserEmail();
   }
}
