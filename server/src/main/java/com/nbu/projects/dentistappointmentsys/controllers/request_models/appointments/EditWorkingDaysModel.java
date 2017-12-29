package com.nbu.projects.dentistappointmentsys.controllers.request_models.appointments;

import com.nbu.projects.dentistappointmentsys.controllers.models.WorkingDayModel;

public class EditWorkingDaysModel {

   private String dentistEmail;
   private WorkingDayModel workingDayModel;

   public EditWorkingDaysModel() {
   }

   public EditWorkingDaysModel(String dentistEmail,
                               WorkingDayModel workingDayModel) {
      this.dentistEmail = dentistEmail;
      this.workingDayModel = workingDayModel;
   }

   public String getDentistEmail() {
      return dentistEmail;
   }

   public void setDentistEmail(String dentistEmail) {
      this.dentistEmail = dentistEmail;
   }

   public WorkingDayModel getWorkingDayModel() {
      return workingDayModel;
   }

   public void setWorkingDayModel(WorkingDayModel workingDayModel) {
      this.workingDayModel = workingDayModel;
   }
}
