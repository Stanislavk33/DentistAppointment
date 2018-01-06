
import {Component, OnInit} from "@angular/core";
import {EditDentistProfileService} from "../../shared-components/services/edit.dentist.service";
import {CommonUtil} from "../../../util/common.util";
import {EditDentistProfileModel} from "../../../services/model/edit.dentist.profile.model";
import {DentistModel} from "../../../models/dentist.model";
import {Constants} from "../../../models/constants";
import {UserModel} from "../../../models/user.model";
import {CommonService} from "../../../services/common.service";

@Component({
  moduleId: module.id,
  selector: 'edit-dentist-profile-component',
  templateUrl: 'edit.profile.component.html',
  styleUrls: ["edit.profile.component.css"],
  providers: []
})
export class EditDentistProfileComponent implements OnInit {

  private User:UserModel;
  private UserInfo:UserModel;
  private constants = Constants;
  public UserId: number = 0;
  private openFail: boolean = false;
  private failMessage: string = '';
  private openSuccess: boolean = false;

  constructor(private service: EditDentistProfileService,private UserService:CommonService) {
  }

  submit(email: string, firstName: string, lastName: string, dentistType: string, city: string,generalInformation:string) {

    this.service.editDentistProfile(email, this.UserId, firstName, lastName, dentistType, city,generalInformation)
      .subscribe(success => {
          if (success) {
            this.openSuccess = true;//console log true
            this.openFail = false;
            this.UserService.getUserInfo(this.UserId)
              .subscribe(data => {
                  this.User = data;
                  CommonUtil.putSessionUser(this.User);},
                err => console.log(err));

          } else {
            this.openFail = true;
            this.openSuccess = false;
            this.failMessage = 'This email is already used.';

          }
        },

        error => console.error(error));

  }


  ngOnChanges() {

  }

  ngOnInit() {
    this.UserId = CommonUtil.getSessionUserId();
    this.UserInfo=CommonUtil.getSessionUser();

  }
}
