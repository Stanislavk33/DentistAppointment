package com.nbu.projects.dentistappointmentsys.controllers;

import com.nbu.projects.dentistappointmentsys.models.Ratings;
import com.nbu.projects.dentistappointmentsys.repositories.RatingsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class RatingsController {

    @Autowired
    RatingsRepository ratingsRepository;

    @GetMapping("/rating/{id}")
    public List<Ratings> getDentistsByCity(@PathVariable(value="id") Long id) {
        return ratingsRepository.getAllByRatedId(id);
    }

}
