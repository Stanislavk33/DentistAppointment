package com.nbu.projects.dentistappointmentsys.repositories;

import com.nbu.projects.dentistappointmentsys.models.User;
import com.nbu.projects.dentistappointmentsys.models.types.Role;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface UserRepository extends JpaRepository<User, Long> {

  User findByEmail(String email);
  List<User> findAllByRole(Role role);
}
