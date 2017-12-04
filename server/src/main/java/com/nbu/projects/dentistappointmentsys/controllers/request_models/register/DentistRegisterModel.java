package com.nbu.projects.dentistappointmentsys.controllers.request_models.register;

import com.nbu.projects.dentistappointmentsys.models.types.DentistType;
import com.nbu.projects.dentistappointmentsys.models.types.Role;

public class DentistRegisterModel extends UserRegisterModel {

  String city;
  DentistType dentistType;

  public DentistRegisterModel() {
  }

  public DentistRegisterModel(String email,
                              String password,
                              String firstName,
                              String lastName,
                              Role role,
                              String city,
                              DentistType dentistType) {
    super(email, password, firstName, lastName, role);
    this.city = city;
    this.dentistType = dentistType;
  }

  public String getCity() {
    return city;
  }

  public void setCity(String city) {
    this.city = city;
  }

  public DentistType getDentistType() {
    return dentistType;
  }

  public void setDentistType(DentistType dentistType) {
    this.dentistType = dentistType;
  }
}
