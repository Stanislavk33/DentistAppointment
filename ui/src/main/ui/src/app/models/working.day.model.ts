import {DayScheduleModel} from "../main/dentist-view/schedule/model/day.schedule.model";
import {CommonUtil} from "../util/common.util";

export class WorkingDayModel {
   weekDay: string;
   from1: Date;
   to1: Date;
   from2: Date;
   to2: Date;

   constructor(dayScheduleModel: DayScheduleModel) {
      this.weekDay = dayScheduleModel.day;
      this.from1 = CommonUtil.toDate(dayScheduleModel.from1);
      this.to1 = CommonUtil.toDate(dayScheduleModel.to1);
      this.from2 = CommonUtil.toDate(dayScheduleModel.from2);
      this.to2 = CommonUtil.toDate(dayScheduleModel.to2);
   }
}