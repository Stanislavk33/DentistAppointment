package com.nbu.projects.dentistappointmentsys.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.nbu.projects.dentistappointmentsys.controllers.models.WorkingDayModel;
import com.nbu.projects.dentistappointmentsys.models.types.WeekDay;
import java.sql.Timestamp;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

@Entity
public class WorkingDay {

   @Id
   @GeneratedValue(strategy = GenerationType.AUTO)
   @Column(name = "workingDayId")
   private Long id;

   @ManyToOne(targetEntity = User.class, fetch = FetchType.EAGER)
   @JoinColumn(name = "user_id", nullable = false)
   @JsonIgnore
   private User user;

   @Enumerated(EnumType.STRING)
   @Column(nullable = false)
   private WeekDay weekDay;

   @Column(nullable = false)
   private Timestamp from1;

   @Column(nullable = false)
   private Timestamp to1;

   @Column(nullable = true)
   private Timestamp from2;

   @Column(nullable = true)
   private Timestamp to2;

   public WorkingDay() {
   }

   public WorkingDay(User user,
                     WeekDay weekDay,
                     Timestamp from1,
                     Timestamp to1,
                     Timestamp from2,
                     Timestamp to2) {
      this.user = user;
      this.weekDay = weekDay;
      this.from1 = from1;
      this.to1 = to1;
      this.from2 = from2;
      this.to2 = to2;
   }

   public WorkingDay(User user, WorkingDayModel model) {
      this(user,
           model.getWeekDay(),
           new Timestamp(model.getFrom1().getTime()),
           new Timestamp(model.getTo1().getTime()),
           model.getFrom2() != null ? new Timestamp(model.getFrom2().getTime()) : null,
           model.getTo2() != null ? new Timestamp(model.getTo2().getTime()) : null);
   }

   public Long getId() {
      return id;
   }

   public void setId(Long id) {
      this.id = id;
   }

   public User getUser() {
      return user;
   }

   public void setUser(User user) {
      this.user = user;
   }

   public WeekDay getWeekDay() {
      return weekDay;
   }

   public void setWeekDay(WeekDay weekDay) {
      this.weekDay = weekDay;
   }

   public Timestamp getFrom1() {
      return from1;
   }

   public void setFrom1(Timestamp from1) {
      this.from1 = from1;
   }

   public Timestamp getTo1() {
      return to1;
   }

   public void setTo1(Timestamp to1) {
      this.to1 = to1;
   }

   public Timestamp getFrom2() {
      return from2;
   }

   public void setFrom2(Timestamp from2) {
      this.from2 = from2;
   }

   public Timestamp getTo2() {
      return to2;
   }

   public void setTo2(Timestamp to2) {
      this.to2 = to2;
   }
}
