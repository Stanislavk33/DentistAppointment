import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Observable";
import {HttpClient, HttpParams} from "@angular/common/http";
import {DentistRating} from "../main/patient-view/dentist-results/dentist-profile/ratings/dentist.rating.model";

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

  public existsRating(patientId, dentistId): Observable<Boolean>{
    let params = new HttpParams()
      .set('patientId', patientId)
      .set('dentistId', dentistId);
    return this.http.get<Boolean>('canRate/', {params: params});
  }

  public getDentistRatingForPatient(dentistId, patientId): Observable<DentistRating>{
    let params = new HttpParams()
      .set('dentistId', dentistId)
      .set('patientId', patientId);
    return this.http.get<DentistRating>('getCurrentRate/', {params: params});
  }

}
