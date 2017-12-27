package com.nbu.projects.dentistappointmentsys.controllers.models;

public class EditUserProfileModel {
    private Long id;
    private String email;
    private String firstName;
    private String lastName;

    public EditUserProfileModel(){
    }

    public EditUserProfileModel(String email, Long id, String firstName, String lastName){
        this.email = email;
        this.id=id;
       this.firstName = firstName;
        this.lastName = lastName;
    }

    public Long getId(){
        return id;
    }

   public void setId(Long id){this.id=id;}

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
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
}

