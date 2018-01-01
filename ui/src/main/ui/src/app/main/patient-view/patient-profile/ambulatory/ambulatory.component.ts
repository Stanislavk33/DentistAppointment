import {Component, OnInit} from '@angular/core';
import {CommonUtil} from "../../../../util/common.util";
import {AmbulatoryService} from "./ambulatory.service";
import {AmbulatoryModel} from "./ambulatory.model";
import {Comparator} from "clarity-angular";

class DateComparator implements Comparator<AmbulatoryModel> {
  compare(a: AmbulatoryModel, b: AmbulatoryModel) {
    return +new Date(b.date) - +new Date(a.date);
  }
}

@Component({
              moduleId: module.id,
              selector: 'ambulatory-component',
              templateUrl: 'ambulatory.component.html',
              styleUrls: ["ambulatory.component.css"],
              providers: []
           })
export class AmbulatoryComponent implements OnInit {
   private dateComparator = new DateComparator();
   private ambulatory: AmbulatoryModel[] = [];

   constructor(private ambulatoryService: AmbulatoryService) {
   }

   ngOnInit() {
     this.ambulatoryService.getAmbulatoryInfo(CommonUtil.getSessionUserId())
       .subscribe(data => {
         this.ambulatory = data;
       }, err => console.log(err));
   }
}
