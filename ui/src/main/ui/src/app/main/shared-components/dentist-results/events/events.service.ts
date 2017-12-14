import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class EventsService{

  constructor(private httpClient: HttpClient) {
  }

  // public setPatient(): Observable<Patient[]> {
  //   return this.httpClient.get('user');
  // }

}
