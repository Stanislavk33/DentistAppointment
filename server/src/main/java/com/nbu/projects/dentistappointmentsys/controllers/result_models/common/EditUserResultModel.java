package com.nbu.projects.dentistappointmentsys.controllers.result_models.common;

import com.nbu.projects.dentistappointmentsys.controllers.models.EditUserProfileModel;

public class EditUserResultModel extends BaseResultModel {

  private EditUserProfileModel editprofile;

  public EditUserResultModel(String result,
                             String message,
                             EditUserProfileModel editprofile) {
    super(result, message);
    this.editprofile = editprofile;
  }

  public EditUserProfileModel getEditprofile() {
    return editprofile;
  }

  public void setEditprofile(EditUserProfileModel editprofile) {
    this.editprofile = editprofile;
  }
}
