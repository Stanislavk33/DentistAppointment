import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";

@Injectable()
export class DentistRatingService{

  constructor(private httpClient: HttpClient) {
  }

  // public setPatient(): Observable<Patient[]> {
  //   return this.httpClient.get('user');
  // }

}
