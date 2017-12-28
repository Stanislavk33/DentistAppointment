package com.nbu.projects.dentistappointmentsys.controllers.result_models.appointments;

import com.nbu.projects.dentistappointmentsys.controllers.models.AppointmentModel;
import com.nbu.projects.dentistappointmentsys.controllers.result_models.common.BaseResultModel;
import java.util.Set;

public class UserAppointmentsResultModel extends BaseResultModel {

  private Set<AppointmentModel> appointments;

  public UserAppointmentsResultModel(String result,
                                     String message,
                                     Set<AppointmentModel> appointments) {
    super(result, message);
    this.appointments = appointments;
  }

  public Set<AppointmentModel> getAppointments() {
    return appointments;
  }

  public void setAppointments(Set<AppointmentModel> appointments) {
    this.appointments = appointments;
  }
}
