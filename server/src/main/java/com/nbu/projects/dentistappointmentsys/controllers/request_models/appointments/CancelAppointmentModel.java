package com.nbu.projects.dentistappointmentsys.controllers.request_models.appointments;

import java.util.Date;

public class CancelAppointmentModel {

   private String initiatorEmail;
   private String dentistEmail;
   private Date date;

   public CancelAppointmentModel() {
   }

   public CancelAppointmentModel(String initiatorEmail, String dentistEmail, Date date) {
      this.initiatorEmail = initiatorEmail;
      this.dentistEmail = dentistEmail;
      this.date = date;
   }

   public String getInitiatorEmail() {
      return initiatorEmail;
   }

   public void setInitiatorEmail(String initiatorEmail) {
      this.initiatorEmail = initiatorEmail;
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
}
