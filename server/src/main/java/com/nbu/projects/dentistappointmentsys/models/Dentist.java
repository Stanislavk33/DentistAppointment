package com.nbu.projects.dentistappointmentsys.models;

import javax.persistence.*;

@Entity
@Table(name="dentist")
public class Dentist {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long id;

    public String firstName;

    public String lastName;

    public String dentistType;

    public String city;

    public Integer rating;

    public Dentist() {}

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

    public String getDentistType() {
        return dentistType;
    }

    public void setDentistType(String dentistType) {
        this.dentistType = dentistType;
    }

    public String getCity() {
        return city;
    }

    public Dentist(String firstName, String lastName, String dentistType, String city, Integer rating) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.dentistType = dentistType;
        this.city = city;
        this.rating = rating;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public Integer getRating() {
        return rating;
    }

    public void setRating(Integer rating) {
        this.rating = rating;
    }
}