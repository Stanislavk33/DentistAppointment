package com.nbu.projects.dentistappointmentsys.controllers.models;

import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import java.sql.Timestamp;
import java.util.Date;

public class PatientAppointmentModel {
    private Long id;
    private Long userId;
    private Long dentistId;
    private String dentistFirstName;
    private String dentistLastName;
    @Temporal(TemporalType.TIMESTAMP)
    private Timestamp date;
    private String comment;

    public PatientAppointmentModel() {
    }

    public PatientAppointmentModel(Long id, Long userId, Long dentistId, String dentistFirstName, String dentistLastName, Date date, String comment) {
        this.id = id;
        this.userId = userId;
        this.dentistId = dentistId;
        this.dentistFirstName = dentistFirstName;
        this.dentistLastName = dentistLastName;
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

    public Long getDentistId() {
        return dentistId;
    }

    public void setDentistId(Long dentistId) {
        this.dentistId = dentistId;
    }

    public String getDentistFirstName() {
        return dentistFirstName;
    }

    public void setDentistFirstName(String dentistFirstName) {
        this.dentistFirstName = dentistFirstName;
    }

    public String getDentistLastName() {
        return dentistLastName;
    }

    public void setDentistLastName(String dentistLastName) {
        this.dentistLastName = dentistLastName;
    }

    public Timestamp getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = new Timestamp(date.getTime());
    }

    public String getComment() {
        return comment;
    }

    public void setComment(String comment) {
        this.comment = comment;
    }
}
