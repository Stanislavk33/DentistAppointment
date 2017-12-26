import {RegisterModel} from "../register.model";
import {Constants} from "../../../../../models/constants";

export class PatientRegisterModel {
   email: string;
   password: string;
   firstName: string;
   lastName: string;
   role: string;

   constructor(registerModel: RegisterModel) {
      this.email = registerModel.email;
      this.password = registerModel.password;
      this.firstName = registerModel.firstName;
      this.lastName = registerModel.lastName;
      this.role = Constants.ROLE_PATIENT;
   }
}
