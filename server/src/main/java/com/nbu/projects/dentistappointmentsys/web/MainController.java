package com.nbu.projects.dentistappointmentsys.web;

import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class MainController {

    @GetMapping("/ui/src/main/ui/src/index.html")
    public String root() {
        String name = SecurityContextHolder.getContext().getAuthentication().getName();
        return "index";
    }

    @GetMapping("/login")
    public String login(Model model) {
        return "login";
    }

    @GetMapping("/user")
    public String userIndex() {
        return "user/index";
    }

    @GetMapping("/api")
    public String user() {
        String name = SecurityContextHolder.getContext().getAuthentication().getName();
        if (name.equals("asd12@asd.com")) {
            return "login";
        }
        return "asd";
    }

    @GetMapping("/api1")
    public String user1() {
        String name = SecurityContextHolder.getContext().getAuthentication().getName();
        return "asd1";
    }

    @GetMapping("/api2")
    public String user2() {
        return "asd2";
    }

}
