package com.nbu.projects.dentistappointmentsys.controllers.request_models.login;

public class LoginModel {

  String email;
  String password;

  public LoginModel() {
  }

  public LoginModel(String email, String password) {
    this.email = email;
    this.password = password;
  }

  public String getEmail() {
    return email;
  }

  public void setEmail(String email) {
    this.email = email;
  }

  public String getPassword() {
    return password;
  }

  public void setPassword(String password) {
    this.password = password;
  }
}
