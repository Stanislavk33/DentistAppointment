package com.nbu.projects.dentistappointmentsys.models;

import com.nbu.projects.dentistappointmentsys.controllers.request_models.register.UserRegisterModel;
import com.nbu.projects.dentistappointmentsys.models.types.DentistType;
import com.nbu.projects.dentistappointmentsys.models.types.Role;

import java.util.HashSet;
import java.util.Set;
import javax.persistence.*;

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

  @Enumerated(EnumType.STRING)
  @Column
  private DentistType dentistType;

  @Column
  private String city;

  @ElementCollection(targetClass = Long.class)
  private Set<Long> blacklist = new HashSet<>();

    @OneToMany(cascade=CascadeType.ALL)
    @JoinColumn(name="dentistId")
    private Set<OpenHour> OpenHours;

  /*  public <E> User(String email, Role role, String password, Object o, String firstName, String lastName, HashSet<E> es) {
    }*/

    public Set<OpenHour> getOpenHours() {
        return OpenHours;
    }

    public void setOpenHours(Set<OpenHour> OpenHours) {
        this.OpenHours = OpenHours;
    }

 /* public User(UserRegisterModel patientModel) {
  }*/
 public User() {}

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
    this.dentistType =dentistType;
    this.city=city;
    this.password = password;
    this.firstName = firstName;
    this.lastName = lastName;
    this.timesBlacklisted = 0;
    this.blacklist = blacklist;
  }


  public User(UserRegisterModel registerModel) {
    this(   registerModel.getEmail(),
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

  /*public DentistInfo getDentistInfo() {
    return dentistInfo;
  }

  public void setDentistInfo(DentistInfo dentistInfo) {
    this.dentistInfo = dentistInfo;
  }*/

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

  public String getCity(){return city;}

  public void setCity(String city){this.city=city;}

  public DentistType getdentistType(){return dentistType;}

  public void setDentistType(DentistType dentistType){this.dentistType=dentistType;}



}
