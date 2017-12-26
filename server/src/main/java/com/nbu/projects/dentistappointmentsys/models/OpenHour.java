package com.nbu.projects.dentistappointmentsys.models;

import com.nbu.projects.dentistappointmentsys.models.types.WeekDay;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.UniqueConstraint;

// This uniqueConstrants value tells the DB that the combination of the two columns
// weekDay and openFrom is unique (separated the values may be repeatable).
@Entity
@Table(name = "open_hour",
       uniqueConstraints = {@UniqueConstraint(columnNames = {"week_day", "open_from"})})
public class OpenHour {

  @Id
  @GeneratedValue(strategy = GenerationType.AUTO)
  private Long id;

  @Column(name = "week_day", nullable = false)
  private WeekDay weekDay;

  //For example:
  //   800 means 08:00 to 08:30
  //   2030 means 20:30 to 21:00
  @Column(name = "open_from", nullable = false)
  private Integer openFrom;

  public OpenHour() {
  }

  public OpenHour(WeekDay weekDay,
                  Integer openFrom) {
    this.weekDay = weekDay;
    this.openFrom = openFrom;
  }

  public Long getId() {
    return id;
  }

  public void setId(Long id) {
    this.id = id;
  }

  public WeekDay getWeekDay() {
    return weekDay;
  }

  public void setWeekDay(WeekDay weekDay) {
    this.weekDay = weekDay;
  }

  public Integer getOpenFrom() {
    return openFrom;
  }

  public void setOpenFrom(Integer openFrom) {
    this.openFrom = openFrom;
  }


}
