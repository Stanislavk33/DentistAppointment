import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {UsersResultModel} from "../models/users.result.model";
import {Injectable} from "@angular/core";
import {DentistModel} from "../models/dentist.model";

@Injectable()
export class UsersService {

   private static readonly GET_ALL_DENTISTS_URL: string = "/getAllDentists";
   private static readonly GET_ALL_PATIENTS_URL: string = "/getAllPatients";

   constructor(private httpClient: HttpClient) {
   }

   public getAllDentists(adminEmail: string): Observable<UsersResultModel> {
      return this.httpClient.post<UsersResultModel>(UsersService.GET_ALL_DENTISTS_URL, adminEmail);
   }

   public getDentists(): Observable<DentistModel[]> {
      return this.httpClient.get<DentistModel[]>("/getDentists");
   }

   public getAllPatients(adminEmail: string): Observable<UsersResultModel> {
      return this.httpClient.post<UsersResultModel>(UsersService.GET_ALL_PATIENTS_URL, adminEmail);
   }

   public getFilteredDentists(name, city, type): Observable<DentistModel[]> {
     let params = new HttpParams()
       .set('name', name)
       .set('city', city)
       .set('type', type);
     return this.httpClient.get<DentistModel[]>('dentists/', {params: params});
   }

}
