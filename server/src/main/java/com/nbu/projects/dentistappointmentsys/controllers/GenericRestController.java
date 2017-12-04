package com.nbu.projects.dentistappointmentsys.controllers;

import com.nbu.projects.dentistappointmentsys.controllers.request_models.login.LoginModel;
import com.nbu.projects.dentistappointmentsys.controllers.request_models.register.DentistRegisterModel;
import com.nbu.projects.dentistappointmentsys.controllers.request_models.register.UserRegisterModel;
import com.nbu.projects.dentistappointmentsys.controllers.result_models.common.UserResultModel;
import com.nbu.projects.dentistappointmentsys.controllers.result_models.login.LoginResultModel;
import com.nbu.projects.dentistappointmentsys.controllers.result_models.login.RegisterDentistModel;
import com.nbu.projects.dentistappointmentsys.controllers.result_models.login.RegisterPatientModel;
import com.nbu.projects.dentistappointmentsys.models.DentistInfo;
import com.nbu.projects.dentistappointmentsys.models.User;
import com.nbu.projects.dentistappointmentsys.repositories.DentistInfoRepository;
import com.nbu.projects.dentistappointmentsys.repositories.OpenHourRepository;
import com.nbu.projects.dentistappointmentsys.repositories.UserRepository;
import com.nbu.projects.dentistappointmentsys.util.GenericConstants;
import java.util.logging.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class GenericRestController {

  private static final Logger logger =
      Logger.getLogger(GenericRestController.class.toString());

  @Autowired
  UserRepository userRepository;
  @Autowired
  DentistInfoRepository dentistInfoRepository;
  @Autowired
  OpenHourRepository openHourRepository;

  @PostMapping("/authenticate")
  public LoginResultModel login(@RequestBody LoginModel loginModel) {

    logger.info("Logging in as: " + loginModel.getEmail());
    User user = userRepository.findByEmail(loginModel.getEmail());
    if (user != null &&
        user.getPassword().equals(loginModel.getPassword())) {
      return new LoginResultModel(GenericConstants.RESULT_SUCCESSFUL,
                                  "",
                                  new UserResultModel(user));
    }
    logger.warning("Wrong email or password when logging in as: " +
                   loginModel.getEmail());
    return new LoginResultModel(GenericConstants.RESULT_FAILED,
                                "Wrong email or password.",
                                null);
  }

  @PostMapping("/registerPatient")
  public RegisterPatientModel registerPatient(@RequestBody UserRegisterModel patientModel) {

    logger.info("Registering as: " + patientModel.getEmail());
    User emailAlreadyUsed = userRepository.findByEmail(patientModel.getEmail());
    if (emailAlreadyUsed != null) {
      logger.warning("Already registered email: " + patientModel.getEmail());
      return new RegisterPatientModel(GenericConstants.RESULT_FAILED,
                                      "Already used email.",
                                      null);
    }
    User toRegister = new User(patientModel);
    User registered = userRepository.save(toRegister);
    if (registered == null) {
      logger.warning("Unable to save Patient.");
      return new RegisterPatientModel(GenericConstants.RESULT_FAILED,
                                      "Server problem.",
                                      null);
    }
    logger.info("Patient registered successfully.");
    return new RegisterPatientModel(GenericConstants.RESULT_SUCCESSFUL,
                                    "",
                                    new UserResultModel(registered));
  }

  @PostMapping("/registerDentist")
  public RegisterDentistModel registerDentist(@RequestBody DentistRegisterModel dentistModel) {

    logger.info("Registering dentist as: " + dentistModel.getEmail());
    User emailAlreadyUsed = userRepository.findByEmail(dentistModel.getEmail());
    if (emailAlreadyUsed != null) {
      logger.warning("Already registered email: " + dentistModel.getEmail());
      return new RegisterDentistModel(GenericConstants.RESULT_FAILED,
                                      "Already used email.",
                                      null);
    }

    User toRegister = new User(dentistModel);
    DentistInfo dentistInfoToSave = new DentistInfo(dentistModel);
    DentistInfo dentistInfo = dentistInfoRepository.save(dentistInfoToSave);

    if (dentistInfo == null) {
      logger.warning("Unable to save dentistInfo.");
      return new RegisterDentistModel(GenericConstants.RESULT_FAILED,
                                      "Server problem.",
                                      null);
    }
    toRegister.setDentistInfo(dentistInfo);

    User registered = userRepository.save(toRegister);
    if (registered == null) {
      logger.warning("Unable to save dentist.");
      return new RegisterDentistModel(GenericConstants.RESULT_FAILED,
                                      "Server problem.",
                                      null);
    }
    logger.info("Dentist registered successfully.");
    return new RegisterDentistModel(GenericConstants.RESULT_SUCCESSFUL,
                                    "",
                                    new UserResultModel(registered));
  }
}
