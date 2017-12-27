export class EditDentistProfileModel{
  email: string='';
  firstName:string='';
  lastName:string='';
  id: number=0;
  dentistType:string='';
  city:string='';



  constructor(email: string, id: number,firstName: string, lastName: string,  dentistType: string,city:string) {
    this.email = email;
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.dentistType = dentistType;
    this.city = city;
  }
}
