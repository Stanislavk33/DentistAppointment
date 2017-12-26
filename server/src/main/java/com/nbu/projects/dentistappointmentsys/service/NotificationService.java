package com.nbu.projects.dentistappointmentsys.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;
import com.nbu.projects.dentistappointmentsys.models.User;

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
}
