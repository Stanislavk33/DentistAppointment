import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {MainComponent} from "./main/main.component";
import {PatientComponent} from "./main/patient-view/patient.component";
import {RoleGuard} from "./guards/role.guard";
import {AdminComponent} from "./main/admin-view/admin.component";
import {DentistComponent} from "./main/dentist-view/dentist.component";
import {AppointmentsComponent} from "./main/patient-view/patient-profile/appointments/appointments.component";
import {AmbulatoryComponent} from "./main/patient-view/patient-profile/ambulatory/ambulatory.component";
import {AppComponent} from "./main/public/app.component";
import {HomeComponent} from "./main/public/home/home.component";
import {RegisterComponent} from "./main/public/register/register.component";
import {LoginComponent} from "./main/public/login/login.component";
import {DentistResultsComponent} from "./main/patient-view/dentist-results/dentist.results.component";
import {DentistProfileComponent} from "./main/patient-view/dentist-results/dentist-profile/dentist.profile.component";
import {ScheduleComponent} from "./main/dentist-view/schedule/schedule.component";
import {EditDentistProfileComponent} from "./main/dentist-view/dentist-profile/edit.profile.component";
import {DentistAppointmentsComponent} from "./main/dentist-view/appointments/appointments.component";
import {PatientsComponent} from "./main/dentist-view/patients/patients.component";
import {EditProfileComponent} from "./main/patient-view/patient-profile/edit-profile/edit-profile.component";
import {PatientProfileComponent} from "./main/patient-view/patient-profile/patient-profile.component";
import {ChangePasswordComponent} from "./main/shared-components/change-password/change-password-component";
import {DentistEventComponent} from "./main/dentist-view/events/dentist.event.component";

const appRoutes: Routes = [
  {path: '', component: MainComponent, children:[

    {path: '', component: AppComponent, children:[
      {path: '', redirectTo: 'home', pathMatch: 'full'},
      {path: 'home', component: HomeComponent, children: [
        {path: '', pathMatch: 'full', component: DentistResultsComponent},
        {path: 'dentists', pathMatch: 'full', component: DentistResultsComponent},
        {path: 'result/:id', pathMatch: 'full', component: DentistProfileComponent}
      ]},
      {path: 'register', component: RegisterComponent},
      {path: 'login', component: LoginComponent},
    ]},
    {path: 'patient', component: PatientComponent,
      children: [
        {path: '', redirectTo: 'dentists', pathMatch: 'full'},
        { path: 'profile', component: PatientProfileComponent, children: [
          { path: '', redirectTo: 'edit', pathMatch: 'full'},
          { path: 'edit', pathMatch: 'full', component: EditProfileComponent},
          { path: 'appointments', pathMatch: 'full', component: AppointmentsComponent},
          { path: 'ambulatory', pathMatch: 'full', component: AmbulatoryComponent}
        ]},
        { path: 'changepass', component: ChangePasswordComponent},
        { path: 'dentists', component: DentistResultsComponent},
        { path: 'result/:id', component: DentistProfileComponent}
      ],
      canActivate: [RoleGuard],
      data: { roles: ['PATIENT'] }
    },

    {path: 'admin', component: AdminComponent, canActivate: [RoleGuard], data: { roles: ['ADMIN'] }},

    {path: 'dentist', component: DentistComponent,
      children: [
        {path: '', redirectTo: 'appointments', pathMatch: 'full'},
        { path: 'changepass', component: ChangePasswordComponent},
        { path: 'appointments', component: DentistAppointmentsComponent},
        { path: 'schedule', component: ScheduleComponent},
        { path: 'events', component: DentistEventComponent},
        { path: 'myprofile', component: EditDentistProfileComponent},
        { path: 'patients', component: PatientsComponent}
      ],
      canActivate: [RoleGuard],
      data: { roles: ['DENTIST'] }},

    {path: '**', component: HomeComponent}
  ]}
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {
        useHash: true,
        enableTracing: false // <-- debugging purposes only
      }
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
