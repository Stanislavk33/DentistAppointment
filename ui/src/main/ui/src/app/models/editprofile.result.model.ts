import {BaseResultModel} from "./base.result.model";
import {EditPatientProfileModel} from "../services/model/edit.user.profile.model";

export class EditProfileResultModel extends BaseResultModel
{
  edit: EditPatientProfileModel;

}
