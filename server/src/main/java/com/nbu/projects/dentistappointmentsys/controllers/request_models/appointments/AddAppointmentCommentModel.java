package com.nbu.projects.dentistappointmentsys.controllers.request_models.appointments;

import java.util.Date;

public class AddAppointmentCommentModel {

   private String dentistEmail;
   private Date date;
   private String comment;

   public AddAppointmentCommentModel() {
   }

   public AddAppointmentCommentModel(String dentistEmail, Date date, String comment) {
      this.dentistEmail = dentistEmail;
      this.date = date;
      this.comment = comment;
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

   public String getComment() {
      return comment;
   }

   public void setComment(String comment) {
      this.comment = comment;
   }
}
