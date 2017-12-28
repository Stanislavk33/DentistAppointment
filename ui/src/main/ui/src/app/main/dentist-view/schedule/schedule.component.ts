import {Component, OnInit, QueryList, ViewChildren} from '@angular/core';
import {CommonUtil} from "../../../util/common.util";
import {Constants} from "../../../models/constants";
import {DayScheduleModel} from "./model/day.schedule.model";
import {AppointmentService} from "../../../services/appointment.service";
import {WorkingDayModel} from "../../../models/working.day.model";
import {Comparator, Datagrid, SortOrder} from "clarity-angular";

@Component({
  moduleId: module.id,
  selector: 'schedule-component',
  templateUrl: 'schedule.component.html',
  styleUrls: ["schedule.component.scss"],
  providers: []
})
export class ScheduleComponent implements OnInit {
   public userEmail: string = '';

   private WEEK_DAYS = Constants.WEEK_DAYS;
   private WORKING_HOURS = [null, ...Constants.WORKING_HOURS];
   private editModel: DayScheduleModel;
   private workingDays: WorkingDayModel[] = [];
   private weekdaysComparator = new WeekdaysComparator();

   @ViewChildren("scheduleDatagrid") scheduleDatagrid: QueryList<Datagrid>;

   constructor(private service: AppointmentService) {

   }

   ngOnInit() {
      this.userEmail = CommonUtil.getSessionUserEmail();
      this.editModel = new DayScheduleModel();
      this.loadData();
   }

   private onEditSchedule(): void {
      this.service.editDentistWorkingDays(this.userEmail, this.editModel)
          .subscribe(result => {
                        if (result.result == Constants.RESULT_SUCCESSFUL) {
                           this.loadData();
                        } else {
                           console.log(result.message)
                        }
                     },
                     error => console.log(error))
   }

   private isModelValid(): boolean {
      return this.editModel.day &&
             ((!this.editModel.from1 &&
               !this.editModel.to1 &&
               !this.editModel.from2 &&
               !this.editModel.to2) ||
              (this.editModel.from1 &&
               this.editModel.to1 &&
               this.WORKING_HOURS.indexOf(this.editModel.from1) < this.WORKING_HOURS.indexOf(this.editModel.to1) &&
               ((!this.editModel.from2 && !this.editModel.to2) ||
                (this.editModel.from2 &&
                 this.editModel.to2 &&
                 this.WORKING_HOURS.indexOf(this.editModel.to1) < this.WORKING_HOURS.indexOf(this.editModel.from2) &&
                 this.WORKING_HOURS.indexOf(this.editModel.from2) < this.WORKING_HOURS.indexOf(this.editModel.to2)))));
   }

   private loadData(): void {
      this.service.getDentistWorkingDays(this.userEmail)
          .subscribe(result => {
                        if (result.result == Constants.RESULT_SUCCESSFUL) {
                           this.workingDays = result.workingDays;
                           if (this.scheduleDatagrid && this.scheduleDatagrid.first) {
                              this.scheduleDatagrid.first.columns.first.sortOrder = SortOrder.Asc;
                           }
                        } else {
                           console.log(result.message)
                        }
                     },
                     error => console.log(error))
   }

   private getReadableTime(millis: number): string {
      if (millis == null) {
         return "";
      }
      let date: Date = new Date(millis);
      return date.toTimeString().substr(0, 5);
   }

   private getReadableDay(weekDay: string): string {
      return CommonUtil.getReadableDay(weekDay);
   }
}

class WeekdaysComparator implements Comparator<WorkingDayModel> {
   compare(a: WorkingDayModel, b: WorkingDayModel) {
      return Constants.WEEK_DAYS_UPPERCASE.indexOf(a.weekDay) -
             Constants.WEEK_DAYS_UPPERCASE.indexOf(b.weekDay);
   }
}