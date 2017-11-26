import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {Dentist} from "../search/dentist.model";

@Injectable()
export class DentistService{

  constructor(private httpClient: HttpClient) {
  }

  // public setPatient(): Observable<Patient[]> {
  //   return this.httpClient.get('user');
  // }

}
