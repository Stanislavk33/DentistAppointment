package com.nbu.projects.dentistappointmentsys.repositories;

import com.nbu.projects.dentistappointmentsys.models.Dentist;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface DentistRepository extends JpaRepository<Dentist, Long> {
    public List<Dentist> findByCity(String city);
    public List<Dentist> findDentistsByFirstNameContaining(String name);
    public List<Dentist> findAllByOrderByRatingDesc();
    public List<Dentist> findAllByOrderByRatingAsc();
    public List<Dentist> findByDentistType(String type);
    public Dentist findDentistById(Long id);

    //@Query("SELECT p FROM Person p WHERE LOWER(p.lastName) = LOWER(:lastName)")
    //public List<Dentist> findByName(@Param("lastName") String lastName);
}