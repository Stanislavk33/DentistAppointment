package com.nbu.projects.dentistappointmentsys.controllers;

import com.nbu.projects.dentistappointmentsys.models.Dentist;
import com.nbu.projects.dentistappointmentsys.repositories.DentistRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class DentistController {

    @Autowired
    DentistRepository dentistRepository;

    @GetMapping("/dentists/city/{city}")
    public List<Dentist> getDentistsByCity(@PathVariable(value="city") String city) {
        return dentistRepository.findByCity(city);
    }

    @GetMapping("/dentists/name/{name}")
    public List<Dentist> getDentistsByName(@PathVariable(value="name") String name) {
        return dentistRepository.findDentistsByFirstNameContaining(name);
    }

    @GetMapping("/dentists/byrating/{what}")
    public List<Dentist> getDentistsByRating (@PathVariable(value="what") String what) {
        if(what.equals("desc")){
            return dentistRepository.findAllByOrderByRatingDesc();
        }else{
            return dentistRepository.findAllByOrderByRatingAsc();
        }
    }

    @GetMapping("/dentist/{id}")
    public Dentist findDentistById(@PathVariable(value="id") Long id) {
        return dentistRepository.findDentistById(id);
    }

    @GetMapping("/dentists/type/{type}")
    public List<Dentist> getDentistsByType(@PathVariable(value="type") String type) {
        return dentistRepository.findByDentistType(type);
    }

}