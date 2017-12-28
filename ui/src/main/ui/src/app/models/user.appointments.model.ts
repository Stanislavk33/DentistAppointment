import {BaseResultModel} from "./base.result.model";
import {AppointmentModel} from "./appointment.model";

export class UserAppointmentsModel extends BaseResultModel {
   appointments: AppointmentModel[];
}