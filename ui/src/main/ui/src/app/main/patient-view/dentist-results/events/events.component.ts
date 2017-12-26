import {Component, OnChanges, OnInit} from '@angular/core';
import 'clarity-icons';
import 'clarity-icons/shapes/essential-shapes';
import 'clarity-icons/shapes/technology-shapes';
import {EventsService} from "./events.service";
import {ActivatedRoute, Router} from "@angular/router";
import {EventInfoModel} from "../../../../models/event.info.model";

@Component({
  selector: 'events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css'],
  providers: [EventsService]
})
export class EventsComponent implements OnInit {
  public events: EventInfoModel[] = [];
  public openInfo: Boolean = false;
  public currentEvent: EventInfoModel = new EventInfoModel();

  constructor(private eventsService: EventsService){
  }

  seeEventInfo(event: EventInfoModel){
    console.log(event);
    this.openInfo = true;
    this.currentEvent = event;
  }

  ngOnInit() {
    this.eventsService.getEvents()
      .subscribe(data => {
        this.events = data;
      },
      error => console.error(error));
  }
}

