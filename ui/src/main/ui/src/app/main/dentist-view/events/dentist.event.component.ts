import {Component, OnChanges, OnInit} from "@angular/core";
import {CommonUtil} from "../../../util/common.util";
import {EventModel} from "../../../models/event.model";
import {ScheduleService} from "../schedule/schedule.service";
import {Constants} from "../../../models/constants";
import {DatePipe} from "@angular/common";
import {Comparator} from "clarity-angular";

class DateComparator implements Comparator<EventModel> {
  compare(a: EventModel, b: EventModel) {
    return +new Date(b.startTime) - +new Date(a.startTime);
  }
}

@Component({
  moduleId: module.id,
  selector: 'events-component',
  templateUrl: 'dentist.event.component.html',
  styleUrls: ["dentist.event.component.css"],
  providers: []
})
export class DentistEventComponent implements OnInit {
  private dateComparator = new DateComparator();
  public addEvent: boolean = false;
  public event: EventModel = new EventModel();
  public events: EventModel[] = [];
  public eventDate: any;
  public showWarning: Boolean = false;
  public hours: string[] = [];
  public errorMessage: string = '';

  constructor(private service: ScheduleService, private datePipe: DatePipe) {
  }

  private refreshEvents(){
    this.service.getEvents(this.event.dentistId).subscribe( data => {
      this.events = data;
    }, err => console.log(err));
  }

  onSubmit(){
    this.event.startTime = this.eventDate + ' ' + this.event.startTime;
    this.event.endTime = this.eventDate + ' ' + this.event.endTime;
    let now = new Date().toJSON().slice(0,10);
    if (this.events.filter(e => (this.datePipe.transform(e.startTime, 'yyyy-MM-dd')) === this.eventDate).length > 0) {
      this.errorMessage = 'You already have an event for this date.';
      this.showWarning = true;
    }else if(this.event.startTime<now){
      this.errorMessage = 'Cannot create an event for a past date.';
      this.showWarning = true;
    }else{
      this.service.addEvent(this.event).subscribe( success => {
        if(success){
          this.addEvent = false;
          this.showWarning = false;
          this.refreshEvents();
        }
      }, err => console.log(err));
    }
  }

  deleteEvent(eventId: number){
    this.service.cancelEvent(eventId).subscribe(success => {
      if(success){
        this.refreshEvents();
      }``
    }, err => console.log(err));
  }

  closeWarning() {
    this.showWarning= !this.showWarning;
  }

  isActive(date) {
    let today = new Date().toJSON().slice(0,10);
      return date>today;
  }

  ngOnInit() {
    this.event.dentistId = CommonUtil.getSessionUserId();
    this.refreshEvents();
    this.hours = Constants.HOURS;
  }
}
