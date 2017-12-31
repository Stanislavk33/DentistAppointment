export class PatientAppointmentModel {
  id: number;
  userId: number;
  dentistId: number;
  dentistFirstName: string = '';
  dentistLastName: string = '';
  date: string;
  comment: string;

  constructor() {
  }
}
