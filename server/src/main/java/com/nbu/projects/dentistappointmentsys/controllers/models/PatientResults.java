package com.nbu.projects.dentistappointmentsys.controllers.models;

public class PatientResults {
    private Long id;
    private String firstName;
    private String lastName;
    private Double rating;

    public PatientResults() {
    }

    public PatientResults(Long id, String firstName, String lastName, Double rating) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.rating = rating;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
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

    public Double getRating() {
        return rating;
    }

    public void setRating(Double rating) {
        this.rating = rating;
    }
}
