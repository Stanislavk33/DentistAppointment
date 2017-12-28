import {Injectable} from "@angular/core";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {DentistModel} from "../../../../models/dentist.model";
import {UserModel} from "../../../../models/user.model";

@Injectable()
export class DentistCommonService {

  constructor(private httpClient: HttpClient) {
  }

  public getFilteredDentists(name, city, type): Observable<DentistModel[]> {
    let params = new HttpParams()
      .set('name', name)
      .set('city', city)
      .set('type', type);
    return this.httpClient.get<DentistModel[]>('dentists/', {params: params});
  }

  public getDentists(): Observable<DentistModel[]> {
    return this.httpClient.get<DentistModel[]>("/getDentists");
  }

  public getUserInfo(id: number): Observable<UserModel> {
    return this.httpClient.get('user/' + id);
  }

  public getAvgRating(id: number): Observable<number> {
    return this.httpClient.get('dentistRating/' + id);
  }
}
