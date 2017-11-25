import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'register-component',
  templateUrl: 'register.component.html',
  styleUrls: ["register.component.css"],
  providers: []
})
export class RegisterComponent implements OnInit {
  constructor(private httpClient: HttpClient) {
  }

  ngOnInit() {
  }

  one() {
    this.httpClient.get("/api")
      .subscribe(result => console.log(result), error => console.error(error));
  }

  two() {
    this.httpClient.get("/api1")
        .subscribe(result => console.log(result), error => console.error(error));

  }
}
