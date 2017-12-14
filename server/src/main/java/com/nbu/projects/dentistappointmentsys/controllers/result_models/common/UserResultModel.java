package com.nbu.projects.dentistappointmentsys.controllers.result_models.common;


import com.nbu.projects.dentistappointmentsys.models.OpenHour;
import com.nbu.projects.dentistappointmentsys.models.User;
import com.nbu.projects.dentistappointmentsys.models.types.DentistType;
import com.nbu.projects.dentistappointmentsys.models.types.Role;
import java.util.Set;

public class UserResultModel {

  private String email;
  private Role role;
  private String firstName;
  private String lastName;
  private Integer timesBlacklisted;
  private DentistType dentistType;
  private String city;
  private Set<OpenHour> openHours;
  private Double rating;

  public UserResultModel(String email,
                         Role role,
                         String firstName,
                         String lastName,
                         Integer timesBlacklisted,
                         DentistType dentistType,
                         String city,
                         Set<OpenHour> openHours,
                         Double rating) {
    this.email = email;
    this.role = role;
    this.firstName = firstName;
    this.lastName = lastName;
    this.timesBlacklisted = timesBlacklisted;
    this.dentistType = dentistType;
    this.city = city;
    this.openHours = openHours;
    this.rating = rating;
  }

  public UserResultModel(User user) {
    this(user.getEmail(),
         user.getRole(),
         user.getFirstName(),
         user.getLastName(),
         user.getTimesBlacklisted(),
         user.getDentistType(),
         user.getCity(),
         user.getOpenHours(),
         user.getRating());
  }

  public String getEmail() {
    return email;
  }

  public void setEmail(String email) {
    this.email = email;
  }

  public Role getRole() {
    return role;
  }

  public void setRole(Role role) {
    this.role = role;
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

  public Integer getTimesBlacklisted() {
    return timesBlacklisted;
  }

  public void setTimesBlacklisted(Integer timesBlacklisted) {
    this.timesBlacklisted = timesBlacklisted;
  }

  public DentistType getDentistType() {
    return dentistType;
  }

  public void setDentistType(DentistType dentistType) {
    this.dentistType = dentistType;
  }

  public String getCity() {
    return city;
  }

  public void setCity(String city) {
    this.city = city;
  }

  public Set<OpenHour> getOpenHours() {
    return openHours;
  }

  public void setOpenHours(Set<OpenHour> openHours) {
    this.openHours = openHours;
  }
}
