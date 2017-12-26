import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpModule, JsonpModule} from "@angular/http";
import {FormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import {ClarityModule} from "clarity-angular";
import {HttpClientModule} from "@angular/common/http";
import {HomeComponent} from "./main/public/home/home.component";
import {DentistComponent} from "./main/dentist-view/dentist.component";
import {PatientComponent} from "./main/patient-view/patient.component";
import {AppRoutingModule} from "./app-routing.module";
import {MainComponent} from "./main/main.component";
import {AdminService} from "./services/admin.service";
import {AdminComponent} from "./main/admin-view/admin.component";
import {CommonService} from "./services/common.service";
import {RoleGuard} from "./guards/role.guard";
import {UsersService} from "./services/users.service";
import {AuthGuard} from "./guards/auth.guard";
import {AmbulatoryComponent} from "./main/patient-view/patient-profile/ambulatory/ambulatory.component";
import {AppointmentsComponent} from "./main/patient-view/patient-profile/appointments/appointments.component";
import {EditPasswordService} from "./main/shared-components/services/edit.password.service";
import {AppComponent} from "./main/public/app.component";
import {DentistResultsComponent} from "./main/patient-view/dentist-results/dentist.results.component";
import {EditPatientProfileComponent} from "./main/patient-view/patient-profile/edit-profile/edit.profile.component";
import {EventsComponent} from "./main/patient-view/dentist-results/events/events.component";
import {RatingsComponent} from "./main/patient-view/dentist-results/dentist-profile/ratings/ratings.component";
import {DentistProfileComponent} from "./main/patient-view/dentist-results/dentist-profile/dentist.profile.component";
import {RatingsService} from "./main/patient-view/dentist-results/dentist-profile/ratings/ratings.service";
import {EditPatientProfileService} from "./main/shared-components/services/edit.patient.service";
import {RegisterComponent} from "./main/public/register/register.component";
import {LoginComponent} from "./main/public/login/login.component";
import {PatientProfileComponent} from "./main/patient-view/patient-profile/patient.profile.component";
import {ChangePasswordComponent} from "./main/shared-components/change-password/change.password.component";
import {EditDentistProfileComponent} from "./main/dentist-view/dentist-profile/edit-profile/edit-dentist-profile.component";
import {EditDentistProfileService} from "./main/shared-components/services/edit.dentist.service";


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
    EditPatientProfileComponent,
    AmbulatoryComponent,
    AppointmentsComponent,
    EventsComponent,
    DentistProfileComponent,
    RatingsComponent,
    EditDentistProfileComponent,

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
    RatingsService,
    EditPasswordService,
    EditPatientProfileService,
    EditDentistProfileService

  ],
  bootstrap: [MainComponent]
})
export class AppModule {
}
