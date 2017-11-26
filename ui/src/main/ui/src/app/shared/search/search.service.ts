import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {Dentist} from "../search/dentist.model";

@Injectable()
export class SearchService{

  constructor(private httpClient: HttpClient) {
  }

  public getDentists(): Observable<Dentist[]> {
    return this.httpClient.get('dentists');
  }

  public getDentistsByCity(city): Observable<Dentist[]> {
    let URL = "dentists/city/" + city;
    return this.httpClient.get(URL);
  }
  public getDentistsByName(name): Observable<Dentist[]> {
    let URL = "dentists/name/" + name;
    return this.httpClient.get(URL);
  }

  public getDentistsByRating(rating): Observable<Dentist[]> {
    let URL = "dentists/byrating/" + rating;
    return this.httpClient.get(URL);
  }

  public getDentistsByType(type): Observable<Dentist[]> {
    let URL = "dentists/type/" + type;
    return this.httpClient.get(URL);
  }

  // public setPatient(): Observable<Patient[]> {
  //   return this.httpClient.get('user');
  // }

}
