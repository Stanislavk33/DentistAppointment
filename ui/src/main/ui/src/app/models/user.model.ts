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
   openHours: string[] = [];
}
