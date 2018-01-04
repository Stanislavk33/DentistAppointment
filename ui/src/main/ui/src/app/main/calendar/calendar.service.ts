import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Observable";
import {HttpClient} from "@angular/common/http";
import {EventModel} from "../../models/event.model";

@Injectable()
export class CalendarService {

   constructor(private httpClient: HttpClient) {
   }

   public getEvents(dentistId: number): Observable<EventModel[]> {

      return this.httpClient.get<EventModel[]>('/events/' + dentistId);
   }
}