package com.nbu.projects.dentistappointmentsys.repositories;

import com.nbu.projects.dentistappointmentsys.controllers.models.EventInfoModel;
import com.nbu.projects.dentistappointmentsys.models.Event;
import com.nbu.projects.dentistappointmentsys.models.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.sql.Date;
import java.util.List;

public interface EventsRepository extends JpaRepository<Event, Long> {
    @Query("select new com.nbu.projects.dentistappointmentsys.controllers.models.EventInfoModel(e.title, u.firstName, u.lastName, u.city, e.info, e.startTime, e.endTime) from Event e, User u where e.dentistId = u.id")
    List<EventInfoModel> getEvents();

    List<Event> getAllByDentistId(Long id);

    @Query("select (count(e)>0) from Event e where e.startTime = :date and e.dentistId = :dentistId")
    Boolean exists(@Param("dentistId") Long dentistId, @Param("date") String date);
}