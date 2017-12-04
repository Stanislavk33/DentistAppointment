package com.nbu.projects.dentistappointmentsys.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.nbu.projects.dentistappointmentsys.controllers.request_models.register.DentistRegisterModel;
import com.nbu.projects.dentistappointmentsys.models.types.DentistType;
import java.util.HashSet;
import java.util.Set;
import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.ElementCollection;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name = "dentist_info")
public class DentistInfo {

  @Id
  @GeneratedValue(strategy = GenerationType.AUTO)
  private Long id;

  @Enumerated(EnumType.STRING)
  @Column(nullable = false)
  private DentistType dentistType;

  @Column(nullable = false)
  private String city;

  @OneToMany(mappedBy = "dentistInfo", cascade = CascadeType.ALL, fetch = FetchType.EAGER)
  @ElementCollection(targetClass = OpenHour.class)
  @JsonIgnoreProperties("dentistInfo")
  private Set<OpenHour> openHours = new HashSet<>();

  public DentistInfo() {
  }

  public DentistInfo(DentistType dentistType,
                     String city,
                     Set<OpenHour> openHours) {
    this.dentistType = dentistType;
    this.city = city;
    this.openHours = openHours;
  }

  public DentistInfo(DentistRegisterModel registerModel) {
    this(registerModel.getDentistType(),
         registerModel.getCity(),
         new HashSet<>());
  }

  public Long getId() {
    return id;
  }

  public void setId(Long id) {
    this.id = id;
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

  public Set<OpenHour> getOpenHours() {
    return openHours;
  }

  public void setOpenHours(Set<OpenHour> openHours) {
    this.openHours = openHours;
  }
}
