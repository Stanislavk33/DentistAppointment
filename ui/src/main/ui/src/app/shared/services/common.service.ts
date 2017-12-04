import {HttpClient} from "@angular/common/http";
import {LoginResultModel} from "../models/login.result.model";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Observable";
import {Constants} from "../models/constants";
import {LoginModel} from "../main/app/login/model/login.model";
import {PatientRegisterModel} from "../main/app/register/model/request/patient.register.model";
import {RegisterModel} from "../main/app/register/model/register.model";
import {DentistRegisterModel} from "../main/app/register/model/request/dentist.register.model";

@Injectable()
export class CommonService {

   private static readonly LOGIN_URL: string = "/authenticate";
   private static readonly REGISTER_PATIENT_URL: string = "/registerPatient";
   private static readonly REGISTER_DENTIST_URL: string = "/registerDentist";

   constructor(private httpClient: HttpClient) {
   }

   public logIn(loginModel: LoginModel): Observable<LoginResultModel> {

      return this.httpClient.post<LoginResultModel>(CommonService.LOGIN_URL, loginModel);
   }

   public register(registerModel: RegisterModel): Observable<LoginResultModel> {
      if (registerModel.role == Constants.ROLE_PATIENT) {
         return this.registerPatient(new PatientRegisterModel(registerModel));
      } else if (registerModel.role == Constants.ROLE_DENTIST) {
         return this.registerDentist(new DentistRegisterModel(registerModel));
      } else {
         console.error("Invalid role. Cannot register.");
         return null;
      }
   }

   private registerPatient(patientRegisterModel: PatientRegisterModel) {
      return this.httpClient.post(CommonService.REGISTER_PATIENT_URL, patientRegisterModel);
   }

   private registerDentist(dentistRegisterModel: DentistRegisterModel) {
      return this.httpClient.post(CommonService.REGISTER_DENTIST_URL, dentistRegisterModel);
   }
}
