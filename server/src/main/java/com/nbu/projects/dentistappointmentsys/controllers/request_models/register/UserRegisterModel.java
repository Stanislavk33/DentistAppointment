package com.nbu.projects.dentistappointmentsys.controllers.request_models.register;

import com.nbu.projects.dentistappointmentsys.models.User;
import com.nbu.projects.dentistappointmentsys.models.types.DentistType;
import com.nbu.projects.dentistappointmentsys.models.types.Role;
import com.nbu.projects.dentistappointmentsys.service.NotificationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

public class UserRegisterModel {
  private Long Id;
  private String email;
  private String password;
  private String firstName;
  private String lastName;
  private Role role;
  private String city;
  private DentistType dentistType;

  public UserRegisterModel() {
  }

  public UserRegisterModel(Long Id,
                          String email,
                           String password,
                           String firstName,
                           String lastName,
                           Role role,
                           String city,
                           DentistType dentistType) {
    this.Id=Id;
    this.email = email;
    this.password = password;
    this.firstName = firstName;
    this.lastName = lastName;
    this.role = role;
    this.city = city;
    this.dentistType = dentistType;
  }


  public Long getId(){return Id;}
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

  public String getFirstName() {
    return firstName;
  }

  public void setFirstName(String firstName) {
    this.firstName = firstName;
  }

  public String getLastName() {
    return lastName;
  }

  public void setLastName(String lastName) {
    this.lastName = lastName;
  }

  public Role getRole() {
    return role;
  }

  public void setRole(Role role) {
    this.role = role;
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
