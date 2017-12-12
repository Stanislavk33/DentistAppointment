import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Observable";
import {DentistRating} from "./dentist-rating.model";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class RatingsService{

  constructor(private httpClient: HttpClient) {
  }

  public getDentistRating(id): Observable<DentistRating[]> {
    return this.httpClient.get('rating/' + id);
  }
}
