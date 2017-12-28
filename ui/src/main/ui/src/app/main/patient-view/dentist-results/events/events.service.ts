import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {EventInfoModel} from "../../../../models/event.info.model";

@Injectable()
export class EventsService{


  constructor(private httpClient: HttpClient) {
  }

  public getEvents(): Observable<EventInfoModel[]> {
    return this.httpClient.get<EventInfoModel[]>("/events");
  }
}
