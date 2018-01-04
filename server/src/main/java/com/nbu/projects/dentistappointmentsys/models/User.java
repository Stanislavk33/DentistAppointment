package com.nbu.projects.dentistappointmentsys.models;

import com.nbu.projects.dentistappointmentsys.controllers.request_models.register.UserRegisterModel;
import com.nbu.projects.dentistappointmentsys.models.types.DentistType;
import com.nbu.projects.dentistappointmentsys.models.types.Role;
import java.util.HashSet;
import java.util.Set;
import javax.persistence.Column;
import javax.persistence.ElementCollection;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import org.hibernate.annotations.Formula;

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

  @Column
  private String generalInformation;


  @OneToMany(fetch = FetchType.EAGER)
  @JoinColumn(name = "user_id", nullable = true)
  private Set<Appointment> appointments;

  @OneToMany(fetch = FetchType.EAGER)
  @JoinColumn(name = "user_id", nullable = true)
  private Set<WorkingDay> workingDays;

  @Formula(value = "(select avg(r.rate) from rating r where r.rated_id = user_id)")
  private Double rating;

  public User() {
  }

  public User(Long id,
              String email,
              String password,
              String firstName,
              String lastName,
              Role role,
              String city,
              DentistType dentistType,
              Set<Long> blacklist,
              Set<WorkingDay> workingDays,
              String generalInformation) {
    this.id=id;
    this.email = email;
    this.role = role;
    this.dentistType = dentistType;
    this.city = city;
    this.password = password;
    this.firstName = firstName;
    this.lastName = lastName;
    this.workingDays = workingDays;
    this.timesBlacklisted = 0;
    this.blacklist = blacklist;
    this.rating = 0.;
    this.generalInformation=generalInformation;
  }

  public User(UserRegisterModel registerModel) {
    this(registerModel.getId(),
         registerModel.getEmail(),
         registerModel.getPassword(),
         registerModel.getFirstName(),
         registerModel.getLastName(),
         registerModel.getRole(),
         registerModel.getCity(),
         registerModel.getDentistType(),
         new HashSet<>(),
         new HashSet<>(),registerModel.getGeneralInformation());
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

  public Double getRating() {
    return rating;
  }

  public void setRating(Double rating) {
    this.rating = rating;
  }

  public Set<Appointment> getAppointments() {
    return appointments;
  }

  public void setAppointments(Set<Appointment> appointments) {
    this.appointments = appointments;
  }

  public Set<WorkingDay> getWorkingDays() {
    return workingDays;
  }

  public void setWorkingDays(Set<WorkingDay> workingDays) {
    this.workingDays = workingDays;
  }

  public String getGeneralInformation() {
    return generalInformation;
  }

  public void setGeneralInformation(String generalInformation) {
    this.generalInformation = generalInformation;
  }
}
