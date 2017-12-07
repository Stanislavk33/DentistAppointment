package com.nbu.projects.dentistappointmentsys.controllers.result_models.common;

import java.util.List;

public class UsersResultModel extends BaseResultModel {

  private List<UserResultModel> users;

  public UsersResultModel(String result,
                          String message,
                          List<UserResultModel> users) {
    super(result, message);
    this.users = users;
  }

  public List<UserResultModel> getUsers() {
    return users;
  }

  public void setUsers(List<UserResultModel> users) {
    this.users = users;
  }
}
