package com.nbu.projects.dentistappointmentsys.controllers.models;

import com.nbu.projects.dentistappointmentsys.models.types.DentistType;

public class EditDentistProfileModel {
    private String email;
    private Long id;
    private String firstName;
    private String lastName;
    private DentistType dentistType;
    private String city;

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
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
    public EditDentistProfileModel() {}

    public EditDentistProfileModel(String email, Long id, String firstName, String lastName, DentistType dentistType, String city) {
        this.email = email;
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.dentistType = dentistType;
        this.city = city;
    }
}


