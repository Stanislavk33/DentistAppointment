package com.nbu.projects.dentistappointmentsys.controllers.models;

import org.springframework.format.annotation.DateTimeFormat;

import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import java.sql.Timestamp;
import java.util.Date;

public class EventInfoModel {
    private Long id;
    private String title;
    private String firstName;
    private String lastName;
    private String city;
    private String info;

    @Temporal(TemporalType.TIMESTAMP)
    private Timestamp startTime;

    @Temporal(TemporalType.TIMESTAMP)
    private Timestamp endTime;

    public EventInfoModel() { }

    public EventInfoModel(Long id, String title, String firstName, String lastName, String city, String info, Date startTime, Date endTime) {
        this.id = id;
        this.title = title;
        this.firstName = firstName;
        this.lastName = lastName;
        this.city = city;
        this.info = info;
        this.startTime = new Timestamp(startTime.getTime());
        this.endTime = new Timestamp(endTime.getTime());
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
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

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getInfo() {
        return info;
    }

    public void setInfo(String info) {
        this.info = info;
    }

    public Timestamp getStartTime() {
        return startTime;
    }

    public void setStartTime(Timestamp startTime) {
        this.startTime = new Timestamp(startTime.getTime());
    }

    public Timestamp getEndTime() {
        return endTime;
    }

    public void setEndTime(Timestamp endTime) { this.endTime = new Timestamp(endTime.getTime()); }
}
