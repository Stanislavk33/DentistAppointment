import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { PrimaryTestComponent } from './shared/primary_test/primary_test.component';
import { PrimaryTestService } from "./shared/primary_test/services/primary_test.service";
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

/*const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'search', component: SearchComponent },
  { path: '**', component: SearchComponent }
];*/

@NgModule({
  declarations: [
    AppComponent,
    PrimaryTestComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    FormsModule,
    JsonpModule,
    RouterModule,
    ClarityModule,
    RouterModule.forRoot([
                           { path: 'home', component: HomeComponent },
                           { path: 'register', component: RegisterComponent },
                           { path: 'login', component: LoginComponent },
                           { path: 'search', component: SearchComponent },
                         ])
  ],
  providers: [
    PrimaryTestService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
