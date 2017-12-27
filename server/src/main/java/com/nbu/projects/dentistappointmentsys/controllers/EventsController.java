package com.nbu.projects.dentistappointmentsys.controllers;


import com.nbu.projects.dentistappointmentsys.controllers.models.EventInfoModel;
import com.nbu.projects.dentistappointmentsys.controllers.request_models.EventRequestModel;
import com.nbu.projects.dentistappointmentsys.models.Event;
import com.nbu.projects.dentistappointmentsys.repositories.EventsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.sql.Timestamp;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

@RestController
public class EventsController {
    @Autowired
    EventsRepository eventsRepository;

    @GetMapping("/events")
    public List<EventInfoModel> getEvents() {
        return eventsRepository.getEvents();
    }

    @GetMapping("/events/{id}")
    public List<Event> getDentistEvents(@PathVariable(value="id") Long id) { return eventsRepository.getAllByDentistId(id); }

    @PostMapping("/addEvent")
    public Boolean addEvent(@RequestBody EventRequestModel eventModel) {
        Timestamp startTime = new Timestamp(0);
        Timestamp endTime = new Timestamp(0);
        try {
            SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd hh:mm");
            Date startParsed = dateFormat.parse(eventModel.getStartTime());
            startTime = new Timestamp(startParsed.getTime());
            Date endParsed = dateFormat.parse(eventModel.getEndTime());
            endTime = new Timestamp(endParsed.getTime());
        } catch(Exception e) {
            //System.err.println(e);
        }

        Event event = new Event(eventModel.getDentistId(), eventModel.getTitle(), startTime , endTime, eventModel.getInfo());
        return eventsRepository.save(event) != null;
    }

    @GetMapping("/exists")
    public Boolean existsEvent(@RequestParam(value = "dentistId") Long dentistId,
                           @RequestParam(value = "date") String date) {
        SimpleDateFormat format = new SimpleDateFormat("yyyy-MM-dd");
        Timestamp formattedDate = new Timestamp(0);
        try {
            Date dateParsed = format.parse(date);
            formattedDate = new Timestamp(dateParsed.getTime());
        } catch (ParseException e) {
            e.printStackTrace();
        }
        /*Integer res = eventsRepository.countAllByDentistIdAndStartTimeStartsWith(dentistId, formattedDate);
        return eventsRepository.countAllByDentistIdAndStartTimeStartsWith(dentistId, formattedDate) > 0;*/
        return true;
    }

    @DeleteMapping("/cancelEvent/{id}")
    public Boolean cancelEvent(@PathVariable(value="id") Long id) {
        if(eventsRepository.exists(id)){
            eventsRepository.delete(id);
            return true;
        }
        return false;
    }

}

