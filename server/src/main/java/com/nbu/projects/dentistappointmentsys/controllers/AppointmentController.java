package com.nbu.projects.dentistappointmentsys.controllers;

import com.nbu.projects.dentistappointmentsys.controllers.models.AmbulatoryInfo;
import com.nbu.projects.dentistappointmentsys.controllers.models.CommentModel;
import com.nbu.projects.dentistappointmentsys.controllers.models.PastAppointment;
import com.nbu.projects.dentistappointmentsys.controllers.models.PatientResults;
import com.nbu.projects.dentistappointmentsys.models.Appointment;
import com.nbu.projects.dentistappointmentsys.models.User;
import com.nbu.projects.dentistappointmentsys.repositories.AppointmentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.web.bind.annotation.*;

import java.sql.Timestamp;
import java.util.List;

@RestController
public class AppointmentController {
    @Autowired
    AppointmentRepository appointmentRepository;

    @GetMapping("/ambulatory/{id}")
    public List<AmbulatoryInfo> getAmbulatoryInfo(@PathVariable(value="id") Long id) { return appointmentRepository.getAmbulatoryInfo(id); }

    @GetMapping("/patients/{id}")
    public List<PatientResults> getPatients(@PathVariable(value="id") Long id) {
        List<PatientResults> res = appointmentRepository.getPatients(id);
        return appointmentRepository.getPatients(id);
    }

    @GetMapping("pastAppointments/{id}")
    public List<PastAppointment> getPastAppointments(@PathVariable(value="id") Long id){
        long time = System.currentTimeMillis();
        Timestamp now = new Timestamp(time);
        return this.appointmentRepository.getPastAppointments(id, now);
    }

    @PostMapping("/addAppointmentComment")
    public Boolean addAppointmentComment(@RequestBody CommentModel commentModel){
        if(appointmentRepository.findById(commentModel.getId()) != null){
            appointmentRepository.updateAppointmentComment(commentModel.getId(), commentModel.getComment());
            return true;
        }
        return false;
    }
}