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
import {DentistRatingComponent} from "./shared/dentist-profile/dentist-rating/dentist-rating.component";
import {EditProfileComponent} from "./shared/edit-profile/edit-profile-component";
import {ChangePasswordComponent} from "./shared/edit-profile/change-password/change-password-component";
import {CalendarModule} from "./shared/dentist-profile/appointments-calendar/calendar.module";
import {CalendarComponent} from "./shared/dentist-profile/appointments-calendar/calendar.component";


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    SearchComponent,
    DentistProfileComponent,
    EventsComponent,
    DentistRatingComponent,
    EditProfileComponent,
    ChangePasswordComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    FormsModule,
    JsonpModule,
    RouterModule,
    ClarityModule,
    AppRoutingModule,
    CalendarModule
  ],
  providers: [
    SearchService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
