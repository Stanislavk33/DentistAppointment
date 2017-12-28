package com.nbu.projects.dentistappointmentsys.models;

import org.hibernate.annotations.Type;

import javax.persistence.*;
import java.sql.Timestamp;

@Entity
public class Event {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "event_id")
    private Long eventId;

    @Column(nullable = false)
    private Long dentistId;

    @Column(nullable = false)
    private String title;

    @Column(nullable = false)
    private Timestamp startTime;

    @Column(nullable = false)
    private Timestamp endTime;

    @Column(nullable = false)
    @Type(type="text")
    private String info;

    public Event() { };

    public Event(Long dentistId, String title, Timestamp startTime, Timestamp endTime, String info) {
        this.title = title;
        this.dentistId = dentistId;
        this.startTime = startTime;
        this.endTime = endTime;
        this.info = info;
    }

    public Long getId() {
        return eventId;
    }

    public void setId(Long id) {
        this.eventId = id;
    }

    public Long getDentistId() {
        return dentistId;
    }

    public void setDentistId(Long dentistId) {
        this.dentistId = dentistId;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public Timestamp getStartTime() {
        return startTime;
    }

    public void setStartTime(Timestamp startTime) {
        this.startTime = startTime;
    }

    public Timestamp getEndTime() {
        return endTime;
    }

    public void setEndTime(Timestamp endTime) {
        this.endTime = endTime;
    }

    public String getInfo() {
        return info;
    }

    public void setInfo(String info) {
        this.info = info;
    }
}
