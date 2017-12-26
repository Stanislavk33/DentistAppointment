package com.nbu.projects.dentistappointmentsys.repositories;

import com.nbu.projects.dentistappointmentsys.models.Rating;
import org.springframework.data.domain.Example;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface RatingsRepository extends JpaRepository<Rating, Long> {
    List<Rating> getAllByRatedId(Long id);

    @Query(value = "select avg(r.rate) from Rating r where r.ratedId = :id")
    Double getAvgRating(@Param("id") Long id);

    @Query("select (count(r)>0) from Rating r where r.raterId = :patientId and r.ratedId = :dentistId")
    Boolean exists(@Param("patientId") Long patientId, @Param("dentistId") Long dentistId);
}
