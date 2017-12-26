package com.nbu.projects.dentistappointmentsys.controllers.request_models;

public class EventRequestModel {

    private Long dentistId;
    private String title;
    private String startTime;
    private String endTime;
    private String info;

    public EventRequestModel() { };

    public EventRequestModel(Long dentistId, String title, String startTime, String endTime, String info) {
        this.title = title;
        this.dentistId = dentistId;
        this.startTime = startTime;
        this.endTime = endTime;
        this.info = info;
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

    public String getStartTime() {
        return startTime;
    }

    public void setStartTime(String startTime) {
        this.startTime = startTime;
    }

    public String getEndTime() {
        return endTime;
    }

    public void setEndTime(String endTime) {
        this.endTime = endTime;
    }

    public String getInfo() {
        return info;
    }

    public void setInfo(String info) {
        this.info = info;
    }
}
