package com.nbu.projects.dentistappointmentsys.controllers.result_models.login;

import com.nbu.projects.dentistappointmentsys.controllers.result_models.common.BaseResultModel;
import com.nbu.projects.dentistappointmentsys.controllers.result_models.common.UserResultModel;

public class RegisterPatientModel extends BaseResultModel {

  private UserResultModel user;

  public RegisterPatientModel(String result,
                              String message,
                              UserResultModel user) {
    super(result, message);
    this.user = user;
  }

  public UserResultModel getUser() {
    return user;
  }

  public void setUser(UserResultModel user) {
    this.user = user;
  }
}
