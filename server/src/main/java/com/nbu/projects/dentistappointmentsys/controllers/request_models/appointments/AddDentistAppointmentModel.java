package com.nbu.projects.dentistappointmentsys.controllers.request_models.appointments;

import java.util.Date;

public class AddDentistAppointmentModel {

   private String dentistEmail;
   private Date date;

   public AddDentistAppointmentModel() {
   }

   public AddDentistAppointmentModel(String dentistEmail, Date date) {
      this.dentistEmail = dentistEmail;
      this.date = date;
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
