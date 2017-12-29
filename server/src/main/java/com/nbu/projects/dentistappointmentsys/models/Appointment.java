package com.nbu.projects.dentistappointmentsys.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import java.sql.Timestamp;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.persistence.UniqueConstraint;

@Entity
@Table(name = "appointment",
       uniqueConstraints = {@UniqueConstraint(columnNames = {"user_id", "date"})})
public class Appointment {

   @Id
   @GeneratedValue(strategy = GenerationType.AUTO)
   @Column(name = "appointmentId")
   private Long id;

   @ManyToOne(targetEntity = User.class, fetch = FetchType.EAGER)
   @JoinColumn(name = "user_id", nullable = false)
   @JsonIgnore
   private User user;

   @Column(nullable = true)
   private Long patientId;

   @Column(name = "date", nullable = false)
   private Timestamp date;

   @Column(nullable = false)
   private Boolean canceled;

   @Column
   private String comment;

   public Appointment() {
   }

   public Appointment(User user,
                      Long patientId,
                      Timestamp date,
                      Boolean canceled,
                      String comment) {
      this.user = user;
      this.patientId = patientId;
      this.date = date;
      this.canceled = canceled;
      this.comment = comment;
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

   public Long getPatientId() {
      return patientId;
   }

   public void setPatientId(Long patientId) {
      this.patientId = patientId;
   }

   public Timestamp getDate() {
      return date;
   }

   public void setDate(Timestamp date) {
      this.date = date;
   }

   public Boolean getCanceled() {
      return canceled;
   }

   public void setCanceled(Boolean canceled) {
      this.canceled = canceled;
   }

   public String getComment() {
      return comment;
   }

   public void setComment(String comments) {
      this.comment = comments;
   }
}
