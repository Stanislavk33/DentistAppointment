import { Component, OnInit } from '@angular/core';
import 'clarity-icons';
import 'clarity-icons/shapes/essential-shapes';
import 'clarity-icons/shapes/technology-shapes';
import {EventsService} from "./events.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css'],
  providers: [EventsService]
})
export class EventsComponent implements OnInit {
  constructor(private _Activatedroute:ActivatedRoute,
              private router: Router){
  }
  ngOnInit() {
  }
}

