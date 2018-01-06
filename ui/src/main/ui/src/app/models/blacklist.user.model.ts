export class BlacklistUserModel {
   executorEmail: string;
   targetId: number;
   doBlacklist: boolean;

   constructor(executorEmail: string,
               targetId: number,
               doBlacklist: boolean) {
      this.executorEmail = executorEmail;
      this.targetId = targetId;
      this.doBlacklist = doBlacklist;
   }
}