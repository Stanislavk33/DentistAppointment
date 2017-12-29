package com.nbu.projects.dentistappointmentsys.controllers.models;

import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import java.sql.Timestamp;
import java.util.Date;

public class AmbulatoryInfo {
    private String dentistFirstName;
    private String dentistLastName;
    @Temporal(TemporalType.TIMESTAMP)
    private Timestamp date;
    private String comment;

    public AmbulatoryInfo() { }

    public AmbulatoryInfo(String dentistFirstName, String dentistLastName, Date date, String comment) {
        this.dentistFirstName = dentistFirstName;
        this.dentistLastName = dentistLastName;
        this.date = new Timestamp(date.getTime());
        this.comment = comment;
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
