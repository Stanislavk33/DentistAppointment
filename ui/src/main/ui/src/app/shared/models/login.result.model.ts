import {BaseResultModel} from "./base.result.model";
import {UserModel} from "./user.model";

export class LoginResultModel extends BaseResultModel {
   user: UserModel;
}
