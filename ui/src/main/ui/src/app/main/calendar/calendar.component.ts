import {Component, Input, OnInit} from '@angular/core';
import {UserModel} from "../../models/user.model";
import {CommonUtil} from "../../util/common.util";
import {AppointmentModel} from "../../models/appointment.model";
import {Constants} from "../../models/constants";
import {WorkingDayModel} from "../../models/working.day.model";
import {CalendarHour} from "./model/calendar.hour.model";
import {CalendarHours} from "./model/calendar.hours.model";
import {AppointmentService} from "../../services/appointment.service";
import {Router} from "@angular/router";

@Component({
              selector: 'calendar-component',
              templateUrl: 'calendar.component.html',
              styleUrls: ["calendar.component.css"],
              providers: []
           })
export class CalendarComponent implements OnInit {

   @Input('dentist')
   private dentist: UserModel;

   private opened: boolean = false;
   private appointmentSelected: CalendarHour;

   private WEEK_DAYS = Constants.WEEK_DAYS;
   private workingDays: WorkingDayModel[] = [];

   private dates: Date[] = [];
   private datesToShow: Date[] = [];
   private datesToShowIndex: number = 0;
   private datesCap: number = 0;
   private calendarHours: CalendarHours;
   private appointments: AppointmentModel[] = [];
   private currentUser: UserModel;

   constructor(private appointmentService: AppointmentService,
               private router: Router) {
   }

   ngOnInit(): void {
      this.currentUser = CommonUtil.getSessionUser();
      this.loadData();
   }

   private loadData(): void {
      this.appointmentService
                 .getDentistAppointments(this.dentist.email)
                 .subscribe(result => {
                         this.appointments = result.appointments;
                         this.dates = CalendarComponent.buildDates();
                         this.datesCap = this.dates.length;
                         this.datesToShow =
                               this.dates.slice(this.datesToShowIndex, this.datesToShowIndex + 7);
                         this.buildShownHours();
                         return null
                      },
                      error => console.log(error));
   }

   private askForAppointment(calendarHour: CalendarHour): void {
      if (!this.currentUser || !this.currentUser.email) {
         this.router.navigate(['login']);
         return;
      }
      this.appointmentSelected = calendarHour;
      this.opened = true;
   }

   private makeAppointment(sure: boolean): void {
      this.opened = false;
      if (!sure) {
         return;
      }
      if (this.appointmentSelected == null) {
         return;
      }
      this.appointmentService.makeAppointment(this.dentist.email,
                                              this.currentUser.email,
                                              this.appointmentSelected.date)
      //TODO: Show that the appointment is made.
          .subscribe(result => this.loadData(),
                     error => console.log(error));
   }

   private loadLater(): void {
      this.datesToShowIndex = this.datesToShowIndex + 7;
      if (this.datesToShowIndex > this.datesCap - 7) {
         this.datesToShowIndex = this.datesCap - 7;
      }
      this.datesToShow = this.dates.slice(this.datesToShowIndex, this.datesToShowIndex + 7);
      this.buildShownHours();
   }

   private loadEarlier(): void {
      this.datesToShowIndex = this.datesToShowIndex -= 7;
      if (this.datesToShowIndex < 0) {
         this.datesToShowIndex = 0;
      }
      this.datesToShow = this.dates.slice(this.datesToShowIndex, this.datesToShowIndex + 7);
      this.buildShownHours();
   }

   private buildShownHours(): void {

      let earliest: number = CalendarComponent.getEarliestHour(this.dentist.workingDays);
      let latest: number = CalendarComponent.getLatestHour(this.dentist.workingDays);

      let calendarHours: CalendarHours = new CalendarHours();
      for (let weekDay of Constants.WEEK_DAYS) {
         let dailyCalendarHours: CalendarHour[] = [];
         for (let i = earliest; i <= latest; i++) {
            let hour1: string = CalendarComponent.buildFullyReadableHour(i);
            let hour2: string = CalendarComponent.buildFullyReadableHour(i + 0.5);
            let date1: Date = this.getDate(weekDay, hour1);
            let date2: Date = this.getDate(weekDay, hour2);
            dailyCalendarHours.push(new CalendarHour(date1,
                                                     weekDay,
                                                     hour1,
                                                     CalendarComponent.isWorking(weekDay, date1, this.dentist.workingDays),
                                                     this.isBooked(date1)));
            dailyCalendarHours.push(new CalendarHour(date2,
                                                     weekDay,
                                                     hour2,
                                                     CalendarComponent.isWorking(weekDay, date2, this.dentist.workingDays),
                                                     this.isBooked(date2)));
         }
         calendarHours[weekDay] = dailyCalendarHours;
      }
      this.calendarHours = calendarHours;
   }

