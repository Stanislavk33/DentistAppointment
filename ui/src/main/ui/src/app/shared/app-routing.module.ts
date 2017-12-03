import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {RegisterComponent} from "./register/register.component";
import {LoginComponent} from "./login/login.component";
import {NgModule} from "@angular/core";
import {ClientComponent} from "./client/client.component";

const appRoutes: Routes = [
   {path: 'home', component: HomeComponent},
   {path: 'register', component: RegisterComponent},
   {path: 'login', component: LoginComponent},
   {path: 'client', component: ClientComponent},
   {path: '**', component: HomeComponent}
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
