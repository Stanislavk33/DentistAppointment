export class EditDentistProfileModel{
  currentUserEmail: string = '';
  email: string='';
  firstName:string='';
  lastName:string='';
  id: number=0;
  dentistType:string='';
  city:string='';


   constructor(currentUserEmail: string,
               email: string,
               id: number,
               firstName: string,
               lastName: string,
               dentistType: string,
               city: string) {

    this.currentUserEmail = currentUserEmail;
    this.email = email;
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.dentistType = dentistType;
    this.city = city;
  }
}
