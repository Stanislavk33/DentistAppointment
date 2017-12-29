import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Observable";
import {DentistRating} from "./dentist.rating.model";
import {HttpClient, HttpParams} from "@angular/common/http";

@Injectable()
export class RatingsService{

  constructor(private http: HttpClient) {
  }

  public getDentistRating(id): Observable<DentistRating[]> {
    return this.http.get('rating/' + id);
  }

  public rateUser(raterId: number,
                     ratedId: number,
                     rate: number,
                     comment: string): Observable<Boolean>{

    let requestModel: DentistRating = new DentistRating(raterId, ratedId, rate, comment);
    return this.http.post<Boolean>('/addRating', requestModel);
  }

  public canRate(patientId, dentistId): Observable<Boolean>{
    let params = new HttpParams()
      .set('patientId', patientId)
      .set('dentistId', dentistId);
    return this.http.get<Boolean>('canRate/', {params: params});
  }

}
