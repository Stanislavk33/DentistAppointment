package com.nbu.projects.dentistappointmentsys.controllers;

import com.nbu.projects.dentistappointmentsys.controllers.admin.ManageBlockModel;
import com.nbu.projects.dentistappointmentsys.controllers.models.ChangePassModel;
import com.nbu.projects.dentistappointmentsys.controllers.models.EditDentistProfileModel;
import com.nbu.projects.dentistappointmentsys.controllers.models.EditUserProfileModel;
import com.nbu.projects.dentistappointmentsys.controllers.request_models.BlacklistUserModel;
import com.nbu.projects.dentistappointmentsys.controllers.result_models.common.BaseResultModel;
import com.nbu.projects.dentistappointmentsys.controllers.result_models.common.EditUserResultModel;
import com.nbu.projects.dentistappointmentsys.controllers.result_models.common.UserBlacklistModel;
import com.nbu.projects.dentistappointmentsys.controllers.result_models.common.UserResultModel;
import com.nbu.projects.dentistappointmentsys.controllers.result_models.common.UsersResultModel;
import com.nbu.projects.dentistappointmentsys.models.User;
import com.nbu.projects.dentistappointmentsys.models.types.DentistType;
import com.nbu.projects.dentistappointmentsys.models.types.Role;
import com.nbu.projects.dentistappointmentsys.repositories.AppointmentRepository;
import com.nbu.projects.dentistappointmentsys.repositories.UserRepository;
import com.nbu.projects.dentistappointmentsys.util.GenericConstants;
import java.util.ArrayList;
import java.util.List;
import java.util.logging.Logger;
import java.util.stream.Collectors;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.web.bind.annotation.*;

@RestController
public class UserRestController {

  private static final Logger logger = Logger.getLogger(UserRestController.class.toString());

  @Autowired
  UserRepository userRepository;
  @Autowired
  AppointmentRepository appointmentRepository;

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
  @GetMapping("/user/{id}")
  public User getDentistsById(@PathVariable(value="id") Long id) {
    return userRepository.findById(id);

  }
  @GetMapping("/getDentists")
  public List<User> getDentists() {
    return userRepository.findAllByRole(Role.DENTIST);
  }

  @GetMapping("/dentists")
  public List<User> search(@RequestParam(value = "name", required = false) String name,
                              @RequestParam(value = "city", required = false) String city,
                              @RequestParam(value = "type", required = false) String type) {

    List<User> result;
    if (name != null && !name.isEmpty()) {
      if (city != null && !city.isEmpty()) {
        if (type != null && !type.isEmpty()) {
          //NAME + CITY + TYPE
          result = userRepository.findByCityTypeAndName(city, DentistType.valueOf(type), name+"%");
          return result;
        } else {
          //NAME + CITY
          result = userRepository.findByNameAndCity(name+"%", city, Role.DENTIST);
          return result;
        }
      } else if (type != null && !type.isEmpty()) {
        //NAME + TYPE
        result = userRepository.findByNameAndType(name+"%", DentistType.valueOf(type));
        return result;
      } else {
        //NAME
        result = userRepository.findByName(Role.DENTIST,name+"%");
        return result;
      }
    } else {
      if (city != null && !city.isEmpty()) {
        if (type != null && !type.isEmpty()) {
          //CITY + TYPE
          result = userRepository.findUsersByCityAndDentistType(city, DentistType.valueOf(type));
          return result;
        } else {
          //CITY
          result = userRepository.findUsersByRoleAndAndCity(Role.DENTIST,city);
          return result;
        }
      } else {
        //type
        if (type != null && !type.isEmpty()){
          result = userRepository.findUsersByDentistType(DentistType.valueOf(type));
          return result;
        } else {
          result = userRepository.findAllByRole(Role.DENTIST);
          return result;
        }
      }
    }
  }

  @PostMapping("/changePassword")
  public Boolean changePass(@RequestBody ChangePassModel passModel) {
    User user = userRepository.findByEmail(passModel.getUserEmail());
    if(user.getPassword().equals(passModel.getOldPass())){
      userRepository.updatePassword(passModel.getNewPass(), passModel.getUserEmail());
      return true;
    }else{
      //passwords don't match
      return false;
    }
  }

