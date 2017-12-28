package com.nbu.projects.dentistappointmentsys.controllers;

import com.nbu.projects.dentistappointmentsys.controllers.models.WorkingDayModel;
import com.nbu.projects.dentistappointmentsys.controllers.request_models.appointments.EditWorkingDaysModel;
import com.nbu.projects.dentistappointmentsys.controllers.result_models.appointments.WorkingDaysResultModel;
import com.nbu.projects.dentistappointmentsys.controllers.result_models.common.BaseResultModel;
import com.nbu.projects.dentistappointmentsys.models.User;
import com.nbu.projects.dentistappointmentsys.models.WorkingDay;
import com.nbu.projects.dentistappointmentsys.models.types.Role;
import com.nbu.projects.dentistappointmentsys.repositories.AppointmentRepository;
import com.nbu.projects.dentistappointmentsys.repositories.UserRepository;
import com.nbu.projects.dentistappointmentsys.repositories.WorkingDayRepository;
import com.nbu.projects.dentistappointmentsys.util.GenericConstants;
import java.sql.Timestamp;
import java.util.HashSet;
import java.util.Set;
import java.util.logging.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ScheduleRestController {

   private static final Logger logger = Logger.getLogger(ScheduleRestController.class.toString());

   @Autowired
   UserRepository userRepository;
   @Autowired
   AppointmentRepository appointmentRepository;
   @Autowired
   WorkingDayRepository workingDayRepository;

   @PostMapping("/editDentistWorkingDays")
   public BaseResultModel editDentistWorkingDays(
         @RequestBody EditWorkingDaysModel editWorkingDaysModel) {

      String dentistEmail = editWorkingDaysModel.getDentistEmail();

      User dentist = MixedUtil.checkUserExistenceAndType(userRepository.findByEmail(dentistEmail),
                                                         dentistEmail,
                                                         Role.DENTIST);
      if (dentist == null) {
         return new BaseResultModel(GenericConstants.RESULT_ERROR,
                                    "No such dentist : " + dentistEmail + ".");
      }

      WorkingDayModel model = editWorkingDaysModel.getWorkingDayModel();

      WorkingDay workingDay = workingDayRepository.findByUserAndWeekDay(dentist, model.getWeekDay());
      WorkingDay saved;
      if (workingDay == null) {
         saved = workingDayRepository.save(new WorkingDay(dentist, model));
      } else if (model.getFrom1() == null) {
         workingDayRepository.delete(workingDay.getId());
         WorkingDay hmmrkingDay = workingDayRepository.findByUserAndWeekDay(dentist, model.getWeekDay());

         return new BaseResultModel(GenericConstants.RESULT_SUCCESSFUL, null);
      } else {
         workingDay.setFrom1(new Timestamp(model.getFrom1().getTime()));
         workingDay.setTo1(new Timestamp(model.getTo1().getTime()));
         if (model.getFrom2() == null) {
            workingDay.setFrom2(null);
            workingDay.setTo2(null);
         } else {
            workingDay.setFrom2(new Timestamp(model.getFrom2().getTime()));
            workingDay.setTo2(new Timestamp(model.getTo2().getTime()));
         }
         saved = workingDayRepository.save(workingDay);
      }
      if (saved == null) {
         return new BaseResultModel(GenericConstants.RESULT_ERROR,
                                    "Could not edit working day for dentist : " + dentistEmail + ".");
      }
      return new BaseResultModel(GenericConstants.RESULT_SUCCESSFUL, null);
   }

   @PostMapping("/getDentistWorkingDays")
   public WorkingDaysResultModel getDentistWorkingDays(@RequestBody String dentistEmail) {

      User dentist = MixedUtil.checkUserExistenceAndType(userRepository.findByEmail(dentistEmail),
                                                         dentistEmail,
                                                         Role.DENTIST);
      if (dentist == null) {
         return new WorkingDaysResultModel(GenericConstants.RESULT_ERROR,
                                           "No such dentist : " + dentistEmail + ".",
                                           null);
      }
      Set<WorkingDay> dentistWorkingDays = dentist.getWorkingDays();

      if (dentistWorkingDays == null) {
         return new WorkingDaysResultModel(GenericConstants.RESULT_SUCCESSFUL, null, null);
      }

      Set<WorkingDayModel> resultWorkingDays = new HashSet<>();
      for (WorkingDay workingDay : dentistWorkingDays) {
         resultWorkingDays.add(new WorkingDayModel(workingDay));
      }
      return new WorkingDaysResultModel(GenericConstants.RESULT_SUCCESSFUL,
                                        null,
                                        resultWorkingDays);
   }
}
