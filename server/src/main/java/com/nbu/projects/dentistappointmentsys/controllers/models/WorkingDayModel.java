package com.nbu.projects.dentistappointmentsys.controllers.models;

import com.nbu.projects.dentistappointmentsys.models.WorkingDay;
import com.nbu.projects.dentistappointmentsys.models.types.WeekDay;
import java.util.Date;

public class WorkingDayModel {

   private WeekDay weekDay;
   private Date from1;
   private Date to1;
   private Date from2;
   private Date to2;

   public WorkingDayModel() {
   }

   public WorkingDayModel(WeekDay weekDay, Date from1, Date to1, Date from2, Date to2) {
      this.weekDay = weekDay;
      this.from1 = from1;
      this.to1 = to1;
      this.from2 = from2;
      this.to2 = to2;
   }

   public WorkingDayModel(WorkingDay workingDay) {
      this(workingDay.getWeekDay(),
           workingDay.getFrom1(),
           workingDay.getTo1(),
           workingDay.getFrom2(),
           workingDay.getTo2());
   }

   public WeekDay getWeekDay() {
      return weekDay;
   }

   public void setWeekDay(WeekDay weekDay) {
      this.weekDay = weekDay;
   }

   public Date getFrom1() {
      return from1;
   }

   public void setFrom1(Date from1) {
      this.from1 = from1;
   }

   public Date getTo1() {
      return to1;
   }

   public void setTo1(Date to1) {
      this.to1 = to1;
   }

   public Date getFrom2() {
      return from2;
   }

   public void setFrom2(Date from2) {
      this.from2 = from2;
   }

   public Date getTo2() {
      return to2;
   }

   public void setTo2(Date to2) {
      this.to2 = to2;
   }
}
