import {BaseResultModel} from "./base.result.model";
import {UserModel} from "./user.model";

export class UsersResultModel extends BaseResultModel {
   users: UserModel[];
}
