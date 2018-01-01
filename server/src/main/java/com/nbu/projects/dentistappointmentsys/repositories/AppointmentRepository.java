package com.nbu.projects.dentistappointmentsys.repositories;

        import com.nbu.projects.dentistappointmentsys.controllers.models.*;
        import com.nbu.projects.dentistappointmentsys.models.Appointment;

        import java.sql.Timestamp;
        import java.util.Date;
        import java.util.List;
        import java.util.Set;

        import org.springframework.data.jpa.repository.JpaRepository;
        import org.springframework.data.jpa.repository.Modifying;
        import org.springframework.data.jpa.repository.Query;
        import org.springframework.data.repository.query.Param;
        import org.springframework.transaction.annotation.Transactional;

public interface AppointmentRepository extends JpaRepository<Appointment, Long> {

    Set<Appointment> findAllByUserId(Long userId);

    Set<Appointment> findAllByPatientId(Long patientId);

    Appointment findByUserIdAndDate(Long userId, Date date);

    @Query(value = "select new com.nbu.projects.dentistappointmentsys.controllers.models.AmbulatoryInfo(u.firstName, u.lastName, a.date, a.comment)" +
            "from Appointment a, User u where a.patientId = :id and u.id = a.user.id and a.comment is not null and a.comment <> '' and a.date < :now")
    List<AmbulatoryInfo> getAmbulatoryInfo(@Param("id") Long id, @Param("now") Timestamp now);

    @Query(value = "select distinct new com.nbu.projects.dentistappointmentsys.controllers.models.PatientResults(u.id, u.firstName, u.lastName, u.rating, " +
            "(select count(a) from Appointment a where a.patientId = u.id and a.user.id = :id)) " +
            "from User u, Appointment a where u.id = a.patientId and a.user.id = :id")
    List<PatientResults> getPatients(@Param("id") Long id);

    @Query("select new com.nbu.projects.dentistappointmentsys.controllers.models.DentistAppointmentModel(a.id, a.user.id, a.patientId, u.firstName, u.lastName, a.date, a.comment)" +
            " from Appointment a, User u where a.user.id = :id and u.id = a.patientId and a.date < :now")
    List<DentistAppointmentModel> getDentistPastAppointments(@Param("id") Long id, @Param("now") Timestamp now);

    @Query("select new com.nbu.projects.dentistappointmentsys.controllers.models.DentistAppointmentModel(a.id, a.user.id, a.patientId, u.firstName, u.lastName, a.date, a.comment)" +
            " from Appointment a, User u where a.user.id = :id and u.id = a.patientId and a.date > :now")
    List<DentistAppointmentModel> getDentistFutureAppointments(@Param("id") Long id, @Param("now") Timestamp now);

    @Query("select new com.nbu.projects.dentistappointmentsys.controllers.models.PatientAppointmentModel(a.id, a.patientId, a.user.id, u.firstName, u.lastName, a.date, a.comment)" +
            " from Appointment a, User u where a.patientId = :id and u.id = a.user.id and a.date > :now")
    List<PatientAppointmentModel> getPatientFutureAppointments(@Param("id") Long id, @Param("now") Timestamp now);

    @Query("select new com.nbu.projects.dentistappointmentsys.controllers.models.PatientAppointmentModel(a.id, a.patientId, a.user.id, u.firstName, u.lastName, a.date, a.comment)" +
            " from Appointment a, User u where a.patientId = :id and u.id = a.user.id and a.date < :now")
    List<PatientAppointmentModel> getPatientPastAppointments(@Param("id") Long id, @Param("now") Timestamp now);
    Appointment findById(Long id);

    @Transactional
    @Modifying
    @Query("update Appointment a set a.comment = :comment where a.id = :id")
    void updateAppointmentComment(@Param("id") Long id, @Param("comment") String comment);

}