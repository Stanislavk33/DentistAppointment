import {Injectable} from "@angular/core";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {EventInfoModel} from "../models/event.info.model";
import {EventComment} from "../main/patient-view/dentist-results/events/event.comment.model";
import {EventModel} from "../models/event.model";

@Injectable()
export class EventsService{


  constructor(private httpClient: HttpClient) {
  }

  public getEvents(): Observable<EventInfoModel[]> {
    return this.httpClient.get<EventInfoModel[]>("/events");
  }

  public getEventComments(eventId:number): Observable<EventComment[]> {
    return this.httpClient.get<EventComment[]>("getComments/" + eventId);
  }

  public comment(patientName, eventId, comment): Observable<Boolean>{
    let requestModel: EventComment = new EventComment(eventId, patientName, comment);
    return this.httpClient.post<Boolean>('/comment', requestModel)
  }

  public addEvent(event: EventModel): Observable<Boolean> {
    return this.httpClient.post<Boolean>('addEvent/', event);
  }

  public getDentistEvents(id: number): Observable<EventModel[]> {
    return this.httpClient.get<EventModel[]>('events/' + id);
  }

  public cancelEvent(id: number): Observable<Boolean> {
    return this.httpClient.delete<Boolean>('cancelEvent/' + id);
  }

  public existsEvent(dentistId: number, date: string): Observable<Boolean> {
    let params = new HttpParams()
      .set('dentistId', dentistId.toString())
      .set('date', date);
    return this.httpClient.get<Boolean>('exists/', {params: params});
  }
}
