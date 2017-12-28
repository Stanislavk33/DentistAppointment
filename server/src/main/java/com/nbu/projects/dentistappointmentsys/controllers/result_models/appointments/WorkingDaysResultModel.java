package com.nbu.projects.dentistappointmentsys.controllers.result_models.appointments;

import com.nbu.projects.dentistappointmentsys.controllers.models.WorkingDayModel;
import com.nbu.projects.dentistappointmentsys.controllers.result_models.common.BaseResultModel;
import java.util.Set;

public class WorkingDaysResultModel extends BaseResultModel {

   private Set<WorkingDayModel> workingDays;

   public WorkingDaysResultModel(String result,
                                 String message,
                                 Set<WorkingDayModel> workingDays) {
      super(result, message);
      this.workingDays = workingDays;
   }

   public Set<WorkingDayModel> getWorkingDays() {
      return workingDays;
   }

   public void setWorkingDays(Set<WorkingDayModel> workingDays) {
      this.workingDays = workingDays;
   }
}
