package com.nbu.projects.dentistappointmentsys.controllers.result_models.common;

public class BaseResultModel {

  protected String result;
  protected String message;

  public BaseResultModel() {
  }

  public BaseResultModel(String result, String message) {
    this.result = result;
    this.message = message;
  }

  public String getResult() {
    return result;
  }

  public void setResult(String result) {
    this.result = result;
  }

  public String getMessage() {
    return message;
  }

  public void setMessage(String message) {
    this.message = message;
  }
}
