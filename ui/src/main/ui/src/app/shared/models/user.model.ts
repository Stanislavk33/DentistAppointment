export class UserModel {
   email: string = "";
   role: string = "";
   firstName: string = "";
   lastName: string = "";
   timesBlacklisted: number = 0;
   blacklist: number[] = [];
}
