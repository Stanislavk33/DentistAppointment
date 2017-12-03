import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {Dentist} from "../search/dentist.model";

@Injectable()
export class DentistProfileService{

  constructor(private httpClient: HttpClient) {
  }

  public getDentist(id): Observable<Dentist[]> {
    return this.httpClient.get('dentist/' + id);
  }
}
