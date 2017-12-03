package com.nbu.projects.dentistappointmentsys.models;

import com.nbu.projects.dentistappointmentsys.controllers.request_models.register.UserRegisterModel;
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
import javax.persistence.OneToOne;

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

  @OneToOne(cascade = CascadeType.ALL)
  private DentistInfo dentistInfo;

  @Column(nullable = false)
  private String password;

  @Column(nullable = false)
  private String firstName;

  @Column(nullable = false)
  private String lastName;

  private Integer timesBlacklisted;

  @ElementCollection(targetClass = Long.class)
  private Set<Long> blacklist = new HashSet<>();

  public User() {
  }

  public User(String email,
              Role role,
              DentistInfo dentistInfo,
              String password,
              String firstName,
              String lastName,
              Set<Long> blacklist) {
    this.email = email;
    this.role = role;
    this.dentistInfo = dentistInfo;
    this.password = password;
    this.firstName = firstName;
    this.lastName = lastName;
    this.timesBlacklisted = 0;
    this.blacklist = blacklist;
  }

  public User(UserRegisterModel registerModel) {
    this(registerModel.getEmail(),
         registerModel.getRole(),
         null,
         registerModel.getPassword(),
         registerModel.getFirstName(),
         registerModel.getLastName(),
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

  public DentistInfo getDentistInfo() {
    return dentistInfo;
  }

  public void setDentistInfo(DentistInfo dentistInfo) {
    this.dentistInfo = dentistInfo;
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
}
