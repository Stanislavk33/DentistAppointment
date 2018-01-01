package com.nbu.projects.dentistappointmentsys.controllers;

import static com.nbu.projects.dentistappointmentsys.util.GenericConstants.HOUR;

import com.nbu.projects.dentistappointmentsys.controllers.models.*;
import com.nbu.projects.dentistappointmentsys.controllers.request_models.appointments.CancelAppointmentModel;
import com.nbu.projects.dentistappointmentsys.controllers.request_models.appointments.MakeAppointmentModel;
import com.nbu.projects.dentistappointmentsys.controllers.result_models.appointments.UserAppointmentsResultModel;
import com.nbu.projects.dentistappointmentsys.controllers.result_models.common.BaseResultModel;
import com.nbu.projects.dentistappointmentsys.models.Appointment;
import com.nbu.projects.dentistappointmentsys.models.User;
import com.nbu.projects.dentistappointmentsys.models.types.Role;
import com.nbu.projects.dentistappointmentsys.repositories.AppointmentRepository;
import com.nbu.projects.dentistappointmentsys.repositories.UserRepository;
import com.nbu.projects.dentistappointmentsys.util.GenericConstants;
import java.sql.Timestamp;
import java.util.Date;
import java.util.HashSet;
import java.util.List;
import java.util.Set;
import java.util.logging.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
public class AppointmentController {

    private static final Logger logger = Logger.getLogger(AppointmentController.class.toString());

    @Autowired
    UserRepository userRepository;
    @Autowired
    AppointmentRepository appointmentRepository;

    @GetMapping("/ambulatory/{id}")
    public List<AmbulatoryInfo> getAmbulatoryInfo(@PathVariable(value="id") Long id) {
        long time = System.currentTimeMillis();
        Timestamp now = new Timestamp(time);
        return appointmentRepository.getAmbulatoryInfo(id, now);
    }

    @GetMapping("/patients/{id}")
    public List<PatientResults> getPatients(@PathVariable(value="id") Long id) {
        List<PatientResults> res = appointmentRepository.getPatients(id);
        return appointmentRepository.getPatients(id);
    }

    @PostMapping("/addAppointmentComment")
    public Boolean addAppointmentComment(@RequestBody CommentModel commentModel){
        if(appointmentRepository.findById(commentModel.getId()) != null){
            appointmentRepository.updateAppointmentComment(commentModel.getId(), commentModel.getComment());
            return true;
        }
        return false;
    }

    @GetMapping("pastAppointments/{id}")
    public List<DentistAppointmentModel> getDentistPastAppointments(@PathVariable(value="id") Long id){
        long time = System.currentTimeMillis();
        Timestamp now = new Timestamp(time);
        return this.appointmentRepository.getDentistPastAppointments(id, now);
    }

    @GetMapping("futureAppointments/{id}")
    public List<DentistAppointmentModel> getDentistFutureAppointments(@PathVariable(value="id") Long id){
        long time = System.currentTimeMillis();
        Timestamp now = new Timestamp(time);
        return this.appointmentRepository.getDentistFutureAppointments(id, now);
    }

    @GetMapping("patientFutureAppointments/{id}")
    public List<PatientAppointmentModel> getPatientFutureAppointments(@PathVariable(value="id") Long id){
        long time = System.currentTimeMillis();
        Timestamp now = new Timestamp(time);
        return this.appointmentRepository.getPatientFutureAppointments(id, now);
    }

    @GetMapping("patientPastAppointments/{id}")
    public List<PatientAppointmentModel> getPatientPastAppointments(@PathVariable(value="id") Long id){
        long time = System.currentTimeMillis();
        Timestamp now = new Timestamp(time);
        return this.appointmentRepository.getPatientPastAppointments(id, now);
    }

    @DeleteMapping("/cancelAppointment/{id}")
    public Boolean cancelAppointment(@PathVariable(value="id") Long id) {
        if(appointmentRepository.exists(id)){
            appointmentRepository.delete(id);
            return true;
        }
        return false;
    }

