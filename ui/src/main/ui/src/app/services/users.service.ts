import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {UsersResultModel} from "../models/users.result.model";
import {Injectable} from "@angular/core";
import {PatientResultModel} from "../main/dentist-view/patients/patient.result.model";
import {CommentModel} from "../models/comment.model";
import {PastAppointmentModel} from "../models/past.appointment.model";
import {BaseResultModel} from "../models/base.result.model";
import {BlacklistUserModel} from "../models/blacklist.user.model";
import {UserBlacklistModel} from "../models/user.blacklist.model";

@Injectable()
export class UsersService {

   private static readonly GET_ALL_DENTISTS_URL: string = "/getAllDentists";
   private static readonly GET_ALL_PATIENTS_URL: string = "/getAllPatients";
   private static readonly BLACKLIST_USER_URL: string = "/blacklistUser";
   private static readonly GET_USER_BLACKLIST_URL: string = "/getUserBlacklist";

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

   public blacklistUser(executorEmail: string,
                        targetId: number,
                        doBlock: boolean): Observable<BaseResultModel> {
      return this.httpClient.post<BaseResultModel>(
            UsersService.BLACKLIST_USER_URL,
            new BlacklistUserModel(executorEmail, targetId, doBlock));
   }

   public getUserBlacklist(userId: number): Observable<UserBlacklistModel> {
      return this.httpClient.post<UserBlacklistModel>(
            UsersService.GET_USER_BLACKLIST_URL,
            userId);
   }
}
