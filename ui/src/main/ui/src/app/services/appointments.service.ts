import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Observable";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class RatingsService{

  constructor(private httpClient: HttpClient) {
  }

  // public getDentistRating(id): Observable<Appointment[]> {
  //   return this.httpClient.get('rating/' + id);
  // }
}
