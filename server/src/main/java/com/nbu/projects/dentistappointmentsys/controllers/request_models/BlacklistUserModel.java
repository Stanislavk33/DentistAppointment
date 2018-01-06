package com.nbu.projects.dentistappointmentsys.controllers.request_models;

public class BlacklistUserModel {

   private String executorEmail;
   private Long targetId;
   private Boolean doBlacklist;

   public BlacklistUserModel() {
   }

   public BlacklistUserModel(String executorEmail, Long targetId, Boolean doBlacklist) {
      this.executorEmail = executorEmail;
      this.targetId = targetId;
      this.doBlacklist = doBlacklist;
   }

   public String getExecutorEmail() {
      return executorEmail;
   }

   public void setExecutorEmail(String executorEmail) {
      this.executorEmail = executorEmail;
   }

   public Long getTargetId() {
      return targetId;
   }

   public void setTargetId(Long targetId) {
      this.targetId = targetId;
   }

   public Boolean getDoBlacklist() {
      return doBlacklist;
   }

   public void setDoBlacklist(Boolean doBlacklist) {
      this.doBlacklist = doBlacklist;
   }
}
