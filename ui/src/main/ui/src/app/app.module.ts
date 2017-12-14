import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpModule, JsonpModule} from "@angular/http";
import {FormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import {ClarityModule} from "clarity-angular";
import {HttpClientModule} from "@angular/common/http";
import {AppComponent} from "./main/app/app.component";
import {HomeComponent} from "./main/app/home/home.component";
import {LoginComponent} from "./main/app/login/login.component";
import {RegisterComponent} from "./main/app/register/register.component";
import {DentistComponent} from "./main/dentist-view/dentist.component";
import {PatientComponent} from "./main/patient-view/patient.component";
import {ChangePasswordComponent} from "./main/shared-components/change-password/change-password-component";
import {AppRoutingModule} from "./app-routing.module";
import {PatientProfileComponent} from "./main/patient-view/patient-profile/patient-profile.component";
import {MainComponent} from "./main/main.component";
import {AdminService} from "./services/admin.service";
import {AdminComponent} from "./main/admin-view/admin.component";
import {CommonService} from "./services/common.service";
import {RoleGuard} from "./guards/role.guard";
import {UsersService} from "./services/users.service";
import {AuthGuard} from "./guards/auth.guard";
import {AmbulatoryComponent} from "./main/patient-view/patient-profile/ambulatory/ambulatory.component";
import {EditProfileComponent} from "./main/patient-view/patient-profile/edit-profile/edit-profile.component";
import {AppointmentsComponent} from "./main/patient-view/patient-profile/appointments/appointments.component";
import {DentistProfileComponent} from "./main/patient-view/dentist-profile/dentist-profile.component";
import {RatingsService} from "./main/patient-view/dentist-profile/ratings/ratings.service";
import {RatingsComponent} from "./main/patient-view/dentist-profile/ratings/ratings.component";
import {DentistResultsComponent} from "./main/shared-components/dentist-results/dentist-results.component";
import {EventsComponent} from "./main/shared-components/dentist-results/events/events.component";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    DentistComponent,
    PatientComponent,
    AdminComponent,
    MainComponent,
    ChangePasswordComponent,
    PatientProfileComponent,
    DentistResultsComponent,
    EditProfileComponent,
    AmbulatoryComponent,
    AppointmentsComponent,
    EventsComponent,
    DentistProfileComponent,
    RatingsComponent
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
    CommonService,
    RoleGuard,
    AuthGuard,
    UsersService,
    AdminService,
    RatingsService
  ],
  bootstrap: [MainComponent]
})
export class AppModule {
}
