import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpModule, JsonpModule} from "@angular/http";
import {FormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import {ClarityModule} from "clarity-angular";
import {HttpClientModule} from "@angular/common/http";
import {AppComponent} from "./shared/app/app.component";
import {LoginComponent} from "./shared/login/login.component";
import {HomeComponent} from "./shared/home/home.component";
import {RegisterComponent} from "./shared/register/register.component";
import {AppRoutingModule} from "./shared/app-routing.module";
import {CommonService} from "./shared/services/common.service";
import {ClientComponent} from "./shared/client/client.component";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    ClientComponent
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
    CommonService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
