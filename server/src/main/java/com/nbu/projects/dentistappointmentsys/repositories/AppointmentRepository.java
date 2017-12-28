package com.nbu.projects.dentistappointmentsys.repositories;

import com.nbu.projects.dentistappointmentsys.models.Appointment;
import java.util.Date;
import java.util.Set;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AppointmentRepository extends JpaRepository<Appointment, Long> {

   Set<Appointment> findAllByUserId(Long userId);

   Set<Appointment> findAllByPatientId(Long patientId);

   Appointment findByUserIdAndDate(Long userId, Date date);
}
