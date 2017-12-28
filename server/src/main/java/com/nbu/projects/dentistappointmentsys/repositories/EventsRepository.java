package com.nbu.projects.dentistappointmentsys.repositories;
import com.nbu.projects.dentistappointmentsys.controllers.models.EventInfoModel;
import com.nbu.projects.dentistappointmentsys.models.Event;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.sql.Timestamp;
import java.util.Date;
import java.util.List;

public interface EventsRepository extends JpaRepository<Event, Long> {
    List<Event> getAllByDentistId(Long id);

    /*@Query(value = "select count(e) from Event e where (e.dentistId = :dentistId and to_char(e.startTime) = :date)")
    Integer countAllByDentistIdAndStartTimeStartsWith(@Param("dentistId") Long dentistId, @Param("date") Timestamp date);*/

    @Query("select new com.nbu.projects.dentistappointmentsys.controllers.models.EventInfoModel(e.id, e.title, u.firstName, " +
            "u.lastName, u.city, e.info, e.startTime, e.endTime) from Event e, User u where e.dentistId = u.id")
    List<EventInfoModel> getEvents();

    @Query("select new com.nbu.projects.dentistappointmentsys.controllers.models.EventInfoModel(e.id, e.title, u.firstName, " +
            "u.lastName, u.city, e.info, e.startTime, e.endTime) from Event e, User u where e.dentistId = u.id and e.endTime > :now")
    List<EventInfoModel> getActiveEvents(@Param("now") Timestamp now);
}