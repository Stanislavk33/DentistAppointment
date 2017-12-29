package com.nbu.projects.dentistappointmentsys.repositories;

import com.nbu.projects.dentistappointmentsys.models.User;
import com.nbu.projects.dentistappointmentsys.models.WorkingDay;
import com.nbu.projects.dentistappointmentsys.models.types.WeekDay;
import java.util.Set;
import org.springframework.data.jpa.repository.JpaRepository;

public interface WorkingDayRepository extends JpaRepository<WorkingDay, Long> {

   Set<WorkingDay> findAllByUser(User user);
   WorkingDay findByUserAndWeekDay(User user, WeekDay weekDay);
}
