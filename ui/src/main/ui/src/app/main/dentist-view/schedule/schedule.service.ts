import {Injectable} from "@angular/core";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {EventModel} from "../../../models/event.model";

@Injectable()
export class ScheduleService{

  constructor(private http: HttpClient) {
  }

  public addEvent(event: EventModel): Observable<Boolean> {
    return this.http.post<Boolean>('addEvent/', event);
  }

  public getEvents(id: number): Observable<EventModel[]> {
    return this.http.get<EventModel[]>('events/' + id);
  }

  public cancelEvent(id: number): Observable<Boolean> {
    return this.http.delete<Boolean>('cancelEvent/' + id);
  }

  public existsEvent(dentistId: number, date: string): Observable<Boolean> {
    let params = new HttpParams()
      .set('dentistId', dentistId.toString())
      .set('date', date);
    return this.http.get<Boolean>('exists/', {params: params});
  }
}
