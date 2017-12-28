package com.nbu.projects.dentistappointmentsys.controllers.result_models.common;


import com.nbu.projects.dentistappointmentsys.controllers.MixedUtil;
import com.nbu.projects.dentistappointmentsys.controllers.models.AppointmentModel;
import com.nbu.projects.dentistappointmentsys.controllers.models.WorkingDayModel;
import com.nbu.projects.dentistappointmentsys.models.Appointment;
import com.nbu.projects.dentistappointmentsys.models.User;
import com.nbu.projects.dentistappointmentsys.models.WorkingDay;
import com.nbu.projects.dentistappointmentsys.models.types.DentistType;
import com.nbu.projects.dentistappointmentsys.models.types.Role;
import java.util.HashSet;
import java.util.Set;

public class UserResultModel {

  private Long id;
  private String email;
  private Role role;
  private String firstName;
  private String lastName;
  private Integer timesBlacklisted;
  private DentistType dentistType;
  private String city;
  private Double rating;
  private Set<AppointmentModel> appointments;
  private Set<WorkingDayModel> workingDays;

  public UserResultModel(Long id,
                         String email,
                         Role role,
                         String firstName,
                         String lastName,
                         Integer timesBlacklisted,
                         DentistType dentistType,
                         String city,
                         Double rating,
                         Set<AppointmentModel> appointments,
                         Set<WorkingDayModel> workingDays) {
    this.id = id;
    this.email = email;
    this.role = role;
    this.firstName = firstName;
    this.lastName = lastName;
    this.timesBlacklisted = timesBlacklisted;
    this.dentistType = dentistType;
    this.city = city;
    this.rating = rating;
    this.appointments = appointments;
    this.workingDays = workingDays;
  }

  public UserResultModel(User user) {
    this(user.getId(),
         user.getEmail(),
         user.getRole(),
         user.getFirstName(),
         user.getLastName(),
         user.getTimesBlacklisted(),
         user.getDentistType(),
         user.getCity(),
         user.getRating(),
         MixedUtil.buildAppointmentModels(user.getAppointments()),
         MixedUtil.buildWorkingDayModels(user.getWorkingDays()));
  }

  public Long getId() { return id; }

  public void setId(Long id) { this.id = id; }

  public Double getRating() { return rating; }

  public void setRating(Double rating) { this.rating = rating; }

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

  public Set<AppointmentModel> getAppointments() {
    return appointments;
  }

  public void setAppointments(Set<AppointmentModel> appointments) {
    this.appointments = appointments;
  }

  public Set<WorkingDayModel> getWorkingDays() {
    return workingDays;
  }

  public void setWorkingDays(Set<WorkingDayModel> workingDays) {
    this.workingDays = workingDays;
  }
}
