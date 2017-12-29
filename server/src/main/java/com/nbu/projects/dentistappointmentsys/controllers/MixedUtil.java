package com.nbu.projects.dentistappointmentsys.controllers;

import com.nbu.projects.dentistappointmentsys.controllers.models.AppointmentModel;
import com.nbu.projects.dentistappointmentsys.controllers.models.WorkingDayModel;
import com.nbu.projects.dentistappointmentsys.models.Appointment;
import com.nbu.projects.dentistappointmentsys.models.User;
import com.nbu.projects.dentistappointmentsys.models.WorkingDay;
import com.nbu.projects.dentistappointmentsys.models.types.Role;
import java.util.HashSet;
import java.util.Set;
import java.util.logging.Logger;

public class MixedUtil {

   private static final Logger logger = Logger.getLogger(MixedUtil.class.toString());

   public static User checkUserExistenceAndType(User user, String email, Role role) {
      if (user == null) {
         logger.warning("Not existing user with email : " + email);
         return null;
      }
      if (user.getRole() != role) {
         logger.warning("User: " + email + " is not a " + role + ".");
         return null;
      }
      return user;
   }


   public static Set<AppointmentModel> buildAppointmentModels(Set<Appointment> appointments) {

      Set<AppointmentModel> result = new HashSet<>();
      if (appointments == null) {
         return result;
      }
      for (Appointment appointment : appointments) {
         result.add(new AppointmentModel(appointment.getUser().getEmail(),
                                         null,
                                         appointment.getDate(),
                                         appointment.getCanceled()));
      }
      return result;
   }

   public static Set<WorkingDayModel> buildWorkingDayModels(Set<WorkingDay> workingDays) {

      Set<WorkingDayModel> result = new HashSet<>();
      if (workingDays == null) {
         return result;
      }
      for (WorkingDay workingDay : workingDays) {
         result.add(new WorkingDayModel(workingDay));
      }
      return result;
   }
}
