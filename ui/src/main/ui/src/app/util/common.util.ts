import {Constants} from "../models/constants";
import {UserModel} from "../models/user.model";

export class CommonUtil {

   public static putSessionUser(user: UserModel): void {
      sessionStorage.setItem(Constants.SESSION_USER, JSON.stringify(user));
   }

   public static removeUser(): void {
     sessionStorage.removeItem(Constants.SESSION_USER);
   }

   public static getSessionUser(): UserModel {
      return JSON.parse(sessionStorage.getItem(Constants.SESSION_USER)) as UserModel;
   }

   public static getSessionUserRole(): string {
      let user: UserModel = this.getSessionUser();
      return user ? user.role : "";
   }

   public static getSessionUserEmail(): string {
     let user: UserModel = this.getSessionUser();
     return user ? user.email : "";
   }
   public static getSessionUserId(): number {
     let user: UserModel = this.getSessionUser();
     return user ? user.id: 0;
   }

   public static getSessionUserFullName(): string {
     let user: UserModel = this.getSessionUser();
     return user ? (user.firstName + ' ' + user.lastName) : "";
  }

   public static toDate(str: string): Date {
      return new Date("2000-01-01T" + str + ":00");
   }

   public static getTime(millis: number): string {
      if (millis == null) {
         return "";
      }
      let date: Date = new Date(millis);
      return date.toTimeString().substr(3, 5);
   }

   public static getReadableDay(weekDay: string): string {
      return weekDay.substr(0, 1) + weekDay.substr(1).toLowerCase();
   }
}
