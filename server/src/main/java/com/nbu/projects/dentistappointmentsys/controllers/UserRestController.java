package com.nbu.projects.dentistappointmentsys.controllers;

import com.nbu.projects.dentistappointmentsys.controllers.models.ChangePassModel;
import com.nbu.projects.dentistappointmentsys.controllers.models.EditDentistProfileModel;
import com.nbu.projects.dentistappointmentsys.controllers.models.EditUserProfileModel;
import com.nbu.projects.dentistappointmentsys.controllers.result_models.common.EditUserResultModel;
import com.nbu.projects.dentistappointmentsys.models.types.DentistType;
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
import org.springframework.web.bind.annotation.*;

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
    userRepository.updateDentistInfo(EditDentistModel.getEmail(),
            EditDentistModel.getFirstName(),
            EditDentistModel.getLastName(),
            EditDentistModel.getDentistType(),
            EditDentistModel.getCity(),
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






}




    /*  if(EditProfileModel.getEmail()!="")
    {
      if(EditProfileModel.getFirstName()!="")
      {
        if(EditProfileModel.getLastName()!="")
        {
          //Change Email+FirstName+LastName
          userRepository.updateUserInfo(EditProfileModel.getEmail(),
                  EditProfileModel.getFirstName(),
                  EditProfileModel.getLastName(),
                  EditProfileModel.getId());
          return new EditUserResultModel(GenericConstants.RESULT_SUCCESSFUL,
              "",
              null);
        } else
          {
          //Change Email+FirstName
          userRepository.updateEmailAndFirstName(EditProfileModel.getEmail(),
                  EditProfileModel.getFirstName(),
                  EditProfileModel.getId());
            return new EditUserResultModel(GenericConstants.RESULT_SUCCESSFUL,
              "",
              null);
          }
      }else if(EditProfileModel.getEmail()!="" &&EditProfileModel.getLastName()!="" )
      {
        //Change Email+LastName
        userRepository.updateEmailAndLastName(EditProfileModel.getEmail(),
                EditProfileModel.getLastName(),
                EditProfileModel.getId());
        return new EditUserResultModel(GenericConstants.RESULT_SUCCESSFUL,
              "",
              null);
      }else
        {
        //ChangeEmail
        userRepository.updateEmail(EditProfileModel.getEmail(),EditProfileModel.getId());
        return new EditUserResultModel(GenericConstants.RESULT_SUCCESSFUL,
              "",
              null);
        }
    }else
      {
        if(EditProfileModel.getFirstName()!="")
        {
          if(EditProfileModel.getLastName()!="")
          {//Change FirstName and LastName
            userRepository.updateFirstNameAndLastName(
                    EditProfileModel.getFirstName(),
                    EditProfileModel.getLastName(),
                    EditProfileModel.getId());
            new EditUserResultModel(GenericConstants.RESULT_SUCCESSFUL,
              "",
              null);
          }else
            {//Change FirstName
              userRepository.updateFirstName(
                      EditProfileModel.getFirstName()
                      ,EditProfileModel.getId());
              return new EditUserResultModel(GenericConstants.RESULT_SUCCESSFUL,
              "",
              null);
            }
        }else if(EditProfileModel.getLastName()!="") //Change LastName
          {
            userRepository.updateLastName(EditProfileModel.getLastName(),
                    EditProfileModel.getId());
             return new EditUserResultModel(GenericConstants.RESULT_SUCCESSFUL,
              "",
              null);
          }

      }

    }catch(org.springframework.dao.DataIntegrityViolationException sqlException){
      logger.warning("This email is already in use " );
      return new EditUserResultModel(GenericConstants.RESULT_FAILED,
              "This email is already in use ",
              EditProfileModel);

    }

      return new EditUserResultModel(GenericConstants.RESULT_FAILED,
              "",
              null);

  }*/