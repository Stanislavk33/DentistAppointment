package com.nbu.projects.dentistappointmentsys.controllers.models;

import java.util.Date;

public class AppointmentModel {

  private String dentistEmail;
  private String patientEmail;
  private Date date;
  private Boolean cancelled;

  public AppointmentModel(String dentistEmail, String patientEmail, Date date, Boolean cancelled) {
    this.dentistEmail = dentistEmail;
    this.patientEmail = patientEmail;
    this.date = date;
    this.cancelled = cancelled;
  }

  public String getDentistEmail() {
    return dentistEmail;
  }

  public void setDentistEmail(String dentistEmail) {
    this.dentistEmail = dentistEmail;
  }

  public String getPatientEmail() {
    return patientEmail;
  }

  public void setPatientEmail(String patientEmail) {
    this.patientEmail = patientEmail;
  }

  public Date getDate() {
    return date;
  }

  public void setDate(Date date) {
    this.date = date;
  }

  public Boolean getCancelled() {
    return cancelled;
  }

  public void setCancelled(Boolean cancelled) {
    this.cancelled = cancelled;
  }
}
