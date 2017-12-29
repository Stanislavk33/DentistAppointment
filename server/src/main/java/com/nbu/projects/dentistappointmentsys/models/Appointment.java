package com.nbu.projects.dentistappointmentsys.models;

import java.sql.Timestamp;
import java.util.Date;
import java.util.List;
import javax.persistence.Column;
import javax.persistence.ElementCollection;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.persistence.UniqueConstraint;

@Entity
@Table(name = "appointment",
        uniqueConstraints = {@UniqueConstraint(columnNames = {"userId", "date"})})
public class Appointment {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "appointmentId")
    private Long id;

    @Column(name = "userId", nullable = false)
    private Long userId;

    @Column(nullable = true)
    private Long patientId;

    @Column(name = "date", nullable = false)
    private Timestamp date;

    @Column(nullable = false)
    private Boolean canceled;

    @Column
    private String comment;

    public Appointment() {
    }

    public Appointment(Long userId,
                       Long patientId,
                       Timestamp date,
                       Boolean canceled,
                       String comments) {
        this.userId = userId;
        this.patientId = patientId;
        this.date = date;
        this.canceled = canceled;
        this.comment = comments;
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

    public Timestamp getDate() {
        return date;
    }

    public void setDate(Timestamp date) {
        this.date = date;
    }

    public Boolean getCanceled() {
        return canceled;
    }

    public void setCanceled(Boolean canceled) {
        this.canceled = canceled;
    }

    public String getComments() {
        return comment;
    }

    public void setComments(String comments) {
        this.comment = comments;
    }
}

