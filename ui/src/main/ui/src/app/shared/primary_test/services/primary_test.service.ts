import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { PrimaryTestModel } from "../models/primary_test.model";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";

@Injectable()
export class PrimaryTestService {

  private static readonly GET_TEST_MODEL: string = "test";

  constructor(private httpClient: HttpClient) {
  }

  public getTestData(): Observable<PrimaryTestModel[]> {

    return this.httpClient.get(PrimaryTestService.GET_TEST_MODEL);
  }
}
