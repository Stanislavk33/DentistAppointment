import {Component, Input, OnChanges, OnInit} from '@angular/core';
import 'clarity-icons';
import 'clarity-icons/shapes/essential-shapes';
import 'clarity-icons/shapes/technology-shapes';
import {CommonUtil} from "../../../../util/common.util";
import {EditPatientProfileService} from "../../../shared-components/services/edit.patient.service";
import {Constants} from "../../../../models/constants";


@Component({
              moduleId: module.id,
              selector: 'edit-component',
              templateUrl: 'edit-profile.component.html',
              styleUrls: ["edit-profile.component.css"],
              providers: []
           })
export class EditProfileComponent implements OnInit {


  public UserId: number= 0;
  private openFail: boolean = false;
  private failMessage: string = '';
  private openSuccess: boolean = false;
   constructor(private service: EditPatientProfileService) {
   }

  submit(email: string,firstName:string,lastName:string){

      this.service.editPatientProfile(email,firstName,lastName,this.UserId)
        .subscribe(result =>
          {
            if(result.result == Constants.RESULT_SUCCESSFUL){
              this.openSuccess = true;//console log true
              this.openFail = false;
            }else{
              this.openFail = true;
              this.openSuccess = false;
              this.failMessage='This email is already used.';

            }
          },

          error => console.error(error));

    }

  ngOnChanges() {

  }
    ngOnInit() {
    this.UserId = CommonUtil.getSessionUserId();
    console.log(this.UserId);
  }
}
