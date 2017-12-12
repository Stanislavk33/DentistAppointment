package com.nbu.projects.dentistappointmentsys.models;

import com.nbu.projects.dentistappointmentsys.controllers.request_models.register.UserRegisterModel;
import com.nbu.projects.dentistappointmentsys.models.types.DentistType;
import com.nbu.projects.dentistappointmentsys.models.types.Role;
import java.util.HashSet;
import java.util.Set;
import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.ElementCollection;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;

@Entity
public class User {

  @Id
  @GeneratedValue(strategy = GenerationType.AUTO)
  @Column(name = "user_id")
  private Long id;

  @Column(unique = true, nullable = false)
  private String email;

  @Enumerated(EnumType.STRING)
  @Column(nullable = false)
  private Role role;

  @Column(nullable = false)
  private String password;

  @Column(nullable = false)
  private String firstName;

  @Column(nullable = false)
  private String lastName;

  private Integer timesBlacklisted;

  @ElementCollection(targetClass = Long.class)
  private Set<Long> blacklist = new HashSet<>();

  @Enumerated(EnumType.STRING)
  @Column
  private DentistType dentistType;

  @Column
  private String city;

  @OneToMany(cascade = CascadeType.ALL)
  @JoinColumn(name = "dentistId")
  private Set<OpenHour> openHours;

  public User() {
  }

  public User(String email,
              String password,
              String firstName,
              String lastName,
              Role role,
              String city,
              DentistType dentistType,
              Set<Long> blacklist) {
    this.email = email;
    this.role = role;
    this.dentistType = dentistType;
    this.city = city;
    this.password = password;
    this.firstName = firstName;
    this.lastName = lastName;
    this.timesBlacklisted = 0;
    this.blacklist = blacklist;
  }

  public User(UserRegisterModel registerModel) {
    this(registerModel.getEmail(),
         registerModel.getPassword(),
         registerModel.getFirstName(),
         registerModel.getLastName(),
         registerModel.getRole(),
         registerModel.getCity(),
         registerModel.getDentistType(),
         new HashSet<>());
  }

  public Long getId() {
    return id;
  }

  public void setId(Long id) {
    this.id = id;
  }

  public String getEmail() {
    return email;
  }

  public void setEmail(String email) {
    this.email = email;
  }

  public Role getRole() {
    return role;
  }

  public void setRole(Role role) {
    this.role = role;
  }

  public String getPassword() {
    return password;
  }

  public void setPassword(String password) {
    this.password = password;
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

  public Integer getTimesBlacklisted() {
    return timesBlacklisted;
  }

  public void setTimesBlacklisted(Integer timesBlacklisted) {
    this.timesBlacklisted = timesBlacklisted;
  }

  public Set<Long> getBlacklist() {
    return blacklist;
  }

  public void setBlacklist(Set<Long> blacklist) {
    this.blacklist = blacklist;
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
