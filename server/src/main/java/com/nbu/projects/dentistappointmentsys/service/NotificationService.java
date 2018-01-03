package com.nbu.projects.dentistappointmentsys.service;

import com.nbu.projects.dentistappointmentsys.models.Appointment;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;
import com.nbu.projects.dentistappointmentsys.models.User;

import java.text.SimpleDateFormat;
import java.util.Date;

/**
 * Created by Dvalls on 12/25/2017.
 */
@Service
public class NotificationService {

    private JavaMailSender javaMailSender;

    @Autowired
    public NotificationService(JavaMailSender javaMailSender){
        this.javaMailSender = javaMailSender;
    }

    public void sendNotification(User toRegister){
        // send email
        SimpleMailMessage mail = new SimpleMailMessage();
        mail.setTo(toRegister.getEmail());
        mail.setFrom("dentistappointmentsystem@gmail.com");
        mail.setSubject("Registering DentistAppSys");
        mail.setText("Thank you for registering ! You have been registered as " + "/n" + toRegister.getRole());
        javaMailSender.send(mail);
    }

    public void sendCancelledInfoToPatient(User patient, Appointment appointment, String email){
        SimpleMailMessage mail = new SimpleMailMessage();
        String date = new SimpleDateFormat("yyyy.MM.dd HH.mm").format(appointment.getDate().getTime());
        mail.setTo(email);
        mail.setFrom("dentsystemtest@gmail.com");
        mail.setSubject("Cancelled Appointment");
        mail.setText("We would like to inform you that your appointment scheduled for " + date
                + " with patient " + patient.getFirstName() + " " + patient.getLastName() + " has been cancelled." +
                "/n We hope you find another convenient hour briefly.");
        javaMailSender.send(mail);
    }

    public void sendCancelledInfoToDentist(User dentist, Appointment appointment, String email){
        SimpleMailMessage mail = new SimpleMailMessage();
        String date = new SimpleDateFormat("yyyy.MM.dd HH.mm").format(appointment.getDate().getTime());
        mail.setTo(email);
        mail.setFrom("dentsystemtest@gmail.com");
        mail.setSubject("Cancelled Appointment");
        mail.setText("We would like to inform you that your appointment scheduled for " + date
                + " with with Dr. " + dentist.getFirstName() + " " + dentist.getLastName() + " has been cancelled.");
        javaMailSender.send(mail);
    }
}
