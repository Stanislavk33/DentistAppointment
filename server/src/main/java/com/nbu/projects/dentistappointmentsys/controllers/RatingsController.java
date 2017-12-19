package com.nbu.projects.dentistappointmentsys.controllers;

import com.nbu.projects.dentistappointmentsys.models.Rating;
import com.nbu.projects.dentistappointmentsys.repositories.RatingsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.logging.Logger;

@RestController
public class RatingsController {

    @Autowired
    RatingsRepository ratingsRepository;

    private static final Logger logger =
            Logger.getLogger(RatingsController.class.toString());

    @GetMapping("/rating/{id}")
    public List<Rating> getRatings(@PathVariable(value="id") Long id) {
        return ratingsRepository.getAllByRatedId(id);
    }

    @PostMapping("/addRating")
    public Boolean addRating(@RequestBody Rating ratingsModel) {
        Rating rating = new Rating(ratingsModel.getRater_id(),
                                   ratingsModel.getRater_id(),
                                   ratingsModel.getRate(),
                                   ratingsModel.getComment());
        ratingsRepository.save(rating);
        return true;
    }
}
