import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {EditPatientProfileModel} from "../../../services/model/edit.user.profile.model";
import {EditProfileResultModel} from "../../../models/editprofile.result.model";
import {UserModel} from "../../../models/user.model";
import {CommonUtil} from "../../../util/common.util";


@Injectable()
export class EditPatientProfileService{

  constructor(private http: HttpClient) {
  }

  public editPatientProfile(email: string,
                            firstName:string,
                            lastName:string,
                            id:number): Observable<EditProfileResultModel> {


    let requestModel: EditPatientProfileModel = new EditPatientProfileModel(email,firstName,lastName,id);
    let defaultModel:UserModel = CommonUtil.getSessionUser();

    if (requestModel.email ===''){requestModel.email=defaultModel.email};
    if(requestModel.firstName===''){requestModel.firstName=defaultModel.firstName};
    if (requestModel.lastName===''){requestModel.lastName=defaultModel.lastName};


    return this.http.post<EditProfileResultModel>('/editPatientProfile', requestModel);

  }
}
