import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {EditDentistProfileModel} from "../../../services/model/edit.dentist.profile.model";
import {UserModel} from "../../../models/user.model";
import {CommonUtil} from "../../../util/common.util";
import {Injectable} from "@angular/core";
@Injectable()
export class EditDentistProfileService{

  constructor(private http: HttpClient) {
  }

  public editDentistProfile(email:string,
                            id:number,
                            firstName:string,
                            lastName:string,
                            dentistType:string,
                            city:string,
                            generalInformation:string): Observable<Boolean> {



    let requestModel: EditDentistProfileModel =
          new EditDentistProfileModel(CommonUtil.getSessionUserEmail(),
                                      email,
                                      id,
                                      firstName,
                                      lastName,
                                      dentistType,
                                      city,generalInformation);
    let defaultModel:UserModel = CommonUtil.getSessionUser();

    if (requestModel.email ===''){requestModel.email=defaultModel.email};
    if(requestModel.firstName===''){requestModel.firstName=defaultModel.firstName};
    if (requestModel.lastName===''){requestModel.lastName=defaultModel.lastName};
    if(requestModel.dentistType===''){requestModel.dentistType=defaultModel.dentistType};
    if (requestModel.city===''){requestModel.city=defaultModel.city};
    if(requestModel.generalInformation==='' ){requestModel.generalInformation=defaultModel.generalInformation};


    return this.http.post<Boolean>('/editDentistProfile', requestModel);

  }
}