    @PostMapping("/getDentistAppointments")
    public UserAppointmentsResultModel getDentistAppointments(@RequestBody String dentistEmail) {

        User dentist = MixedUtil.checkUserExistenceAndType(userRepository.findByEmail(dentistEmail),
                                                           dentistEmail,
                                                           Role.DENTIST);
        if (dentist == null) {
            return new UserAppointmentsResultModel(GenericConstants.RESULT_ERROR,
                                                   "No such dentist : " + dentistEmail + ".",
                                                   null);
        }

        Set<AppointmentModel> resultAppointments = new HashSet<>();
        for (Appointment appointment : dentist.getAppointments()) {
            if (appointment.getPatientId() == null) {
                resultAppointments.add(new AppointmentModel(dentistEmail,
                                                            null,
                                                            appointment.getDate(),
                                                            appointment.getCanceled()));
                continue;
            }
            User patient = userRepository.findById(appointment.getPatientId());
            if (patient == null || patient.getRole() != Role.PATIENT) {
                logger.warning("Invalid userId or Non-patient as a patient at an appointment id: " +
                               appointment.getId() +
                               ", patient id: " +
                               appointment.getPatientId());
                return new UserAppointmentsResultModel(
                      GenericConstants.RESULT_FAILED,
                      "Server error: could not provide dentist's appointments.",
                      null);
            }
            resultAppointments.add(new AppointmentModel(dentistEmail,
                                                        patient.getEmail(),
                                                        appointment.getDate(),
                                                        appointment.getCanceled()));
        }
        return new UserAppointmentsResultModel(GenericConstants.RESULT_SUCCESSFUL,
                                               null,
                                               resultAppointments);
    }

    @PostMapping("/getPatientAppointments")
    public UserAppointmentsResultModel getPatientAppointments(@RequestBody String patientEmail) {

        User patient = MixedUtil.checkUserExistenceAndType(userRepository.findByEmail(patientEmail),
                                                           patientEmail,
                                                           Role.PATIENT);
        if (patient == null) {
            return new UserAppointmentsResultModel(GenericConstants.RESULT_ERROR,
                                                   "No such patient : " + patientEmail + ".", null);
        }
        Set<Appointment> patientAppointments =
              appointmentRepository.findAllByPatientId(patient.getId());

        Set<AppointmentModel> resultAppointments = new HashSet<>();
        for (Appointment appointment : patientAppointments) {
            User dentist = userRepository.findById(appointment.getUser().getId());
            if (dentist == null || dentist.getRole() != Role.DENTIST) {
                logger.warning("Invalid userId or Non-dentist as a dentist at an appointment id: " +
                               appointment.getId() +
                               ", patient id: " +
                               appointment.getUser().getId());
                return new UserAppointmentsResultModel(
                      GenericConstants.RESULT_FAILED,
                      "Server error: Could not provide patient's appointments.",
                      null);
            }
            resultAppointments.add(new AppointmentModel(dentist.getEmail(),
                                                        patientEmail,
                                                        appointment.getDate(),
                                                        appointment.getCanceled()));
        }
        return new UserAppointmentsResultModel(GenericConstants.RESULT_SUCCESSFUL,
                                               null,
                                               resultAppointments);
    }

    @PostMapping("/makeAppointment")
    public BaseResultModel makeAppointment(@RequestBody MakeAppointmentModel model) {

        User dentist = MixedUtil.checkUserExistenceAndType(
              userRepository.findByEmail(model.getDentistEmail()),
              model.getDentistEmail(),
              Role.DENTIST);
        if (dentist == null) {
            return new BaseResultModel(GenericConstants.RESULT_ERROR,
                                       "No such dentist : " + model.getDentistEmail() + ".");
        }

        User patient = MixedUtil.checkUserExistenceAndType(
              userRepository.findByEmail(model.getPatientEmail()),
              model.getPatientEmail(),
              Role.PATIENT);
        if (patient == null) {
            return new BaseResultModel(GenericConstants.RESULT_ERROR,
                                       "No such patient : " + model.getPatientEmail() + ".");
        }
        Appointment saved = appointmentRepository.save(
              new Appointment(dentist,
                              patient.getId(),
                              new Timestamp(model.getDate().getTime()),
                              false,
                              ""));
        if (saved == null) {
            logger.warning("Could not make appointment for dentist with email : " +
                           model.getDentistEmail() +
                           ", date: " +
                           model.getDate() +
                           ", for patient: " +
                           patient.getId());
            return new BaseResultModel(GenericConstants.RESULT_FAILED,
                                       "Server error: Could not make appointment.");
        }
        return new BaseResultModel(GenericConstants.RESULT_SUCCESSFUL, null);
    }

