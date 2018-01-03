import {AppointmentModel} from "./appointment.model";
import {WorkingDayModel} from "./working.day.model";

export class UserModel {
   id: number = 0;
   email: string = "";
   role: string = "";
   firstName: string = "";
   lastName: string = "";
   timesBlacklisted: number = 0;
   blacklist: number[] = [];
   dentistType: string = "";
   city: string = "";
   rating: number = 0;
   appointments: AppointmentModel[];
   workingDays: WorkingDayModel[];
   generalInformation:string= "";
}
