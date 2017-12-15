export class ChangePassModel {
  userEmail: string;
  oldPass: string;
  newPass: string;

  constructor(userEmail: string, oldPass: string, newPass: string) {
    this.userEmail = userEmail;
    this.oldPass = oldPass;
    this.newPass = newPass;
  }
}
