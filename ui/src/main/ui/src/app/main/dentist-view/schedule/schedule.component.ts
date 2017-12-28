import {Component, OnChanges, OnInit} from '@angular/core';
import {CommonUtil} from "../../../util/common.util";
import {EventModel} from "../../../models/event.model";
import {ScheduleService} from "./schedule.service";

@Component({
              moduleId: module.id,
              selector: 'edit-component',
              templateUrl: 'schedule.component.html',
              styleUrls: ["schedule.component.css"],
              providers: []
           })
export class ScheduleComponent implements OnChanges {
   private userId: number = 0;
   constructor(private service: ScheduleService) {
   }

   ngOnChanges() {
     this.userId = CommonUtil.getSessionUserId();
   }
}
