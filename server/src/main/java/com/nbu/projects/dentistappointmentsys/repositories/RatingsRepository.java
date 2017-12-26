package com.nbu.projects.dentistappointmentsys.repositories;

import com.nbu.projects.dentistappointmentsys.models.Rating;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface RatingsRepository extends JpaRepository<Rating, Long> {
    List<Rating> getAllByRatedId(Long id);

}