  @PostMapping("/editDentistProfile")
  public Boolean ChangeDentistProfile(@RequestBody EditDentistProfileModel EditDentistModel){

    if (!EditDentistModel.getCurrentUserEmail().equals(EditDentistModel.getEmail())) {
      User userWithProvidedEmail = userRepository.findByEmail(EditDentistModel.getEmail());

      if (userWithProvidedEmail != null) {
        return false;
      }
    }
    userRepository.updateDentistInfo(EditDentistModel.getEmail(),
            EditDentistModel.getFirstName(),
            EditDentistModel.getLastName(),
            EditDentistModel.getDentistType(),
            EditDentistModel.getCity(),
            EditDentistModel.getGeneralInformation(),
            EditDentistModel.getId());
        return true;
  }

  @PostMapping("/editPatientProfile")
  public EditUserResultModel ChangePatientProfile (@RequestBody EditUserProfileModel EditProfileModel){
    try{userRepository.updateUserInfo(EditProfileModel.getEmail(),
            EditProfileModel.getFirstName(),
            EditProfileModel.getLastName(),
            EditProfileModel.getId());
      return new EditUserResultModel(GenericConstants.RESULT_SUCCESSFUL,
              "",
              null);
        }
    catch(org.springframework.dao.DataIntegrityViolationException sqlException)
      {
      logger.warning("This email is already in use " );
      return new EditUserResultModel(GenericConstants.RESULT_FAILED,
              "This email is already in use ",
              EditProfileModel);

      }

    }

  @PostMapping("/getUserBlacklist")
  public UserBlacklistModel blacklistUser(@RequestBody Long userId) {
    User user = userRepository.findById(userId);
    if (user == null) {
      return new UserBlacklistModel(GenericConstants.RESULT_ERROR,
                                    "No such user: " + userId,
                                    null);
    }
    return new UserBlacklistModel(GenericConstants.RESULT_SUCCESSFUL,
                                  null,
                                  user.getBlacklist());
  }

  @PostMapping("/blacklistUser")
  public BaseResultModel blacklistUser(@RequestBody BlacklistUserModel blacklistUserModel) {
    User executor = userRepository.findByEmail(blacklistUserModel.getExecutorEmail());
    if (executor == null) {
      return new BaseResultModel(GenericConstants.RESULT_ERROR,
                                 "No such user: " + blacklistUserModel.getExecutorEmail());
    }

    User target = userRepository.findById(blacklistUserModel.getTargetId());
    if (target == null) {
      return new BaseResultModel(GenericConstants.RESULT_ERROR,
                                 "No such user: " + blacklistUserModel.getTargetId());
    }

    if (executor.getRole().equals(Role.DENTIST) && target.getRole().equals(Role.PATIENT) ||
        executor.getRole().equals(Role.PATIENT) && target.getRole().equals(Role.DENTIST)) {
      return blacklistUser(executor, target, blacklistUserModel.getDoBlacklist());
    } else {
      return new BaseResultModel(GenericConstants.RESULT_ERROR, "Users have the same role.");
    }
  }

  private BaseResultModel blacklistUser(User executor, User target, Boolean block) {

    if (block) {
      if (executor.getBlacklist().contains(target.getId())) {
        return new BaseResultModel(GenericConstants.RESULT_ERROR,
                                   "User already blacklisted: " + target.getEmail());
      }
      executor.getBlacklist().add(target.getId());
      target.setTimesBlacklisted(target.getTimesBlacklisted() + 1);
    } else {
      if (!executor.getBlacklist().contains(target.getId())) {
        return new BaseResultModel(GenericConstants.RESULT_ERROR,
                                   "User is not currently blacklisted: " + target.getEmail());
      }
      executor.getBlacklist().remove(target.getId());
      if (target.getTimesBlacklisted() > 0) {
        target.setTimesBlacklisted(target.getTimesBlacklisted() - 1);
      } else {
        target.setTimesBlacklisted(0);
      }
    }
    List<User> saved = userRepository.save(new ArrayList<User>() {{
      add(executor);
      add(target);
    }});

    if (saved == null) {
      return new BaseResultModel(GenericConstants.RESULT_ERROR,
                                 "Could not perform blacklisting.");
    }
    return new BaseResultModel(GenericConstants.RESULT_SUCCESSFUL, null);
  }
}