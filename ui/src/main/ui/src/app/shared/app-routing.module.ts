import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {RegisterComponent} from "./register/register.component";
import {LoginComponent} from "./login/login.component";
import {SearchComponent} from "./search/search.component";
import {NgModule} from "@angular/core";
import {EventsComponent} from "./search/events/events.component";
import {DentistProfileComponent} from "./dentist-profile/dentist-profile.component";

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'result/:id', component: DentistProfileComponent},
  { path: 'search', component: SearchComponent },
  { path: '**', component: SearchComponent, children: [{path:'', component: EventsComponent}
  ]}
  ];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
