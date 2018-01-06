package com.nbu.projects.dentistappointmentsys.controllers.result_models.common;

import java.util.Set;

public class UserBlacklistModel extends BaseResultModel {

   private Set<Long> blacklist;

   public UserBlacklistModel() {
   }

   public UserBlacklistModel(String result, String message, Set<Long> blacklist) {
      super(result, message);
      this.blacklist = blacklist;
   }

   public Set<Long> getBlacklist() {
      return blacklist;
   }

   public void setBlacklist(Set<Long> blacklist) {
      this.blacklist = blacklist;
   }
}
