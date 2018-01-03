package com.nbu.projects.dentistappointmentsys.controllers.request_models.register;

import com.nbu.projects.dentistappointmentsys.models.types.DentistType;
import com.nbu.projects.dentistappointmentsys.models.types.Role;

public class DentistRegisterModel extends UserRegisterModel {

  String city;
  DentistType dentistType;
  String generalInformation;

  public DentistRegisterModel() {
  }

  public DentistRegisterModel(Long Id,
                              String email,
                              String password,
                              String firstName,
                              String lastName,
                              Role role,
                              String city,
                              DentistType dentistType,
                              String generalInformation) {
    super(Id,email, password, firstName, lastName, role, city, dentistType,generalInformation);
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

  @Override
  public String getGeneralInformation() {
    return generalInformation;
  }

  @Override
  public void setGeneralInformation(String generalInformation) {
    this.generalInformation = generalInformation;
  }

  public void setDentistType(DentistType dentistType) {
    this.dentistType = dentistType;
  }
}
