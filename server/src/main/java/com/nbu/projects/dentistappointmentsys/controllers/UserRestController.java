package com.nbu.projects.dentistappointmentsys.controllers;

import com.nbu.projects.dentistappointmentsys.controllers.admin.ManageBlockModel;
import com.nbu.projects.dentistappointmentsys.controllers.result_models.common.BaseResultModel;
import com.nbu.projects.dentistappointmentsys.controllers.result_models.common.UserResultModel;
import com.nbu.projects.dentistappointmentsys.controllers.result_models.common.UsersResultModel;
import com.nbu.projects.dentistappointmentsys.models.User;
import com.nbu.projects.dentistappointmentsys.models.types.Role;
import com.nbu.projects.dentistappointmentsys.repositories.OpenHourRepository;
import com.nbu.projects.dentistappointmentsys.repositories.UserRepository;
import com.nbu.projects.dentistappointmentsys.util.GenericConstants;
import java.util.List;
import java.util.logging.Logger;
import java.util.stream.Collectors;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserRestController {

  private static final Logger logger = Logger.getLogger(UserRestController.class.toString());

  @Autowired
  UserRepository userRepository;
  @Autowired
  OpenHourRepository openHourRepository;


  @PostMapping("/getAllDentists")
  public UsersResultModel getAllDentists(@RequestBody String adminEmail) {

    User admin = userRepository.findByEmail(adminEmail);
    if (admin == null) {
      logger.warning("Not existing admin user with email : " + adminEmail);
      return new UsersResultModel(GenericConstants.RESULT_FAILED,
                                  "Not existing email.",
                                  null);
    }
    if (admin.getRole() != Role.ADMIN) {
      logger.warning("Non-admin user: " + adminEmail);
      return new UsersResultModel(GenericConstants.RESULT_FAILED,
                                  "Non-admin user.",
                                  null);
    }
    List<User> allDentists = userRepository.findAllByRole(Role.DENTIST);
    List<UserResultModel> resultModels = allDentists.stream()
                                                    .map(UserResultModel::new)
                                                    .collect(Collectors.toList());
    return new UsersResultModel(GenericConstants.RESULT_SUCCESSFUL,
                                "",
                                resultModels);
  }

  @PostMapping("/getAllPatients")
  public UsersResultModel getAllPatients(@RequestBody String adminEmail) {

    User admin = userRepository.findByEmail(adminEmail);
    if (admin == null) {
      logger.warning("Not existing admin user with email : " + adminEmail);
      return new UsersResultModel(GenericConstants.RESULT_FAILED,
                                  "Not existing email.",
                                  null);
    }
    if (admin.getRole() != Role.ADMIN) {
      logger.warning("Non-admin user: " + adminEmail);
      return new UsersResultModel(GenericConstants.RESULT_FAILED,
                                  "Non-admin user.",
                                  null);
    }
    List<User> allPatients = userRepository.findAllByRole(Role.PATIENT);
    List<UserResultModel> resultModels = allPatients.stream()
                                                    .map(UserResultModel::new)
                                                    .collect(Collectors.toList());
    return new UsersResultModel(GenericConstants.RESULT_SUCCESSFUL,
                                "",
                                resultModels);
  }

  @PostMapping("/manageBlockedUsers")
  public BaseResultModel getAllPatients(@RequestBody ManageBlockModel blockModel) {

    User admin = userRepository.findByEmail(blockModel.getAdminEmail());
    if (admin == null) {
      logger.warning("Not existing admin user with email : " + blockModel.getAdminEmail());
      return new BaseResultModel(GenericConstants.RESULT_FAILED,
                                 "Not existing email.");
    }
    if (admin.getRole() != Role.ADMIN) {
      logger.warning("Non-admin user: " + blockModel.getAdminEmail());
      return new BaseResultModel(GenericConstants.RESULT_FAILED,
                                 "Non-admin user.");
    }

    User targetUser = userRepository.findByEmail(blockModel.getTargetUserEmail());
    if (targetUser == null) {
      logger.warning("Not existing target user with email : " + blockModel.getTargetUserEmail());
      return new BaseResultModel(GenericConstants.RESULT_FAILED,
                                 "Not existing email.");
    }

    if (blockModel.getBlock()) {
      targetUser.setTimesBlacklisted(GenericConstants.BLOCK_TRESHHOLD);
    } else {
      targetUser.setTimesBlacklisted(GenericConstants.BLOCK_RESET);
    }

    User resultUser = userRepository.save(targetUser);
    if (resultUser == null) {
      logger.warning("Could not save target user with email : " + blockModel.getTargetUserEmail());
      return new BaseResultModel(GenericConstants.RESULT_FAILED, "Failed to block/unblock user.");
    }
    return new BaseResultModel(GenericConstants.RESULT_SUCCESSFUL, "");
  }

  @GetMapping("/getDentists")
  public UsersResultModel getDentists() {
    List<User> allDentists = userRepository.findAllByRole(Role.DENTIST);
    List<UserResultModel> resultModels = allDentists.stream()
            .map(UserResultModel::new)
            .collect(Collectors.toList());
    return new UsersResultModel(GenericConstants.RESULT_SUCCESSFUL,
            "",
            resultModels);
  }
}
