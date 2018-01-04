package com.nbu.projects.dentistappointmentsys.repositories;

import com.nbu.projects.dentistappointmentsys.models.Rating;
import org.springframework.data.domain.Example;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import javax.transaction.Transactional;
import java.util.List;

public interface RatingsRepository extends JpaRepository<Rating, Long> {
    List<Rating> getAllByRatedId(Long id);

    @Query(value = "select avg(r.rate) from Rating r where r.ratedId = :id")
    Double getAvgRating(@Param("id") Long id);

    @Query("select (count(r)>0) from Rating r where r.raterId = :raterId and r.ratedId = :ratedId")
    Boolean exists(@Param("raterId") Long raterId, @Param("ratedId") Long ratedId);

    @Query("select r from Rating r where r.raterId = :raterId and r.ratedId = :ratedId")
    Rating getCurrentRate(@Param("raterId") Long raterId, @Param("ratedId") Long ratedId);

    @Transactional
    @Modifying
    @Query("update Rating r set r.comment = :comment, r.rate = :rate where r.raterId = :dentistId and r.ratedId = :patientId")
    void updateRate(@Param("dentistId") Long dentistId, @Param("patientId") Long patientId, @Param("rate") Double rate, @Param("comment") String comment);
}
