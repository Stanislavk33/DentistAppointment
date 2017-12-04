import {RegisterModel} from "../register.model";
import {Constants} from "../../../../../models/constants";

export class DentistRegisterModel {
   email: string;
   password: string;
   firstName: string;
   lastName: string;
   role: string;

   city: string;
   dentistType: string;

   constructor(registerModel: RegisterModel) {
      this.email = registerModel.email;
      this.password = registerModel.password;
      this.firstName = registerModel.firstName;
      this.lastName = registerModel.lastName;
      this.role = Constants.ROLE_DENTIST;
      this.city = registerModel.city;

      switch (registerModel.type) {
         case Constants.TYPE_ORTHODONT:
            this.dentistType = Constants.TYPE_ORTHODONT;
            break;
         case Constants.TYPE_SURGEON:
            this.dentistType = Constants.TYPE_SURGEON;
            break;
         case Constants.TYPE_NORMAL:
         default:
            this.dentistType = Constants.TYPE_NORMAL;
      }
   }
}
