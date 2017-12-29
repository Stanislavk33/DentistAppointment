package com.nbu.projects.dentistappointmentsys.controllers.request_models.appointments;

import java.util.Date;

public class MakeAppointmentModel {

   private String dentistEmail;
   private Date date;
   private String patientEmail;

   public MakeAppointmentModel() {
   }

   public MakeAppointmentModel(String dentistEmail,
                               Date date,
                               String patientEmail) {
      this.dentistEmail = dentistEmail;
      this.date = date;
      this.patientEmail = patientEmail;
   }

   public String getDentistEmail() {
      return dentistEmail;
   }

   public void setDentistEmail(String dentistEmail) {
      this.dentistEmail = dentistEmail;
   }

   public Date getDate() {
      return date;
   }

   public void setDate(Date date) {
      this.date = date;
   }

   public String getPatientEmail() {
      return patientEmail;
   }

   public void setPatientEmail(String patientEmail) {
      this.patientEmail = patientEmail;
   }
}
