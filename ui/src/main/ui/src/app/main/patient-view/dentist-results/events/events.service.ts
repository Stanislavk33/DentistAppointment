import {Injectable} from "@angular/core";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {EventInfoModel} from "../../../../models/event.info.model";
import {EventComment} from "./event.comment.model";

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

}
