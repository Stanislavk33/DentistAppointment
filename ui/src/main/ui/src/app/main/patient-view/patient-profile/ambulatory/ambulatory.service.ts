import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {AmbulatoryModel} from "./ambulatory.model";
import {Observable} from "rxjs/Observable";

@Injectable()
export class AmbulatoryService{

  constructor(private http: HttpClient) {
  }

  public getAmbulatoryInfo(id: number): Observable<AmbulatoryModel[]> {
    return this.http.get<AmbulatoryModel[]>('ambulatory/' + id);
  }
}
