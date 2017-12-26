import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
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
}
