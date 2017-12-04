export class ManageBlockModel {
   adminEmail: string;
   targetUserEmail: string;
   block: boolean;

   constructor(adminEmail: string, targetUserEmail: string, block: boolean) {
      this.adminEmail = adminEmail;
      this.targetUserEmail = targetUserEmail;
      this.block = block;
   }
}