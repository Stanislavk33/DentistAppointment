import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {Dentist} from "../../search/dentist.model";
import {DentistRating} from "./dentist-rating.model";

@Injectable()
export class DentistRatingService{

  constructor(private httpClient: HttpClient) {
  }

   public getDentistRating(id): Observable<DentistRating[]> {
     return this.httpClient.get('rating/' + id);
   }

   public getUserName(): Observable<string>{
    return this.httpClient.get('api1')
  }

}
