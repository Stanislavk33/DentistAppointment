import {BaseResultModel} from "../../../../../models/base.result.model";
import {UserModel} from "../../../../../models/user.model";

export class RegisterPatientResultModel extends BaseResultModel {
   user: UserModel;
}
