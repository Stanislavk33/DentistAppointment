import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {WorkingDaysResultModel} from "../models/working.days.result.model";
import {EditWorkingDaysModel} from "../main/dentist-view/schedule/model/edit.working.days.model";
import {BaseResultModel} from "../models/base.result.model";
import {WorkingDayModel} from "../models/working.day.model";
import {DayScheduleModel} from "../main/dentist-view/schedule/model/day.schedule.model";
import {AppointmentModel} from "../models/appointment.model";
import {UserAppointmentsModel} from "../models/user.appointments.model";

@Injectable()
export class AppointmentService {

   private static readonly EDIT_DENTIST_WORKING_DAYS: string = "/editDentistWorkingDays";
   private static readonly GET_DENTIST_WORKING_DAYS: string = "/getDentistWorkingDays";
   private static readonly GET_DENTIST_APPOINTMENTS: string = "/getDentistAppointments";
   private static readonly MAKE_APPOINTMENT: string = "/makeAppointment";

   constructor(private httpClient: HttpClient) {
   }

   public getDentistWorkingDays(dentistEmail: string): Observable<WorkingDaysResultModel> {
      return this.httpClient.post<WorkingDaysResultModel>(
            AppointmentService.GET_DENTIST_WORKING_DAYS,
            dentistEmail);
   }

   public editDentistWorkingDays(dentistEmail: string,
                                 dayScheduleModel: DayScheduleModel): Observable<BaseResultModel> {

      let data: EditWorkingDaysModel = new EditWorkingDaysModel();
      data.dentistEmail = dentistEmail;
      data.workingDayModel = new WorkingDayModel(dayScheduleModel);
      return this.httpClient.post<BaseResultModel>(AppointmentService.EDIT_DENTIST_WORKING_DAYS,
                                                   data);
   }

   public getDentistAppointments(dentistEmail: string): Observable<UserAppointmentsModel> {
      return this.httpClient.post<UserAppointmentsModel>(AppointmentService.GET_DENTIST_APPOINTMENTS,
                                                         dentistEmail);
   }

   public makeAppointment(dentistEmail: string,
                          patientEmail: string,
                          date: Date): Observable<BaseResultModel> {
      let data: AppointmentModel = new AppointmentModel();
      data.dentistEmail = dentistEmail;
      data.patientEmail = patientEmail;
      data.date = date;
      return this.httpClient.post<BaseResultModel>(AppointmentService.MAKE_APPOINTMENT,
                                                   data);

   }
}