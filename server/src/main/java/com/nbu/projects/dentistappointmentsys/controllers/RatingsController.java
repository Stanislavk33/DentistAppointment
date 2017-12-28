package com.nbu.projects.dentistappointmentsys.controllers;

import com.nbu.projects.dentistappointmentsys.models.Rating;
import com.nbu.projects.dentistappointmentsys.repositories.RatingsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.Query;
import org.springframework.web.bind.annotation.*;

import java.util.List;

import static org.springframework.orm.hibernate3.SessionFactoryUtils.getSession;

@RestController
public class RatingsController {

    @Autowired
    RatingsRepository ratingsRepository;

    @GetMapping("/rating/{id}")
    public List<Rating> getRatings(@PathVariable(value="id") Long id) { return ratingsRepository.getAllByRatedId(id);}

    @PostMapping("/addRating")
    public Boolean addRating(@RequestBody Rating ratingsModel) {
        Rating rating = new Rating(ratingsModel.getRated_id(),
                                   ratingsModel.getRater_id(),
                                   ratingsModel.getRate(),
                                   ratingsModel.getComment());
        return ratingsRepository.save(rating) != null;
    }

    @GetMapping("dentistRating/{id}")
    public Double getAvgRating(@PathVariable(value="id") Long id){ return ratingsRepository.getAvgRating(id);}

    @GetMapping("/canRate")
    public Boolean canRate(@RequestParam(value = "patientId", required = false) Long patientId,
                           @RequestParam(value = "dentistId", required = false) Long dentistId) {
        Boolean res = ratingsRepository.exists(patientId, dentistId);
        return ratingsRepository.exists(patientId, dentistId);
    }

}
