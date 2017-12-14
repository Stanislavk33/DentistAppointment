package com.nbu.projects.dentistappointmentsys.repositories;

import com.nbu.projects.dentistappointmentsys.models.User;
import com.nbu.projects.dentistappointmentsys.models.types.Role;
import org.springframework.data.jpa.repository.JpaRepository;
import com.nbu.projects.dentistappointmentsys.models.types.DentistType;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface UserRepository extends JpaRepository<User, Long> {

  User findByEmail(String email);
  List<User> findAllByRole(Role role);
  // CITY
  List<User> findUsersByCity(String city);
  // NAME
  List<User>  findUsersByFirstNameStartingWithOrLastNameStartingWith(String fname, String lname);
  // TYPE
  List<User> findUsersByDentistType(DentistType type);

  //Combination searches
  //Filter by: NAME + TYPE + CITY
  @Query(value = "select u from User u\n" +
          "where u.city = :city and u.dentistType = :type\n" +
          "and (u.firstName like :name or u.lastName like :name)")
  List<User> findByCityTypeAndName(@Param("city") String city, @Param("type") DentistType type, @Param("name") String name);
  //Filter by: NAME + TYPE
  @Query(value = "select u from User u\n" +
          "where u.dentistType = :type\n" +
          "and (u.firstName like :name or u.lastName like :name)")
  List<User> findByNameAndType(@Param("name") String name, @Param("type") DentistType type);
  //Filter by: NAME + CITY
  @Query(value = "select u from User u\n" +
          "where u.city = :city\n" +
          "and (u.firstName like :name or u.lastName like :name)")
  List<User> findByNameAndCity(@Param("name") String name,@Param("city") String city);
  //Filter by: TYPE + CITY
  List<User> findUsersByCityAndDentistType(String city, DentistType type);
}
