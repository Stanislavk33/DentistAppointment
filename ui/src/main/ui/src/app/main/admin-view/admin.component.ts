import {Component, OnInit} from '@angular/core';
import {UserModel} from "../../models/user.model";
import {DentistModel} from "../../models/dentist.model";
import {CommonUtil} from "../../util/common.util";
import {AdminService} from "../../services/admin.service";
import {UsersService} from "../../services/users.service";
import {Constants} from "../../models/constants";
import {Router} from "@angular/router";


@Component({
  selector: 'admin-component',
  templateUrl: 'admin.component.html',
  styleUrls: ["admin.component.css"],
  providers: []
})
export class AdminComponent implements OnInit {

  //TODO: Put admin component trough routing on it's place.
  //TODO: Paging, filtering, sorting, visuals.
  private currentUser: UserModel;
  private dentists: DentistModel[] = [];
  private patients: UserModel[] = [];
  private userEmail: string = '';

  constructor(private usersService: UsersService,
              private adminService: AdminService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.currentUser = CommonUtil.getSessionUser();
    this.userEmail = CommonUtil.getSessionUserEmail();
    if (this.currentUser && this.currentUser.role == Constants.ROLE_ADMIN) {
      this.loadData();
    }
  }

  private block(targetUser: UserModel, block: boolean): void {
    this.adminService.blockUser(this.currentUser.email, targetUser.email, block)
      .subscribe(result => this.loadData(),
        error => console.error(error));
  }

  private logout(){
    CommonUtil.removeUser();
    this.router.navigate(['']);
  }

  private loadData(): void {
    this.usersService.getAllDentists(this.currentUser.email)
      .subscribe(result => this.dentists = result.users as DentistModel[],
        error => console.error(error));

    this.usersService.getAllPatients(this.currentUser.email)
      .subscribe(result => this.patients = result.users,
        error => console.error(error));
  }
}
