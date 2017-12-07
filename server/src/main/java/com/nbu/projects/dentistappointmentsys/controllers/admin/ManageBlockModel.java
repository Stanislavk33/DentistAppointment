package com.nbu.projects.dentistappointmentsys.controllers.admin;

public class ManageBlockModel {

  private String adminEmail;
  private String targetUserEmail;
  private Boolean block;

  public ManageBlockModel() {
  }

  public ManageBlockModel(String adminEmail, String targetUserEmail, Boolean block) {
    this.adminEmail = adminEmail;
    this.targetUserEmail = targetUserEmail;
    this.block = block;
  }

  public String getAdminEmail() {
    return adminEmail;
  }

  public void setAdminEmail(String adminEmail) {
    this.adminEmail = adminEmail;
  }

  public String getTargetUserEmail() {
    return targetUserEmail;
  }

  public void setTargetUserEmail(String targetUserEmail) {
    this.targetUserEmail = targetUserEmail;
  }

  public Boolean getBlock() {
    return block;
  }

  public void setBlock(Boolean block) {
    this.block = block;
  }
}
