import { Component, OnInit } from '@angular/core';
import 'clarity-icons';
import 'clarity-icons/shapes/essential-shapes';
import 'clarity-icons/shapes/technology-shapes';
import {AppointmentsCalendarService} from "./appointments-calendar.service";

@Component({
  selector: 'appointments-calendar',
  templateUrl: './appointments-calendar.component.html',
  styleUrls: ['./appointments-calendar.component.css'],
  providers: [AppointmentsCalendarService]
})
export class AppointmentsCalendarComponent implements OnInit {

  constructor(private service: AppointmentsCalendarService) {
  }

  ngOnInit() {
  }
}
