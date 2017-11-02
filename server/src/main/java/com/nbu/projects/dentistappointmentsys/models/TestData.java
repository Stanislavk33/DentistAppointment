package com.nbu.projects.dentistappointmentsys.models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class TestData {

    @Id
    @GeneratedValue
    Long id;

    String name;

    boolean isSmart;

    public TestData() {
    }

    public TestData(String name, boolean isSmart) {
        this.name = name;
        this.isSmart = isSmart;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public boolean isSmart() {
        return isSmart;
    }

    public void setSmart(boolean smart) {
        isSmart = smart;
    }
}
