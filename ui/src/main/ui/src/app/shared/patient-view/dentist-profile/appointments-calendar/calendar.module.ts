import {HttpModule} from "@angular/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {DayPilotModule} from "daypilot-pro-angular";
import {CalendarComponent} from "./calendar.component";

@NgModule({
  imports:      [
    BrowserModule,
    FormsModule,
    HttpModule,
    DayPilotModule,
    ReactiveFormsModule
  ],
  declarations: [
    CalendarComponent
  ],
  exports:      [ CalendarComponent ]
})
export class CalendarModule { }
