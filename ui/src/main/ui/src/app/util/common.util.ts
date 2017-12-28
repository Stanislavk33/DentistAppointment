import {Constants} from "../models/constants";
import {UserModel} from "../models/user.model";

export class CommonUtil {

   public static putSessionUser(user: UserModel): void {
      sessionStorage.setItem(Constants.SESSION_USER, JSON.stringify(user));
   }

   public static removeUser(): void {
     sessionStorage.removeItem('currentUser');
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
}

