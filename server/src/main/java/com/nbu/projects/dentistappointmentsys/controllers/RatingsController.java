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
        if(!ratingsRepository.exists(ratingsModel.getRated_id(), ratingsModel.getRater_id())){
            Rating rating = new Rating(ratingsModel.getRated_id(), ratingsModel.getRater_id(), ratingsModel.getRate(), ratingsModel.getComment());
            ratingsRepository.save(rating);
            return true;
        }else{
            ratingsRepository.updateRate(ratingsModel.getRated_id(), ratingsModel.getRater_id(), ratingsModel.getRate(), ratingsModel.getComment());
            return true;
        }
    }

    @GetMapping("dentistRating/{id}")
    public Double getAvgRating(@PathVariable(value="id") Long id){
        if(ratingsRepository.getAvgRating(id) == null){
            return 0.;
        }
        return ratingsRepository.getAvgRating(id);
    }

    @GetMapping("/canRate")
    public Boolean canRate(@RequestParam(value = "patientId", required = false) Long patientId,
                           @RequestParam(value = "dentistId", required = false) Long dentistId) {
        Boolean res = ratingsRepository.exists(patientId, dentistId);
        return ratingsRepository.exists(patientId, dentistId);
    }

    @GetMapping("/getCurrentRate")
    public Rating getDentistRateForPatient(@RequestParam(value = "dentistId", required = false) Long dentistId,
                                           @RequestParam(value = "patientId", required = false) Long patientId) {
        if(ratingsRepository.getCurrentRate(dentistId, patientId) == null){
            return new Rating(0l,0l,0.,"");
        }
        return ratingsRepository.getCurrentRate(dentistId, patientId);
    }

}
