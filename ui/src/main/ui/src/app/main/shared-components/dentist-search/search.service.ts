import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {HttpParams} from "@angular/common/http";
import {RequestOptions} from "@angular/http";

@Injectable()
export class SearchService{

  constructor(private httpClient: HttpClient) {
  }

/*
  public getDentistsByRating(rating): Observable<Dentist[]> {
    let URL = "dentists/" + rating;
    return this.httpClient.get(URL);
  }

  public getDentists(name, city, type, rating): Observable<Dentist[]>{

      let params = new HttpParams()
        .set('name', name)
        .set('city', city)
        .set('type', type)
        .set('rating', rating);

    return this.httpClient.get('dentists/', {params: params});
*/

    // Make the API call using the new parameters.

  // public setPatient(): Observable<Patient[]> {
  //   return this.httpClient.get('user');
  // }

}
