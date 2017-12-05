import {ActivatedRouteSnapshot, CanActivate, Router, RouterModule, Routes, RouterStateSnapshot} from "@angular/router";
import {Injectable, NgModule} from "@angular/core";
import {MainComponent} from "./main/main.component";
import {AppComponent} from "./main/app/app.component";
import {HomeComponent} from "./main/app/home/home.component";
import {RegisterComponent} from "./main/app/register/register.component";
import {LoginComponent} from "./main/app/login/login.component";
import {PatientComponent} from "./main/patient-view/patient.component";
import {AdminComponent} from "./main/admin-view/admin.component";
import {DentistComponent} from "./main/dentist-view/dentist.component";
import {PatientProfileComponent} from "./main/patient-view/patient-profile/patient-profile.component";
import {ChangePasswordComponent} from "./main/patient-view/change-password/change-password-component";
import {CommonUtil} from "./util/common.util";

@Injectable()
export class RoleGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot,
              state: RouterStateSnapshot): boolean {
    let userRole = CommonUtil.getSessionUserRole();
    let roles = route.data["roles"] as Array<string>;
    return (roles == null || roles.indexOf(userRole) != -1);
  }
}

const appRoutes: Routes = [
  {path: '', component: MainComponent, children:[
    {path: '', component: AppComponent, children:[
      {path: 'home', component: HomeComponent},
      {path: 'register', component: RegisterComponent},
      {path: 'login', component: LoginComponent},
    ]},
    {path: 'patient', component: PatientComponent, children: [
        { path: 'patient/profile', component: PatientProfileComponent, outlet: 'patient-outl'},
        { path: 'patient/changepass', component: ChangePasswordComponent, outlet: 'patient-outl'}
        ],
        canActivate: [RoleGuard],
        data: { roles: ['PATIENT'] }
    },
    {path: 'admin', component: AdminComponent, canActivate: [RoleGuard], data: { roles: ['ADMIN'] }},
    {path: 'dentist', component: DentistComponent, canActivate: [RoleGuard], data: { roles: ['DENTIST'] }},
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
