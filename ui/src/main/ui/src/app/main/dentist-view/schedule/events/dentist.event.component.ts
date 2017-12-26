import {Component, OnChanges, OnInit} from "@angular/core";
import {CommonUtil} from "../../../../util/common.util";
import {EventModel} from "../../../../models/event.model";
import {ScheduleService} from "../schedule.service";

@Component({
  moduleId: module.id,
  selector: 'events-component',
  templateUrl: 'dentist.event.component.html',
  styleUrls: ["dentist.event.component.css"],
  providers: []
})
export class DentistEventComponent implements OnInit {
  public addEvent: boolean = false;
  public event: EventModel = new EventModel();
  public events: EventModel[] = [];
  public eventDate: any;

  constructor(private service: ScheduleService) {
  }

  private refreshEvents(){
    this.service.getEvents(this.event.dentistId).subscribe( data => {
      this.events = data;
    }, err => console.log(err));
  }

  onSubmit(){
    this.event.startTime = this.eventDate + ' ' + this.event.startTime;
    this.event.endTime = this.eventDate + ' ' + this.event.endTime;
    this.service.addEvent(this.event).subscribe( success => {
      if(success){
        this.addEvent = false;
        console.log('added');
        this.refreshEvents();
      }
    }, err => console.log(err));
  }

  ngOnInit() {
    this.event.dentistId = CommonUtil.getSessionUserId();
    this.refreshEvents();
  }
}