    @PostMapping("/cancelAppointment")
    public BaseResultModel cancelAppointment(@RequestBody CancelAppointmentModel model) {

        User dentist = MixedUtil.checkUserExistenceAndType(
              userRepository.findByEmail(model.getDentistEmail()),
              model.getDentistEmail(),
              Role.DENTIST);
        if (dentist == null) {
            return new BaseResultModel(GenericConstants.RESULT_ERROR,
                                       "No such dentist : " + model.getDentistEmail() + ".");
        }
        if (model.getDentistEmail().equals(model.getInitiatorEmail())) {
            return cancelByDentist(dentist, model.getDate());
        } else {
            User patient = userRepository.findByEmail(model.getInitiatorEmail());
            if (patient == null) {
                return new BaseResultModel(GenericConstants.RESULT_ERROR,
                                           "No such patient : " + model.getInitiatorEmail() + ".");
            }
            return cancelByPatient(patient, dentist, model.getDate());
        }
    }

    private BaseResultModel cancelByDentist(User dentist, Date date) {
        Appointment appointment = appointmentRepository.findByUserIdAndDate(dentist.getId(), date);
        if (appointment == null || appointment.getPatientId() == null) {
            logger.warning("No such appointment for dentist with email : " +
                           dentist.getEmail() +
                           ", date: " +
                           date);
            return new BaseResultModel(GenericConstants.RESULT_ERROR, "No such appointment.");
        }
        return cancelAndNotify(appointment, dentist);
    }

    private BaseResultModel cancelByPatient(User patient, User dentist, Date date) {
        Appointment appointment = appointmentRepository.findByUserIdAndDate(dentist.getId(), date);
        if (appointment == null ||
            appointment.getPatientId() == null ||
            !appointment.getPatientId().equals(patient.getId())) {
            logger.warning("No such appointment for dentist with email : " +
                           dentist.getEmail() +
                           ", date: " +
                           date);
            return new BaseResultModel(GenericConstants.RESULT_ERROR, "No such appointment.");
        }
        return cancelAndNotify(appointment, patient);
    }

    private BaseResultModel cancelAndNotify(Appointment appointment, User initiator) {
        Date currentDate = new Date();
        Long timeToAppointment = appointment.getDate().getTime() - currentDate.getTime();
        if (timeToAppointment < 0) {
            logger.warning("Could not cancel appointment with id : " +
                           appointment.getId() +
                           ", by initiator with id : " +
                           initiator.getId());
            return new BaseResultModel(GenericConstants.RESULT_ERROR,
                                       "Could not cancel appointment. Appointment has already passed.");
        }
        appointment.setCanceled(true);
        Appointment saved = appointmentRepository.save(appointment);
        if (saved == null) {
            logger.warning("Could not cancel appointment with id : " +
                           appointment.getId() +
                           ", by initiator with id : " +
                           initiator.getId());
            return new BaseResultModel(GenericConstants.RESULT_FAILED,
                                       "Server error: Could not cancel appointment.");
        }
        if (initiator.getRole() == Role.DENTIST) {
            //TODO: send email to the patient;
        }
        if (initiator.getRole() == Role.PATIENT) {
            //TODO: send email to the dentist;
            if (timeToAppointment < HOUR) {
                return new BaseResultModel(
                      GenericConstants.RESULT_SUCCESSFUL,
                      "Patient will be taxed because the cancellation was less than an hour before the appointment.");
            }
        }
        return new BaseResultModel(GenericConstants.RESULT_SUCCESSFUL, null);
    }
}