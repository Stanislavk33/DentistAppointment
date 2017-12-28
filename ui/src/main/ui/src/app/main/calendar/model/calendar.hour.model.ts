export class CalendarHour {
   date: Date;
   weekDay: string;
   hour: string;
   working: boolean;
   booked: boolean;

   constructor(date: Date, weekDay: string, hour: string, working: boolean, booked: boolean) {
      this.date = date;
      this.weekDay = weekDay;
      this.hour = hour;
      this.working = working;
      this.booked = booked;
   }
}
