package com.nbu.projects.dentistappointmentsys.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class GenericController {

  @GetMapping(value = "/")
  public String index() {
    return "index.html";
  }

}
