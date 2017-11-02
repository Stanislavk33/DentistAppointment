package com.nbu.projects.dentistappointmentsys.controllers;

import com.nbu.projects.dentistappointmentsys.models.TestData;
import com.nbu.projects.dentistappointmentsys.repositories.TestRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class TestController {

    @Autowired
    TestRepository testRepository;

    @GetMapping("/test")
    public List<TestData> getSimpleTestData() {
        List<TestData> result = testRepository.findAll();

        TestData td1 = new TestData("Toshko", true);
        TestData td2 = new TestData("Vankata", false);
        result.add(td1);
        result.add(td2);

        return result;
    }
}
