import {Component, OnChanges, OnInit} from '@angular/core';
import 'clarity-icons';
import 'clarity-icons/shapes/essential-shapes';
import 'clarity-icons/shapes/technology-shapes';
import {EventsService} from "./events.service";
import {ActivatedRoute, Router} from "@angular/router";
import {EventInfoModel} from "../../../../models/event.info.model";
import {EventComment} from "./event.comment.model";
import {CommonUtil} from "../../../../util/common.util";

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
  public comments: EventComment[] = [];
  public comment: string = "";
  public fullName: string = "";

  constructor(private eventsService: EventsService){
  }

  private refreshComments(){
    this.eventsService.getEventComments(this.currentEvent.id)
      .subscribe( data => {
          this.comments = data;
        },
        err => console.log(err));
  }

  seeEventInfo(event: EventInfoModel){
    this.openInfo = true;
    this.currentEvent = event;
    this.refreshComments();
  }

  onSubmit(){
    if(this.comment === ''){
      console.log('empty comment');
    }else{
      this.eventsService.comment(this.fullName, this.currentEvent.id, this.comment)
        .subscribe(success => {
          if(success){
            this.comment = '';
            this.refreshComments();
          }
          },
          err => console.log(err));
    }
  }

  ngOnInit() {
    this.fullName = CommonUtil.getSessionUserFullName();
    this.eventsService.getEvents()
      .subscribe(data => {
        this.events = data;
      },
      error => console.error(error));
  }
}