   private getDate(weekDay: string, hour: string): Date {
      let date: Date = new Date(this.datesToShow[Constants.WEEK_DAYS.indexOf(weekDay)].getTime());
      date.setHours(Number(hour.slice(0,2)));
      date.setMinutes(Number(hour.slice(3,5)));
      return date;
   }

   private static isWorking(weekDay: string, date: Date, workingDays: WorkingDayModel[]): boolean {
      if (date < new Date()) {
         return false;
      }
      let weekDayUC: string = weekDay.toUpperCase();
      for (let workingDay of workingDays) {
         if (weekDayUC == workingDay.weekDay &&
             (CalendarComponent.compareHours(date, new Date(workingDay.from1)) >= 0 &&
              CalendarComponent.compareHours(date, new Date(workingDay.to1)) < 0 ||
              CalendarComponent.compareHours(date, new Date(workingDay.from2)) >= 0 &&
              CalendarComponent.compareHours(date, new Date(workingDay.to2)) < 0)) {
            return true;
         }
      }
      return false;
   }

   private static compareHours(a: Date, b: Date) {
      if (a.getHours() != b.getHours()) {
         return a.getHours() - b.getHours();
      }
      if (Math.abs(a.getMinutes() - b.getMinutes()) < 15) {
         return 0;
      }
      return a.getMinutes() - b.getMinutes();
   }

   private isBooked(date: Date): boolean {
      let result: boolean = false;
      for (let appointment of this.appointments) {
         if (CalendarComponent.areDatesTheSame(date, new Date(appointment.date)) &&
             !appointment.cancelled) {
            result = true;
            break;
         }
      }
      return result;
   }

   /**
    * Skips seconds comparison.
    */
   private static areDatesTheSame(a: Date, b: Date): boolean {
      return a.toString().substr(0, 21) == b.toString().substr(0, 21);
   }

   private static buildFullyReadableHour(hour: number): string {
      if (hour < 0 || hour > 24) {
         return null;
      }
      if (hour < 10) {
         return "0" + CalendarComponent.buildReadableHour(hour);
      }
      return CalendarComponent.buildReadableHour(hour);
   }

   private static buildReadableHour(hour: number): string {
      if (hour < 0 || hour > 24) {
         return null;
      }
      if (hour * 10 % 10 > 0) {
         return Math.floor(hour) + ":30"
      }
      return hour + ":00"

   }

   private static getEarliestHour(workingDays: WorkingDayModel[]): number {
      let earliest: number = 24;
      for (let workingDay of workingDays) {
         let date: Date = new Date(workingDay.from1);
         let candidate: number = Number(date.toTimeString().substr(0, 2));
         if (candidate < earliest) {
            earliest = candidate;
         }
      }
      return earliest;
   }


   private static getLatestHour(workingDays: WorkingDayModel[]): number {
      let latest: number = 0;
      for (let workingDay of workingDays) {
         let date: Date = new Date(workingDay.to2 != null ? workingDay.to2 : workingDay.to1);
         let candidate: number = Number(date.toTimeString().substr(0, 2));
         if (candidate > latest) {
            latest = candidate;
         }
      }
      return latest - 1;
   }

   private static buildDates(): Date[] {
      let today: Date = new Date();
      let lowerLimit: number;
      let todayStr: string = today.toString();
      if (todayStr.startsWith("Mon")) {
         lowerLimit = 0;
      } else if (todayStr.startsWith("Tue")) {
         lowerLimit = 1;
      } else if (todayStr.startsWith("Wed")) {
         lowerLimit = 2;
      } else if (todayStr.startsWith("Thu")) {
         lowerLimit = 3;
      } else if (todayStr.startsWith("Fri")) {
         lowerLimit = 4;
      } else if (todayStr.startsWith("Sat")) {
         lowerLimit = 5;
      } else {
         lowerLimit = 6;
      }
      let dates: Date[] = [];
      for (let i = 1; i <= lowerLimit; i++) {
         let newDate: Date = new Date();
         newDate.setDate(today.getDate() - i);
         dates.push(newDate);
      }
      dates.push(today);
      for (let i = 1; i < 42 - lowerLimit; i++) {
         let newDate: Date = new Date();
         newDate.setDate(today.getDate() + i);
         dates.push(newDate);
      }
      dates.sort((a, b) => a.getTime() - b.getTime());
      return dates;
   }
}
