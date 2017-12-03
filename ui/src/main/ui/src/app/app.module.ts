import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpModule, JsonpModule} from "@angular/http";
import {FormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import {ClarityModule} from "clarity-angular";
import {HttpClientModule} from "@angular/common/http";
import {AppRoutingModule, RoleGuard} from "./shared/app-routing.module";
import {CommonService} from "./shared/services/common.service";
import {MainComponent} from "./shared/main/main.component";
import {AppComponent} from "./shared/main/app/app.component";
import {DentistComponent} from "./shared/main/dentist-view/dentist.component";
import {RegisterComponent} from "./shared/main/app/register/register.component";
import {HomeComponent} from "./shared/main/app/home/home.component";
import {AdminComponent} from "./shared/main/admin-view/admin.component";
import {PatientComponent} from "./shared/main/patient-view/patient.component";
import {LoginComponent} from "./shared/main/app/login/login.component";
import {ChangePasswordComponent} from "./shared/main/patient-view/change-password/change-password-component";
import {PatientProfileComponent} from "./shared/main/patient-view/patient-profile/patient-profile.component";

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
    PatientProfileComponent
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
    RoleGuard
  ],
  bootstrap: [MainComponent]
})
export class AppModule {
}
