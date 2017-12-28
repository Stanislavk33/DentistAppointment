export class EditPatientProfileModel{
  email: string;
  id: number;
  firstName:string;
  lastName:string;


  constructor(email: string,firstName:string,lastName:string,id:number) {
    this.email = email;
    this.firstName=firstName;
    this.lastName=lastName;
    this.id= id;
  }
}
