import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Observable";
import {DentistRating} from "./dentist.rating.model";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class RatingsService{

  constructor(private http: HttpClient) {
  }

  public getDentistRating(id): Observable<DentistRating[]> {
    return this.http.get('rating/' + id);
  }

  public rateDentist(raterId: number,
                     ratedId: number,
                     rate: number,
                     comment: string) : Observable<Boolean>{

    let requestModel: DentistRating = new DentistRating(raterId, ratedId, rate, comment);
    return this.http.post<Boolean>('/addRating', requestModel);
  }
}
