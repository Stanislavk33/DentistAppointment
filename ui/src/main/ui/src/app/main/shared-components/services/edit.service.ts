import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {ChangePassModel} from "../../../services/model/change.pass.model";

@Injectable()
export class EditService {

  constructor(private http: HttpClient) {
  }

  public changePassword(userEmail: string,
                        oldPass: string,
                        newPass: string): Observable<Boolean> {

    let requestModel: ChangePassModel = new ChangePassModel(userEmail, oldPass, newPass);
    return this.http.post<Boolean>('/changePassword', requestModel);
  }
}
