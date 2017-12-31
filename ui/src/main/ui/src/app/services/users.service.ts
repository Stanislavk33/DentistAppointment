import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {UsersResultModel} from "../models/users.result.model";
import {Injectable} from "@angular/core";
import {PatientResultModel} from "../main/dentist-view/patients/patient.result.model";
import {CommentModel} from "../models/comment.model";
import {PastAppointmentModel} from "../models/past.appointment.model";

@Injectable()
export class UsersService {

   private static readonly GET_ALL_DENTISTS_URL: string = "/getAllDentists";
   private static readonly GET_ALL_PATIENTS_URL: string = "/getAllPatients";

   constructor(private httpClient: HttpClient) {
   }

   public getAllDentists(adminEmail: string): Observable<UsersResultModel> {
      return this.httpClient.post<UsersResultModel>(UsersService.GET_ALL_DENTISTS_URL, adminEmail);
   }

   public getAllPatients(adminEmail: string): Observable<UsersResultModel> {
      return this.httpClient.post<UsersResultModel>(UsersService.GET_ALL_PATIENTS_URL, adminEmail);
   }

  public getPatientsByName(id: number): Observable<PatientResultModel[]> {
    return this.httpClient.get<PatientResultModel[]>('/patients/' + id);
  }

   public getPatients(id: number): Observable<PatientResultModel[]> {
     return this.httpClient.get<PatientResultModel[]>('/patients/' + id);
   }

   public getPastAppointments(id: number): Observable<PastAppointmentModel[]> {
     return this.httpClient.get<PastAppointmentModel[]>('pastAppointments/' + id);
   }

   public addAppointmentComment(id: number, comment: string): Observable<Boolean> {
     let requestModel: CommentModel = new CommentModel(id, comment);
     return this.httpClient.post<Boolean>('addAppointmentComment', requestModel);
  }
}
