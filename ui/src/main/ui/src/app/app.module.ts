import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule, JsonpModule } from "@angular/http";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { ClarityModule } from "clarity-angular";
import { HttpClientModule } from "@angular/common/http";
import { AppComponent } from "./shared/app/app.component";
import { SearchComponent } from "./shared/search/search.component";
import { LoginComponent } from "./shared/login/login.component";
import { HomeComponent } from "./shared/home/home.component";
import { RegisterComponent } from "./shared/register/register.component";
import {SearchService} from "./shared/search/search.service";
import {DentistProfileComponent} from "./shared/dentist-profile/dentist-profile.component";
import {AppRoutingModule} from "./shared/app-routing.module";
import {EventsComponent} from "./shared/search/events/events.component";
import {AppointmentsCalendarComponent} from "./shared/dentist-profile/appointments-calendar/appointments-calendar.component";
import {DentistRatingComponent} from "./shared/dentist-profile/dentist-rating/dentist-rating.component";


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    SearchComponent,
    DentistProfileComponent,
    EventsComponent,
    AppointmentsCalendarComponent,
    DentistRatingComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    FormsModule,
    JsonpModule,
    RouterModule,
    ClarityModule,
    AppRoutingModule
  ],
  providers: [
    SearchService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
