package com.nbu.projects.dentistappointmentsys.controllers.models;

import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import java.sql.Timestamp;
import java.util.Date;

public class DentistAppointmentModel {
    private Long id;
    private Long userId;
    private Long patientId;
    private String patientFirstName;
    private String patientLastName;
    @Temporal(TemporalType.TIMESTAMP)
    private Timestamp date;
    private String comment;

    public DentistAppointmentModel() {
    }

    public DentistAppointmentModel(Long id, Long userId, Long patientId, String patientFirstName, String patientLastName, Date date, String comment) {
        this.id = id;
        this.userId = userId;
        this.patientId = patientId;
        this.patientFirstName = patientFirstName;
        this.patientLastName = patientLastName;
        this.date = new Timestamp(date.getTime());
        this.comment = comment;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }

    public Long getPatientId() {
        return patientId;
    }

    public void setPatientId(Long patientId) {
        this.patientId = patientId;
    }

    public String getPatientFirstName() {
        return patientFirstName;
    }

    public void setPatientFirstName(String patientFirstName) {
        this.patientFirstName = patientFirstName;
    }

    public String getPatientLastName() {
        return patientLastName;
    }

    public void setPatientLastName(String patientLastName) {
        this.patientLastName = patientLastName;
    }

    public Timestamp getDate() {
        return date;
    }

    public void setDate(Timestamp date) {
        this.date = date;
    }

    public String getComment() {
        return comment;
    }

    public void setComment(String comment) {
        this.comment = comment;
    }
}
