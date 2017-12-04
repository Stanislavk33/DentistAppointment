import {UserModel} from "./user.model";
import {DentistInfo} from "./dentist.info";

export class DentistModel extends UserModel {
   dentistInfo: DentistInfo;
}
