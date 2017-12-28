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
<<<<<<< HEAD
import {DentistProfileComponent} from "./main/patient-view/dentist-profile/dentist-profile.component";
import {RatingsService} from "./main/patient-view/dentist-profile/ratings/ratings.service";
import {RatingsComponent} from "./main/patient-view/dentist-profile/ratings/ratings.component";
import {DentistResultsComponent} from "./main/shared-components/dentist-results/dentist-results.component";
import {EventsComponent} from "./main/shared-components/dentist-results/events/events.component";
import {EditPasswordService} from "./main/shared-components/services/edit.password.service";
import {EditPatientProfileService} from "./main/shared-components/services/edit.patient.service";
import {EditDentistProfileComponent} from "./main/dentist-view/dentist-profile/edit.profile.component";
import {EditDentistProfileService} from "./main/shared-components/services/edit.dentist.service";


=======
import {EditService} from "./main/shared-components/services/change.password.service";
import {AppComponent} from "./main/public/app.component";
import {RegisterComponent} from "./main/public/register/register.component";
import {LoginComponent} from "./main/public/login/login.component";
import {HomeComponent} from "./main/public/home/home.component";
import {DentistResultsComponent} from "./main/patient-view/dentist-results/dentist.results.component";
import {EventsComponent} from "./main/patient-view/dentist-results/events/events.component";
import {RatingsComponent} from "./main/patient-view/dentist-results/dentist-profile/ratings/ratings.component";
import {DentistProfileComponent} from "./main/patient-view/dentist-results/dentist-profile/dentist.profile.component";
import {RatingsService} from "./main/patient-view/dentist-results/dentist-profile/ratings/ratings.service";
import {CalendarComponent} from "./main/patient-view/dentist-results/dentist-profile/calendar/calendar.component";
import {DentistCommonService} from "./main/patient-view/dentist-results/services/dentist.common.service";
import {EditDentistProfileComponent} from "./main/dentist-view/dentist-profile/edit.profile.component";
import {ScheduleComponent} from "./main/dentist-view/schedule/schedule.component";
import {PatientsComponent} from "./main/dentist-view/patients/patients.component";
import {DentistAppointmentsComponent} from "./main/dentist-view/appointments/appointments.component";
import {EventsService} from "./main/patient-view/dentist-results/events/events.service";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ScheduleService} from "./main/dentist-view/schedule/schedule.service";
import {DentistEventComponent} from "./main/dentist-view/schedule/events/dentist.event.component";
>>>>>>> kali-brach-new

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
    RatingsComponent,
<<<<<<< HEAD
    EditDentistProfileComponent
=======
    CalendarComponent,
    EditDentistProfileComponent,
    ScheduleComponent,
    PatientsComponent,
    DentistAppointmentsComponent,
    DentistEventComponent
>>>>>>> kali-brach-new
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
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
    EditService,
    DentistCommonService,
    RatingsService,
<<<<<<< HEAD
    EditPasswordService,
    EditPatientProfileService,
    EditDentistProfileService
=======
    EventsService,
    ScheduleService
>>>>>>> kali-brach-new
  ],
  bootstrap: [MainComponent]
})
export class AppModule {
}
