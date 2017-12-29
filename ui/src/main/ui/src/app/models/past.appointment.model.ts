export class PastAppointmentModel {
   id: number;
   userId: number;
   patientId: number;
   patientFirstName: string = '';
   patientLastName: string = '';
   date: string;
   comment: string;

   constructor() {
   }
}