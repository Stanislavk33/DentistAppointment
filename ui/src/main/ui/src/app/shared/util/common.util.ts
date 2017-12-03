import {Constants} from "../models/constants";
import {UserModel} from "../models/user.model";

export class CommonUtil {

   public static putSessionUser(user: UserModel): void {
      sessionStorage.setItem(Constants.SESSION_USER, JSON.stringify(user));
   }

   public static getSessionUser(): UserModel {
      return JSON.parse(sessionStorage.getItem(Constants.SESSION_USER)) as UserModel;
   }

   public static getSessionUserRole(): string {
      let user: UserModel = this.getSessionUser()
      return user ? user.role : "";
   }
}
