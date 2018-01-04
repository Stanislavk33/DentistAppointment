import {UserModel} from "./user.model";

export class DentistModel extends UserModel {
  type: string;
  city: string;
  generalInformation: string;
}
