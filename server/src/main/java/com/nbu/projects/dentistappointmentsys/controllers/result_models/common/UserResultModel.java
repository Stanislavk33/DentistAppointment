package com.nbu.projects.dentistappointmentsys.controllers.result_models.common;

import com.nbu.projects.dentistappointmentsys.models.DentistInfo;
import com.nbu.projects.dentistappointmentsys.models.User;
import com.nbu.projects.dentistappointmentsys.models.types.Role;
import java.util.Set;

public class UserResultModel {

  private String email;
  private Role role;
  private String firstName;
  private String lastName;
  private Integer timesBlacklisted;
  private Set<Long> blacklist;
  private DentistInfo dentistInfo;

  public UserResultModel() {
  }

  public UserResultModel(User user) {
    this(user.getEmail(),
         user.getRole(),
         user.getFirstName(),
         user.getLastName(),
         user.getTimesBlacklisted(),
         user.getBlacklist(),
         user.getDentistInfo());
  }

  private UserResultModel(String email,
                          Role role,
                          String firstName,
                          String lastName,
                          Integer timesBlacklisted,
                          Set<Long> blacklist,
                          DentistInfo dentistInfo) {
    this.email = email;
    this.role = role;
    this.firstName = firstName;
    this.lastName = lastName;
    this.timesBlacklisted = timesBlacklisted;
    this.blacklist = blacklist;
    this.dentistInfo = dentistInfo;
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

  public Set<Long> getBlacklist() {
    return blacklist;
  }

  public void setBlacklist(Set<Long> blacklist) {
    this.blacklist = blacklist;
  }

  public DentistInfo getDentistInfo() {
    return dentistInfo;
  }

  public void setDentistInfo(DentistInfo dentistInfo) {
    this.dentistInfo = dentistInfo;
  }
}
