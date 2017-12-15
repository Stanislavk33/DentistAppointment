package com.nbu.projects.dentistappointmentsys.controllers.models;

public class ChangePassModel {
    private String userEmail;
    private String oldPass;
    private String newPass;

    public ChangePassModel() { }

    public ChangePassModel(String userEmail, String oldPass, String newPass) {
        this.userEmail = userEmail;
        this.oldPass = oldPass;
        this.newPass = newPass;
    }

    public String getUserEmail() {
        return userEmail;
    }

    public void setUserEmail(String userEmail) {
        this.userEmail = userEmail;
    }

    public String getOldPass() {
        return oldPass;
    }

    public void setOldPass(String oldPass) {
        this.oldPass = oldPass;
    }

    public String getNewPass() {
        return newPass;
    }

    public void setNewPass(String newPass) {
        this.newPass = newPass;
    }
}
